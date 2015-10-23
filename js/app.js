// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();

var temp;
var wth;

var myInputBox;
var city ;
var mySubmitButton;

var date1;
var date2;

function setup() {
 var mySubmitButton = createButton("Go!!");
    mySubmitButton.parent("buttons");
    mySubmitButton.class("GoButton");
    
    mySubmitButton.mousePressed(lookupCity);

}

function lookupCity() {
event.preventDefault();
    var base_url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
    var app_id = "&appid=bd82977b86bf27fb59a04b61b657fb6f";
    var units = "&units=imperial";
    var myInputBox = select("#location");
    var url = base_url + myInputBox.value() + app_id + units;
  loadJSON(url, gotWeather);
}

function gotWeather(weather) {
    date1 = new Date(weather.list[0].dt*1000);
    day1 =  date1.getUTCDay(); 
    temp1 = weather.list[0].temp.day;
    wth1 = weather.list[0].weather[0].main; 
    
    date2 = new Date(weather.list[1].dt*1000);
    day2 =  date2.getUTCDay(); 
    temp2 = weather.list[1].temp.day;
    wth2 = weather.list[1].weather[0].main; 
  
    date3 = new Date(weather.list[2].dt*1000);
    day3 =  date3.getUTCDay(); 
    temp3 = weather.list[2].temp.day;
    wth3 = weather.list[2].weather[0].main; 
    
  if (day1==0){
      day1="Sunday";}
  if (day1==1){
      day1="Monday";}
  if (day1==2){
      day1="Tuesday";}
  if (day1==3){
      day1="Wednesday";}
  if (day1==4){
      day1="Thursday";}
  if (day1==5){
      day1="Friday";}
  if (day1==6){
      day1="Saturday";}
    
  if (day2==0){
      day2="Sunday";}
  if (day2==1){
      day2="Monday";}
  if (day2==2){
      day2="Tuesday";}
  if (day2==3){
      day2="Wednesday";}
  if (day2==4){
      day2="Thursday";}
  if (day2==5){
      day2="Friday";}
  if (day2==6){
      day2="Saturday";}
    
  if (day3==0){
      day3="Sunday";}
  if (day3==1){
      day3="Monday";}
  if (day3==2){
      day3="Tuesday";}
  if (day3==3){
      day3="Wednesday";}
  if (day3==4){
      day3="Thursday";}
  if (day3==5){
      day3="Friday";}
  if (day3==6){
      day3="Saturday";}
    
  if (wth1=="Clouds"){
      $("#wth1").html('<img src="icons/cloudy.png"  alt="Cloudy">');}
  if (wth1=="Clear"){
      $("#wth1").html('<img src="icons/sunny.png"  alt="Sunny">');}
  if (wth1=="Rain"){
      $("#wth1").html('<img src="icons/rainy.png"  alt="Rainy">');}
  if (wth1=="Snow"){
      $("#wth1").html('<img src="icons/snow.png"  alt="Snow">');}

  if (wth1=="Clouds"){
      $("#wth2").html('<img src="icons/cloudy.gif"  alt="Cloudy">');}
  if (wth1=="Clear"){
      $("#wth2").html('<img src="icons/sunny.gif"  alt="Sunny">');}
  if (wth1=="Rain"){
      $("#wth2").html('<img src="icons/rainy.gif"  alt="Rainy">');}
  if (wth1=="Snow"){
      $("#wth2").html('<img src="icons/snow.gif"  alt="Snow">');}
    
  if (wth2=="Clouds"){
      $("#wth3").html('<img src="icons/cloudy.gif"  alt="Cloudy">');}
  if (wth2=="Clear"){
      $("#wth3").html('<img src="icons/sunny.gif"  alt="Sunny">');}
  if (wth2=="Rain"){
      $("#wth3").html('<img src="icons/rainy.gif"  alt="Rainy">');}
  if (wth2=="Snow"){
      $("#wth3").html('<img src="icons/snow.gif"  alt="Snow">');}
    
  if (wth3=="Clouds"){
      $("#wth4").html('<img src="icons/cloudy.gif"  alt="Cloudy">');}
  if (wth3=="Clear"){
      $("#wth4").html('<img src="icons/sunny.gif"  alt="Sunny">');}
  if (wth3=="Rain"){
      $("#wth4").html('<img src="icons/rainy.gif"  alt="Rainy">');}
  if (wth3=="Snow"){
      $("#wth4").html('<img src="icons/snow.gif"  alt="Snow">');}
    
  $("#date1").html(date1.getUTCMonth()+"/"+date1.getUTCDate());
  $("#day1").html(day1);
  $("#wdata1").html(temp1+"°F");
  $("#city1").html(weather.city.name);
    
  $("#day2").html(day2);
  $("#wdata2").html(temp2+"°F");
  $("#date2").html(date2.getUTCMonth()+"/"+date2.getUTCDate());
  $("#city2").html(weather.city.name);
    
  $("#day3").html(day3);
  $("#wdata3").html(temp3+"°F");
  $("#date3").html(date3.getUTCMonth()+"/"+date3.getUTCDate());
  $("#city3").html(weather.city.name);
}

//function gotWeather2(weather) {
//    date = new Date(weather.list[0].dt*1000);
//    day =  date.getDay; 
//    temp = weather.list[0].temp.day;
//    wth = weather.list[0].weather[0].main; 
//  
//  if (date2=0){
//      date2="Sunday";}
//  if (date2=1){
//      date2="Monday";}
//  if (date2=2){
//      date2="Tuesday";}
//  if (date2=3){
//      date2="Wednesday";}
//  if (date2=4){
//      date2="Thursday";}
//  if (date2=5){
//      date2="Friday";}
//  if (date2=6){
//      date2="Saturday";}
//    
//
//  if (wth=="Clouds"){
//      $("#wth3").html('<img src="icons/cloudy.gif"  alt="Cloudy">');}
//  if (wth=="Clear"){
//      $("#wth3").html('<img src="icons/sunny.gif"  alt="Sunny">');}
//  if (wth=="Rain"){
//      $("#wth3").html('<img src="icons/rainy.gif"  alt="Rainy">');}
//  if (wth=="Snow"){
//      $("#wth3").html('<img src="icons/snow.gif"  alt="Snow">');}
//    
//  $("#date3").html(day);
//  $("#wdata2").html(temp);
//  $("#date4").html(date);
//}
//$("button").click(function() {

//$("#location").html(myInputBox);
//$("#go").html(mySubmitButton);