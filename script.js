/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-05-19 21:47:56
 * @modify date 2020-05-19 21:47:56
 * @desc [description]
 */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }