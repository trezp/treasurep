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
	
/*
    Basic workflow example
*/

// init controller
// var controller = new ScrollMagic();

// // assign handler "scene" and add it to controller
// var scene = new ScrollScene({duration: 100})
//                 .setPin("#my-sticky-element") // pins the element for a scroll distance of 100px
//                 .addTo(controller); // add scene to controller

// // adding multiple scenes at once
// var scene2 = new ScrollScene();
// var scene3;
// controller.addScene([
//     scene2,
//     scene3 = new ScrollScene({duration: 200}), // add scene and assign handler "scene2"
//     new ScrollScene({offset: 20}) // add anonymous scene
// ]);