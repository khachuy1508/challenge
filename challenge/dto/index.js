"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signature = exports.Role = exports.Locale = exports.User = exports.Via = exports.Type = exports.Status = exports.Priority = exports.Ticket = exports.Organizations = void 0;
var Organizations = /** @class */ (function () {
    function Organizations(_id, url, external_id, name, domain_names, created_at, details, shared_tickets, tags) {
        this._id = _id;
        this.url = url;
        this.external_id = external_id;
        this.name = name;
        this.domain_names = domain_names;
        this.created_at = created_at;
        this.details = details;
        this.shared_tickets = shared_tickets;
        this.tags = tags;
    }
    return Organizations;
}());
exports.Organizations = Organizations;
var Ticket = /** @class */ (function () {
    function Ticket(_id, url, external_id, created_at, type, subject, description, priority, status, submitter_id, assignee_id, organization_id, tags, has_incidents, due_at, via) {
        this._id = _id;
        this.url = url;
        this.external_id = external_id;
        this.created_at = created_at;
        this.type = type;
        this.subject = subject;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.submitter_id = submitter_id;
        this.assignee_id = assignee_id;
        this.organization_id = organization_id;
        this.tags = tags;
        this.has_incidents = has_incidents;
        this.due_at = due_at;
        this.via = via;
    }
    return Ticket;
}());
exports.Ticket = Ticket;
var Priority;
(function (Priority) {
    Priority["High"] = "high";
    Priority["Low"] = "low";
    Priority["Normal"] = "normal";
    Priority["Urgent"] = "urgent";
})(Priority || (exports.Priority = Priority = {}));
var Status;
(function (Status) {
    Status["Closed"] = "closed";
    Status["Hold"] = "hold";
    Status["Open"] = "open";
    Status["Pending"] = "pending";
    Status["Solved"] = "solved";
})(Status || (exports.Status = Status = {}));
var Type;
(function (Type) {
    Type["Incident"] = "incident";
    Type["Problem"] = "problem";
    Type["Question"] = "question";
    Type["Task"] = "task";
})(Type || (exports.Type = Type = {}));
var Via;
(function (Via) {
    Via["Chat"] = "chat";
    Via["Voice"] = "voice";
    Via["Web"] = "web";
})(Via || (exports.Via = Via = {}));
var User = /** @class */ (function () {
    function User(_id, url, external_id, name, alias, created_at, active, verified, shared, locale, timezone, last_login_at, email, phone, signature, organization_id, tags, suspended, role) {
        this._id = _id;
        this.url = url;
        this.external_id = external_id;
        this.name = name;
        this.alias = alias;
        this.created_at = created_at;
        this.active = active;
        this.verified = verified;
        this.shared = shared;
        this.locale = locale;
        this.timezone = timezone;
        this.last_login_at = last_login_at;
        this.email = email;
        this.phone = phone;
        this.signature = signature;
        this.organization_id = organization_id;
        this.tags = tags;
        this.suspended = suspended;
        this.role = role;
    }
    return User;
}());
exports.User = User;
var Locale;
(function (Locale) {
    Locale["DeCH"] = "de-CH";
    Locale["EnAU"] = "en-AU";
    Locale["ZhCN"] = "zh-CN";
})(Locale || (exports.Locale = Locale = {}));
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["Agent"] = "agent";
    Role["EndUser"] = "end-user";
})(Role || (exports.Role = Role = {}));
var Signature;
(function (Signature) {
    Signature["DonTWorryBeHappy"] = "Don't Worry Be Happy!";
})(Signature || (exports.Signature = Signature = {}));
