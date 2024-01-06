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


const timeNow = dayjs().format('H')-8; //current time - juist the hour value


//The current day displayed the top of the calender when a user opens the planner
$('#currentDay').text(dayjs().format('dddd, MMMM D')); //format e.g Saturday, January 6





//Color-coded time blocks based on their position (past, present, and future) when compared to the current time 
for (let i=0; i<hoursArray.length; i++) { //for loop to remove the relevant css classes
  hourArr = hoursArray[i];
  if (hourArr[1]<timeNow){
    hourArr[0].children('input').addClass('past');
  } else if (hourArr[1] == timeNow){
    hourArr[0].children('input').addClass('present');
  } else {
    hourArr[0].children('input').addClass('future')
  }




// Persist events between refreshes of a page
  //get saved items (from local storage) when you load the page
function getSavedItems() {
  const savedItems = JSON.parse(localStorage.getItem(hourArr[2]));
  if (savedItems != null && savedItems != ``) {
    //hourArr[0].children('input').removeAttr('placeholder');
    hourArr[0].children('input').attr("value", savedItems);
  } 
}
getSavedItems()
}





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
  }}
  })
  


  // clear all schedule items button
  const clearButton = $('<button class="clearButton rounded m-3 px-5 py-2 " type="button">Clear Entire Schedule</button>');
  
  $('ol').append(clearButton)

  $(clearButton).on('click', function(e){
    e.preventDefault();
    localStorage.clear();
    location.reload();
  })
