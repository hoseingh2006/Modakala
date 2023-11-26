const $ = document


const slider_action_l = $.querySelector(".slider-img-r-icon-l")
const slider_action_r = $.querySelector(".slider-img-r-icon-r")
const slider_img = $.querySelectorAll(".slider-img-r-img ")
const Percent_img = slider_img.length * 100 - 100
let Percent_count = 0
let slider_box = $.querySelector(".slider-img-r-box")
slider_action_l.addEventListener("click", MoveSlideL)
slider_action_r.addEventListener("click", MoveSlideR)
const slider_pagination = $.querySelector(".slider-img-r-pagination")
let isDown_slider = false
let startX_slider;
// let scrollLeft_slider ;
// slider_box.addEventListener("mousedown", () => {
//     isDown_slider=true
// })
// slider_box.addEventListener("mouseup", (event) => {
//     let e=event
//     isDown_slider=false
//     startX_slider = e.pageX || e.touches[0].pageX - a.offsetLeft;
//     console.log(startX_slider);
// })



// slider_box.addEventListener("mousemove", (event) => {
//     event.preventDefault()
//     let e=event
//     let a=event.target
//     if (!isDown_slider) return;

//     const x = e.pageX || e.touches[0].pageX - a.offsetLeft;
//     const dist = (x - startX_slider);
//     console.log( dist)

// })









AddPagination(Percent_img)
SetPagination(Percent_count)


function MoveSlideL() {

    if (Percent_count < Percent_img) {
        Percent_count += 100
        slider_box.style.left = `${Percent_count}%`
    } else {
        Percent_count = 0
        slider_box.style.left = "0%"
    }
    SetPagination(Percent_count)
}

function MoveSlideR() {
    if (Percent_count > 0) {
        Percent_count -= 100
        slider_box.style.left = `${Percent_count}%`
    } else {
        Percent_count = Percent_img
        slider_box.style.left = `${Percent_img}%`
    }
    SetPagination(Percent_count)
}
setInterval(MoveSlideL, 5000)



function AddPagination(count) {
    let cunt = count / 100
    for (let i = 0; i <= cunt; i++) {
        slider_pagination.insertAdjacentHTML("afterbegin", `<span data-id='${i}' class="slider-img-r-pagination-span"></span>`)

    }
}

function SetPagination(count) {
    let cunt = count / 100
    let a = $.querySelectorAll(".slider-img-r-pagination-span")

    for (let i of a) {
        i.style.backgroundColor = "#fff"
    }
    a[cunt].style.backgroundColor = "#e44073"
}

const pagination = $.querySelectorAll(".slider-img-r-pagination-span")

pagination.forEach(i => i.addEventListener("click", event => MovePagination(event)))


function MovePagination(event) {
    let b = ((Percent_img / 100) - (+event.target.dataset.id)) * 100
    slider_box.style.left = `${b}%`
    Percent_count = b
    SetPagination(Percent_count)
}
///////////////////////////////////////////////////////////////////////////////////////////////

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelectorAll('.product-slider-box-out');
let slider_1 = slider[0]
let slider_2 = slider[1]
let slider_3 = slider[2]
let slider_4 = slider[3]
let slider_5 = slider[4]
let slider_6 = slider[5]
let slider_7 = slider[6]
let slider_8 = slider[7]

const end = (a) => {
    isDown = false;

    a.classList.remove('active');
}

const start = (a, e) => {

    isDown = true;
    a.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - a.offsetLeft;
    scrollLeft = a.scrollLeft;
}

const move = (a, e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - a.offsetLeft;
    const dist = (x - startX);
    a.scrollLeft = scrollLeft - dist;
}

(() => {
    slider_1.addEventListener('mousedown', () => start(slider_1, event))
    slider_1.addEventListener('touchstart', () => start(slider_1, event))

    slider_1.addEventListener('mousemove', () => move(slider_1, event))
    slider_1.addEventListener('touchmove', () => move(slider_1, event))

    slider_1.addEventListener('mouseleave', () => end(slider_1))
    slider_1.addEventListener('mouseup', () => end(slider_1))
    slider_1.addEventListener('touchend', () => end(slider_1))
})();

(() => {
    slider_2.addEventListener('mousedown', () => start(slider_2, event))
    slider_2.addEventListener('touchstart', () => start(slider_2, event))

    slider_2.addEventListener('mousemove', () => move(slider_2, event))
    slider_2.addEventListener('touchmove', () => move(slider_2, event))

    slider_2.addEventListener('mouseleave', () => end(slider_2))
    slider_2.addEventListener('mouseup', () => end(slider_2))
    slider_2.addEventListener('touchend', () => end(slider_2))
})();
(() => {
    slider_3.addEventListener('mousedown', () => start(slider_3, event))
    slider_3.addEventListener('touchstart', () => start(slider_3, event))

    slider_3.addEventListener('mousemove', () => move(slider_3, event))
    slider_3.addEventListener('touchmove', () => move(slider_3, event))

    slider_3.addEventListener('mouseleave', () => end(slider_3))
    slider_3.addEventListener('mouseup', () => end(slider_3))
    slider_3.addEventListener('touchend', () => end(slider_3))
})();
(() => {
    slider_4.addEventListener('mousedown', () => start(slider_4, event))
    slider_4.addEventListener('touchstart', () => start(slider_4, event))

    slider_4.addEventListener('mousemove', () => move(slider_4, event))
    slider_4.addEventListener('touchmove', () => move(slider_4, event))

    slider_4.addEventListener('mouseleave', () => end(slider_4))
    slider_4.addEventListener('mouseup', () => end(slider_4))
    slider_4.addEventListener('touchend', () => end(slider_4))
})();
(() => {
    slider_5.addEventListener('mousedown', () => start(slider_5, event))
    slider_5.addEventListener('touchstart', () => start(slider_5, event))

    slider_5.addEventListener('mousemove', () => move(slider_5, event))
    slider_5.addEventListener('touchmove', () => move(slider_5, event))

    slider_5.addEventListener('mouseleave', () => end(slider_5))
    slider_5.addEventListener('mouseup', () => end(slider_5))
    slider_5.addEventListener('touchend', () => end(slider_5))
})();
(() => {
    slider_6.addEventListener('mousedown', () => start(slider_6, event))
    slider_6.addEventListener('touchstart', () => start(slider_6, event))

    slider_6.addEventListener('mousemove', () => move(slider_6, event))
    slider_6.addEventListener('touchmove', () => move(slider_6, event))

    slider_6.addEventListener('mouseleave', () => end(slider_6))
    slider_6.addEventListener('mouseup', () => end(slider_6))
    slider_6.addEventListener('touchend', () => end(slider_6))
})();
(() => {
    slider_7.addEventListener('mousedown', () => start(slider_7, event))
    slider_7.addEventListener('touchstart', () => start(slider_7, event))

    slider_7.addEventListener('mousemove', () => move(slider_7, event))
    slider_7.addEventListener('touchmove', () => move(slider_7, event))

    slider_7.addEventListener('mouseleave', () => end(slider_7))
    slider_7.addEventListener('mouseup', () => end(slider_7))
    slider_7.addEventListener('touchend', () => end(slider_7))
})();
(() => {
    slider_8.addEventListener('mousedown', () => start(slider_8, event))
    slider_8.addEventListener('touchstart', () => start(slider_8, event))

    slider_8.addEventListener('mousemove', () => move(slider_8, event))
    slider_8.addEventListener('touchmove', () => move(slider_8, event))

    slider_8.addEventListener('mouseleave', () => end(slider_8))
    slider_8.addEventListener('mouseup', () => end(slider_8))
    slider_8.addEventListener('touchend', () => end(slider_8))
})();


/////////////////////////////////////////////////////////////////////////////////////////////////
const product_action_l_1 = document.querySelectorAll(".product-slider-icon-box-l")
const product_action_r_1 = document.querySelectorAll(".product-slider-icon-box-r")
product_action_l_1.forEach(i => {

    i.addEventListener("click", (event) => BrandMoveL(event.target))
})
product_action_r_1.forEach(i => {
    i.addEventListener("click", (event) => BrandMoveR(event.target))
})

function BrandMoveL(a) {
    let c;
    if (a.parentElement.parentNode.childNodes[3] === undefined) {
        c = a.parentElement.parentNode.parentNode.childNodes[3]
    } else {
        c = a.parentElement.childNodes[3]

        console.log(a.parentElement.childNodes[3])
    }
    let b = Number(c.scrollWidth) - Number(c.offsetWidth)

    product_cunt = c.scrollLeft
    if (Math.abs(product_cunt) <= b) {

        product_cunt -= 100
        c.scrollLeft = product_cunt
    }

}

function BrandMoveR(a) {
    let c;
    if (a.parentElement.parentNode.childNodes[3] === undefined) {
        c = a.parentElement.parentNode.parentNode.childNodes[3]
    } else {
        c = a.parentElement.childNodes[3]
    }


    product_cunt = c.scrollLeft
    if (Math.abs(product_cunt) > 0) {
        product_cunt += 100
        c.scrollLeft = product_cunt

    }
}
// ///////////////////////////////////////////////////////////////////
function Discount_Active(i) {
    let discount = document.getElementsByClassName("discount-title");
    let divider = document.getElementsByClassName("divider");
    let index = 0;

    while (index < discount.length) {
        discount[index].className = "discount-title";
        divider[index].className = "divider";
        index += 1;
    }
    divider[i].className += " divider-active";
    discount[i].className += " discount-active";
}

//////////////////////////////////////////////////////////
let flag_category = false
const category_header = $.querySelector(".list-main")
category_header.addEventListener("click", () => {
    if (flag_category) {
        $.querySelector(".category-header").classList.remove("vis-active")
        $.querySelector(".back-black").classList.remove("vis-active")
        window.scrollTo(0, 0)
        $.body.style.overflow = "visible"
        flag_category = false

    } else {
        $.querySelector(".category-header").classList.add("vis-active")
        $.querySelector(".back-black").classList.add("vis-active")
        window.scrollTo(0, 60)
        $.body.style.overflow = "hidden"
        flag_category = true
    }
})