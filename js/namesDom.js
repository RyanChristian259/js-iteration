//////////Names////////////////
// shows user all of the names in the box
var getPrintAllNamesButton = document.getElementById('all-names').addEventListener('click', function(){
    var getFullName = document.getElementsByTagName('textarea')[0].value.split('\n');
    document.getElementById('answer').innerHTML = null;
  fullName(getFullName);
});

// shows user all of the first names in the box
var getFirstNamesButton = document.getElementById('first-names').addEventListener('click', function(){
    var getAllNames = document.getElementsByTagName('textarea')[0].value.split('\n');
    document.getElementById('answer').innerHTML = null;
  firstName(getAllNames);
});

// shows user all of the last names in the box
var lastNamesButton = document.getElementById('last-names').addEventListener('click', function(){
    var getAllNames = document.getElementsByTagName('textarea')[0].value.split('\n');
    document.getElementById('answer').innerHTML = null;
  lastName(getAllNames);
});

// shows user all of the names in the box
var getPrintAllNamesButton = document.getElementById('names-with-lengths').addEventListener('click', function(){
  var getAllNames = document.getElementsByTagName('textarea')[0].value.split('\n');
  document.getElementById('answer').innerHTML = null;


 nameWithLength(getAllNames);
});








