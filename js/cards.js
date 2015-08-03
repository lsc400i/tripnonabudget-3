var tripsDictionary = {};

function fetchData() {
  var rawTemplate = $('#tripList-template').html();
    $.get('https://trip-n-on-a-budget.firebaseio.com/trips.json', function(trips) {
    for (var i = 0; i < trips.length; i++) {
      var currentTrip = trips[i];
      var stampedTemplate = Mustache.render(rawTemplate, currentTrip);
  $('#tripsList-container').append(stampedTemplate);
  
  };

// function fetchData() {
//   var rawTemplate = $('#bucketList-template').html();
//     $.get('https://trip-n-on-a-budget.firebaseio.com/trips.json', function(trips) {
//     for (var i = 0; i < trips.length; i++) {
//       var currentTrip = trips[i];
//       var stampedTemplate = Mustache.render(rawTemplate, currentTrip);
//   $('#bucketList-container').append(stampedTemplate);
  
//   };
// buildDictionary(trips);
bindEventListeners();

});

}


function bindEventListeners () {
  $('.card').click(function(e) {
    var targetID = e.target.id;
    var info = tripsDictionary[targetID];

    var rawTemplate = $('#bucketList-container').html();
    var stampedTemplate = Mustache.render(rawTemplate, info);
    $('#bucketList-container').html(stampedTemplate);
    
// Transition Effect
bucketList-container.css('transform', 'translateY(0)');

    
    
});

$('#mask').click(function() {
  $('#tripsList-container').fadeOut();
  $('#mask').fadeOut();

 });

}

function buildDictionary(trips){
for (var i = 0; i < trips.length; i++) {
  var currentTrip = trips[i];
  tripsDictionary[currentTrips.id] = currentTrips;


};
}



fetchData();
