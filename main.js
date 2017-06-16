/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
var container = document.querySelector("container");
var player = document.querySelector("player");
var musicPLayer = document.querySelector("music-player");
var search = document.querySelector("search");
var searchForm = document.querySelector("search-form");
var results = document.querySelector("results");

const BASE_URL = "https://api.soundcloud.com/tracks/";
const BASE_QUERY = "?q=";
const API_KEY = "&client_id=8538a1744a7fdaa59981232897501e04";

// 2. Create your `onSubmit` event for getting the user's search term
document.querySelector("#searchSubmit").addEventListener("click", getMusic);

// 3. Create your `fetch` request that is called after a submission
function getMusic() {
  event.preventDefault();
  var searchText = document.querySelector("#inputArea").value;
  console.log("searchText: ", searchText);
  console.log("clicked");
  axios.get(BASE_URL + BASE_QUERY + searchText + API_KEY).then(function(data) {
    var trackSelected = data.data;
    for (var i = 0; i < trackSelected.length; i++) {
      createTrackProfile(trackSelected[i]);
    }
    // loop through tracksSelected
    // call createTrackProfile with each track
    console.log(trackSelected);
  });
}

// 4. Create a way to append the fetch results to your page

function createTrackProfile(trackConfig) {
  var profile = document.createElement("div");
  profile.classList.add("profile");
  results.appendChild(profile);
}
// 5. Create a way to listen for a click that will play the song in the audio play
