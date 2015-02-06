var animatedArray = ['Web Developer', 'JavaScript Admirer',
	'Meteor.js Enthusiast'];

index = 0;

$('document').ready(function(){

	function showWords(){
		$('#aboutMe').html(animatedArray[index]).fadeIn(950).fadeOut(950)
		index ++ 
		if (index >= animatedArray.length){
			index = 0; 
		}
	}

	showWords(); 
	setInterval(showWords, 2000)
	


});
	
