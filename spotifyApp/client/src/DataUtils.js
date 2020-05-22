/*
 * This files contains functions all
 * functions that will be used in App.js
 */
/************ spotify api ***************/
import Spotify from "spotify-web-api-js";
const spotifyWebApi = new Spotify();

/************** params *****************/

const params = getHashParams();
spotifyWebApi.setAccessToken(params.access_token);

/* hash function that will return the 
   access_token and refresh_token */
function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
/************* user info ****************/

const user_ids = [
  "coolkid_casey",
  "carolinegarrido",
  "127323676",
  "dx9apszk636qozmp7g25m6uog",
  "iloveeemusic",
  "nickifrankel"
];
const urls = getUrls(user_ids);
/* getting the names of the users from their profile */
const user_names = getUserNames(user_ids);
/* creating urls based on user_ids */
function getUrls(user_ids) {
  var urls = [];
  for (var i = 0; i < user_ids.length; i++) {
    urls.push(`https://api.spotify.com/v1/users/${user_ids[i]}/playlists`);
  }
  return urls;
}
/* getting names of the users */
function getUserNames(user_ids) {
  var user_names = [];
  user_ids.forEach(user => {
    fetch(`https://api.spotify.com/v1/users/${user}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + params.access_token }
    })
      .then(response => {
        return response.json();
      })
      .then(user => {
        user_names.push(user.display_name);
      });
  });
  return user_names;
}
/* fetching playlists from users */
// function GetPlaylists() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function fetchData(url) {
//       await fetch(url, {
//         method: "GET",
//         headers: { Authorization: "Bearer " + params.access_token }
//       })
//         .then(response => {
//           return response.json();
//         })
//         .then(playlists => {
//           data.push(playlists.items);
//           setData(data);
//         });
//     }
//     urls.forEach(url => {
//       fetchData(url);
//     });
//   });
//   console.log(data);
//   return data;
// }

export { getHashParams, spotifyWebApi, user_names };
