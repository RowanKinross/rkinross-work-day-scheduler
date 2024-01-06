// Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.




//variables for where to find the time-block <input> elements
const hourNine = $('.hourNine');
const hourTen = $('.hourTen');
const hourEleven = $('.hourEleven');
const hourTwelve = $('.hourTwelve');
const hourThirteen = $('.hourThirteen');
const hourFourteen = $('.hourFourteen');
const hourFifteen = $('.hourFifteen');
const hourSixteen = $('.hourSixteen');
const hourSeventeen = $('.hourSeventeen');

//array to connect time-block <input> elements with their hour number value
hoursArray = [
  [hourNine, '09', 'hourNine'],
  [hourTen, '10', 'hourTen'],
  [hourEleven, '11', 'hourEleven'],
  [hourTwelve, '12', 'hourTwelve'],
  [hourThirteen, '13', 'hourThirteen'],
  [hourFourteen, '14', 'hourFourteen'],
  [hourFifteen, '15', 'hourFifteen'],
  [hourSixteen, '16', 'hourSixteen'],
  [hourSeventeen, '17', 'hourSeventeen']
]


const timeNow = dayjs().format('H'); //current time - juist the hour value


//The current day displayed the top of the calender when a user opens the planner
$('#currentDay').text(dayjs().format('dddd, MMMM D')); //format e.g Saturday, January 6





//Color-coded time blocks based on their position (past, present, and future) when compared to the current time 
for (let i=0; i<hoursArray.length; i++) { //for loop to remove the relevant css classes
  hourArr = hoursArray[i];
  if (hourArr[1]<timeNow){
    hourArr[0].children('input').removeClass('future present');
  } else if (hourArr[1]=== timeNow){
    hourArr[0].children('input').removeClass('future');
  } else {
  }
}



// get saved items (from local storage) when you load the page
var savedItems = {};
function getSavedItems() {
  savedItems = Object.entries(localStorage);
  //hourArr[0].textContent(savedItems);
}
getSavedItems()




//4. Allow a user to enter an event when they click a time block
//5. Save the event in local storage when the save button is clicked in that time block.
$( ".btn" ).on( "click", function(e) { // if a button is clicked
  e.preventDefault();
  const buttonClickedClasses = e.target.parentNode.classList.value.split(' '); //
  buttonClickedHourClass = buttonClickedClasses[1];

  for (let i=0; i<hoursArray.length; i++) { //for loop to remove the relevant css classes
    hourArr = hoursArray[i];
    if (hourArr[2] === buttonClickedHourClass) {
    let scheduledEvent = hourArr[0].children('input').val();
    //local storage saves key as the hour class and value as the text input
    localStorage.setItem(hourArr[2], JSON.stringify(scheduledEvent)); 

    //hourArr[2] input to local storage
  }}
  })







//6. Persist events between refreshes of a page





//!1. Display the current day at the top of the calender when a user opens the planner.
  //!target top of the calendar
  //! display dayjs() formatted to current day(?) day of the week, month and date e.g thursday, september 30th

//!2. Present time blocks for standard business hours when the user scrolls down.
  //!bootstrap input groups
  //!time span 9am - 5pm
  //!each slot 1 hour

//3. Color-code each time block based on past, present, and future when the time block is viewed.
  // if statement 
  // give 'past', 'present' and 'future' classes accordingly

//4. Allow a user to enter an event when they click a time block
  // click event

//5. Save the event in local storage when the save button is clicked in that time block.
  // set local storage
  
//6. Persist events between refreshes of a page
  // get local storage at beginning of page
