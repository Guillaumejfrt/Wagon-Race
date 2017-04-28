$(document).ready(function() {
  $(document).on('keyup', function(event) {
    if (event.keyCode === 90) {
      run(1);
    } else if (event.keyCode === 80) {
      run(2);
    };
  });

  function run(playerId) {
    var col = $('#player' + playerId + '_race .active').removeClass('active').next();
      if (col.length !== 0) {
        col.addClass('active');
      } else {
        // alert('player' + playerId + ' won!');
        if (!alert('player' + playerId + ' won!')) {
          window.location.reload();
        };
      };
  };
});
