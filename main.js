/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
var container = document.querySelector(".container");
var player = document.querySelector(".player");
var musicPLayer = document.querySelector(".music-player");
var search = document.querySelector(".search");
var searchForm = document.querySelector(".search-form");
var results = document.querySelector(".results");

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
  console.log("hey");
  var profile = document.createElement("div");
  profile.classList.add("profile");
  results.appendChild(profile);

  var artwork = document.createElement("div");
  artwork.classList.add("albumCover");
  artwork.style.background =
    "url(" + trackConfig.artwork_url + ") no-repeat center center";
  artwork.style.backgroundSize = "cover";
  profile.appendChild(artwork);

  var songTitle = document.createElement("div");
  songTitle.classList.add("songTitle");
  songTitle.textContent = trackConfig.title;
  profile.appendChild(songTitle);

  var artistName = document.createElement("div");
  artistName.classList.add("artistName");
  artistName.textContent = trackConfig.user.username;
  profile.appendChild(artistName);
}
// // 5. Create a way to listen for a click that will play the song in the audio play

// var profilePic = document.createElement("div");
// profilePic.classList.add("profilePic");
// profilePic.style.background =
//   "url(" + personConfig.picture.large + ") no-repeat center center";
// profilePic.style.backgroundSize = "cover";
// profile.appendChild(profilePic);
