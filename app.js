/************************************************
 * Game verison
 ************************************************/
var version = 1.0;

/************************************************
 * Screen settings
 ************************************************/
var h = window.innerHeight;

if( h <= 780 ) {
    document.getElementById("page-container").style.height = h * 0.78 + "px";
} else {
    document.getElementById("page-container").style.height = h * 0.85 + "px";
}
