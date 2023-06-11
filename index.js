var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
$(document).on("keydown", function(){
    if(!started){level=0;userClickedPattern=[]; nextSequence(); started=true;}
});
$(".btn").on("click", function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    check(userClickedPattern.length-1);
});
function check(level){
    // console.log(userClickedPattern);
    // console.log(gamePattern);
if(gamePattern[level]===userClickedPattern[level]){
    // var v1 = userClickedPattern.length - 1;
if(userClickedPattern.length===gamePattern.length){
    setTimeout(function(){
        userClickedPattern=[];
        nextSequence();
    }, 1000);
}}
else {
    playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
    level=0;
    started=false;
    gamePattern=[];
    userClickedPattern=[];
}}

function nextSequence(){
    var randomNumber = Math.floor(4*Math.random());
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    //console.log(randomChosenColour);
    // $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    // var aud1 = new Audio("./sounds/" + randomChosenColour + ".mp3");
    // aud1.play();
    $("h1").text("Level " + level);
    playSound(randomChosenColour);
    //animatePress(randomChosenColour);
    level++;
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function playSound(name){
    // randomNumber = Math.floor(4*Math.random());
    // var randomChosenColour = buttonColors[randomNumber];
    // gamePattern.push(randomChosenColour);
    //console.log(randomChosenColour);
    $("#"+name).fadeOut(100).fadeIn(100);
    var aud1 = new Audio("./sounds/" + name + ".mp3");
    aud1.play();
}

