//*****************dark theme******************
var $theme = localStorage.getItem("theme");
if($theme == null || $theme == "") {
    localStorage.setItem("theme", "light");
    $theme = "light";
}
var $themeClass = $theme;
var $hour = (new Date()).getHours();
if($theme == "auto") {
    if($hour < 8 || $hour>=18) {
        $themeClass = "dark";
    } else {
        $themeClass = "light";
    }
}
document.getElementsByTagName("html")[0].setAttribute("data-bs-theme",$themeClass);

function setOnLoadThemeIcon() {

    $element = document.getElementsByClassName("header-dark-mode-dropdown-toggle")[0];
    var $theme = localStorage.getItem("theme");
    var $themeClass = $theme;
    var $hour = (new Date()).getHours();
    if($theme == "auto") {
        if($hour < 8 || $hour>=18) {
            $themeClass = "dark";
        } else {
            $themeClass = "light";
        }
    }
    var $themeIcon = $themeClass == "dark" ? "moon" : "sun";
    $element.innerHTML = '<i class="fa fa-'+ $themeIcon +'"></i>';
    $test = document.querySelectorAll('a[data-dark-status="'+ $theme +'"]')[0].classList.add("active");

}
//*************end dark theme******************



//*************start loading*******************
window.addEventListener('load', () => {
    var $loader = document.querySelector(".loader");
    $loader.classList.add("loader-hidden");
    $loader.addEventListener("transitionend", () => {
        console.log(1);
        document.body.removeChild(".loader");
    });
});
//***************end loading*******************