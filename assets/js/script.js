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


//array to connect time-block <input> elements with their hour's number value
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


const timeNow = dayjs().format('H'); //current time - just the hour value




dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_advancedFormat);


//The current day is displayed the top of the calender when a user opens the planner
$('#currentDay').text(dayjs().format('dddd, MMMM Do')); //format e.g Saturday, January 6





//Color-coded time blocks based on their position (past, present, and future) when compared to the current time 
for (let i=0; i<hoursArray.length; i++) { //for loop to remove the relevant css classes
  hourArr = hoursArray[i];
  if (hourArr[1]<timeNow){
    hourArr[0].children('input').addClass('past').css("font-weight", "bold");
  } else if (hourArr[1] == timeNow){
    hourArr[0].children('input').addClass('present').css("font-weight", "bold");
  } else {
    hourArr[0].children('input').addClass('future').css("font-weight", "bold");
  }

//Persist events between refreshes of a page
  //get saved items (from local storage) when you load the page
  function getSavedItems() {
    const savedItems = JSON.parse(localStorage.getItem(hourArr[2])); //the locally stored key will be equal to an iteration of hourArr[2] in this for loop 
    if (savedItems != null && savedItems != ``) {
      hourArr[0].children('input').attr("value", savedItems); // set locally stored text value in the input box
    } 
  }

getSavedItems() //calls the function at the start of the page
}





//Allow a user to enter an event when they click a time block
  //Save the event in local storage when the save button is clicked in that time block.
$( ".btn" ).on( "click", function(e) { // if a button is clicked
  e.preventDefault();

  //retrieve the class list of the parent of that button
  const buttonClickedClasses = e.target.parentNode.classList.value.split(' '); 
  buttonClickedHourClass = buttonClickedClasses[1]; //index 1 = relevant class e.g 'hourNine'

  for (let i=0; i<hoursArray.length; i++) {
    hourArr = hoursArray[i];
    if (hourArr[2] === buttonClickedHourClass) {
    let scheduledEvent = hourArr[0].children('input').val(); // obtain the text value of the user input
    //local storage saves key as the hour class and value as the text input
    localStorage.setItem(hourArr[2], JSON.stringify(scheduledEvent)); // push the event, with its class to local storage 
  }}
  })
  




  // clear all schedule items button
  const clearButton = $('<button class="clearButton rounded m-3 px-5 py-2 " type="button">Clear Entire Schedule</button>');
  clearButton.css({"border":"2px solid red","width":"99%","color":"white"});

  $('ol').append(clearButton) // add button to ol

  $(clearButton).on('click', function(e){
    e.preventDefault();
    localStorage.clear(); //clear the local storage
    location.reload(); //reload the page
  })