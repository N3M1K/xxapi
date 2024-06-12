//COPYRIGHT start
window.onload = function() {
    console.log('On this web is used xxAPI from xxDev')
    console.log("xxDev: https://xxdev.my.id")
    console.log("xxAPI: https://github.com/N3M1K/xxapi")
};
//COPYRIGHT end


// xxAPI JavaScript front-end library:

Element.prototype.on = function(event, fn) {
    this.addEventListener(event, fn);
};

Element.prototype.off = function(event, fn) {
    this.removeEventListener(event, fn);
};

Element.prototype.print = function(content) {
    this.innerHTML = content;
};

Element.prototype.append = function(content) {
    this.innerHTML += content;
};

Element.prototype.hide = function() {
    this.style.display = 'none';
};

Element.prototype.show = function(display = '') {
    this.style.display = display;
};

Element.prototype.toggle = function(display = "") {
    if (window.getComputedStyle(this).display === 'none') {
        this.show(display);
    } else {
        this.hide();
    }
};

function q(selector) {
    return document.querySelector(selector);
}

function qa(selector) {
    return document.querySelectorAll(selector);
}

const d = {
    on: function dOn(event, fn) {
        document.addEventListener(event, fn);
    },
    off: function dOff(event, fn) {
        document.removeEventListener(event, fn);
    }
};

function cl(parameter) {
    console.log(parameter);
}

Element.prototype.Class = {
    add: function(...classes) {
        this.classList.add(...classes);
    },
    remove: function(...classes) {
        this.classList.remove(...classes);
    },
    toggle: function(c) {
        this.classList.toggle(c);
    },
    has: function(c) {
        return this.classList.contains(c);
    }
};

function create(tag, id = '', ...classes) {
    const element = document.createElement(tag);
    if (id) {
        element.id = id;
    }
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    return element;
}

Element.prototype.remove = function() {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
};

Element.prototype.copy = function() {
    return this.cloneNode(true);
};

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
};

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
};

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
};

function scroll(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

function scrollTop() {
    window.scrollTo({
        top: 0,
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
};

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
};

const xx = {
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
};

function getData(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => {
        if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        } else {
            obj[key] = value;
        }
    });
    return obj;
}

Element.prototype.css = function(property, value) {
    if (value === undefined) {
        return getComputedStyle(this).getPropertyValue(property);
    } else {
        this.style[property] = value;
    }
};





















function transpile() {
    const xscripts = qa('xscript');
    if (xscripts) {
        xscripts.forEach(script => {
            const scriptElement = create('script');
            document.body.appendChild(scriptElement);

            const src = script.getAttribute('src') || "";
            if (src.length > 0) {
                fetch(src)
                    .then(response => response.text())
                    .then(data => {
                        scriptElement.innerHTML = transpileToJavaScript(data);
                    })
                    .catch(error => console.error('Error fetching file:', error));
            } else {
                scriptElement.innerHTML = transpileToJavaScript(script.innerHTML);
            }
        });
    }
}

function transpileToJavaScript(code) {
    // Nahrazení klíčových slov ze souboru *.xx
    return code.replace(/\bl\b/g, 'let')
               .replace(/\bc\b/g, 'const')
               .replace(/\bfn\b/g, 'function');
}

// Spuštění transpilace po načtení DOM
document.addEventListener('DOMContentLoaded', transpile);
