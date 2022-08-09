// variable for new events
var newSave = $(".saveBtn")

// Adds the current day to the jumbotron
$('#currentDay').text(moment().format("MMM Do YYYY"));


// Styles the calendar if the event is in the past present or future relative to the current hour
function calendarStyle() {
    var currentHour = moment().hours();

    $(".time-block").each(function () {
        var plannerHour = parseInt($(this).attr("id"));

        if (plannerHour > currentHour) {
            $(this).children().eq(1).addClass("future");
        } else if (plannerHour === currentHour) {
            $(this).children().eq(1).addClass("present");
        } else {
            $(this).children().eq(1).addClass("past");
        }
    })
};

// Saves hour and text input in local storage
function saveEvent() {
    var timeSlot = $(this).siblings(".hour").text();
    var event = $(this).siblings(".description").val();
    localStorage.setItem(timeSlot, event);
}

// Stores and retireves information for different time slots 
function addToCalendar() {
    $(".hour").each(function () {
        var hour = $(this).text();
        var events = localStorage.getItem(hour);

        if (events !== null) {
            $(this).siblings(".description").val(events);
        }
    })
}

// Creates a new saved event when save button is clicked
newSave.on("click", saveEvent);

// Calls functions
calendarStyle();
addToCalendar();