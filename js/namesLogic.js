//Print Full Name
function fullName(listOfNames){
  for (var i = 0; i < listOfNames.length; i++) {
    var li = document.createElement('LI');
    document.getElementById('answer').appendChild(li);
    li.innerHTML = listOfNames[i];
  }
 }

//Print First Name
function firstName(listOfNames){
  for(var first in listOfNames) {
    var first = listOfNames[first].split(' ')[0];
    var li = document.createElement('LI');
    document.getElementById('answer').appendChild(li);
    li.innerHTML = first;
  }
}

//Print Last Name
function lastName(listOfNames){
    for(var first in listOfNames) {
      var last = listOfNames[first].split(' ')[1];
      var li = document.createElement('LI');
      document.getElementById('answer').appendChild(li);
      li.innerHTML = last;
  }
}

function nameWithLength(listOfNames){
  for (var i = 0; i < listOfNames.length; i++) {
    var li = document.createElement('LI');
    document.getElementById('answer').appendChild(li);
    li.innerHTML = listOfNames[i] + " - " + listOfNames[i].length;
  }
 }
