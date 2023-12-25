const readline = require("readline");
const users = require("./data/users.json");
const tickets = require("./data/tickets.json");
const organizations = require("./data/organizations.json");
const listOfSearchableFields = require("./data/listOfSearchableFields.json");
import { Organizations, Ticket, User } from "./dto";

const userData = users as User[];
const ticketsData = tickets as Ticket[];
const organizationsData = organizations as Organizations[];
const SEARCH_TYPE = {
  users: "1",
  organizations: "2",
  ticket: "3",
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getListSearchableFields = (searchBy: string) => {
  return listOfSearchableFields[searchBy];
};

const getData = (
  array: Organizations[] | Ticket[] | User[],
  fieldSearch: string,
  searchText: string | number,
  getByField?: string
) => {
  const resultData = array.filter((item) => {
    return typeof item[fieldSearch] === "object"
      ? item[fieldSearch]?.includes(searchText)
      : item[fieldSearch]?.toString() === searchText?.toString();
  });
  return getByField ? resultData.map((item) => item[getByField]) : resultData;
};

const searchOrg = (fieldSearch: string, searchText: string | number) => {
  return getData(organizationsData, fieldSearch, searchText).map((org) => {
    org["users_name"] = getData(
      userData,
      "organization_id",
      org["_id"],
      "name"
    );

    org["ticket_subject"] = getData(
      ticketsData,
      "organization_id",
      org["_id"],
      "subject"
    );

    return org;
  });
};

const searchUser = (fieldSearch: string, searchText: string | number) => {
  return getData(userData, fieldSearch, searchText).map((user) => {
    user["assignee_ticket_subject"] = getData(
      ticketsData,
      "assignee_id",
      user["_id"],
      "subject"
    );
    user["submitted_ticket_subject"] = getData(
      ticketsData,
      "submitter_id",
      user["_id"],
      "subject"
    );
    user["organization_name"] = getData(
      organizationsData,
      "_id",
      user["organization_id"],
      "name"
    );

    return user;
  });
};

const searchTicket = (fieldSearch: string, searchText: string | number) => {
  return getData(ticketsData, fieldSearch, searchText).map((ticket) => {
    ticket["assignee_name"] = getData(
      userData,
      "_id",
      ticket["assignee_id"],
      "name"
    );
    ticket["submitter_name"] = getData(
      userData,
      "_id",
      ticket["submitter_id"],
      "name"
    );
    ticket["organization_name"] = getData(
      organizationsData,
      "_id",
      ticket["organization_id"],
      "name"
    );

    return ticket;
  });
};

const printResult = (data: any[]) => {
  console.log(data.length ? data : "No search result found");

  rl.question(
    "Do you want to continue, type 'Y' for continue, any key for quit. \n",
    (ans: string) => {
      if (ans == "y" || ans == "Y") startApp();
      else rl.close();
    }
  );
};

const getSearchField = (searchBy: string) => {
  rl.question("Enter search term  \n", (term: string) => {
    rl.question("Enter search value  \n", (search: string) => {
      switch (searchBy) {
        case "users":
          printResult(searchUser(term, search));

          break;

        case "organizations":
          printResult(searchOrg(term, search));
          break;

        case "tickets":
          printResult(searchTicket(term, search));
          break;

        default:
          break;
      }
    });
  });
};

const checkAction = (searchBy: string) => {
  rl.question(
    "Select search options \n - Press 1 to search \n - Press 2 to view a list of searchable fields \n - Type 'quit' to exit \n",
    (search: string) => {
      switch (search) {
        case "quit":
          rl.close();
          break;

        case "1":
          getSearchField(searchBy);
          break;

        case "2":
          console.log(
            `List of searchable fields by ${searchBy}: ${getListSearchableFields(
              searchBy
            ).toString()}`
          );
          rl.close();

        default:
          console.log("Invalid search");
          rl.close();
          break;
      }
    }
  );
};

const startApp = () => {
  rl.question(
    "Select search by \n - Press 1 to search by 'Users'  \n - Press 2 to search by 'Organizations' \n - Press 3 to search by 'Tickets' \n ",
    (searchBy: string) => {
      switch (searchBy) {
        case SEARCH_TYPE.users:
          return checkAction("users");

        case SEARCH_TYPE.organizations:
          return checkAction("organizations");

        case SEARCH_TYPE.ticket:
          return checkAction("tickets");

        default:
          console.log("Invalid search");
          rl.close();
          break;
      }
    }
  );
};

startApp();
