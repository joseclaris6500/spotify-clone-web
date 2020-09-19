//End pont to where users need to login
export const authEndpoint = "https://accounts.spotify.com/authorize";

//Redirect to localhost homepage
const clientId = "09e8ef28f06b421698de837f0977a631";
const redirectUri = "http://localhost:3000/";


//accessing token from url
export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        //#accessToken=mysecretkey&name=sjose
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial;

    }, {});
};


//Scopes to have the correct permissions from spotify
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
  
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`;