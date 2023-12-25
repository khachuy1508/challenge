export interface Organizations {
  _id: number;
  url: string;
  external_id: string;
  name: string;
  domain_names: string[];
  created_at: string;
  details: string;
  shared_tickets: boolean;
  tags: string[];
}

export interface Ticket {
  _id: string;
  url: string;
  external_id: string;
  created_at: string;
  type?: Type;
  subject: string;
  description?: string;
  priority: Priority;
  status: Status;
  submitter_id: number;
  assignee_id?: number;
  organization_id?: number;
  tags: string[];
  has_incidents: boolean;
  due_at?: string;
  via: Via;
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

export interface User {
  _id: number;
  url: string;
  external_id: string;
  name: string;
  alias?: string;
  created_at: string;
  active: boolean;
  verified?: boolean;
  shared: boolean;
  locale?: Locale;
  timezone?: string;
  last_login_at: string;
  email?: string;
  phone: string;
  signature: Signature;
  organization_id?: number;
  tags: string[];
  suspended: boolean;
  role: Role;
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
