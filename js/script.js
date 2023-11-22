const $=document


const slider_action_l = $.querySelector(".slider-img-r-icon-l")
const slider_action_r = $.querySelector(".slider-img-r-icon-r")
const slider_img = $.querySelectorAll(".slider-img-r-img ")
const Percent_img = slider_img.length * 100 - 100
let Percent_count = 0
let slider_box = $.querySelector(".slider-img-r-box")
slider_action_l.addEventListener("click", MoveSlideL)
slider_action_r.addEventListener("click", MoveSlideR)
const slider_pagination = $.querySelector(".slider-img-r-pagination")

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
//////////////////////////////////////////////////////////////////////////////////////////

const product_action_l = $.querySelector(".product-slider-icon-l")
const product_action_r = $.querySelector(".product-slider-icon-r")
const product_part = $.querySelector(".product-slider-box-out")
const product_box = $.querySelector(".product-slider")
const product_width = Number(product_box.offsetWidth) - Number(product_part.offsetWidth)
product_part.style.left = `${product_width}px`
let product_cunt = product_width
product_action_l.addEventListener("click", BrandMoveL)
product_action_r.addEventListener("click", BrandMoveR)

function BrandMoveL() {
    if (product_cunt <= 0) {
        product_cunt += 85
        product_part.style.left = `${product_cunt}px`
        product_action_r.classList.add("visibale")
        product_action_r.classList.remove("disable")
    }
    if (product_cunt >= 0) {
        product_action_l.classList.add("disable")
        product_part.style.left = `${0}px`
    }
}

function BrandMoveR() {
    if (product_cunt > product_width) {
        product_cunt -= 85
        product_part.style.left = `${product_cunt}px`
        product_action_l.classList.remove("disable")
    }
    if (product_cunt <= product_width) {
        product_action_r.classList.add("disable")
    }
}