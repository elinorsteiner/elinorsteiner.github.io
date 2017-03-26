function askQuestions(){



var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName;

console.log(fullName);

// var age = prompt('How old are you?');
// age = parseInt(age);

if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
	console.log ('Greetings');
	alert('Greetings');

	} 

var faveColour = prompt('What is your favourite colour?').toLowerCase().trim();

if (faveColour === 'red' ||
	faveColour === 'green' ||
	faveColour === 'blue' ||
	faveColour === 'yellow') {

$('h1').css('color', faveColour);
}


}

// else if (age >= 13) {
	// console.log ( 'User is a teenager');
// } 
// else {
	// console.log ( 'User is a child');
// }




/*this is a JS block comment*/
//this is a single line comment
	$(function() {

		$('img').on('click', askQuestions);
	}	

)
$ (function() {
	//when the user clicks an h3
	$( 'h3').on( 'click', function() {

			//Hide the next element
			// $(this).next().hide();

			//toggle (appear and disapear) the next element
			// $(this).next().toggle();

			//toggle (appear and disapear visably) the next element 
			//you can add duration in the end brackets
			$(this).next().slideToggle(3000);

});

});