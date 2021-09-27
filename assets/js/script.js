var currentDay = document.querySelector("#currentDay");
var displayDay = moment();

currentDay.textContent = displayDay.format('MMMM Do YYYY, LTS');

// changes colors of the time blocks
// var timeBlocks = $('[data-time]')
// var hour = today.format("HH");

// for (var i = 0; i < blocks.length; i++) {
    
//     var eachBlock = timeBlocks[i];
//     var val = eachBlock.getAttribute('data-time');
    
//     //checks if that time block is in the past
//     if (val < hour) {
//     //changes background color
//     eachBlock.style.backgroundColor='#350002'
//     //change text color
//     document.querySelectorAll("h4")[i].style.color = "black";
//     document.querySelectorAll("textarea")[i].style.color = "black";
//     document.querySelectorAll("button")[i].style.color = "black";
//     document.querySelectorAll("button")[i].style.background= '#350002';
// }
//     else if (val == hour) {
//     // changes background color
//     oneBlock.style.backgroundColor='#fd7b02';
    
//     //change text color
//     document.querySelectorAll("h5")[i].style.color = "white";
// }};

// saves event into local storage

var times = document.querySelector("h4")
var timeEvents = document.querySelector("textarea")
var saveBtn = document.querySelector("button")

saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var timeEventInfo = timeEvents.value.trim();
  
    // set new submission to local storage 
    localStorage.setItem("timeEventInfo", JSON.stringify(timeEventInfo));
    
  });