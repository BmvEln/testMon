Backend:

npm install
npm start

API:
GET     /sites                Get a list of sites
GET     /sites/[id]           Get a site by id
GET     /tests                Get a list of tests
GET     /tests/[id]           Get a test by id

Data types:
enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT"
}

enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

interface Site {
  id: number;
  url: string;
}

interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}



Frontend:
npm install
npm run dev