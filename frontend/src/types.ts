export type Site = { id: number; url: string };
export type Type = "CLASSIC" | "MVT" | "SERVER_SIDE";
export type Status = "ONLINE" | "PAUSED" | "STOPPED" | "DRAFT";

export type TestPT = {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
};
