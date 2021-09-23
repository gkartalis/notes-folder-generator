const fs = require("fs");
const { DateTime } = require("luxon");

const createDirectory = (directoryName) => {
  if (!fs.existsSync(directoryName)) {
    fs.mkdirSync(directoryName);
  }
};

const copyTemplateTo = (destination) => {
  fs.copyFile("./notes-template.md", destination, (err) => {
    if (err) throw err;
    console.log(
      `your template was copied successfully to your daily notes with name: ${destination}`
    );
  });
};

const isTodayOrFuture = (date) => {
  return date.toISODate() >= DateTime.local().toISODate();
};

const years = [2021];

const createArrayFor = (n) => Array.from({ length: n }, (_, i) => i + 1);

years.forEach((year) => {
  // create folder for each year
  createDirectory(`./${year.toString()}`);

  // create folder for each month
  createArrayFor(12).forEach((month) => {
    const formattedMonth = DateTime.local(year, month).toFormat("LLL");
    createDirectory(`./${year}/${formattedMonth}`);

    // get days in each month
    const daysInMonth = DateTime.local(year, month).daysInMonth;
    const arr = createArrayFor(daysInMonth);

    arr.forEach((day) => {
      const date = DateTime.local(year, month, day);
      const formattedDay = date.toFormat("dd-ccc");

      if (isTodayOrFuture(date)) {
        copyTemplateTo(`./${year}/${formattedMonth}/${formattedDay}.md`);
      }
    });
  });
});
