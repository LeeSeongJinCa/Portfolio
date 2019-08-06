/*
! 기능 정리
* 1. 기획 또는 구현을 누를 시, 클릭된 글자에 밑줄
* 2. 클릭된 글자에 맞는 subject 텍스트 보여주기
*/


/*
* 기능 1 start */
window.onload = () => {
    main_banner_li(1);
}
let planning_li = document.getElementById('planning');
let making_li = document.getElementById('making');

function main_banner_li(num) {
    if(num === 1) {
        planning_li.style.borderBottom = '5px solid #444';
        making_li.style.borderBottom = 'none';
        main_content_subject(num);
    } else if(num === 2) {
        making_li.style.borderBottom = '5px solid #444';
        planning_li.style.borderBottom = 'none';
        main_content_subject(num);
    } else {
        return console.log('error');
    }
}

var making_p_text = ['requiz사이트 전체 페이지 구현', 'a', 'b', 'c'];
var making = document.createElement('div');
making.setAttribute('class', 'subject_div making')
var making_h3 = document.createElement('h3');
making_h3.setAttribute('class', 'subject_h3');
var making_div = document.createElement('div');
making_div.setAttribute('class', 'subject_p');

for(var i = 0; i < making_p_text.length; i++) {
    var making_p = document.createElement('p').innerHTML = makingg_p_text[i];
}

// const making = `<div class="subject_div making">
//                     <h3 class="subject_h3">구현</h3>
//                     <div class="subject_p">
//                         <p>requiz사이트 전체 페이지 구현</p>
//                         <p>axios를 이용하여 비동기 처리 진행</p>
//                         <p>-기여도 : 20%</p>
//                         <p>stack : Javascript, Axios</p>
//                     </div>
//                </div>`
// const planning = `<div class="subject_div planning">
//                     <h3 class="subject_h3">기획</h3>
//                     <div class="subject_p">
//                         <p>-사이트를 모방한 퀴즈 사이트 개발</p>
//                         <p>-기여도 : front-end 100%</p>
//                         <p>stack: HTML5, CSS3, Javascript</p>
//                     </div>
//                 </div>`

let main_subject = document.getElementById('main_content_subject');
function main_content_subject(num) {
    if(num === 1) {
        main_subject.innerHTML = making;
    } else if(num === 2) {
        main_subject.innerHTML = planning;
    } else {
        return console.log('error');
    }
}
















































