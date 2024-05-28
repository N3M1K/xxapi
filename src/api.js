window.onload = function() {
    console.log('On this web is used xxAPI from <a href="https://xxdev.my.id">xxDev</a>')
};

const dom = 'DOMContentLoaded'

function q(tag) {
    document.querySelector(tag);
}
function qa(tag) {
    document.querySelectorAll(tag);
}
function el(tag, event, fn) {
    tag.addEventListener(event, fn);
}
const d = {
    el: function el(event, fn) {
        document.addEventListener(event, fn);
    }
}
function blur(tag, intensity) {
    tag.style.filter = 'blur(' + intensity + 'px)';
}

function cl(parameter) {
    console.log(parameter);
}

const Class = {
    add: function add(tag, c) {
        tag.classList.add(c)
    },
    remove: function add(tag, c) {
        tag.classList.add(c)
    }
}