var currentDay = document.querySelector("#currentDay");
var displayDay = moment();

currentDay.textContent = displayDay.format('MMMM Do YYYY, h:mm:ss a');

