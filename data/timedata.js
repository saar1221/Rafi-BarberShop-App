import { LocaleConfig } from "react-native-calendars";
import react from "react";

export default function currentDate() {
  const date = new Date();

  // ✅ Reset a Date's time to midnight
  date.setHours(0, 0, 0, 0);

  // ✅ Format a date to YYYY-MM-DD (or any other format)
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  const currentDate = formatDate(new Date());

  optionsCalender();
  return currentDate;
}

function optionsCalender() {
  LocaleConfig.locales["he"] = {
    monthNames: [
      "ינואר",
      "פבואר",
      "מרץ",
      "אפריל",
      "מאי",
      "יוני",
      "יולי",
      "אוגוסט",
      "ספטמבר",
      "אוקטובר",
      "נובמבר",
      "דצמבר",
    ],
    monthNamesShort: [
      "ינו׳",
      "פבר׳",
      "מרץ׳",
      "אפר׳",
      "מאי",
      "יוני",
      "יולי",
      "אוג׳",
      "ספט׳",
      "אוק׳",
      "נוב׳",
      "דצמ׳",
    ],
    dayNames: [
      "יום ראשון",
      "יום שני",
      "יום שלישי",
      "ום רביעי",
      "ום חמישי",
      "ום שישי",
      "יום שבת",
    ],
    dayNamesShort: ["א", "ב", "ג", "ד", "ה", "ו", "שבת"],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = "he";
}
