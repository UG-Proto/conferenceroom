//! --------------------------------
//! calendarSlider.js
//! version : 1.0.0
//! author  : Giovanna M. 
//! license : unknown
//! dependencies: js/moment.min.js
//! --------------------------------

// -------------------------------------------------- //
// Day object
// -------------------------------------------------- //
function dateObject(dateParam) {
	this.date = dateParam;
	this.dayNumber = dateParam.format("D");
	this.month = dateParam.format("MMM");
	this.dayOfWeek = dateParam.format("ddd");
}

// -------------------------------------------------- //
// calendarSlider class
// -------------------------------------------------- //
function calendarSlider() {

	var dateBeingDisplayed;
	var firstDayOfCalWeek;

	this.defaultOptions = {
		currentDayClassName: "custom-currentday",  
		dayToDisplayNextOrPrevWeek: "mon",
		startDate: new moment(),
		endDate: moment().add(30, 'days'),
		blockDatesArray: [],
		afterInitialize: function() {
          // action can be passed by user			
		},      
        prevPress: function () {
          // action can be passed by user
        },
        nextPress: function () {
          // action can be passed by user
        },
        dayPress: function() {
            // "Default success function"
        }
    }

  	// -----------------------------------------------
  	// Private functions 
  	// -----------------------------------------------

	// Determine non-active block in the calendar carousel 
	function getNonActiveBlockId() {

		var activeBlock = "";
		// get the block id of the active block. Return the other block id which will be used to display the new calendar
		activeBlock = $(".carousel-inner div.active").attr("id");
		switch (activeBlock) {
			case "block1":
				return "block2";
				break;
			case "block2":
				return "block1";
				break;
		}
	}

	// Get Date Object of day of the week
	function getDateOfWeek(firstDayOfCalWeek, weekDayName) {

		var dateOfWeekOject;

		switch (weekDayName) {
			case "sun":
				dateOfWeekOject = firstDayOfCalWeek;
				break;
			case "mon":
				dateOfWeekOject = moment(firstDayOfCalWeek).clone().add(1, "days");
				break;
			case "tue":
				dateOfWeekOject = moment(firstDayOfCalWeek).clone().add(2, "days");
				break;
			case "wed":
				dateOfWeekOject = moment(firstDayOfCalWeek).clone().add(3, "days");
				break;
			case "thu":
				dateOfWeekOject = moment(firstDayOfCalWeek).clone().add(4, "days");
				break;
			case "fri":
				dateOfWeekOject = moment(firstDayOfCalWeek).clone().add(5, "days");
				break;
			case "sat":
				dateOfWeekOject = moment(firstDayOfCalWeek).clone().add(6, "days");
				break;						
		}
		return dateOfWeekOject;

	}


	// Enable/ Disable Prev and Next buttons
	function disableNavButtons(firstDayOfCalWeek, options) {

/*		startDate: new moment(),
		endDate: moment().add(30, 'days'),
		blockDatesArray: [],
*/

/*
		var lastDayOfWeek = firstDayOfCalWeek.clone().add(6, "days");
		var optionsEndDate = moment(options.endDate);

		if (optionsEndDate.isValid()) {
			if ( optionsEndDate >= firstDayOfCalWeek && optionsEndDate <= lastDayOfWeek) {

			}
		}
*/
	}


	// Update info for days on the scrollable calendar
	function updateDayInfo($dayElem, dateObj, isThisDayDisplayed, options) {
		$dayElem.attr("data-date", dateObj.date.format("MM-DD-YYYY"));
		$dayElem.find(".custom-dayhdr").text(dateObj.month);
		$dayElem.find(".custom-label").text(dateObj.dayOfWeek.toUpperCase());

		$dayNumberElem = $dayElem.find(".custom-day");
		$dayNumberElem.text(dateObj.dayNumber);
		$dayNumberElem.attr("class","").addClass("custom-day").addClass("custom-circlebtn"); // remove all classes, add the original ones

		if (isThisDayDisplayed) {  // Add current Day Classname to give styling to current date &execute dayPress method passed when initializing
			$dayNumberElem.addClass(options.currentDayClassName);
			dateBeingDisplayed = dateObj.date;
			options.dayPress.call(dateBeingDisplayed);
		} 
	}

	// Display week on scrollable calendar
	function displayCalendarWeek (firstDayOfCalWeek, dayToDisplay, calBlockId, options) {

		var sundayDateObj = new dateObject(moment(firstDayOfCalWeek).clone());
		var mondayDateObj = new dateObject(moment(firstDayOfCalWeek).clone().add(1, "days"));		
		var tuesdayDateObj = new dateObject(moment(firstDayOfCalWeek).clone().add(2, "days"));		
		var wednesdayDateObj = new dateObject(moment(firstDayOfCalWeek).clone().add(3, "days"));		
		var thursdayDateObj = new dateObject(moment(firstDayOfCalWeek).clone().add(4, "days"));		
		var fridayDateObj = new dateObject(moment(firstDayOfCalWeek).clone().add(5, "days"));		
		var saturdayDateObj = new dateObject(moment(firstDayOfCalWeek).clone().add(6, "days"));		

		var dayFormatted = moment(dayToDisplay).clone().format("MM-DD-YYYY"); 

		// Display Sunday
		var $dayCol = $("#" + calBlockId + " " + "#sun");
		updateDayInfo($dayCol, sundayDateObj, Boolean(dayFormatted === sundayDateObj.date.format("MM-DD-YYYY")), options);

		// Display Monday
		var $dayCol = $("#" + calBlockId + " " + "#mon");
		updateDayInfo($dayCol, mondayDateObj, Boolean(dayFormatted === mondayDateObj.date.format("MM-DD-YYYY")), options);

		// Display Tuesday
		var $dayCol = $("#" + calBlockId + " " + "#tue");
		updateDayInfo($dayCol, tuesdayDateObj, Boolean(dayFormatted === tuesdayDateObj.date.format("MM-DD-YYYY")), options);

		// Display Wednesday
		var $dayCol = $("#" + calBlockId + " " + "#wed");
		updateDayInfo($dayCol, wednesdayDateObj, Boolean(dayFormatted === wednesdayDateObj.date.format("MM-DD-YYYY")), options);

		// Display Thursday
		var $dayCol = $("#" + calBlockId + " " + "#thu");
		updateDayInfo($dayCol, thursdayDateObj, Boolean(dayFormatted === thursdayDateObj.date.format("MM-DD-YYYY")), options);

		// Display Friday
		var $dayCol = $("#" + calBlockId + " " + "#fri");
		updateDayInfo($dayCol, fridayDateObj, Boolean(dayFormatted === fridayDateObj.date.format("MM-DD-YYYY")), options);

		// Display Saturday
		var $dayCol = $("#" + calBlockId + " " + "#sat");
		updateDayInfo($dayCol, saturdayDateObj, Boolean(dayFormatted === saturdayDateObj.date.format("MM-DD-YYYY")), options);

	}


  	// -----------------------------------------------
  	// Class methods 
  	// -----------------------------------------------

  	// Prev action is invoked
	this.prev = function() {		
		firstDayOfCalWeek = firstDayOfCalWeek.subtract(7, "days");
		dateBeingDisplayed = getDateOfWeek(firstDayOfCalWeek, this.settings.dayToDisplayNextOrPrevWeek);  // get Date Object of day to display
		var blockID = getNonActiveBlockId(); // determine block that is not currently active
		displayCalendarWeek(firstDayOfCalWeek, dateBeingDisplayed, blockID, this.settings);	

		this.settings.prevPress.call(this);	
	}


  	// Next action is invoked
	this.next = function() {
		firstDayOfCalWeek = firstDayOfCalWeek.add(7, "days");
		dateBeingDisplayed = getDateOfWeek(firstDayOfCalWeek, this.settings.dayToDisplayNextOrPrevWeek);  // get Date Object of day to display
		var blockID = getNonActiveBlockId(); // determine block that is not currently active
		displayCalendarWeek(firstDayOfCalWeek, dateBeingDisplayed, blockID, this.settings);		

		this.settings.nextPress.call(this);	
	}


  	// Initialize Carousel
	this.initialize = function(options) {

		this.settings = $.extend(this.defaultOptions, options);      

		var base = this;  // need to assign "this" to a variable so this variable is used in the "click" events below

 		var now = new moment();
 		dateBeingDisplayed = now;
 		firstDayOfCalWeek = moment(dateBeingDisplayed).clone().startOf('week');
		displayCalendarWeek(firstDayOfCalWeek, dateBeingDisplayed, "block1", base.settings);


		$("#custom-prev-button").click(function(){
			base.prev();
			base.settings.prevPress.call($(this));		
		});

		$("#custom-next-button").click(function(){
			base.next();
			base.settings.nextPress.call($(this));		
		});

		$(".custom-day-col").click(function() {
			$(".custom-day").removeClass(options.currentDayClassName); // remove current Date style from all days
			$(this).find(".custom-day").addClass(options.currentDayClassName);  // Update style of the day Pressed
			base.settings.dayPress.call(moment($(this).attr("data-date"), "MM-DD-YYYY"));  //pass the date select in "moment" format		 
		});

		base.settings.afterInitialize.call(this);
	}


  	// SelectDay method - client app can call this method to mimic clicking on a specific date
	this.selectDay = function(dateObj, executeDayPress) {
		var momentDate = moment(dateObj);
		var blockID;
		var diffInWeeks;
		var i;
		var lastDayOfWeek = firstDayOfCalWeek.clone().add(6, "days");

		if ( firstDayOfCalWeek <= momentDate && momentDate <= lastDayOfWeek ) { // date to display is within current week
			blockID = $(".carousel-inner div.active").attr("id");

		} else if (momentDate < firstDayOfCalWeek) {  // Move carousel to the left as date to display is before current week
			blockID = getNonActiveBlockId(); 
			diffInWeeks = Math.floor(firstDayOfCalWeek.diff(momentDate, "days") / 7) + 1;
			for (i=1;i<=diffInWeeks;i++) {
				$('.carousel').carousel("prev");
			}
			console.log("The carousel moved backward, diffInWeeks: " + diffInWeeks);

		} else if ( momentDate > lastDayOfWeek) { // Move carousel to the left as date to display is before current week
			blockID = getNonActiveBlockId(); 
			diffInWeeks = Math.floor(momentDate.diff(lastDayOfWeek, "days") / 7) + 1;
			for (i=1;i<=diffInWeeks;i++) {
				$('.carousel').carousel("next");
			}
			console.log("The carousel moved forward" + ", diffInWeeks:" + diffInWeeks);
		} 

		// Display week of Day to display
 		firstDayOfCalWeek = momentDate.clone().startOf('week');
		displayCalendarWeek(firstDayOfCalWeek, momentDate, blockID, this.settings);		

		// Remove style of previous date and set style or new Day selected
		$(".custom-day").removeClass(this.settings.currentDayClassName); // remove current Date style from all days		
		$("div[data-date='" + momentDate.format("MM-DD-YYYY") + "']").find(".custom-day").addClass(this.settings.currentDayClassName); // Update style of the day Pressed

		if (executeDayPress) {
			this.settings.dayPress.call(momentDate);  //pass the date select in "moment" format		 			
		}
	}
}	

// Scrollable Calendar 
$('.carousel').carousel({
	interval: false  // to stop carrousel to cycle automatically
});

