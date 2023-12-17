import axios from "axios";
import { BASE_URL } from "../configs/constants";
import { showErrorMsg } from "./notifications";
import { AUTH_MSG } from ".././configs/messages";

/**
 * commandAxios
 * Axios instance for all API requests
 */
const appAxios = (url) =>
  axios.create({
    baseURL: url ? url : BASE_URL,
  });

/**
 * Get Common Headers
 *
 * @param {String} url
 * @param {Object} additionalHeaders
 *
 * @return {Object} Headers
 */
export const getCommonHeaders = (url, additionalHeaders = {}) => {
  const { access_token = "" } = {};

  try {
    const headers = {
      Accept: "application/json",
      // "Access-Control-Allow-Origin": "*",

      /* Additional Headers */
      ...additionalHeaders,
    };

    // if (access_token) {
    //   headers.Authorization = `Bearer ${access_token}`;
    // }

    return headers;
  } catch (e) {
    return {};
  }
};

/**
 * GET Request
 *
 * @param {String} url
 * @param {Object} HELPER_PARAMS
 */
export const httpGet = async (url) => {
  try {
    return appAxios
      .get(url, {
        headers: getCommonHeaders(url),
      })
      .then(httpHandleResponse)
      .catch((err) => {
        return httpHandleError(err, url);
      });
  } catch (e) {
    console.error("-- HTTP GET -- ", e);
    return Promise.reject({});
  }
};

/**
 * POST Request
 *
 * @param {String} url
 * @param {Object} params
 */
export const httpPost = (url, parms, baseURL) => {
  try {
    return appAxios(baseURL)
      .post(url, parms, {
        headers: getCommonHeaders(url),
      })
      .then(httpHandleResponse)
      .catch((err) => {
        return httpHandleError(err, url);
      });
  } catch (e) {
    console.error("-- HTTP POST -- ", e);
    return Promise.reject({});
  }
};

/**
 * Handle Success Response
 *
 * @param {Object|Null} res
 *
 * @return {Object|Null}
 */
export const httpHandleResponse = (res) => {
  if (!res) return Promise.reject(null);

  return Promise.resolve(res.data);
};

/**
 * Handle API Error Reponse
 *
 * @param {Object|Null} error
 *
 * @return {Object|String|Null}
 */
export const httpHandleError = (error, url) => {
  /* error = { error, config, code, request, response } */
  try {
    if (!error) return Promise.reject({});

    if (error.message == "Network failed") {
      showErrorMsg();
      return Promise.reject({});
    }

    const xhr = error.request;
    let err = {};
    if (xhr.response) err = extractJSON(xhr.response);

    if (xhr) {
      console.log(xhr.status, xhr);
      switch (xhr.status) {
        case 0:
          showErrorMsg(AUTH_MSG.no_res);
          break;

        case 301 || 302 || 307 || 308:
          showErrorMsg(`${xhr.status}: CORS error`);
          break;

        case 400:
          showErrorMsg(AUTH_MSG.bad_request);
          break;

        case 401:
          showErrorMsg(AUTH_MSG.unauthorized);
          break;

        case 403:
          showErrorMsg(AUTH_MSG.forbidden);
          break;

        case 404:
          showErrorMsg(AUTH_MSG.not_found);
          break;

        case 405:
          showErrorMsg(AUTH_MSG.not_allowed);
          break;

        case 412:
          showErrorMsg(AUTH_MSG.access_denied);
          break;

        case 422:
          showErrorMsg(AUTH_MSG.unprocessable);
          break;

        case 502:
          showErrorMsg(AUTH_MSG.bad_gateway);
          break;

        case 503:
          showErrorMsg(AUTH_MSG.service_unavailable);
          break;

        case 504:
          showErrorMsg(AUTH_MSG.timeout);
          break;

        default:
          showErrorMsg(`${xhr.status}: An internal error occurred`);
      }
    } else {
      showErrorMsg();
    }

    return Promise.reject(err);
  } catch (e) {
    console.error("-- HTTP HANDLE ERROR -- ", e);
    return Promise.reject({});
  }
};

/**
 * Extract JSON Response
 *
 * @param {JSON} json [JSON Data]
 *
 * @return {Object|String} Extracted value or Blank Object
 */
export const extractJSON = (json) => {
  try {
    return JSON.parse(json);
  } catch (err) {
    return "";
  }
};
