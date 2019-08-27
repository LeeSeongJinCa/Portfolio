/*
! Click -> X button -> header_menu.display.none */

var header = document.getElementById('header_menu_wrap');
var menu = document.getElementById('close_menu');
menu.addEventListener('click', function() {
    header.style.display = 'none';
})

var header = document.getElementById('header_menu_wrap');
var menu = document.getElementById('header_menu_btn');
menu.addEventListener('click', function() {
    header.style.display = 'block';
});

/*
!Smooth scroll */
// function scrollTo(element) {
//     var dir = element.offsetTop;
//     window.scroll({
//         behavior: 'smooth',
//         left: 0,
//         top: dir
//     });
// }
// var aList = document.getElementsByClassName('alist');
// for(var i = 0, j = 1; i < aList.length; i++, j++) {
//     aList[i].addEventListener('click', function() {
//         scrollTo();
//     });
// }
/*

document.getElementById("goabout").addEventListener('click', function () {
    scrollTo(document.getElementsByTagName("section")[1]);
});
document.getElementById("gocareer").addEventListener('click', function () {
    scrollTo(document.getElementsByTagName("section")[2]);
});
document.getElementById("gopa").addEventListener('click', function () {
    scrollTo(document.getElementsByTagName("section")[3]);
});
document.getElementById("gofooter").addEventListener('click', function () {
    scrollTo(document.getElementsByTagName("section")[4]);
});
*/




















