"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signature = exports.Role = exports.Locale = exports.Via = exports.Type = exports.Status = exports.Priority = void 0;
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
