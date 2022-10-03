var currentHour = moment().format("dddd, MMMM Do YYYY");
var currentDay = $("#currentDay");
var currenthour= moment().hour()

 function store() {
    let inputArray = document.querySelectorAll(".description");
    let counter = 9;
    inputArray.forEach(inputElement => {
        localStorage.setItem(counter++, inputElement.value);
    })

    document.getElementById("saveAllbtn").className = "btn btn-secondary"
 }

  
 function resetStores() {
    let inputArray = document.querySelectorAll(".description");
    let counter = 9;
    inputArray.forEach(inputElement => {
        //localStorage.setItem(counter++, "");
        inputElement.value = "";
    });
    store();
}


function retrieveText() {

    let inputArray = document.querySelectorAll(".description");
    let counter = 9;
    inputArray.forEach(inputElement => {
        //localStorage.setItem(counter++, inputElement.value);
        inputElement.value = localStorage.getItem(counter++);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    retrieveText();
    //setup event handlers
    let inputArray = document.querySelectorAll(".description");
    let counter = 9;
    inputArray.forEach(inputElement => {
        //localStorage.setItem(counter++, inputElement.value);
        inputElement.addEventListener("change", function (event) {
            console.log("###change detected###");
            //inputElement.className = "btn btn-primary";
            document.getElementById("saveAllBtn").className = "btn btn-primary"
        });
    });

}, false);