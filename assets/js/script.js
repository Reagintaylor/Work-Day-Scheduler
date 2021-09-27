var currentDay = document.querySelector("#currentDay");
var displayDay = moment();

currentDay.textContent = displayDay.format('MMMM Do YYYY, LTS');

// Called for the events to be displayed after page is refreshed


// changes colors of the time blocks
// var timeBlocks = $('h4')
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


// Assigning the time blocks colors based on time

// var hour = today.format("HH");
function timeofDay(){
    if (date.prototype.getHours === hour){
        var present = querySelector(".present");
        var presentStyle = getComputedStyle(present);
        setAttribute(presentStyle);
    }
    else if (date.prototype.getHours < hour){
        var past = querySelector(".past");
        var pastStyle = getComputedStyle(past);
        setAttribute(pastStyle);
    }
    else {
        var future = querySelector(".future");
        var futureStyle = getComputedStyle(future);
        setAttribute(futureStyle);
    }

};

// saves event into local storage

var saveBtn = document.querySelector(".savebtnnine")
saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var timeInputsNine = document.querySelector(".text").value.trim();
    localStorage.setItem("timeInputs09", timeInputsNine) 
});

var saveBtn = document.querySelector(".savebtnten")
saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var timeInputsTen = document.querySelector(".textten").value.trim();
    localStorage.setItem("timeInputs10", timeInputsTen) 
});

var saveBtn = document.querySelector(".savebtnelev")
saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var timeInputsElev = document.querySelector(".textelev").value.trim();
    localStorage.setItem("timeInputs11", timeInputsElev) 
});

var saveBtn = document.querySelector(".savebtntwel")
saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var timeInputsTwel = document.querySelector(".texttwel").value.trim();
    localStorage.setItem("timeInputs12", timeInputsTwel) 
});

var saveBtn = document.querySelector(".savebtnthir")
saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var timeInputsThir = document.querySelector(".textthir").value.trim();
    localStorage.setItem("timeInputs01", timeInputsThir) 
});

var saveBtn = document.querySelector(".savebtnfour")
saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var timeInputsFour = document.querySelector(".textfour").value.trim();
    localStorage.setItem("timeInputs02", timeInputsFour) 
});

var saveBtn = document.querySelector(".savebtnfift")
saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var timeInputsFift = document.querySelector(".textfift").value.trim();
    localStorage.setItem("timeInputs03", timeInputsFift) 
});

var saveBtn = document.querySelector(".savebtnsixt")
saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var timeInputsSixt = document.querySelector(".textsixt").value.trim();
    localStorage.setItem("timeInputs04", timeInputsSixt) 
});

var saveBtn = document.querySelector(".savebtnsevt")
saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    var timeInputsSevt = document.querySelector(".textsevt").value.trim();
    localStorage.setItem("timeInputs05", timeInputsSevt) 
});


