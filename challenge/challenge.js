const readline = require("readline");
const users = require("./data/users.json");
const tickets = require("./data/tickets.json");
const organizations = require("./data/organizations.json");
const listOfSearchableFields = require("./data/listOfSearchableFields.json");
const LIST_ORG_ARRAY_FIELDS = ["domain_names", "tags"];
const LIST_USER_ARRAY_FIELDS = ["tags"];

const SEARCH_TYPE = {
  users: "1",
  organizations: "2",
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getListSearchableFields = (searchBy) => {
  return listOfSearchableFields[searchBy];
};

const getFieldSearchArray = (array, fieldSearch, searchText) => {
  return array.filter((item) => item[fieldSearch].includes(searchText));
};

const getFieldSearchText = (array, fieldSearch, searchText) => {
  return array.filter((item) => item[fieldSearch] == searchText);
};

const getListOrg = (fieldSearch, searchText) => {
  if (LIST_ORG_ARRAY_FIELDS.includes(fieldSearch))
    return getFieldSearchArray(organizations, fieldSearch, searchText);

  return getFieldSearchText(organizations, fieldSearch, searchText);
};

const searchOrg = (fieldSearch, searchText) => {
  return getListOrg(fieldSearch, searchText).map((org) => {
    const ticket_subject = [];
    const users_name = [];

    tickets.forEach((ticket) => {
      if (ticket["organization_id"] === org["_id"])
        ticket_subject.push(ticket["subject"]);
    });

    users.forEach((user) => {
      if (user["organization_id"] === org["_id"]) users_name.push(user["name"]);
    });
    org["ticket_subject"] = ticket_subject;
    org["users_name"] = users_name;

    return org;
  });
};

const getListUser = (fieldSearch, searchText) => {
  if (LIST_USER_ARRAY_FIELDS.includes(fieldSearch))
    return getFieldSearchArray(users, fieldSearch, searchText);

  return getFieldSearchText(users, fieldSearch, searchText);
};

const searchUser = (fieldSearch, searchText) => {
  return getListUser(fieldSearch, searchText).map((user) => {
    const assignee_name = [];
    const submitter_name = [];
    const organization_name = organizations.find(
      (org) => org["_id"] == user["organization_id"]
    )["name"];

    tickets.forEach((ticket) => {
      if (ticket["assignee_id"] == user["_id"]) {
        assignee_name.push(ticket["subject"]);
      }
      if (ticket["submitter_id"] == user["_id"]) {
        submitter_name.push(ticket["subject"]);
      }
    });

    user["assignee_name"] = assignee_name;
    user["submitter_name"] = submitter_name;

    user["organization_name"] = organization_name;
    return user;
  });
};

const printResult = (data) => {
  console.log(data.length ? data : "No search result found");

  rl.question(
    "Do you want to continue, type 'Y' for continue, any key for quit. \n",
    (ans) => {
      if (ans == "y" || ans == "Y") startApp();
      else rl.close();
    }
  );
};

const getSearchField = (searchBy) => {
  rl.question("Enter search term  \n", (term) => {
    rl.question("Enter search value  \n", (search) => {
      switch (searchBy) {
        case "users":
          printResult(searchUser(term, search));

          break;

        case "organizations":
          printResult(searchOrg(term, search));
          break;

        default:
          break;
      }
    });
  });
};

const checkAction = (searchBy) => {
  rl.question(
    "Select search options \n - Press 1 to search \n - Press 2 to view a list of searchable fields \n - Type 'quit' to exit \n",
    (search) => {
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
    "Select search by \n - Press 1 to search by 'Users'  \n - Press 2 to search by 'Organizations' \n",
    (searchBy) => {
      switch (searchBy) {
        case SEARCH_TYPE.users:
          return checkAction("users");
        case SEARCH_TYPE.organizations:
          return checkAction("organizations");

        default:
          console.log("Invalid search");
          rl.close();
          break;
      }
    }
  );
};

startApp();
