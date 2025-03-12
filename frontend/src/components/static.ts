type VariantsTypesPT = "CLASSIC" | "MVT" | "SERVER_SIDE";
type VariantStatusesPT = "ONLINE" | "PAUSED" | "STOPPED" | "DRAFT";
type SiteColorPT = "delivery" | "games" | "market";

export const VARIANTS_STATUSES: {
  [k in VariantStatusesPT]: {
    textFirstLetter: string;
    textLowerCase: string;
    color: string;
    btnText: string;
    order: number;
  };
} = {
  ONLINE: {
    textFirstLetter: "Online",
    textLowerCase: "online",
    color: "#1BDA9D",
    btnText: "Results",
    order: 1,
  },
  PAUSED: {
    textFirstLetter: "Paused",
    textLowerCase: "paused",
    color: "#FF8346",
    btnText: "Results",
    order: 2,
  },
  STOPPED: {
    textFirstLetter: "Stopped",
    textLowerCase: "stopped",
    color: "#FE4848",
    btnText: "Results",
    order: 3,
  },
  DRAFT: {
    textFirstLetter: "Draft",
    textLowerCase: "draft",
    color: "#5C5C5C",
    btnText: "Finalize",
    order: 4,
  },
};

export const VARIANTS_TYPES: { [k in VariantsTypesPT]: string } = {
  CLASSIC: "Classic",
  MVT: "MVT",
  SERVER_SIDE: "Server-side",
};

export const SITE_COLOR: { [k in SiteColorPT]: string } = {
  delivery: "#C2C2FF",
  games: "#8686FF",
  market: "#E14165",
};

export const DASHBOARD_LINK = "/dashboard";
export const RESULTS_LINK = "/results";
export const FINALIZE_LINK = "/finalize";
