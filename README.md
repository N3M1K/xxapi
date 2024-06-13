# xxAPI Documentation

Welcome to the documentation for xxAPI, a JavaScript frontend library developed by xxDev. This document will guide you through the setup and usage of xxAPI, describing its various functions and their parameters.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Reference](#api-reference)
    - [Element Selection](#element-selection)
    - [Event Handling](#event-handling)
    - [Class Manipulation](#class-manipulation)
    - [Element Visibility](#element-visibility)
    - [DOM Manipulation](#dom-manipulation)
    - [AJAX Requests](#ajax-requests)
    - [Cookie Management](#cookie-management)
    - [Local Storage](#local-storage)
    - [Scrolling](#scrolling)
    - [Function Utilities](#function-utilities)
    - [Script Loading](#script-loading)
    - [URL Handling](#url-handling)
    - [Random Generators](#random-generators)

## Installation

To use xxAPI in your web project, follow these steps:

1. **Download the `xxapi` folder:**
   Download the folder from `releases` and include it in your web project.

2. **Include the xxAPI script:**
   Add the following script tag to the `<head>` element of your HTML file, adjusting the `src` attribute to the correct path:

   ```html
   <script src="path/to/xxapi.js"></script>
   ```

## Usage

To use xxAPI in your project, simply include the script file as described in the installation section. xxAPI supports xscript, a lightly modified version of JavaScript with `.xs` file extensions. You can include xscript files using the `<xscript>` tag.

```html
<xscript src="path/to/script.xs"></xscript>

<xscript>
    // xscript code here
</xscript>
```

## API Reference

### Element Selection

- `q(selector)`
    - Selects a single element matching the selector.
    - **Parameters:** 
        - `selector` (string): The CSS selector to match.
    - **Returns:** 
        - The first element that matches the selector.
- `qa(selector)`
    - Selects all elements matching the selector.
    - **Parameters:** 
        - `selector` (string): The CSS selector to match.
    - **Returns:** 
        - A NodeList of elements that match the selector.

### Event Handling

- `Element.prototype.on(event, fn)`
    - Adds an event listener to an element.
    - **Parameters:** 
        - `event` (string): The event type to listen for.
        - `fn` (function): The event handler function.
- `Element.prototype.off(event, fn)`
    - Removes an event listener from an element.
    - **Parameters:** 
        - `event` (string): The event type to remove.
        - `fn` (function): The event handler function to remove.
- `d.on(event, fn)`
    - Adds an event listener to the document.
    - **Parameters:** 
        - `event` (string): The event type to listen for.
        - `fn` (function): The event handler function.
- `d.off(event, fn)`
    - Removes an event listener from the document.
    - **Parameters:** 
        - `event` (string): The event type to remove.
        - `fn` (function): The event handler function to remove.

### Class Manipulation

- `Element.prototype.Class.add(...classes)`
    - Adds one or more classes to an element.
- `Element.prototype.Class.remove(...classes)`
    - Removes one or more classes from an element.
- `Element.prototype.Class.toggle(c)`
    - Toggles a class on an element.
- `Element.prototype.Class.has(c)`
    - Checks if an element has a specific class.

### Element Visibility

- `Element.prototype.hide()`
    - Hides an element by setting its display to 'none'.
- `Element.prototype.show(display = '')`
    - Shows an element by setting its display property.
- `Element.prototype.toggle(display = "")`
    - Toggles the visibility of an element.

### DOM Manipulation

- `Element.prototype.print(content)`
    - Sets the innerHTML of an element.
- `Element.prototype.append(content)`
    - Appends content to the innerHTML of an element.
- `Element.prototype.remove()`
    - Removes an element from the DOM.
- `Element.prototype.copy()`
    - Creates a deep clone of an element.
- `create(tag, id = '', ...classes)`
    - Creates a new element with the specified tag, id, and classes.

### AJAX Requests

- `ajax.get(url)`
    - Makes a GET request to the specified URL.
- `ajax.post(url, data)`
    - Makes a POST request to the specified URL with the provided data.
- `ajax.put(url, data)`
    - Makes a PUT request to the specified URL with the provided data.
- `ajax.del(url)`
    - Makes a DELETE request to the specified URL.

### Cookie Management

- `cookies.set(name, value, days)`
    - Sets a cookie with the specified name, value, and expiration days.
- `cookies.get(name)`
    - Retrieves the value of the cookie with the specified name.
- `cookies.erase(name)`
    - Deletes the cookie with the specified name.

### Local Storage

- `storage.get(key)`
    - Retrieves the value associated with the specified key from local storage.
- `storage.set(key, value)`
    - Stores the value with the specified key in local storage.
- `storage.remove(key)`
    - Removes the key and its associated value from local storage.

### Scrolling

- `scroll(element)`
    - Scrolls the specified element into view smoothly.
- `scrollTop()`
    - Scrolls the window to the top smoothly.

### Function Utilities

- `limit(fn, wait)`
    - Limits the execution of a function to once per specified time interval.
- `delay(fn, delay)`
    - Delays the execution of a function by the specified time interval.

### Script Loading

- `script.load(url, callback)`
    - Dynamically loads a script from the specified URL and executes a callback function once the script is loaded.

### URL Handling

- `url.get()`
    - Retrieves the query parameters from the current URL as an object.
- `url.set(params)`
    - Sets the query parameters of the current URL with the specified object.

### Random Generators

- `xx.hex(length = 8)`
    - Generates a random hexadecimal string of the specified length.
- `xx.num(length = 8)`
    - Generates a random decimal number of the specified length.
- `xx.abc(length = 8)`
    - Generates a random alphabetic string of the specified length.

### Form Utilities

- `getData(form)`
    - Retrieves the form data as an object.

### CSS Manipulation

- `Element.prototype.css(property, value)`
    - Gets or sets the CSS property of an element.

---

For more detailed examples and usage, please refer to the individual function documentation within the xxAPI source code.
