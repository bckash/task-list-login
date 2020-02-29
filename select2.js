
// wrapping code in: "$(document).ready() makes sure DOM is ready for manipulation. we setting jquery "select2" plugin on our select menu.
$(document).ready(function(){
    $("#lang").select2({
        templateResult: showflag,
        //hiding search bar
        minimumResultsForSearch: Infinity
    });
});

// configuring flag display
function showflag (state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "img";
    var $state = $(
      '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' +  '</span>'
    );
    return $state;
  };

