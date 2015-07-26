var buildDictionary = {};

function fetchData() {
  var rawTemplate = $('#tripList-template').html();
    $.get('https://trip-n-on-a-budget.firebaseio.com/trips.json', function(trips) {
    for (var i = 0; i < trips.length; i++) {
      var currentTrip = trips[i];
      var stampedTemplate = Mustache.render(rawTemplate, currentTrip);
  $('#tripsList-container').append(stampedTemplate);
  
  };


buildDictionary(trips);
bindEventListeners();

});

}


function bindEventListeners () {
  $('.card').click(function(e) {
    var targetID = e.target.id;
    var info = tripsDictionary[targetID];

    var rawTemplate = $('#tripList-template').html();
    var stampedTemplate = Mustache.render(rawTemplate, info);


    $('#trip-container').html(stampedTemplate);
    $('#budgetList-container').html(stampedTemplate);
    $('#checkList-container').html(stampedTemplate);
    $('#bucketList-container').html(stampedTemplate);
    
// Transition Effect
    $('#trip-container').fadeIn();
    $('#budgetList-container').fadeIn();
    $('#checkList-container').fadeIn();
    $('#bucketList-container').fadeIn();
    $('#lightbox-container').fadeIn();
    $('#mask').fadeIn();
    
    
});

$('#mask').click(function() {
  $('#lightbox-container').fadeOut();
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
