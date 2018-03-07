
// $(document).ready(function(){

// Declaring Global variables needed for the game

var random_result;
var lost;
var win;

//Creating the random numbers
random_result = Math.floor(Math.random() * 101 ) + 19;
$("#results").html('Random Results: ' + random_result);
    // console.log(random_result);

// building the for loop to 
for(var i = 0; i < 4; i++){
 // Getting the 4 random numbers   
    var random = Math.floor(Math.random () * 11 ) + 1;
    // console.log(random);
//Create a variable to assign a div 
    var crystal = $("<div>");

 //Giving crystal a class attr   
    crystal.attr({"class": 'crystal',"data-random": random});
 //append crystal to the bottom of page
    $(".crystals").append(crystal);

}


//Creating the onclick fucntion for the images
$(".crystal").on('click', function(){
    
    console.log($(this).attr('data-random'));
});






























// });