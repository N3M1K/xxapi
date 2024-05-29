//xxAPI JavaScript front-end library

window.onload = function() {
    console.log('On this web is used xxAPI from xxDev')
    console.log("xxDev: https://xxdev.my.id")
    console.log("xxAPI: https://github.com/N3M1K/xxAPI")
};

const dom = 'DOMContentLoaded'

function q(tag) {
    const element = document.querySelector(tag);
    if (!element) {
        console.warn(`Element ${tag} has not been founded.`);
    }
    return element;
}
function qa(tag) {
    const elements = document.querySelectorAll(tag);
    if (elements.length === 0) {
        console.warn(`Elements ${tag} have not been founded.`);
    }
    return elements;
}
function on(element, event, fn) {
    if (element) {
        element.addEventListener(event, fn);
    }
}
function off(element, event, fn) {
    if (element) {
        element.removeEventListener(event, fn);
    }
}
const d = {
    on: function dOn(event, fn) {
        document.addEventListener(event, fn);
    },

    off: function dOff(event, fn) {
        document.removeEventListener(event, fn);
    }
}

function cl(parameter) {
    console.log(parameter);
}


const Class = {
    add: function(tag, ...classes) {
        tag.classList.add(...classes);
    },
    remove: function(tag, ...classes) {
        tag.classList.remove(...classes);
    },
    toggle: function(tag, c) {
        tag.classList.toggle(c);
    },
    has: function(tag, c) {
        return tag.classList.contains(c);
    }
}


function hide(element) {
    element.style.display = 'none';
}

function show(element, display = '') {
    element.style.display = display;
}

function toggle(element, display = "") {
    if (window.getComputedStyle(element).display === 'none') {
        show(element, display);
    } else {
        hide(element);
    }
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function create(tag, id = '', classes = [], children = []) {
    const element = document.createElement(tag);
    if (id) {
        element.id = id;
    }
    if (Array.isArray(classes) && classes.length > 0) {
        element.classList.add(...classes);
    }
    children.forEach(child => element.appendChild(child));
    return element;
}
function remove(element) {
    element.parentNode.removeChild(element);
}
function copy(element) {
    return element.cloneNode(true);
}

const ajax = {
    get: function ajaxGet(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
    },
    post: function ajaxPost(url, data) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
          .catch(error => console.error('Error:', error));
    },
    put: function ajaxPut(url, data) {
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
          .catch(error => console.error('Error:', error));
    },
    del: function ajaxDelete(url) {
        return fetch(url, {
            method: 'DELETE',
        }).then(response => response.json())
          .catch(error => console.error('Error:', error));
    }
}


const cookies = {
    set: function(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    get: function(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    erase: function(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
}

const storage = {
    get: function(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    set: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove: function(key) {
        localStorage.removeItem(key);
    }
}

function scroll(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

function scrollTop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
}

function limit(fn, wait) {
    let time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

function delay(fn, delay) {
    let timeoutID;
    return function() {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => fn(), delay);
    }
}

const script = {
    load: function loadScript(url, callback) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }
}

const url = {
    get: function getQueryParams() {
        const params = {};
        const queryString = window.location.search.slice(1);
        queryString.split('&').forEach(param => {
            const [key, value] = param.split('=');
            params[key] = decodeURIComponent(value);
        });
        return params;
    },
    set: function setQueryParams(params) {
        const queryString = Object.keys(params).map(key => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
        }).join('&');
        history.replaceState(null, '', '?' + queryString);
    }
}

const gen = {
    hex: function generateRandomHex(length = 8) {
        const characters = 'abcdef0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return result;
    },
    num: function generateRandomDecimal(length = 8) {
        const characters = '0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return parseInt(result); // Konvertujeme řetězec na číslo
    },
    abc: function generateRandomLetterId(length = 8) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            result += alphabet.charAt(randomIndex);
        }

        return result;
    }
}
