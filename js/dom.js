/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

//shows user the sum of all amounts in box
var prices = document.getElementsByClassName('all-prices');
var postAll = document.getElementById('sum-all').addEventListener('click', function(){
document.getElementById('answer').innerHTML= ('The sum of all amounts is $' + sumAll(prices) + '.00');
    });

//shows user how many options they have selected
document.getElementById('count-selected').addEventListener('click', function(){
  var selected = document.getElementsByTagName('select')[0].selectedOptions;
  document.getElementById("answer").innerHTML = "You have selected " + selected.length + " amount(s).";
});

//shows user the total of the amounts they have selected
document.getElementById('sum-selected').addEventListener('click', function(){
  var selected = document.getElementsByTagName('select')[0].selectedOptions;
  document.getElementById("answer").innerHTML = "The total of the amounts you selected is $" + sumSelected(selected) + '.00';
});

//shows user the average of all amounts in box
var prices = document.getElementsByClassName('all-prices');
var postAll = document.getElementById('average-all').addEventListener('click', function(){
document.getElementById('answer').innerHTML= ('The average of all amounts is $' + averageAll(prices));
    });

//shows user the average of the amounts they have selected
document.getElementById('average-selected').addEventListener('click', function(){
  var selected = document.getElementsByTagName('select')[0].selectedOptions;
  document.getElementById("answer").innerHTML = "The average of the amounts you selected is $" + averageSelected(selected);
});















