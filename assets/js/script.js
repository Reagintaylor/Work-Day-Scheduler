var currentDay = document.querySelector("#currentDay");
var displayDay = moment();

currentDay.textContent = displayDay.format('MMMM Do YYYY, LTS');

// Called for the events to be displayed after page is refreshed
displayEvents();

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


var timeEvents = document.querySelector(".text")
var saveBtn = document.querySelector(".savebtn")

saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var timeEventInfo = timeEvents.value.trim();
  
    // set new submission to local storage 
    localStorage.setItem("timeEventInfo", JSON.stringify(timeEventInfo));
    
    function displayEvents(){
        $('#09 .text').val(localStorage.setItem('09'));
        $('#10 .text').val(localStorage.setItem('10'));
        $('#11 .text').val(localStorage.setItem('11'));
        $('#12 .text').val(localStorage.setItem('12'));
        $('#13 .text').val(localStorage.setItem('13'));
        $('#14 .text').val(localStorage.setItem('14'));
        $('#15 .text').val(localStorage.setItem('15'));
        $('#16 .text').val(localStorage.setItem('16'));
        $('#17 .text').val(localStorage.setItem('17'));

        $('#09 .text').val(localStorage.getItem('09'));
        $('#10 .text').val(localStorage.getItem('10'));
        $('#11 .text').val(localStorage.getItem('11'));
        $('#12 .text').val(localStorage.getItem('12'));
        $('#13 .text').val(localStorage.getItem('13'));
        $('#14 .text').val(localStorage.getItem('14'));
        $('#15 .text').val(localStorage.getItem('15'));
        $('#16 .text').val(localStorage.getItem('16'));
        $('#17 .text').val(localStorage.getItem('17'));
    }
  });