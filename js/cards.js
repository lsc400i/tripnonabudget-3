// An object that will eventually let us look up movies by a unique ID.
var tripsDictionary = {};

function fetchData() {
  var rawTemplate = $('#tripList-template').html();

  $.get('https://trip-n-on-a-budget.firebaseio.com/trips.json', function(trips) {
    // Stamp out cards and append them into <div id="cards-container"></div>
    for (var i = 0; i < trips.length; i++) {
      var currentTrip = trips[i];
      var stampedTemplate = Mustache.render(rawTemplate, currentTrip);
      $('#tripsList-container').append(stampedTemplate);
    };

    // Our "pre-processing" step where we take the movies array we got from
    // our database and creates an object out of it.
    buildDictionary(trips);
    bindEventListeners();
  });

}

function bindEventListeners() {
  // Whenever any card gets clicked, show the lightbox.
  $('.card').click(function(e) {
    // e.target is the <div> that got clicked. The ID of that div holds a key
    // we can use to "look up" movie info in our moviesDictionary. Tricky.
    var targetId = e.target.id;
    var info = tripsDictionary[targetId];

    if (Array.isArray(info.bucketList)) {
      info.bucketList = info.bucketList.join(', ');
    }
    
    if (Array.isArray(info.checkList)) {
      info.checkList = info.checkList.join(', ');
    }

    // Now that we have our info, simply stamp out our lightbox template.
    var rawTemplate = $('#tripsDetails-template').html();
    var stampedTemplate = Mustache.render(rawTemplate, info);
    $('#tripsDetails-container').html(stampedTemplate);
    $('#tripsDetails-container').animate({left: '38%'}, 750);
    

  });

  // Fade out the lightbox and dimmer mask when the mask is clicked.
  $('#tripsDetails-container').click(function() {
    $('#tripsDetails-container').animate({left: '-100%'}, 750);
    
  });
}

function buildDictionary(trips) {
  // Take the movies array and convert it into an object.
  // moviesDictionary holds that object and we can use it to do lookups.
  for (var i = 0; i < trips.length; i++) {
    var currentTrip = trips[i];
    tripsDictionary[currentTrip.id] = currentTrip;
  }
}

fetchData();
