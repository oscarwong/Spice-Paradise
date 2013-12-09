// modal.js shows a modal when a user clicks the "reservation" button and takes
// user input to create a confimation alert. May be used for back end work. 

$('.reservation').click(function(){
	$('.info-modal').modal(); 
});


// User must enter all fields to get confirmation message. Takes 
// user input to produce confirmation message. The variables may be
// taken to be used in back-end work.
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