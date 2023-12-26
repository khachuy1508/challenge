export class Organizations {
  _id?: number;
  url?: string;
  external_id?: string;
  name?: string;
  domain_names?: string[];
  created_at?: string;
  details?: string;
  shared_tickets?: boolean;
  tags?: string[];

  constructor(
    _id?: number,
    url?: string,
    external_id?: string,
    name?: string,
    domain_names?: string[],
    created_at?: string,
    details?: string,
    shared_tickets?: boolean,
    tags?: string[]
  ) {
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
}

export class Ticket {
  _id?: string;
  url?: string;
  external_id?: string;
  created_at?: string;
  type?: Type;
  subject?: string;
  description?: string;
  priority?: Priority;
  status?: Status;
  submitter_id?: number;
  assignee_id?: number;
  organization_id?: number;
  tags?: string[];
  has_incidents?: boolean;
  due_at?: string;
  via?: Via;

  constructor(
    _id?: string,
    url?: string,
    external_id?: string,
    created_at?: string,
    type?: Type,
    subject?: string,
    description?: string,
    priority?: Priority,
    status?: Status,
    submitter_id?: number,
    assignee_id?: number,
    organization_id?: number,
    tags?: string[],
    has_incidents?: boolean,
    due_at?: string,
    via?: Via
  ) {
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
}

export enum Priority {
  High = "high",
  Low = "low",
  Normal = "normal",
  Urgent = "urgent",
}

export enum Status {
  Closed = "closed",
  Hold = "hold",
  Open = "open",
  Pending = "pending",
  Solved = "solved",
}

export enum Type {
  Incident = "incident",
  Problem = "problem",
  Question = "question",
  Task = "task",
}

export enum Via {
  Chat = "chat",
  Voice = "voice",
  Web = "web",
}

export class User {
  _id?: number;
  url?: string;
  external_id?: string;
  name?: string;
  alias?: string;
  created_at?: string;
  active?: boolean;
  verified?: boolean;
  shared?: boolean;
  locale?: Locale;
  timezone?: string;
  last_login_at?: string;
  email?: string;
  phone?: string;
  signature?: Signature;
  organization_id?: number;
  tags?: string[];
  suspended?: boolean;
  role?: Role;

  constructor(
    _id?: number,
    url?: string,
    external_id?: string,
    name?: string,
    alias?: string,
    created_at?: string,
    active?: boolean,
    verified?: boolean,
    shared?: boolean,
    locale?: Locale,
    timezone?: string,
    last_login_at?: string,
    email?: string,
    phone?: string,
    signature?: Signature,
    organization_id?: number,
    tags?: string[],
    suspended?: boolean,
    role?: Role
  ) {
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
}

export enum Locale {
  DeCH = "de-CH",
  EnAU = "en-AU",
  ZhCN = "zh-CN",
}

export enum Role {
  Admin = "admin",
  Agent = "agent",
  EndUser = "end-user",
}

export enum Signature {
  DonTWorryBeHappy = "Don't Worry Be Happy!",
}
