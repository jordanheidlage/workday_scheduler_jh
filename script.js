var currentHour = moment().format("dddd, MMMM Do");
var currentDay = $("#currentDay");
var btn9 = document.getElementById("9");
var btn10 = document.getElementById("10");
var btn11 = document.getElementById("11");
var btn12 = document.getElementById("12");
var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");
var btn5 = document.getElementById("5");

var timeBlocksArr=[9,10,11,12,1,2,3,4,5] //translate time-blocks to military times
var confirmBtn
var saveBtn = $('.saveBtn')
var deleteBtn = $('.delete')
var currenthour= moment().hour()
console.log(currenthour)