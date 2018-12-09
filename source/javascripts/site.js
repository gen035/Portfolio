function tracker(category, action, label) {
  ga('send', 'event', category, action, label);
}

window.onload = function() {
  $trackers = document.querySelectorAll('[data-track]');

  if($trackers) {
    for(var i = 0; i < $trackers.length; i++) {
      $trackers[i].addEventListener('click', function(event) {
        var category = event.currentTarget.getAttribute('data-track-category');
        var action = event.currentTarget.getAttribute('data-track-action');
        var label = event.currentTarget.getAttribute('data-track-label');
        tracker(category, action, label);
      });
    }
  }
}