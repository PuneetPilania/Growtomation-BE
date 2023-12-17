import { createSelector } from "reselect";

const HomeReducer = () => (state) => state.get("home");

/**
 * Get Tickets Info
 *
 * @return {Object}
 */
export const getTickets = () =>
  createSelector(HomeReducer(), (state) => state.tickets);

/**
 * Get Email Info
 *
 * @return {Object}
 */
export const getEmail = () =>
  createSelector(HomeReducer(), (state) => state.email);

/**
 * Get Email Info
 *
 * @return {Object}
 */
export const getClientSecret = () =>
  createSelector(HomeReducer(), (state) => state.client_secret);
