function s(ele) {
  return document.querySelector(ele);
}
function sAll(ele) {
  return document.querySelectorAll(ele);
}

let closeBtn = s('#closeMenu');
let openBtn = s('#openMenu');

let menu = s('#menu');
menuOpen = false;
openBtn.addEventListener('click', function () {
    callMenu();
});
openMenu2.addEventListener('click', function() { 
  callMenu();
 })



closeBtn.addEventListener('click', function () {
    callMenu();
});




function callMenu(){
    if (menuOpen) {
        menuOpen = false;
        menu.style.left = '-400px';
      } else {
        menuOpen = true;
        menu.style.left = '0px';
      }
}
