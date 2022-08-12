var currentHour = moment().format("dddd, MMMM Do");
var currentDay = $("#currentDay");
// var btn9 = document.getElementById("9");
// var btn10 = document.getElementById("10");
// var btn11 = document.getElementById("11");
// var btn12 = document.getElementById("12");
// var btn1 = document.getElementById("13");
// var btn2 = document.getElementById("14");
// var btn3 = document.getElementById("15");
// var btn4 = document.getElementById("16");
// var btn5 = document.getElementById("17");
var local = [localStorage.getItem("9am"), localStorage.getItem("10am"), localStorage.getItem("11am"), localStorage.getItem("12am"), localStorage.getItem("local13"), localStorage.getItem("local14"), localStorage.getItem("local15"), localStorage.getItem("local16"), localStorage.getItem("local17")]
var timeBlocksArr=[9,10,11,12,13,14,15,16,17] 
var saveBtn = $('.saveBtn')
var deleteBtn = $('.delete')
var currenthour= moment().hour()
var ifElse
console.log(currenthour)

function initialize(){
    currentDay.text(moment().format('dddd, MMMM Do'))
    for (let index = 0; index < hours.length; index++) {
        // Colors past/present/future based on system clock
        if (currentHour > hours[index]){
            $('#' + hours[index]).addClass('past')
        }else if (currentHour == hours[index]){
            $('#' + hours[index]).addClass('present')
        }else if (currentHour < hours[index]){
            $('#' + hours[index]).addClass('future')
        }
        // Populates textboxes with any locally stored inputs
        $('#' + hours[index]).text(local[index])
    }
 }  