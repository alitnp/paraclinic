import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

export const getFormattedDate = (date) => {
  if (!date) return "";
  return new DateObject({
    date,
    calendar: persian,
    locale: persian_fa,
  }).format();
};

export const getIsoFormattedDate = (date) => {
  if (!date) return "";
  return new Date(
    new DateObject({
      date,
    }).unix * 1000
  ).toISOString();
};
