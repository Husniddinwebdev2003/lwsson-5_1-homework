// navbar by scroll started
window.addEventListener('scroll', () => {
    let nav = document.querySelector('nav');

    nav.classList.toggle('static', window.scrollY > 0);
});
// navbar by scroll finished


// navbar of media query started
const showMenu = (toggleid, navid, iconOn) => {
    const toggle = document.getElementById(toggleid),
        nav = document.getElementById(navid),
        icon = document.getElementById(iconOn);

    if (toggle && nav && icon) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('block');
            icon.classList.toggle('ion-close');
        });
    }
}

showMenu('toggleNav', 'nav', 'ion-on');
// navbar of media query finished


// up link started
let upA = document.getElementsByClassName('up');
for (let i = 0; i < upA.length; i++) {
    upA[i].addEventListener('mouseover', () => {
        upA[i].classList.add('uplink');

        setTimeout(() => {
            upA[i].classList.remove('uplink');
        }, 100)
    });
}
// up link finished


// drop down navbar started
const dropMenu = (toggleid, navid, addClass) => {
    const toggle = document.getElementsByClassName(toggleid),
        nav = document.getElementsByClassName(navid);

    for (let i = 0; i < toggle.length; i++) {
        if (toggle[i] && nav[i]) {
            toggle[i].addEventListener('click', () => {
                nav[i].classList.toggle(addClass);
            });
        }
    }
}

dropMenu('addNav', 'moreList', 'autoHeight');
dropMenu('addNav', 'addNav', 'before');
dropMenu('category', 'onCg', 'zInd');
dropMenu('category', 'catogories-navbar', 'height');
// drop down navbar finished


// up btn started
window.addEventListener('scroll', () => {
    let nav = document.querySelector('.fixed__btn');

    nav.classList.toggle('trueBtn', window.scrollY > 560);
});

let btnUp = document.querySelector('.up__btn');
btnUp.addEventListener('click', () => {
    btnUp.classList.add('up');
    setTimeout(() => {
        btnUp.classList.remove('up');
    }, 1500);
});
// up btn finished


// slider section started
function controller(conFirst, conSecond, conThrid, FirstItem, ScondItem, ThridItem) {
    let first = document.getElementById(conFirst);
    let second = document.getElementById(conSecond);
    let third = document.getElementById(conThrid);

    let sliderFirstItem = document.getElementsByClassName(FirstItem);
    let sliderScondItem = document.getElementsByClassName(ScondItem);
    let sliderThridItem = document.getElementsByClassName(ThridItem);

    first.addEventListener('click', () => {
        first.classList.add("check");
        second.classList.remove("check");
        third.classList.remove("check");

        sliderFirstItem[0].classList.add("active");
        sliderScondItem[0].classList.remove("active");
        sliderThridItem[0].classList.remove("active");
    });
}

controller("first", "second", "third", "oneItem", "twoItem", "threeItem");
controller("second", "first", "third", "twoItem", "oneItem", "threeItem");
controller("third", "second", "first", "threeItem", "twoItem", "oneItem");
// slider section finished