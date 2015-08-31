
// Hints for the first problem:

//   1. Define a function that:
//     - is assigned to a variable named `sum`
//     - has one parameter named `options`
//     - returns the calculated sum of all of the values of all of the options passed in
// NOTE: use a loop to make this happen.
// - Users can see the sum of all prices


//function to sum all of the prices in the main list
function sumAll(prices){
  var total = 0;
  for (var i = 0; i < prices[0].length; i++) {
    total += parseInt(prices[0][i].value);
  }
  return total;
}

//function to return the sum of prices selected from the list
function sumSelected(selected){
  var total = 0;
  for (var i = 0; i < selected.length; i++) {
    total += parseInt(selected[i].value);
  }
  return total;
}

//function to average all of the prices in the main list
function averageAll(prices){
  var total = 0;
  for (var i = 0; i < prices[0].length; i++) {
    total += parseInt(prices[0][i].value);
  }
    total = total / prices[0].length;
  return total.toFixed(2);
}

//function to average all of the prices in the main list
function averageSelected(selected){
  var total = 0;
  for (var i = 0; i < selected.length; i++) {
    total += parseInt(selected[i].value);
  }
    total = total / selected.length;
  return total.toFixed(2);
}
// - Users can see the number of prices that are selected (the count)
// - Users can see the sum of the selected prices
// - Users can see the average of all of the prices
