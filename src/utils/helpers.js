import moment from "moment";

export function formatDateFromNow(date) {
  return moment.utc(date).local().fromNow();
}

export function formatDateByDay(date) {
  return moment.utc(date).local().format("MMM D, YYYY");
}
