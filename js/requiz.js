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
let main_content_subject = document.getElementById('main_content_subject');
let planning_li = document.getElementById('planning');
let making_li = document.getElementById('making');

function main_banner_li(num) {
    if (num === 1) {
        main_banner_border('', '5px solid #444');
        insertSubject(num);
    } else if (num === 2) {
        main_banner_border('5px solid #444', '');
        insertSubject(num);
    } else {
        return console.log('error');
    }
}

function main_banner_border(type1, type2) {
    making_li.style.borderBottom = type1;
    planning_li.style.borderBottom = type2;
}

function insertSubject(num) {
    if (num == 1) {
        console.log(insertPlanning());
        main_content_subject.appendChild(insertPlanning());
    } else if (num == 2) {
        main_content_subject.appendChild(insertMaking());
    } else {
        console.log('error');
    }
}

const subject_plan_text = [
    "-사이트를 모방한 퀴즈 사이트 개발</br>"
    , "-기여도 : front-end 100%</br>"
    , "stack: HTML5, CSS3, Javascript</br>"
];
const subject_make_text = [
    "requiz사이트 전체 페이지 구현</br>"
    , "axios를 이용하여 비동기 처리 진행</br>"
    , "-기여도 : 20%</br>"
    , "stack : Javascript, Axios</br>"
]

function insertPlanning() {
    let subject_div = document.createElement('div');
    subject_div.setAttribute('class', 'subject_div planning');
    let subject_h3 = document.createElement('h3');
    subject_h3.setAttribute('class', 'subject_h3');
    subject_h3.innerHTML = "기획";
    let subject_p = document.createElement('div');
    subject_p.setAttribute('class', 'subject_p');
    main_content_subject.innerHTML = "";
    for (var i = 0; i < subject_plan_text.length; i++) {
        subject_p.insertAdjacentHTML('beforeend', subject_plan_text[i]);
    }
    subject_div.appendChild(subject_h3);
    subject_div.appendChild(subject_p);
    return subject_div;
}

function insertMaking() {
    let subject_div = document.createElement('div');
    subject_div.setAttribute('class', 'subject_div planning');
    let subject_h3 = document.createElement('h3');
    subject_h3.setAttribute('class', 'subject_h3');
    subject_h3.innerHTML = "구현";
    let subject_p = document.createElement('div');
    subject_p.setAttribute('class', 'subject_p');
    main_content_subject.innerHTML = "";
    for (var i = 0; i < subject_make_text.length; i++) {
        subject_p.insertAdjacentHTML('beforeend', subject_make_text[i]);
    }
    subject_div.appendChild(subject_h3);
    subject_div.appendChild(subject_p);
    return subject_div;
}


// const planning = `<div class="subject_div planning">
//                     <h3 class="subject_h3">기획</h3>
//                     <div class="subject_p">
//                         <p>-사이트를 모방한 퀴즈 사이트 개발</p>
//                         <p>-기여도 : front-end 100%</p>
//                         <p>stack: HTML5, CSS3, Javascript</p>
//                     </div>
//                 </div>`
// const making = `<div class="subject_div making">
//                     <h3 class="subject_h3">구현</h3>
//                     <div class="subject_p">
//                         <p>requiz사이트 전체 페이지 구현</p>
//                         <p>axios를 이용하여 비동기 처리 진행</p>
//                         <p>-기여도 : 20%</p>
//                         <p>stack : Javascript, Axios</p>
//                     </div>
//                 </div>`



