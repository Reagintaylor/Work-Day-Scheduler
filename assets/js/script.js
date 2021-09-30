var currentDay = document.querySelector("#currentDay");
var displayDay = moment();

currentDay.textContent = displayDay.format("MMMM Do, YYYY, HH:mm A");


// Assigning the time blocks colors based on time

// //Change page as time changes
// //grabs current hour
// var hour = displayDay.format("HH");
// var blocks = $('[data-time]') 

// for (var i=0; i<blocks.length; i++) {
//     //grabs specific block
//     var oneBlock = blocks[i];
//     var val = oneBlock.getAttribute('data-time')
    
//     //past time block
// if (val < hour) {
//     function addNewClass(textarea){   
//         textarea.className=(".past"); 
//     }
// }   //present time block
// else if (val === hour) {

//     function addNewClass(textarea){
//         textarea.className=".present"; 
//     }
// }   //future time block
// else {
//     function addNewClass(textarea){   
//         textarea.className=".future"; 
//     }
// }
// };

var hour = moment().format("HH"); 
var colorBlocking = {

}
for (var i = 9; i<= 17; i++) {
//     //checks if that time block is in the past
     if ([i] < hour) {
         //see what number hour is current
         console.log('get here')
        //grabs each block that is past the current hour and change it to grey
         document.getElementById(i).style.backgroundColor = 'grey';
         document.getElementById(i).style.color = 'white';

         //current schedule events
     } else if ([i] == hour) {
        document.getElementById(i).style.backgroundColor = 'green';
        document.getElementById(i).style.color = 'white';
        //future schedule events
     } else {
        ([i] > hour)
        document.getElementById(i).style.backgroundColor = 'red'; 
        document.getElementById(i).style.color = 'white';
     }
};




// Trying to render on page with these before I try with the rest
// saves event into local storage, hard coded

function renderNine() {
var saveBtn = document.querySelector(".savebtnnine")
saveBtn.addEventListener("click", function(event){
    event.target.dataset.hour
    var timeInputsNine = document.querySelector(".textnine").value.trim();
    localStorage.setItem("timeInputs09", timeInputsNine) 
});
}
//
function renderTen() {
var saveBtn = document.querySelector(".savebtnten")
saveBtn.addEventListener("click", function(event){
    event.target.dataset.hour
    var timeInputsTen = document.querySelector(".textten").value.trim()
    localStorage.setItem("timeInputs10", timeInputsTen); 
});
}

var saveBtn = document.querySelector(".savebtnelev")
saveBtn.addEventListener("click", function(event){
    event.target.dataset.hour
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

renderTen();
