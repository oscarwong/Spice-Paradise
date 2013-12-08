$('.reservation').click(function(){
	$('.info-modal').modal(); 
});

$('.booking-form').submit(function(){
	var bookingForm = $(this);
	var name = bookingForm.find('input[name="fullName"]').val();
	var email = bookingForm.find('input[name="email"]').val();
	var phoneNumber = bookingForm.find('input[name="phoneNumber"]').val();
	var dateOfArrival = bookingForm.find('input[name="date"]').val();
	var timeOfArrival = bookingForm.find('input[name="time"]').val();
	var adults = bookingForm.find('input[name="adults"]').val();
	var children = bookingForm.find('input[name="children"]').val();
	if (name.length > 0 && email.length > 0 && phoneNumber.length > 0 
		&& dateOfArrival.length > 0 && timeOfArrival.length > 0 && adults > 0
		&& children >= 0) {
		alert("Thank you " + name + "! We look forward to seeing you on " + dateOfArrival + 
			" at " + timeOfArrival + "!");
		return true;
	} else {
		alert("One of the required fields is missing!");
		return false;
	}	
});

