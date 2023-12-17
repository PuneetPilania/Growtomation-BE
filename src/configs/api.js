const DOMAIN_PREFIX = window.location.href.startsWith("http")
  ? "http"
  : "https";

const BASE_URLS = {
  development: `${DOMAIN_PREFIX}://localhost:8000/api`,
  qa: `${DOMAIN_PREFIX}://localhost:8000/api`,
  staging: `${DOMAIN_PREFIX}://localhost:8000/api`,
  production: `${DOMAIN_PREFIX}://localhost:8000/api`,
};

const API_BASE_URL = BASE_URLS[process.env.REACT_APP_ENV];

const API_URLS = {
  FETCH_TICKETS: "/hs/lead/associated/tickets",
  CREATE_TICKET: "/hs/ticket/create",
};

export { API_BASE_URL, API_URLS };
