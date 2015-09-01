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



//////////Names////////////////
//shows user all of the names in the box
// var allNames = document.getElementsByClassName('all-names');
// console.log(allNames);
// var postAllNames = document.getElementById('all-names').addEventListener('click', function(){
// document.getElementById('answer').innerHTML= 'Names Here';
//     });















