	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// +++++++++++++++++++++++++++++++++++++++++++ F U N C T I O N S  +++++++++++++++++++++++++++++++++++++++++++++
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	// -------------------------------------------------- //
	// Build and insert calendar HTML into the DOM
	// -------------------------------------------------- //
	
	var buildCalendarDOM = function() {
		var htmlCalendarHeader = "";
		var htmlCalendar = "";		
		var timePeriod = "";
		var hourNumber = "";
		var hour = 0;

		htmlCalendarHeader = '<tbody>' +
								'<tr>' +
									'<th><div>Time</div></th>' +
									'<td id="sun" data-day="0" class="text-center"><div>Sun</div></td>' +
									'<td id="mon" data-day="1" class="text-center"><div>Mon</div></td>' +
									'<td id="tue" data-day="2" class="text-center"><div>Tue</div></td>' +
									'<td id="wed" data-day="3" class="text-center"><div>Wed</div></td>' +
									'<td id="thu" data-day="4" class="text-center"><div>Thu</div></td>' +
									'<td id="fri" data-day="5" class="text-center"><div>Fri</div></td>' +
									'<td id="sat" data-day="6" class="text-center"><div>Sat</div></td>' +
								'</tr>' +
							'</tbody>'

		// remove the calendar header
		$(".hd-week-view-header tbody").remove();

		$(htmlCalendarHeader).appendTo('.hd-week-view-header');

		htmlCalendar = htmlCalendar + "<tbody>";

		// for (h=0;h<=23;h++) {
		//console.log("minHour:" + minHour + ", maxHour:" + maxHour);
		
		for (h=minHour;h<=maxHour;h++) {

			// add odd row

			if (h % 12 === 0) {
				hourNumber = "12";
			} else {
				hourNumber = h % 12;
			}

			if (h < 12) {
				timePeriod = " AM";
			} else {
				timePeriod = " PM";
			}

			hour = h*2;
			htmlCalendar = htmlCalendar + "<tr data-hour=" + hour + ">";
			
			// add th for the column header
			htmlCalendar = htmlCalendar + "<th rowspan='2' class='text-center'><div>" + hourNumber + timePeriod + "</div></th>";

			// add cells for each day
			for (d=0;d<=6;d++) {
				htmlCalendar = htmlCalendar + "<td data-day=" + d + "><div></div></td>";
			}
			htmlCalendar = htmlCalendar + "</tr>";

			// add even row
			hour = h*2 + 1;
			htmlCalendar = htmlCalendar + "<tr data-hour=" + hour + ">";

			for (d=0;d<=6;d++) {
				htmlCalendar = htmlCalendar + "<td data-day=" + d + "><div></div></td>";
			}
			htmlCalendar = htmlCalendar + "</tr>";
		}

		htmlCalendar = htmlCalendar + "</tbody>";


		//remove the calendar body
		$(".hd-week-view tbody").remove();

		// Add calendar html to the DOM
		$(htmlCalendar).appendTo('.hd-week-view');

		// Display coresponding time when "hovering" each slot
		$("td").hover(function() {  
			var datahour = $(this).closest("tr").attr("data-hour");
			var timeStr = getTimeFromSlotNum(datahour);
			$(this).attr("title", timeStr);
		},
		function() {
			$(this).attr("title", "");		
		});

	}


	// -------------------------------------------------- //
	// Build and insert calendar HTML into the DOM
	// -------------------------------------------------- //
	var buildDayCalendarDOM = function(dateObj) {
		var htmlCalendarHeader = "";
		var htmlCalendar = "";
		var timePeriod = "";
		var hourNumber = "";
		var hour = 0;
		var dayID = "";
		var dayLabel = "";

		var weekDay = dateObj.getDay();
		switch (weekDay) {
			case 0: //"Sun"
				dayID = "sun";
				dayLabel = "Sun";
				break;
			case 1: //"Mon"
				dayID = "mon";
				dayLabel = "Mon";
				break;
			case 2: //"Tue"
				dayID = "tue";
				dayLabel = "Tue";
				break;
			case 3: //"Wed"
				dayID = "wed";
				dayLabel = "Wed";
				break;
			case 4: //"Thu"
				dayID = "thu";
				dayLabel = "Thu";
				break;
			case 5: //"Fri"
				dayID = "fri";
				dayLabel = "Fri";
				break;
			case 6: //"Sat"
				dayID = "sat";
				dayLabel = "Sat";
				break;
		}


		htmlCalendarHeader =  '<tbody>' +
								'<tr>' + 
									'<th><div>Time</div></th>' +
									'<td id="' + dayID + '" data-day="' + weekDay + '" class="text-center"><div>' + dayLabel + 
									'</div></td>' +
								'</tr>' +
							'</tbody>'

		// remove the calendar header
		$(".hd-day-view-header tbody").remove();
		$(htmlCalendarHeader).appendTo('.hd-day-view-header');

		htmlCalendar = htmlCalendar + "<tbody>";

		//console.log("minHour:" + minHour + ", maxHour:" + maxHour);
		//for (h=0;h<=23;h++) {
		for (h=minHour;h<=maxHour;h++) {

			// ------------
			// add odd row
			// ------------

			if (h % 12 === 0) {
				hourNumber = "12";
			} else {
				hourNumber = h % 12;
			}

			if (h < 12) {
				timePeriod = " AM";
			} else {
				timePeriod = " PM";
			}

			hour = h*2;
			htmlCalendar = htmlCalendar + "<tr data-hour=" + hour + ">";
			
			// add th for the column header
			htmlCalendar = htmlCalendar + "<th rowspan='2' class='text-center'><div>" + hourNumber + timePeriod + "</div></th>";

			// add cell for that particular day
			htmlCalendar = htmlCalendar + "<td data-day=" + weekDay + "><div></div></td>";
			htmlCalendar = htmlCalendar + "</tr>";

			// ------------
			// add even row
			// ------------

			hour = h*2 + 1;
			htmlCalendar = htmlCalendar + "<tr data-hour=" + hour + ">";

			htmlCalendar = htmlCalendar + "<td data-day=" + weekDay + "><div></div></td>";
			htmlCalendar = htmlCalendar + "</tr>";
		}

		htmlCalendar = htmlCalendar + "</tbody>";

		//remove the calendar body
		$(".hd-day-view tbody").remove();

		// Add calendar html to the DOM
		$(htmlCalendar).appendTo('.hd-day-view');
	}


	// -------------------------------------------------- //
	// Transform date object into string in the following format: YYYY-MM-DD
	// -------------------------------------------------- //
	var convertDateToString = function(dateObj) {
		var dateString = Date.parse(dateObj.toLocaleDateString("en-US")).toString("yyyy-MM-dd");
		return dateString;
	}

	
	// -------------------------------------------------- //
	// getDateFromWeekDayNum function
	// -------------------------------------------------- //
	var getDateFromWeekDayNum = function(weekDayNum) {
		switch (weekDayNum) {
			case 0:
				dateVar = datesArray[0];
				break;
			case 1:
				dateVar = datesArray[1];
				break;
			case 2:
				dateVar = datesArray[2];
				break;
			case 3:
				dateVar = datesArray[3];
				break;
			case 4:
				dateVar = datesArray[4];
				break;
			case 5:
				dateVar = datesArray[5];
				break;
			case 6:
				dateVar = datesArray[6];
				break;	
			default:
				dateVar = "";
				break;	
		}
		return dateVar;
	}


	// -------------------------------------------------- //
	// getTimeFromSlotNum function
	// -------------------------------------------------- //
	var getTimeFromSlotNum = function(slot) {

      var minutes = slot * 30;
      var hours = minutes / 60; 
      var minutes = minutes % 60;
      var time = ""; 
      var ampm = "";
      
      if (hours >= 12) { 
          ampm = 'PM'; 
          hours = hours - 12; 
      } else { 
          ampm = 'AM'; 
      }    
      
      if (hours < 1) { 
          hours = hours + 12; 
      }
      
      if (minutes > 0) {
      	time = ~~hours + ":" + minutes + " " + ampm;
      } else {
      	time = ~~hours + ":00 " + ampm;
      }

      time = time + " (PDT)";
      return time;
	}


	// -------------------------------------------------- //
	// Is slot available function
	// -------------------------------------------------- //
	var getSlotNumFromDateTime = function(dateTimeObj) {
	
/*		var hourIn24format = Number(dateTimeObj.toString("H"));
		var mins = Number(dateTimeObj.toString("m "));
*/
		var dateTimeMomentObj = moment(dateTimeObj);
		//console.log("Inside getSlotNumFromDateTime, dateTimeObj:" + dateTimeObj + ", dateTimeMomentObj:" + dateTimeMomentObj + ";, formatted:" + dateTimeMomentObj.format("dddd, MMMM Do YYYY, h:mm:ss a"));

		var hourIn24format = Number(dateTimeMomentObj.get('hour'));
		var mins = Number(dateTimeMomentObj.get('minute'));

		//console.log("hourIn24format:" + hourIn24format + ", mins:" + mins);

		var slotNumFromDateTime;

		if (mins === 0) {
			slotNumFromDateTime = hourIn24format * 2;
		} else {
			if (mins < 30) { 
				// var slotNumFromDateTime = hourIn24format * 2 + 1;	
				var slotNumFromDateTime = hourIn24format * 2;					
			} else {
				// var slotNumFromDateTime = hourIn24format * 2 + 2;							
				var slotNumFromDateTime = hourIn24format * 2 + 1;							
			} 				
		}


		return slotNumFromDateTime;
	}	


	// -------------------------------------------------- //
	// Is slot available function
	// -------------------------------------------------- //
	var isSlotAvailable = function($slotObject) {
/*
		var slotDateObj = getDateFromWeekDayNum($slotObject.data("day"));

		if (slotDateObj !== undefined && slotDateObj !== "") {

			var compareDate = Date.compare(Date.today().clearTime(), slotDateObj.clearTime());

			if (compareDate === 1) { // slot is in the past 
				return false;
			} else {

				if (compareDate === 0) {  // slot is within today

					// determine if slot selected is before current time
					var slotNum = $slotObject.closest("tr").data("hour");  // slot selected
					var slotNumForCurrentTime = getSlotNumFromDateTime(new Date());

					if (slotNum >= slotNumForCurrentTime) {
						return true;
					} else {
						return false;
					}

				} else if (compareDate === -1) { // slot is in the future
					return true;
				}
			}	

		}
*/
		switch ( slotTypeBasedOnTime($slotObject) ) {
			case "past":
			case "current":
				return false;
				break;
			case "future":
				return true;
				break;		
		};
	}	


	// -------------------------------------------------- //
	// Is slot available function
	// -------------------------------------------------- //
	var slotTypeBasedOnTime = function($slotObject) {

		var slotDateObj = getDateFromWeekDayNum($slotObject.data("day"));

		if (slotDateObj !== undefined && slotDateObj !== "") {

			var compareDate = Date.compare(Date.today().clearTime(), slotDateObj.clearTime());

			if (compareDate === 1) { // slot is in the past 
				return "past";
			} else {

				if (compareDate === 0) {  // slot is within today

					// determine if slot selected is before current time
					var slotNum = Number($slotObject.closest("tr").data("hour"));  // slot selected
					var slotRowSpan = $slotObject.attr("rowspan");
					if (slotRowSpan === undefined || isNaN(slotRowSpan) ) {slotRowSpan = 0;};

					var slotNumForCurrentTime = Number(getSlotNumFromDateTime(moment()));	
					var slotNumberSum = Number(slotNum) + Number(slotRowSpan) - 1;

					//console.log("slotNum:" + slotNum + ", slotRowSpan:" + slotRowSpan + ", slotNumForCurrentTime:" + slotNumForCurrentTime + ", slotNumberSum:" + slotNumberSum);

					if (slotNum > slotNumForCurrentTime) {
						return "future";
					} else if ( (slotNum < slotNumForCurrentTime) && (Number(slotNum) + Number(slotRowSpan) - 1 < slotNumForCurrentTime) ) {
						return "past";
					} else {
						return "current";
					};

				} else if (compareDate === -1) { // slot is in the future
					return "future";
				}
			}	
		}		
	}



	// -------------------------------------------------- //
	// Is user part of meeting function
	// -------------------------------------------------- //
	var isUserPartOfMeeting = function($slotObject) {

		var attendeesUserIdsString = $slotObject.attr("data-userids");	

		if (typeof attendeesUserIdsString !== "undefined") {
			var userArray = attendeesUserIdsString.split(",");				
			var userArrayLength = userArray.length;
			var found = false;

			for (u=0;u<userArrayLength;u++) {

				if ( loggedinGeneeUserId.toString() === userArray[u].toString() ) {				
					found = true;
					break;
				}
			}

			return found;
		} else {
			return false;	
		}
	}	


	// -------------------------------------------------- //
	// update slot background
	// -------------------------------------------------- //
	var updateSlotStyle = function($slotObject, slotCount, action) {

		var slotWeekDay = $slotObject.attr("data-day");
		var slotNum = $slotObject.closest("tr").attr("data-hour");
		var i;
		var nextSlot = Number(slotNum) + 1;

		switch (action) {
			case "book":
			case "display":

				// Remove the rest of slots that are part of the same meeting
				if (slotCount > 1) {

					// Loop through the rest of slots and remove them
					for (i=1;i<=slotCount - 1;i++) {
						$otherSlotObj = $("tr[data-hour='" + nextSlot  + "']").find("td[data-day='" + slotWeekDay + "']");

						// remove the parent "tr" if no "td" element is present under that tr. This is usually needed for the "one-day" view for mobile.
						if ($otherSlotObj.closest("tr").children().length === 0 ) {
							$otherSlotObj.closest("tr").remove();
						}
						$otherSlotObj.remove();
						nextSlot++;			
					}
				}			

				// change slot rowspan to expand the slot to as many slots needed
				$slotObject.attr("rowspan", slotCount);
				break;
			case "delete":

				// Insert the rest of slots that were part of the same meeting
				if (slotCount > 1) {

					// change slot rowspan to 1
					$slotObject.attr("rowspan", 1).removeAttr("data-meetingid").removeAttr("data-attendees");
					var prevSlotDay = Number(slotWeekDay) - 1;

					// Loop through the rest of slots and add them
					for (i=1;i<=slotCount - 1;i++) {
						$prevSlotObj = $("tr[data-hour='" + nextSlot  + "']").find("td[data-day='" + prevSlotDay + "']");
						if ($prevSlotObj.length >= 1) {
							// add this empty slot right after the corresponding previous slot 
							$prevSlotObj.after('<td data-day="' + slotWeekDay + '" class="displayEmptySlot" rowspan="1"><div></div></td>');
						} else {
							// add this empty slot to the corresponding "tr"
							$("tr[data-hour='" + nextSlot  + "']").append('<td data-day="' + slotWeekDay + '" class="displayEmptySlot" rowspan="1"><div></div></td>');
						}	
						nextSlot++;			
					}

				}			
				break;
		}	

		// update slot style
		switch (action) {
			case "book":
			case "delete":
			case "display":

/*				if (isSlotAvailable($slotObject)) { // slot is available for booking 
					if ($slotObject.find("div").text() === "" ) { 						
							$slotObject.attr("class", "");	
							$slotObject.addClass("displayEmptySlot");	
					} else {
						if (isUserPartOfMeeting($slotObject)) {								
							$slotObject.attr("class", "");	
							$slotObject.addClass("displayBookedSlot");
						} else {
							$slotObject.attr("class", "");	
							$slotObject.addClass("displayBookedOtherOwnerSlot");	
						}
					}
				} else {
					// slot is disabled - slot selected is in the past
					$slotObject.attr("class", "");	
					$slotObject.addClass("displayDisabledSlot");							
				}						
				break;
*/
				var slotType = slotTypeBasedOnTime($slotObject);
				if ( slotType === "future") { // slot is available for booking 	
					if ($slotObject.find("div").text() === "" ) { 						
							$slotObject.attr("class", "");	
							$slotObject.addClass("displayEmptySlot");	
					} else {
						if (isUserPartOfMeeting($slotObject)) {								
							$slotObject.attr("class", "");	
							$slotObject.addClass("displayBookedSlot");
						} else {
							$slotObject.attr("class", "");	
							$slotObject.addClass("displayBookedOtherOwnerSlot");	
						}
					}
				} else if (slotType === "past") { // slot is disabled - slot selected is in the past
					
					$slotObject.attr("class", "");	
					$slotObject.addClass("displayDisabledSlot");

				} else if (slotType === "current") { // current slot so highlight it

					if (userEmail === conferenceRoomEmail) {  // if login user is meet@hackerdojo.com (console view)

						// console.log("current slot:" + $slotObject.find("div").text());

						$slotObject.attr("class", "");	
						$slotObject.addClass("displayCurrentSlot");

						// Highlight the corresponding time under the "time" column
						var now = new moment();
						var slotNum = getSlotNumFromDateTime(now);

						var trElem = $("tr[data-hour='" + slotNum + "']");
						var thElem = trElem.find("th");
						if (thElem.length !== 0) {
							thElem.find("div").css("color","#40AB49").css("font-weight","bold");
						} else {
							trElem.prev().find("th div").css("color","#40AB49").css("font-weight","bold");
						}

					} else {
						$slotObject.attr("class", "");	
						$slotObject.addClass("displayDisabledSlot");						
					}								
				}						
				break;

		}					
	}


	// -------------------------------------------------- //
	// get first Day Of Week
	// -------------------------------------------------- //
	var getFirstDayOfWeek = function($dateObj) {

		var weekDay = $dateObj.getDay();
		var firstDayOfWeek = $dateObj.clone();
		switch (weekDay) {
			case 0: //"Sun"
				// the date is Sunday, so return same date as firstDayOfWeek
				break;
			case 1: //"Mon"
				firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 1);
				break;
			case 2: //"Tue"
				firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 2);
				break;
			case 3: //"Wed"
				firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 3);
				break;
			case 4: //"Thu"
				firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 4);
				break;
			case 5: //"Fri"
				firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 5);
				break;
			case 6: //"Sat"
				firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 6);
				break;
		}
		return firstDayOfWeek;
	}

	// -------------------------------------------------- //
	// return Date in following format: ddd M/D. Example: " Sun 6/30 "
	// -------------------------------------------------- //
	var getDateColumnTitle = function($dateObj) {
		var DateVar = Date.parse($dateObj.toLocaleDateString("en-US"));
		var dateColumnTittle = DateVar.toString("ddd") + " " + DateVar.toString("M") + "/" + DateVar.toString("d ") ; 
		return dateColumnTittle;
	}


	// -------------------------------------------------- //
	// return Date in following format: dddd. MMM dd, yyyy Example: " Thursday Oct 16, 2014"
	// -------------------------------------------------- //
	var getDateString = function($dateObj) {
		var DateVar = Date.parse($dateObj.toLocaleDateString("en-US"));
		var dateColumnTittle = DateVar.toString("dddd") + ", " + DateVar.toString("MMM") + " " + DateVar.toString("d ") + ", " +  DateVar.toString("yyyy"); 
		return dateColumnTittle;
	}

	// -------------------------------------------------- //
	// calculate each date of the week and put them in an array
	// -------------------------------------------------- //
	var getWeekDaysArray = function(firstDayOfWeek) {

		 var datesArray = [];

	 	var newDate = firstDayOfWeek.clone();

	 	// populate each day of the week in datesArray
	 	for (i=0;i<=6;i++) {
			datesArray[i] = newDate.clone();
			newDate.setDate(newDate.getDate() + 1);
	 	}
		return datesArray;
	}


	// -------------------------------------------------- //
	// put date to be displayed in an array
	// -------------------------------------------------- //
	var getDayArray = function(dateObj) {

		var datesArray = [];

		if (dateObj !== null) {
			datesArray[0] = dateObj;
			datesArray[1] = dateObj;
			datesArray[2] = dateObj;
			datesArray[3] = dateObj;
			datesArray[4] = dateObj;
			datesArray[5] = dateObj;
			datesArray[6] = dateObj;
		}

		return datesArray;
	}


	// -------------------------------------------------- //
	// update Date, month and year displayed between the prev and next buttons and also the dates in each column of the calendar
	// -------------------------------------------------- //
	var updateDatesOnWeekCalendar = function(firstDayOfWeek, datesArray) {  //firstDayOfWeek is a Date object

		// update days inside calendar column headers
		var idValue = "";
		
		var arrayLength = datesArray.length;
		var weekday;
		for (i=0;i<=arrayLength - 1;i++) {
			if (typeof (datesArray[i]) === "undefined") 
			continue;	
			weekday = datesArray[i].getDay();
			switch (weekday) {
				case 0:
					idValue = "sun";
					break;
				case 1:
					idValue = "mon";
					break;
				case 2:
					idValue = "tue";
					break;
				case 3:
					idValue = "wed";
					break;
				case 4:
					idValue = "thu";
					break;
				case 5:
					idValue = "fri";
					break;
				case 6:
					idValue = "sat";
					break;
			}
			$(".hd-week-view-header" + " " + "#" + idValue).text(getDateColumnTitle(datesArray[i]));				
		}

		// Display Week or Day on the week/day navigation section
		var currentWeekString = "";

		var firstDateOfWeek_day = Date.parse(firstDayOfWeek.toLocaleDateString("en-US")).toString("d ");  //Giovanna - added space in "d" format
		var firstDateOfWeek_month = Date.parse(firstDayOfWeek.toLocaleDateString("en-US")).toString("MMM");
		var firstDateOfWeek_year = Date.parse(firstDayOfWeek.toLocaleDateString("en-US")).toString("yyyy");

		var lastDateOfWeek = firstDayOfWeek.clone();
		lastDateOfWeek.setDate(firstDayOfWeek.getDate() + 6);

		var lastDateOfWeek_day = Date.parse(lastDateOfWeek.toLocaleDateString("en-US")).toString("d "); //Giovanna - added space in "d" format
		var lastDateOfWeek_month = Date.parse(lastDateOfWeek.toLocaleDateString("en-US")).toString("MMM");
		var lastDateOfWeek_year = Date.parse(lastDateOfWeek.toLocaleDateString("en-US")).toString("yyyy");

		// update the date, month and year between prev and next buttons
		if (firstDateOfWeek_month === lastDateOfWeek_month) {
			currentWeekString = firstDateOfWeek_month + " " + firstDateOfWeek_day + " - " + lastDateOfWeek_day + ", " + firstDateOfWeek_year;			
		} else if (firstDateOfWeek_year === lastDateOfWeek_year) {
			currentWeekString = firstDateOfWeek_month + " " + firstDateOfWeek_day + " - " + lastDateOfWeek_month + " " + lastDateOfWeek_day + ", " + firstDateOfWeek_year;			
		} else {
			currentWeekString = firstDateOfWeek_month + " " + firstDateOfWeek_day + ", " +  firstDateOfWeek_year + " - " + lastDateOfWeek_month + " " + lastDateOfWeek_day + ", " + lastDateOfWeek_year;						
		}
		$(".hd-display-week").text(currentWeekString);

	}

	// -------------------------------------------------- //
	// update Date, month and year displayed between the prev and next buttons and also the dates in each column of the calendar
	// -------------------------------------------------- //
	var updateDatesOnDayCalendar = function(dateToDisplay, datesArray) {  

		// update days inside calendar column headers
		var idValue = "";		
		var weekday;
		if (datesArray[0] !== null) {
			weekday = datesArray[0].getDay();
			switch (weekday) {
				case 0:
					idValue = "sun";
					break;
				case 1:
					idValue = "mon";
					break;
				case 2:
					idValue = "tue";
					break;
				case 3:
					idValue = "wed";
					break;
				case 4:
					idValue = "thu";
					break;
				case 5:
					idValue = "fri";
					break;
				case 6:
					idValue = "sat";
					break;
			}
			$(".hd-day-view-header" + " " + "#" + idValue).text(getDateColumnTitle(datesArray[0]));				
		}

		// Display Week or Day on the week/day navigation section
		var currentDayString = "";

		var day = Date.parse(dateToDisplay.toLocaleDateString("en-US")).toString("d ");  //Giovanna - added space in "d" format
		var month = Date.parse(dateToDisplay.toLocaleDateString("en-US")).toString("MMM");
		var year = Date.parse(dateToDisplay.toLocaleDateString("en-US")).toString("yyyy");

		currentDayString = month + " " + day + ", " + year;
		$(".hd-display-day").text(currentDayString);

	}


	// -------------------------------------------------- //
	// Update both, Week dates and content
	// -------------------------------------------------- //
	var updateWeekCalendar = function(firstDayOfWeek, datesArray) {

		// Rebuild calendar
		buildCalendarDOM();

		// Format style of slots		
		//$("table.hd-schedule td").text("").each( function() {
		// $("table.hd-schedule td").each( function() {
		$(".hd-table-body-wrapper table td").each( function() {
			updateSlotStyle($(this), 1, "display");
		}); 

		updateDatesOnWeekCalendar(firstDayOfWeek, datesArray);	

		//fillOutSlotFromDB(datesArray, room);  //replaced old getSchedule with Genee API below
		fillOutSlotFromGenee(datesArray);		

	}


	// -------------------------------------------------- //
	// Update both, Week dates and content
	// -------------------------------------------------- //
	var updateDayCalendar = function(dateToDisplay, datesArray) {

		// Rebuild calendar
		buildDayCalendarDOM(dateToDisplay);

		// Format style of slots		
		//$("table.hd-schedule td").text("").each( function() {
		//$("table.hd-schedule td").each( function() {
		$(".hd-table-body-wrapper-day table td").each( function() {
			updateSlotStyle($(this), 1, "display");
		}); 

		updateDatesOnDayCalendar(dateToDisplay, datesArray);	

		//fillOutSlotFromDB(datesArray, room);  //replaced old getSChedule with Genee API below
		fillOutSlotFromGenee(datesArray);		
	}



	// -------------------------------------------------- //
	// validateEmail function
	// -------------------------------------------------- //
	function validateEmail(email) {

	    var regex=/(\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b)/i;	    

	    //console.log("Inside validateEmail... email:" + email + ", regex.test(email):" + regex.test(email));

	    if ( regex.test(email) ) {
	    	return true;
	    } else {
	    	return false;
	    }
	}

	// -------------------------------------------------- //
	// validateMultipleEmails function
	// -------------------------------------------------- //
	function validateMultipleEmails(emailArray) {

	    //console.log("Inside validateMultipleEmails... emailArray:" + emailArray);
	    var flag = true;

	    for (i = 0;i < emailArray.length;i++) {
		    if(!validateEmail(emailArray[i])) { 
	    		flag = false;
	            return false;    		
			} 
		}	
		return flag;
	
	}


	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// ++++++++++++++++++++++++++++++++++++++++ P O P U P   W I N D O W S +++++++++++++++++++++++++++++++++++++++++
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  // -------------------------------------------------- //
  // Light Box
  // -------------------------------------------------- //
  function errorMessage(message){
    popupMessage(message);
  }


  // -------------------------------------------------- //
  // Light Box
  // -------------------------------------------------- //
  function popupMessage(message){
    $('<div class="lightboxError container">' +
        '<div class="lightboxOverlay"></div>' +
        '<div class="lightboxError">' +
            '<p class="hd-popup-message"></p>' +
            '<div class="row custom-elem-row">' + 
	          '<button onclick="$(this).parents(\'.lightboxError\').remove();return false;" class="okButton btn btn-default hidden-md hidden-lg">Close</button>' +  //smaller button displayed for phones only
	          '<button onclick="$(this).parents(\'.lightboxError\').remove();return false;" class="okButton btn btn-default btn-lg hidden-xs hidden-sm">Close</button>' + // large button displayed for ipad & desktops
	        '</div>' +  
        '</div>' +
      '</div>'
    ).appendTo('body');
    $(".lightboxError p").text(message);
  }


  // -------------------------------------------------- //
  // Booking popup window
  // -------------------------------------------------- //
  function displayPopup($slotObj, datesArray, room, userEmail){

 	// get weekday and slotnumber from the selected slot
	var dayNum = $slotObj.data("day");
	var slotNum = $slotObj.closest("tr").data("hour");
	var slotCountBetweeMeetings = 0;
	var displayPopUp = true;

  	// Check that the same user didn't book previous slot
  	for (n=1; n<=8; n++) {

  		var slotNumToCheck = Number(slotNum) - n;
		var $slotObjToCheck = $("tr[data-hour='" + slotNumToCheck + "']").find("td[data-day='" + dayNum + "']");

		if ($slotObjToCheck.length > 0) {

			if (!$slotObjToCheck.hasClass("displayEmptySlot")) { //if slot is NOT empty

				if (isUserPartOfMeeting($slotObjToCheck) === true) {								

					// Check when previous meeting ends, there should be at least 2 hours gap btw prev and this mtg
					if (n <=4) {
						displayPopUp = false; // 4 or less slots are not enough to leave as a gap 
						errorMessage(two_hour_gap_error_msg);
						break;												
					} else {
						slotCountBetweeMeetings = n - Number($slotObjToCheck.attr("rowspan"));

						if (slotCountBetweeMeetings >= 4) {
							displayPopUp = true;  // more than 4 slots were left as a gap
							break;							
						} else{
							displayPopUp = false; // 4 or less slots are not enough to leave as a gap 
							errorMessage(two_hour_gap_error_msg);
							break;																		
						}
					}
				} else {
					displayPopUp = true;
					break;							
				}
			}		
		}
	}

	if (displayPopUp) {

	  	// Logic to determine how many hours the user can book at this time
	 
		// Check up to 7 slots down to determine how long the user can book the room
		var lastSlotToCheck = slotNum + 7;
		var availableSlotsCount = 0;
		var options = "";
		var dropdownHTML = "";
		var isUserPartOfNextMeeting;


		var dropdownHTML_upTo30mins = '<select class="selectpicker input-lg">' +
						    			'<option value="0.5">1/2 hour</option>' +
					    			'</select>';

		var dropdownHTML_upTo60mins = '<select class="selectpicker input-lg">' +
						    			'<option value="0.5">1/2 hour</option>' +
						    			'<option value="1" selected>1 hour</option>' +
					    			'</select>';

		var dropdownHTML_upTo90mins = '<select class="selectpicker input-lg">' +
						    			'<option value="0.5">1/2 hour</option>' +
						    			'<option value="1" selected>1 hour</option>' +
						    			'<option value="1.5">1 1/2 hours</option>' +
					    			'</select>';

		var dropdownHTML_upTo120mins = '<select class="selectpicker input-lg">' +
						    			'<option value="0.5">1/2 hour</option>' +
						    			'<option value="1" selected>1 hour</option>' +
						    			'<option value="1.5">1 1/2 hours</option>' +
						    			'<option value="2">2 hours</option>' +    	
					    			'</select>';


		// Loop up to 7 slots down to determine how may slots the user will be able to book (user will be able to book up to 4 slots + 4 slots gap between this and next meeting)		    
		for (s=slotNum+1; s<=lastSlotToCheck; s++) {
			$slotObjToCheck = $("tr[data-hour='" + s + "']").find("td[data-day='" + dayNum + "']");
			//if ($slotObjToCheck.text() === "" ) { 	
			if ($slotObjToCheck.find("div").text() === "" ) { 	
				availableSlotsCount++;
			} else {
				isUserPartOfNextMeeting = isUserPartOfMeeting($slotObjToCheck);
				break;
			}	
		}

		if (availableSlotsCount < 4 ) { 
			if (isUserPartOfNextMeeting) {
				errorMessage(two_hour_gap_error_msg);
				displayPopUp = false;
			} else { // user is not part of the next meeting so he/she can book as many slots as available	
				switch(availableSlotsCount) {
					case 0: // User can only book 1 slot (1/2 hr) 
						dropdownHTML = 	dropdownHTML_upTo30mins;				
						break;	
					case 1: // User can only book up to 2 slots (1 hr) 
						dropdownHTML = 	dropdownHTML_upTo60mins;
						break;	
					case 2: // User can only book 3 slots (1.5 hrs) 
						dropdownHTML = 	dropdownHTML_upTo90mins;
						break;	
					case 3: // user can book up to 2 hrs without restriction
						dropdownHTML = 	dropdownHTML_upTo120mins;
						break;
				}
			}

		} else {
			if (availableSlotsCount === 4 ) { // User can only book 1/2 hr
				if (isUserPartOfNextMeeting) {	// User can only book 1 slot (1/2 hr) to leave 4 slots (2hrs) gap 
					dropdownHTML = 	dropdownHTML_upTo30mins;
				} else { // user is not part of next meeting so he/she can book up to 2 hrs without restriction
					dropdownHTML = 	dropdownHTML_upTo120mins;
				}	    			

		  	} else if (availableSlotsCount === 5) { 
				if (isUserPartOfNextMeeting) {	// User can only book up to 2 slots (1 hr) to leave 4 slots (2hrs) gap 
					dropdownHTML = 	dropdownHTML_upTo60mins;

				} else { // user is not part of next meeting so he/she can book up to 2 hrs without restriction
					dropdownHTML = 	dropdownHTML_upTo120mins;
				}	

			} else if (availableSlotsCount === 6) { 	
				if (isUserPartOfNextMeeting) {	// User can only book 3 slots (1.5 hrs) to leave 4 slots (2hrs) gap 
					dropdownHTML = 	dropdownHTML_upTo90mins;

				} else { // user is not part of next meeting so he/she can book up to 2 hrs without restriction	
					dropdownHTML = 	dropdownHTML_upTo120mins;
				}    			

			} else if (availableSlotsCount >= 7) { // User can book up to 2 hrs
				dropdownHTML = 	dropdownHTML_upTo120mins;
			}
		}	

		if (displayPopUp) {

			var userNamePromptHTML = "";
			var attendeesPromptHTML = "";

			if (userEmail === conferenceRoomEmail) {  // if login user is meet@hackerdojo.com

				// request user to enter his/her email address
				userNamePromptHTML = '<div class="row custom-elem-row">' + 
			    						'<p class="hd-popup-text">Please enter your HackerDojo email id: </p>' +
										'<input type="text" name="emailAddress" class="form-control hd-email-input col-sm-6" id="hd-emailAddress">' + 
										'<span class="form-control-static col-sm-6">@hackerdojo.com</span>' +
										'<p class="hd-errorMessageEmail hd-error-text col-sm-12 hd-hide"></p>' + 
									'</div>';


			} else {

				// request user to enter attendees email address
				attendeesPromptHTML = '<div class="row custom-elem-row">' + 
			    						'<p class="hd-popup-text">Invite others to the meeting (email addresses separated by commas): </p>' +
										'<input type="text" name="attendeesEmailAddress" class="form-control hd-attendees-email-input col-sm-6" id="hd-attendeesEmail">' + 
										'<p class="hd-errorMessageEmailList hd-error-text col-sm-12 hd-hide"></p>' + 
									'</div>';

			}		    				

			// Create complete HTML content for the popup window
		    $('<div class="lightboxPopup container">' +
		        '<div class="lightboxOverlayPopup"></div>' +
		        '<div class="lightboxPopup">' +
					'<div class="row custom-elem-row">' + 

/*			    		'<p class="hd-popup-text">' + 'Time selected: ' + getDateColumnTitle(getDateFromWeekDayNum(dayNum)) + " - " + getTimeFromSlotNum(slotNum) +
			        	'</p>' + 
*/
			    		'<p class="hd-popup-text">' + 'Time selected: ' + 
			        	'</p>' + 
			        	'<p class="hd-popup-text">' + getDateString(getDateFromWeekDayNum(dayNum)) + " - " + getTimeFromSlotNum(slotNum) +
			        	'</p>' + 

			        '</div>' +	 

		        	userNamePromptHTML +
		        	
		        	'<div class="row custom-elem-row">' +
		    			'<p>How long do you need the room for? </p>' +
					    dropdownHTML +
				    '</div>' +

				    attendeesPromptHTML + 

		        	'<div class="row custom-elem-row hd-buttons-section hidden-xs hidden-sm">' + // ipad & desktop
		        		'<div class="col-md-3 col-md-offset-3">' + 
		          			'<button class="cancelButton btn btn-default btn-lg" onclick="$(this).parents(\'.lightboxPopup\').remove();return false;">Cancel</button>' + 
		          		'</div>' +	
		        		'<div class="col-md-3">' + 
		          			'<button class="hd-add-ok-btn okButton btn btn-default btn-lg">Ok</button>' +          	
						'</div>' +          		
		          	'</div>' +		    
		        	'<div class="row custom-elem-row hd-buttons-section hidden-md hidden-lg">' + // phones
		        		'<div class="col-xs-3 col-xs-offset-2">' + 
		          			'<button class="cancelButton btn btn-default" onclick="$(this).parents(\'.lightboxPopup\').remove();return false;">Cancel</button>' + 
		          		'</div>' +	
		        		'<div class="col-xs-3 col-xs-offset-1">' + 
		          			'<button class="hd-add-ok-btn okButton btn btn-default">Ok</button>' +          	
						'</div>' +          		
		          	'</div>' +		    
				'</div>' +
			'</div>'	   
		    ).appendTo('body');
		    $(".selectpicker").selectpicker();


		    $(".lightboxPopup").on('click','.hd-add-ok-btn', function() {

		    	// create an array with slots corresponding to the duration selected by the user
				// var slotObjArray = [];
				var slotCount = 0;

				// obtain selected value
				switch ($(".selectpicker").val()) {
					case "0.5":
						slotCount = 1;					
						break;
					case "1":
						slotCount = 2;					
						break;
					case "1.5":
						slotCount = 3;					
						break;
					case "2":
						slotCount = 4;					
						break;
				}

				if (userEmail === conferenceRoomEmail) { // the login user is "meet@hackerdojo.com" 

					// Validate that the user entered his/her email address
		 			var userEmailInput = $("#hd-emailAddress").val();
		 			var attendeesEmail = " ";

		 			if (userEmailInput === "") {
		 				$(".hd-errorMessageEmail").text("* This is a required field").removeClass("hd-hide");
		 			}

		 			else { 

		 				// Hide any error message that could have been displayed previously
		 				$(".hd-errorMessageEmail").text("").addClass("hd-hide");
		 				userEmailInput = userEmailInput + "@hackerdojo.com";

						response = updateSlot($slotObj, slotCount, room, userEmailInput, " ", "geneeCommand");
						
						// close poup window
				    	$(".lightboxPopup").remove();
		 			}	

		 		} else { 


	 				// Capture attendees email addresses
	 				attendeesEmail = $("#hd-attendeesEmail").val();

	 				//console.log("Inside displayPopup... attendeesEmail:" + attendeesEmail);

	 				if ($.trim(attendeesEmail) === "") {

			 			// Call "addGenee API to create room reservation in Genee"	
						response = updateSlot($slotObj, slotCount, room, userEmail, " ", "add");
							
						// close poup window
				    	$(".lightboxPopup").remove();

	 				} else {

						//var emailArray = attendeesEmail.split(/\s|[,;]/);
						var emailArray = attendeesEmail.split(/[,;]\s*|\s+/);
						//console.log("emailArray:" + emailArray);

						var response = validateMultipleEmails(emailArray);
						//console.log("response:" + response);

						if (response === false) {

							// display error message below the email input text
	 						$(".hd-errorMessageEmailList").text("* Invalid email address").removeClass("hd-hide");

						} else {

			 				// Hide any error message that could have been displayed previously
			 				$(".hd-errorMessageEmailList").text("").addClass("hd-hide");

							// Convert the array of emails into string joined by "," only.
							attendeesEmail = emailArray.join(", ");

							// call a different API to create reservation through Genee functionality
							response = updateSlot($slotObj, slotCount, room, userEmail, attendeesEmail, "add");

							// close poup window
					    	$(".lightboxPopup").remove();

						}							

					}

			    }	
		    });
			  
		}

	}
  }


  	// -------------------------------------------------- //
  	// Display delete confirmation popup window
  	// -------------------------------------------------- //
  	function displayDeleteConfirmation($slotObj, numberOfSlots, room, userEmail) {

	    $('<div class="lightboxPopup container">' +
	        '<div class="lightboxOverlayPopup"></div>' +
	        '<div class="lightboxPopup">' +
	        	'<div class="row custom-elem-row">' +
	    			'<p>Are you sure you want to delete this reservation?</p>' +
			    '</div>' +
	        	'<div class="row custom-elem-row  hidden-xs hidden-sm">' +
	        		'<div class="col-md-3 col-md-offset-3">' + 
	          			'<button class="cancelButton btn btn-default btn-lg" onclick="$(this).parents(\'.lightboxPopup\').remove();return false;">Cancel</button>' + 
	          		'</div>' +	
	        		'<div class="col-md-3">' + 
	          			'<button class="hd-delete-btn okButton btn btn-default btn-lg">Delete</button>' +          	
					'</div>' +          		
	          	'</div>' +		    
	        	'<div class="row custom-elem-row  hidden-md hidden-lg">' +  //phones
	        		'<div class="col-xs-3 col-xs-offset-2">' + 
	          			'<button class="cancelButton btn btn-default" onclick="$(this).parents(\'.lightboxPopup\').remove();return false;">Cancel</button>' + 
	          		'</div>' +	
	        		'<div class="col-xs-3 col-xs-offset-1">' + 
	          			'<button class="hd-delete-btn okButton btn btn-default">Delete</button>' +          	
					'</div>' +          		
	          	'</div>' +		    
			'</div>' +
		'</div>'	   
	    ).appendTo('body');

	    $(".lightboxPopup").on('click','.hd-delete-btn', function() {

			response = updateSlot($slotObj, numberOfSlots, room, userEmail, " ", "delete");
	    	$(".lightboxPopup").remove();
	    });
  	}


  	// -------------------------------------------------- //
  	// Display booking confirmation popup window
  	// -------------------------------------------------- //
  	function displayBookingConfirmation($slotObj, meetingId, attendeeId, isUserActive) {
	
		var dayNum = $slotObj.data("day");
		var slotNum = $slotObj.closest("tr").data("hour");
		var partialHtml = "";

		if (isUserActive) {

			partialHtml = '<div class="row custom-elem-row">' +
		    			'<p class="hd-popup-text">This meeting has been put on your calendar automatically by Genee.</p>' +
				    '</div>' +

		        	'<div class="row custom-elem-row  hidden-xs hidden-sm">' +
		        		'<div class="col-md-3 col-md-offset-4">' + 
		          			'<button class="okButton btn btn-default btn-lg" onclick="$(this).parents(\'.lightboxPopup\').remove();return false;">Close</button>' + 
		          		'</div>' +	
		          	'</div>' +		    
		        	'<div class="row custom-elem-row  hidden-md hidden-lg">' +  //phones
		        		'<div class="col-xs-3 col-xs-offset-3">' + 
		          			'<button class="okButton btn btn-default" onclick="$(this).parents(\'.lightboxPopup\').remove();return false;">Close</button>' + 
		          		'</div>' +	
		          	'</div>';

		} else {

			partialHtml = '<div class="row custom-elem-row">' +
		    			'<p class="hd-popup-text">Add it to your calendar automatically by signing up or import the calendar file.</p>' +
				    '</div>' +

		        	'<div class="row custom-elem-row  hidden-xs hidden-sm">' +
		        		'<div class="col-md-3 col-md-offset-2">' + 
		          			'<button class="cancelButton btn btn-default btn-lg" onclick="$(this).parents(\'.lightboxPopup\').remove();return false;">Close</button>' + 
		          		'</div>' +	
		        		'<div class="col-md-3">' + 
		          			'<button class="hd-add-to-calendar-btn okButton btn btn-default btn-lg">Add to Calendar</button>' +          	
						'</div>' +          		
		          	'</div>' +		    
		        	'<div class="row custom-elem-row  hidden-md hidden-lg">' +  //phones
		        		'<div class="col-xs-3 col-xs-offset-2">' + 
		          			'<button class="cancelButton btn btn-default" onclick="$(this).parents(\'.lightboxPopup\').remove();return false;">Close</button>' + 
		          		'</div>' +	
		        		'<div class="col-xs-3 col-xs-offset-1">' + 
		          			'<button class="hd-add-to-calendar-btn okButton btn btn-default">Add to Calendar</button>' +          	
						'</div>' +          		
		          	'</div>';	

		}

		    $('<div class="lightboxPopup container">' +
		        '<div class="lightboxOverlayPopup"></div>' +
		        '<div class="lightboxPopup">' +
		        	'<div class="row custom-elem-row">' +
		    			'<p class="hd-popup-text">The meeting is now booked for:</p>' +
			        	'<p class="hd-popup-text">' + getDateString(getDateFromWeekDayNum(dayNum)) + " - " + getTimeFromSlotNum(slotNum) + '</p>' + 
				    '</div>' +
					partialHtml +	

				'</div>' +
			'</div>'	   
		    ).appendTo('body');

		    $(".lightboxPopup").on("click",".hd-add-to-calendar-btn", function() {

			    var url ="";
			    	
				switch (environment_constant) {
					case "DEV":
				    	url = "http://genee.me/ugather-py/external?next=/ugather-py/web/meetings/" + meetingId + "/a/" + attendeeId + "/confirm%3Fdo%3Dregistered";
						break;
					case "PROD":
			    		url = "http://genee.me/production-py/external?next=/production-py/web/meetings/" + meetingId + "/a/" + attendeeId + "/confirm%3Fdo%3Dregistered";
						break;						
					default:
				    	url = "http://genee.me/ugather-py/external?next=/ugather-py/web/meetings/" + meetingId + "/a/" + attendeeId + "/confirm%3Fdo%3Dregistered";				
				}

			    	console.log("environment_constant:" + environment_constant + "url:" + url);
			    	window.open(url,'_blank');

			    	$(this).parents(".lightboxPopup").remove();
		    });	
	}



	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// +++++++++++++++++++++++++++++++++++++++++ A J A X   C A L L S  +++++++++++++++++++++++++++++++++++++++++++++
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	// -------------------------------------------------- //
	// fill slot with corresponding user name (Ajax call)
	// -------------------------------------------------- //
	var fillOutSlotFromGenee = function(datesArray) {

		// make AJAX call
		var dateParam = " ";
		var respLength = 0;
		var slotOwner = " ";
		var meetingDuration = " ";
		var slotArrayLength = 0;
		var start_date_param = convertDateToString(datesArray[0]);
		var end_date = datesArray[datesArray.length-1].clone();
		end_date.setDate(end_date.getDate() + 1);

		var end_date_param = convertDateToString(end_date);

		$.ajax({
			//url: 'http://aws.ugather.us/ugatherstaging-py/api/v1/roomschedule/14',
	        url: '/api/v1/roomschedule',	
            type: 'POST',
            crossDomain: true,
            headers: {'Access-Control-Allow-Origin':'*'},
			data: {start_date: start_date_param, end_date: end_date_param},
			dataType: 'json',
			success: function(resp) {

				respLength = resp.length;
				for (i=0;i<respLength;i++) {

					// Determine the first slot
					var meetingDateTime = Date.parse(resp[i].meetingtime);
					var meetingTime = moment(resp[i].meetingtime);
					//var meetingTime = moment(meetingDateTime);  // 07/13/15 - temporary fix not needed anymore. Roomschedule is now returning the correct timezone

					if (meetingDateTime !== null) {
						// var slotNum = getSlotNumFromDateTime(meetingDateTime);
						var slotNum = getSlotNumFromDateTime(meetingTime);

						var weekDay = meetingDateTime.getDay();
						var weekDayDate = getDateFromWeekDayNum(weekDay);
						var slotObjArray = [];
						var meetingId = resp[i].meetingid;
						var slotOwner = "";
						var slotCount = 0;
						var attendees = "";
						var attendeesUserIds = "";

						//console.log("resp[i].meetingtime:" + resp[i].meetingtime + ", meetingDateTime:" + meetingDateTime + ", meetingTime formatted:" + meetingTime.format("dddd, MMMM Do YYYY, h:mm:ss a"));	

						var compareDate = Date.compare(weekDayDate.clearTime(), meetingDateTime.clearTime());

						if (compareDate === 0  ) {

/*							if (slotNum === 28 || slotNum === 29) {
								console.log("Inside fillOutSlotFromGenee ajax call.... meetingId:" + meetingId + ", slotNum:" + slotNum + ", meetingDateTime:" + meetingDateTime + ", resp[i].meetingtime:" + resp[i].meetingtime + ", meetingTime:" + meetingTime);
							}	
*/
							// Locate the first slot
							var $slotObj = $("tr[data-hour='" + slotNum + "']").find("td[data-day='" + weekDay + "']");

							if ($slotObj !== null) {

								// Store meeting id
								$slotObj.attr("data-meetingid", meetingId);
								slotCount = 1;

								// Determine rest of slots booked based on meeting duration
								meetingDuration = resp[i].meetingduration - 30;  // Removing 30 mins corresponding to first slot that was taken care above

								while (meetingDuration > 0) {
									slotNum++;
									slotCount++;
									meetingDuration = meetingDuration - 30;
								}

								// Get array of attendees, concatenate them
								var inviteesArray = resp[i].invitees;
								var inviteesArrayLength = inviteesArray.length;

								if (inviteesArrayLength === 0) {

									slotOwner = resp[i].meetingtitle;

								} else {

									for (j=0;j<inviteesArrayLength;j++) {
										// concatenation of attendees names
										if (slotOwner === "") {
											slotOwner = inviteesArray[j].name;  
										} else {
											slotOwner = slotOwner + ", " + inviteesArray[j].name;  
										}
										// concatenation of attendees emails
										if (attendees === "") {
											attendees = inviteesArray[j].email;  
										} else {
											attendees = attendees + "," + inviteesArray[j].email;  
										}
										// concatenation of attendees ids
										if (attendeesUserIds === "") {
											attendeesUserIds = inviteesArray[j].userid;  
										} else {
											attendeesUserIds = attendeesUserIds + "," + inviteesArray[j].userid;  
										}
									}
								}		
								$slotObj.find("div").text(slotOwner);
								$slotObj.attr("data-attendees", attendees);
								$slotObj.attr("data-userids", attendeesUserIds);

								updateSlotStyle($slotObj, slotCount, "display");

							}
						}
					}	
				}	

			},
			error: function(req, status, err) {
				//alert("Not able to populate slots. Error message: " + err); // Added by Giovanna 7/16
			}
		});
	}
	

	// -------------------------------------------------- //
	// Book slot Ajax call
	// -------------------------------------------------- //
	var updateSlot = function($slotObject, slotCount, roomParam, userEmail, attendeesEmail, action) {

		// set parameters to send in the Ajax call

		//var slotWeekDay = $slotObject.attr("data-day");
		//var slotParam = $slotObject.closest("tr").attr("data-hour");
		var slotWeekDay = $slotObject.data("day");
		var slotParam = $slotObject.closest("tr").data("hour");

		var dateParam = convertDateToString(getDateFromWeekDayNum(slotWeekDay));
		var slotCountParam = slotCount;
		var userNameParam = userName;
		var userEmailParam = userEmail;
		var meetingidParam = $slotObject.attr("data-meetingid");
		var inputData;
		var attendeesListParam = attendeesEmail;
		var CommandInviteesParam;

		//console.log("Inside updateSlot... attendeesEmail:" + attendeesEmail);
		if ($.trim(attendeesEmail) === "") {
			CommandInviteesParam = userEmail;
		} else {
			CommandInviteesParam = userEmail + " , " + attendeesEmail;
		}

			switch (action) {
				case "add":
					// make AJAX call to add slot
					$.ajax({
                        timeout : 10000,
					    url: '/api/v1/addgenee',
					    type: 'POST',
					    data: {slot: slotParam, date: dateParam, slotcount:slotCountParam, userNameParam:userNameParam, userEmailParam:userEmailParam, attendees: attendeesListParam},
						success: function(resp) {
						    var data =  JSON.parse(resp);
							if (data.status) {
								//$slotObject.text(userName);
								$slotObject.find("div").text(userName);
								$slotObject.attr("data-attendees", userEmail);
								$slotObject.attr("data-meetingid", data.meetingid);		
								$slotObject.attr("data-userids", loggedinGeneeUserId);							
								updateSlotStyle($slotObject, slotCount, "book");

								displayBookingConfirmation($slotObject, data.meetingid, data.attendeeid, data.active);

								// track the user who created a meeting with attendees
								if ($.trim(attendeesEmail) !== "") {	
									mixpanel.track("[HD conference room] user created a meeting with invitees from HD conference room", {
							            "server": "Hackerdojo Conference Room",
							            "Genee_user": loggedinGeneeUserId,
							            "HD user": userEmail,
							            "meeting": data.meetingid,
							            "attendees": attendeesEmail
							        });
							        //console.log("after calling mixpanel, Genee user:" + loggedinGeneeUserId + ", HD user:" + userEmail + ", meeting_id:" + data.meetingid + ", attendees:" + attendeesEmail);
								}

								return true;
							} else {
								// display error message
								errorMessage("Not able to book slot");
								return false;
							}
						},
						error: function(req, status, err) {
							errorMessage("Not able to book slot. Error message: " + err);
							return false;
						}

					}); // end of ajax /api/v1/addgenee
					break;

				case "delete":
					// make AJAX call to delete slot
					$.ajax({
						url: '/api/v1/removegenee',
						type: 'POST',
						//data: {slot: slotParam, date: dateParam},
						data: {meeting_id: meetingidParam},  
						success: function(resp) {
						    var data = JSON.parse(resp);
							if (data.status) {
								//$slotObject.text("");
								$slotObject.find("div").text("");								
								updateSlotStyle($slotObject, slotCount, "delete");

								// track the user who created this meeting
								if ($.trim(attendeesEmail) !== "") {	
									mixpanel.track("[HD conference room] user created a meeting with invitees from HD conference room", {
							            "server": "Hackerdojo Conference Room",
							            "Genee_user": loggedinGeneeUserId,
							            "HD user": userEmail,
							            "meeting": data.meetingid,
							            "attendees": attendeesEmail
							        });
							        //console.log("after calling mixpanel, Genee user:" + loggedinGeneeUserId + ", HD user:" + userEmail + ", meeting_id:" + data.meetingid + ", attendees:" + attendeesEmail);
								}

								return true;
							} else {
								errorMessage(data.UserMessage);
								return false;
								}

						},
						error: function(req, status, err) {
							errorMessage("Not able to delete slot. Error message: " + err);
							return false;
						}
					});
					break;	

				case "geneeCommand":
					// make AJAX call to add slot
					$.ajax({
                        timeout : 10000,
					    url: '/api/v1/commandgenee',
					    type: 'POST',
					    data: {slot: slotParam, date: dateParam, slotcount:slotCountParam, invitees:userEmailParam},
					    // data: {slot: slotParam, date: dateParam, slotcount:slotCountParam, invitees:CommandInviteesParam},
						success: function(resp) {
						    var data =  JSON.parse(resp);
							if (data.status) {
								popupMessage("Thanks, your request has been received. We will send an email to the email address you provided. Please follow through and confirm the desired meeting time to book the room.");

								// track the user who created a meeting with attendees
								mixpanel.track("[HD conference room] user created a meeting from Console, HackerDojo scheduling system", {
						            "server": "HackerDojo Conference Room",
						            "Genee_user": loggedinGeneeUserId,
						            "HD user": userEmail							            
						        });
						        //console.log("after calling mixpanel, Genee user:" + loggedinGeneeUserId + ", HD user:" + userEmail);

								return true;
							} else {
								// display error message
								errorMessage(data.Message);
								return false;
							}
						},
						error: function(req, status, err) {
							errorMessage("Not able to book slot. Error message: " + err);
							return false;
						}

					}); // end of ajax /api/v1/addgenee
					break;	
			}

		return false;
	}


	// -------------------------------------------------- //
	// Get current Environment Ajax call
	// -------------------------------------------------- //
	var getEnvironment = function() {

		// make AJAX call to environment API
		$.ajax({
	        timeout : 10000,
		    url: '/api/v1/environment',
		    type: 'GET',
		    dataType: 'json',
			success: function(resp) {
				// console.log("Inside getEnvironment Ajax call, resp.env:" + resp.env);
				if (resp.env) {
					environment_constant = resp.env;  // values: "DEV" or "PROD"
					// console.log("Inside getEnvironment Ajax call, environment_constant:" + environment_constant);
				} 
			},
			error: function(req, status, err) {
				errorMessage("Not able to get current environment, call to environment API failed. " + err);
			}
		}); // end of ajax /api/v1/environment
	}	





	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// +++++++++++++++++++++++++++++++++ W I N D O W / S C R E E N  R E L A T E D +++++++++++++++++++++++++++++++++
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	// -------------------------------------------------- //
	// setHeight function
	// -------------------------------------------------- //
	function setHeight() {
	    var totHeight = $(window).height();
	    var top = $('.hd-top').outerHeight();
	    var calendarHeader = $('.hd-table-header-wrapper').outerHeight();
	    var calendarHeight = totHeight - top - calendarHeader - 200;

	    $('body').css('height', totHeight);
	    $('.hd-schedule').css('height', calendarHeight);
  	}

	// -------------------------------------------------- //
	// setWeekDayDisplay function
	// -------------------------------------------------- //
	function setWeekDayDisplay() {

		// Identify screen size  -- Giovanna - July 21st
		var height = $(window).height();
		var width = $(window).width();
		var newDisplayOption = "";

		if (width < 768) {
			// displayOption = "day";
			newDisplayOption = "day";
		} else {
			// displayOption = "week";		
			newDisplayOption = "week";
		}

		if (newDisplayOption !== displayOption) {

			displayOption = newDisplayOption;

			// Clear all setIntervals
			for (var i = 1; i < 99999; i++) {
		        window.clearInterval(i);
			}

			switch (displayOption) {
				case "week":
					datesArray = getWeekDaysArray(firstDayOfWeek);
					updateWeekCalendar(firstDayOfWeek, datesArray);

					// Scroll the page to 5am slot if 5am is included in the schedule
					var divPosition = $('tr[data-hour="3"]').offset();  // data-hour = "3" makes the page scroll to 7am (for bigger device)
					if (divPosition != undefined) {				
						var scrollPos = Number(divPosition.top) + 10;
						$('html, body').animate({scrollTop: scrollPos}, "slow");
					}		
					// refresh the view every 30 seconds			
					setInterval (function() { 
						updateWeekCalendar(firstDayOfWeek, datesArray); 
						setDateTime(); // sets date and time for console view
					}, 30000);			

					break;

				case "day":
					datesArray = getDayArray(dateDisplayed);
					updateDayCalendar(dateDisplayed, datesArray);

					// Scroll the page to 5am slot
					var divPosition = $('tr[data-hour="9"]').offset();  // data-hour = "9" makes the page scroll to 7am (for small device)
					//var scrollPos = Number(divPosition.top) + 10;
					if (divPosition != undefined) {				
						var scrollPos = Number(divPosition.top) + 8;				
						$('html, body').animate({scrollTop: scrollPos}, "slow");
					}		
					// refresh the view every 30 seconds
					setInterval (function() { 
						updateDayCalendar(dateDisplayed, datesArray); 
						setDateTime(); // sets date and time for console view
					}, 30000);

					break;
			}
		}		
	}	

	// -------------------------------------------------- //
	// setDateTime function
	// -------------------------------------------------- //
	function setDateTime() {
		var now = new moment();
		var hourVal = now.format("h:mm A");
		var dateVal = now.format("dddd, MMMM D, YYYY"); 
		$("#time").text(hourVal);
		$("#date").text(dateVal);
	}


	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// ++++++++++++++++++++++++++++++++++++++++ I N I T I A L I Z E  ++++++++++++++++++++++++++++++++++++++++++++++
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	// ---------------------------------------------------- //
	// When initializing, get Genee User id first
	// ---------------------------------------------------- //
	var initialize = function(email) {

		var userId = "";

		// make AJAX call to geneeuser API
		$.ajax({
	        timeout : 10000,
		    url: '/api/v1/geneeuser',
		    type: 'GET',
		    //async: false, // making this call synchronous
		    data: {email: email},
		    dataType: 'json',
			success: function(resp) {
				console.log("Inside getGeneeUserId Ajax call, resp.userid:" + resp.userid);
				if (resp.userid) {
					userId = resp.userid.toString();  // Genee UserId
					loggedinGeneeUserId = userId;
					gethours();
				} 
			},
			error: function(req, status, err) {
				errorMessage("Not able to get Genee User Id, call to Genee User Lookup API failed. " + err);
			}
		}); // end of ajax /api/v1/geneeuser

		//return userId;
	}	


	// -------------------------------------------------- //
	// Get Genee user Id Ajax call
	// -------------------------------------------------- //
	var gethours = function() {

		// make AJAX call to gethours API
		$.ajax({
	        timeout : 10000,
		    url: '/api/v1/gethours',
		    type: 'POST',
		    //async: false, // making this call synchronous
		    //data: {},
		    dataType: 'json',
			success: function(resp) {

				if (resp.status) {
					if (resp.SlotBegins) { minHour = parseInt(resp.SlotBegins)/100;}
					else { 
						errorMessage("gethours didn't return start time range, seeting start time to 12am"); 
						minHour = 0;
					}	

					if (resp.SlotEnds) { maxHour = parseInt(resp.SlotEnds)/100;}
					else {
						errorMessage("gethours didn't return end time range, seeting end time to 11pm"); 
						maxHour = 23;
					}

					displaySchedule();

				} else {
					errorMessage("gethours didn't return successful status");

					minHour = 0;
					maxHour = 23;
					displaySchedule();

				}

			},
			error: function(req, status, err) {
				errorMessage("Not able to get conference room hours, call to Genee gethours API failed. " + err);

				minHour = 0;
				maxHour = 23;
				displaySchedule();

			}
		}); // end of ajax /api/v1/gethours

	}	

	// -------------------------------------------------- //
	// Display schedule
	// -------------------------------------------------- //
	function displaySchedule() {

		if (userEmail === conferenceRoomEmail) { // the login user is "meet@hackerdojo.com" 
			// Hide username and logout link if login user is meet@hackerdojo.com
			$(".hd-username-section").hide();			
			$(".hd-header-time").show();
		} else {
			// If user is NOT meet@hackerdojo.com, hide the time at the right upper corner
			$(".hd-header-time").hide();
			$(".hd-username-section").show();			
		}	

		// Display time and date for console view
		setDateTime(); //Time will be updated everytime the calendar gets updated: 		

		// Display username on upper right corner
		$(".hd-username").text(userEmail);	

		// extract the username portion before @hackerdojo.com
		userName = userName.split("@")[0];

		$(window).on('resize', function() { 
		  setWeekDayDisplay();  // display either week or day view 
		});

		setWeekDayDisplay();

		// Today link on mobile view

		$(".hd-first-week-link, .hd-today-link").click(function(e){
			e.preventDefault();

			switch (displayOption) {

				case "week":

					firstDayOfWeek = getFirstDayOfWeek(today);
					datesArray = getWeekDaysArray(firstDayOfWeek);
					updateWeekCalendar(firstDayOfWeek, datesArray);
					$(".nextButton").removeClass("disabled");  // enable next button in case it was disabled
					if (today >= firstDayOfWeek) {
						$(".prevButton").addClass("disabled"); // disable prev button to prevent users from reserving rooms in the past
					}			
					break;

				case "day":

					dateDisplayed = new Date();
					datesArray = getDayArray(dateDisplayed);
					updateDayCalendar(dateDisplayed, datesArray);
					$(".nextButton").removeClass("disabled");  // enable next button in case it was disabled
					if (today >= dateDisplayed) {
						$(".prevButton").addClass("disabled"); // disable prev button to prevent users from reserving rooms in the past
					}			

					//calendarNav.selectDay(dateDisplayed, true);
					break;
					
			} 
		});


		// Initially disable prev button
		$(".prevButton").addClass("disabled");

		// Prev button logic
		$(".prevButton").click(function(e){
			e.preventDefault();

			switch (displayOption) {

				case "week":

					if (today < firstDayOfWeek) {
						firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 7);			
						datesArray = getWeekDaysArray(firstDayOfWeek);
						updateWeekCalendar(firstDayOfWeek, datesArray);
						$(".nextButton").removeClass("disabled");  // enable next button in case it was disabled
						if (today >= firstDayOfWeek) {
							$(".prevButton").addClass("disabled"); // disable prev button to prevent users from reserving rooms in the past
						}			
					} 
					break;

				case "day":

					if (today < dateDisplayed) {
						dateDisplayed.setDate(dateDisplayed.getDate() - 1);
						datesArray = getDayArray(dateDisplayed);
						updateDayCalendar(dateDisplayed, datesArray);
						$(".nextButton").removeClass("disabled");  // enable next button in case it was disabled
						if (today >= dateDisplayed) {
							$(".prevButton").addClass("disabled"); // disable prev button to prevent users from reserving rooms in the past
						}			
					} 
					break;
			}		

		});

		// Next button logic
		$(".nextButton").click(function(e){
			e.preventDefault();		

			// calculate date 30 days from today
			var todayPlus30days = today.clone();
			todayPlus30days.setDate(todayPlus30days.getDate() + 30);

			switch (displayOption) {

				case "week":
			
					// calculate last date of current week
					var lastDateOfWeek = firstDayOfWeek.clone();
					lastDateOfWeek.setDate(firstDayOfWeek.getDate() + 6);

					if (todayPlus30days > lastDateOfWeek) {

						// set firstDayOfWeek to 1 week ahead and update dates on calendar if displayOption = "week"
						firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 7);
						datesArray = getWeekDaysArray(firstDayOfWeek);
						updateWeekCalendar(firstDayOfWeek, datesArray);
						
						$(".prevButton").removeClass("disabled");  // enable prev button in case it was disabled

						// calculate last date of current week
						lastDateOfWeek = firstDayOfWeek.clone();
						lastDateOfWeek.setDate(firstDayOfWeek.getDate() + 6);

						if (todayPlus30days <= lastDateOfWeek) {
							$(".nextButton").addClass("disabled"); // disable next button when the current week is beyond "today + 30 days"	
						}				
					}
					break;

				case "day":

					if (dateDisplayed <= todayPlus30days) {

						dateDisplayed.setDate(dateDisplayed.getDate() + 1);
						datesArray = getDayArray(dateDisplayed);
						updateDayCalendar(dateDisplayed, datesArray);
						
						$(".prevButton").removeClass("disabled");  // enable prev button in case it was disabled

						if (dateDisplayed >= todayPlus30days) {
							$(".nextButton").addClass("disabled"); // disable next button when the current week is beyond "today + 30 days"	
						}				
					}			
					break;
			}		

		});


		// Slot "click" event
		$(".hd-schedule").on('click','td', function() {    

			var response;
			var numberOfSlots = 1;

			console.log("data-userids attribute:" + $(this).attr("data-userids") + "---");
			if (!$(this).hasClass("displayDisabledSlot")) { // Allow click event only if slot is NOT disabled

				if ($(this).attr("data-userids") !== "") {  // Allow click event only if the slot has at least one Genee attendee

					if ($(this).find("div").text() === "") {
						if (isSlotAvailable($(this))) {
							// book/add slot only if slot is available
							displayPopup($(this), datesArray, room, userEmail);				
						}
					} else {
						// delete reservation
						if (isUserPartOfMeeting($(this))) {	
							numberOfSlots = $(this).attr("rowspan");	

							// call displayDeleteConfirmation only if numberOfSlots is a valid number
							if (!isNaN(numberOfSlots)) {						
							displayDeleteConfirmation($(this), numberOfSlots, room, userEmail);				
							}
						} else {
							// display error message
							errorMessage("Cannot delete slots from different owner");
						}			
					}
				}	
			}	
		});

		// Slot "click" event
		//$("td").on("hover", function() {  

		$("td").hover(function() {  

			//alert("hover event is triggered!!!");
			var datahour = $(this).closest("tr").attr("data-hour");
			var timeStr = getTimeFromSlotNum(datahour);
			$(this).attr("title", timeStr);
		},
		function() {
			$(this).attr("title", "");		
		});


		// Initialize scrollable calendar - carousel
	/*
		var calendarNav = new calendarSlider();
		calendarNav.initialize({

			currentDayClassName: "custom-currentday",  
			dayToDisplayNextOrPrevWeek: "mon",
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
	            // Triggered when user clicks on a day of the scrollable calendar. "this" is the date object returned by the calendar carousel
	            var momentDate = this;

	            var DateDate = Date.parse(momentDate.format("MM-DD-YYYY"), "MM-DD-YYYY");
	            dateDisplayed = DateDate;
				datesArray = getDayArray(DateDate);
				updateDayCalendar(DateDate, datesArray);
	        }
		});	
	*/
	}
	
