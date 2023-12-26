"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var users = require("./data/users.json");
var tickets = require("./data/tickets.json");
var organizations = require("./data/organizations.json");
var dto_1 = require("./dto");
var userData = users;
var ticketsData = tickets;
var organizationsData = organizations;
var SEARCH_TYPE = {
    users: "1",
    organizations: "2",
    ticket: "3",
};
var usersSearchableList = Object.keys(new dto_1.Organizations());
var organizationsSearchableList = Object.keys(new dto_1.User());
var ticketsSearchableList = Object.keys(new dto_1.Ticket());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var getListSearchableFields = function (searchBy) {
    switch (searchBy) {
        case "users":
            return usersSearchableList;
        case "organizations":
            return organizationsSearchableList;
        case "tickets":
            return ticketsSearchableList;
        default:
            break;
    }
};
var getData = function (array, fieldSearch, searchText, getByField) {
    var resultData = array.filter(function (item) {
        var _a, _b;
        return typeof item[fieldSearch] === "object"
            ? (_a = item[fieldSearch]) === null || _a === void 0 ? void 0 : _a.includes(searchText)
            : ((_b = item[fieldSearch]) === null || _b === void 0 ? void 0 : _b.toString()) === (searchText === null || searchText === void 0 ? void 0 : searchText.toString());
    });
    return getByField ? resultData.map(function (item) { return item[getByField]; }) : resultData;
};
var searchOrg = function (fieldSearch, searchText) {
    return getData(organizationsData, fieldSearch, searchText).map(function (org) {
        org["users_name"] = getData(userData, "organization_id", org["_id"], "name");
        org["ticket_subject"] = getData(ticketsData, "organization_id", org["_id"], "subject");
        return org;
    });
};
var searchUser = function (fieldSearch, searchText) {
    return getData(userData, fieldSearch, searchText).map(function (user) {
        user["assignee_ticket_subject"] = getData(ticketsData, "assignee_id", user["_id"], "subject");
        user["submitted_ticket_subject"] = getData(ticketsData, "submitter_id", user["_id"], "subject");
        user["organization_name"] = getData(organizationsData, "_id", user["organization_id"], "name");
        return user;
    });
};
var searchTicket = function (fieldSearch, searchText) {
    return getData(ticketsData, fieldSearch, searchText).map(function (ticket) {
        ticket["assignee_name"] = getData(userData, "_id", ticket["assignee_id"], "name");
        ticket["submitter_name"] = getData(userData, "_id", ticket["submitter_id"], "name");
        ticket["organization_name"] = getData(organizationsData, "_id", ticket["organization_id"], "name");
        return ticket;
    });
};
var checkContinue = function () {
    rl.question("Do you want to continue, type 'Y' for continue, any key for quit. \n", function (ans) {
        if (ans == "y" || ans == "Y")
            startApp();
        else
            rl.close();
    });
};
var printResult = function (data) {
    console.log(data.length ? data : "No search result found");
    checkContinue();
};
var getSearchField = function (searchBy) {
    rl.question("Enter search term  \n", function (term) {
        rl.question("Enter search value  \n", function (search) {
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
var checkAction = function (searchBy) {
    rl.question("Select search options \n - Press 1 to search \n - Press 2 to view a list of searchable fields \n - Type 'quit' to exit \n", function (search) {
        var _a;
        switch (search) {
            case "quit":
                rl.close();
                break;
            case "1":
                getSearchField(searchBy);
                break;
            case "2":
                console.log("List of searchable fields by ".concat(searchBy, ": ").concat((_a = getListSearchableFields(searchBy)) === null || _a === void 0 ? void 0 : _a.toString()));
                checkContinue();
                break;
            default:
                console.log("Invalid search");
                rl.close();
                break;
        }
    });
};
var startApp = function () {
    rl.question("Select search by \n - Press 1 to search by 'Users'  \n - Press 2 to search by 'Organizations' \n - Press 3 to search by 'Tickets' \n ", function (searchBy) {
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
    });
};
startApp();
