// Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

//The current day at the top of the calender when a user opens the planner.
$('#currentDay').text(dayjs().format('dddd, MMMM D'));


//Color-coded each time block based on past, present, and future when the time block is viewed.
const timeNow = dayjs().format('H');
const timeBlocks = ($('.hour').text().split(':00'));

console.log(timeNow);
console.log(timeBlocks);


//4. Allow a user to enter an event when they click a time block

//5. Save the event in local storage when the save button is clicked in that time block.

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
  // give `past`, `present` and `future` classes accordingly

//4. Allow a user to enter an event when they click a time block
  // click event

//5. Save the event in local storage when the save button is clicked in that time block.
  // set local storage
  
//6. Persist events between refreshes of a page
  // get local storage at beginning of page
