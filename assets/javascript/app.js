//need to generate random number at the start of the game x
//need to be able to click on each gem
// it shoudl assign a random number valusse wehn gem is clicked
//it should log wins x
//it should log loss x
//it should calucate and add number and paste number when onclick
//it should calculate current score total
//it should log current score
//it should log current total when clicked
//it should have a reset function that clears totals x
//it should clear value assigned to gem when the button is clicked and genrate a new random number
//

//it should how ready event
$(document).ready(function()
{
  console.log('document loaded');

// variable for random number generator
var computerGenNumber = Math.floor(Math.random() * (101 + 19));
var valueRuby = Math.random() * (11 + 1);
var valueSapp = Math.random() * (11 + 1);
var valueEmer = Math.random() * (11 + 1);
var valueTopa = Math.random() * (11 + 1);
valueRuby = Math.floor(valueRuby)
valueSapp = Math.floor(valueSapp)
valueEmer = Math.floor(valueEmer)
valueTopa = Math.floor(valueTopa)

// variable for score
var wins = 0;
var losses = 0;
var currentScore = 0;


//it should add number to box
$('#box1').text(computerGenNumber);

// function to determine wins or losses
function win()
{
  wins++;
  console.log(wins);
  $('#numberWins').text(wins);
}

function lose()
{
  losses++;
  console.log(losses);
  $('#numberlosses').text(losses);
}


//function to reset game
function resetPage()
{
  currentScore = 0;
  var valueRuby = Math.random() * (12);
  var valueSapp = Math.random() * (12);
  var valueEmer = Math.random() * (12);
  var valueTopa = Math.random() * (12);
  computerGenNumber = Math.floor(Math.random() * (120));
  valueRuby = Math.floor(valueRuby)
  valueSapp = Math.floor(valueSapp)
  valueEmer = Math.floor(valueEmer)
  valueTopa = Math.floor(valueTopa)
  $('#box1').text(computerGenNumber);
  $('#currentScore').text(currentScore);


}

//function to check score using conditionals
function checkScore()
{
  if(currentScore === computerGenNumber)
  {
    alert('You Win!');
    win();
    resetPage();
  }
  else
  {
    if (currentScore > computerGenNumber)
    {
      alert('You Lose!')
      lose();
      resetPage();
    }
  }
}

//functions for getting random values for gem totals
$('#valueRuby').click(function()
{
  currentScore += valueRuby;
  $('#currentScore').text(currentScore);
  checkScore();
});

$('#valueSapp').click(function()
{
  currentScore += valueEmer;
  $('#currentScore').text(currentScore);
  checkScore();
});

$('#valueTopa').click(function()
{
  currentScore +=valueSapp;
  $('#currentScore').text(currentScore);
  checkScore();
  });

$('#valueEmer').click(function()
{
  currentScore += valueSapp;
  $('#currentScore').text(currentScore);
  checkScore();
});

$('#valueTopa').click(function()
{
  currentScore += valueTopa;
  $('#currentScore').text(currentScore);
  checkScore();
});

});
