//export default function initHbgMenu() {
// document.addEventListener('DOMContentLoaded', () => {
//const hbgMenu = document.querySelector('.c-hbgmenu'); // ハンバーガーメニュー
//const hbg = document.querySelector('.l-hbg'); // メニュー本体
//const hbgCloseBtn = document.querySelector('.l-hbg__btn'); // 閉じるボタン
//const overlay = document.querySelector('.l-hbg__overlay'); // オーバーレイ

//hbgMenu?.addEventListener('click', () => {
//    hbg?.classList.add('is-active');
//    overlay?.classList.add('is-active');
//});

//hbgCloseBtn?.addEventListener('click', () => {
//    hbg?.classList.remove('is-active');
//    overlay?.classList.remove('is-active');
//});

//overlay?.addEventListener('click', () => {
//    hbg?.classList.remove('is-active');
//    overlay?.classList.remove('is-active');
//});

//const toggleElements = document.querySelectorAll('.l-hbg__nav span > span, .l-hbg__nav a');
//toggleElements.forEach(element => {
//    element.addEventListener('click', event => {
//       const parentLi = element.closest('li');
//       const subMenu = parentLi?.querySelector('ul');

//        if (subMenu) {
//           event.preventDefault();
//            subMenu.classList.toggle('is-open');
//       }
//   });
// });
//  });
//}
