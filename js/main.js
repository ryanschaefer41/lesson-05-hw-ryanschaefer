// Ready Java last
$(document).ready(function() {

// Connected?
var warriors = "Klay Thomson"
console.log(warriors);

// Define variable

// What happens on click
$("#submit-btn").click(function() {

  $("body").removeClass("nyc");
  $("body").removeClass("sf");
  $("body").removeClass("la");
  $("body").removeClass("austin");
  $("body").removeClass("sydney");

  var cityName = $("#city-type").val();

// Change backgrounds
if (cityName === "NYC" || cityName === "New York City" || cityName === "New York"){
  $("body").attr("class", "nyc");
  // $("body").removeClass().addClass("nyc");
} else if (cityName === "Austin" || cityName === "ATX"){
  $("body").attr("class", "austin");
  // $("body").removeClass().addClass("austin");
} else if (cityName === "SF" || cityName === "San Francisco" || cityName === "Bay Area"){
  $("body").attr("class", "sf");
  // $("body").removeClass().addClass("sf");
} else if (cityName === "LA" || cityName === "LAX" || cityName === "Los Angeles"){
  $("body").attr("class", "la");
  // $("body").removeClass().addClass("la");
} else if (cityName === "SYDNEY" || cityName === "SYD"){
  $("body").attr("class", "sydney");
  // $("body").removeClass().addClass("sydney");
}
  //Prevent from loading
    event.preventDefault();
});

});
