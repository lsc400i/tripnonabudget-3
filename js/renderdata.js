function renderData() {
  $.get('https://trip-n-on-a-budget.firebaseio.com/trips.json', function(trips) {
    
    for (var i = 0; i < trips.length; i++) {
     renderNewCard(trips[i].location, trips[i].duration + ' days', trips[i].image,'$' + trips[i].estimatedCost);
    };
  });
}

function handleClickEvents() {
  // If any movie thumbnail gets clicked, slide the mask curtain down.
  $('.card').click(function(e) {
    var mask = $(e.target).children('.mask');
    mask.css('transform', 'translateY(0)');
  })

  // If any close button gets clicked, slide the mask curtain up.
  $('.close-btn').click(function(e) {
    var mask = $(e.target).parent();
    mask.css('transform', 'translateY(-365px)');
  });
}

renderData();

