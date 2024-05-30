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
   <script defer src="/path/to/xxapi/api.js"></script>
   ```

## Usage

Once you have included the xxAPI script, you can use its functions as described in the API reference below.

## API Reference

### Element Selection

- **`q(tag)`**
  - **Description:** Selects a single element matching the provided CSS selector.
  - **Parameters:**
    - `tag` (string): The CSS selector of the element.
  - **Returns:** The selected element, or `null` if not found.

- **`qa(tag)`**
  - **Description:** Selects all elements matching the provided CSS selector.
  - **Parameters:**
    - `tag` (string): The CSS selector of the elements.
  - **Returns:** A NodeList of the selected elements.

### Event Handling

- **`on(element, event, fn)`**
  - **Description:** Attaches an event listener to the specified element.
  - **Parameters:**
    - `element` (Element): The target element.
    - `event` (string): The event type (e.g., 'click').
    - `fn` (function): The event handler function.

- **`off(element, event, fn)`**
  - **Description:** Removes an event listener from the specified element.
  - **Parameters:**
    - `element` (Element): The target element.
    - `event` (string): The event type.
    - `fn` (function): The event handler function.

- **`d.on(event, fn)`**
  - **Description:** Attaches an event listener to the document.
  - **Parameters:**
    - `event` (string): The event type.
    - `fn` (function): The event handler function.

- **`d.off(event, fn)`**
  - **Description:** Removes an event listener from the document.
  - **Parameters:**
    - `event` (string): The event type.
    - `fn` (function): The event handler function.

### Class Manipulation

- **`Class.add(tag, ...classes)`**
  - **Description:** Adds one or more classes to the specified element.
  - **Parameters:**
    - `tag` (Element): The target element.
    - `...classes` (string): One or more class names to add.

- **`Class.remove(tag, ...classes)`**
  - **Description:** Removes one or more classes from the specified element.
  - **Parameters:**
    - `tag` (Element): The target element.
    - `...classes` (string): One or more class names to remove.

- **`Class.toggle(tag, c)`**
  - **Description:** Toggles the specified class on the element.
  - **Parameters:**
    - `tag` (Element): The target element.
    - `c` (string): The class name to toggle.

- **`Class.has(tag, c)`**
  - **Description:** Checks if the specified element has the given class.
  - **Parameters:**
    - `tag` (Element): The target element.
    - `c` (string): The class name to check.
  - **Returns:** `true` if the element has the class, `false` otherwise.

### Element Visibility

- **`hide(element)`**
  - **Description:** Hides the specified element.
  - **Parameters:**
    - `element` (Element): The target element.

- **`show(element, display = '')`**
  - **Description:** Shows the specified element.
  - **Parameters:**
    - `element` (Element): The target element.
    - `display` (string): The display value to use (default is '').

- **`toggle(element, display = "")`**
  - **Description:** Toggles the visibility of the specified element.
  - **Parameters:**
    - `element` (Element): The target element.
    - `display` (string): The display value to use when showing the element.

### DOM Manipulation

- **`ready(fn)`**
  - **Description:** Executes the function when the DOM is fully loaded.
  - **Parameters:**
    - `fn` (function): The function to execute.

- **`create(tag, id = '', classes = [], children = [])`**
  - **Description:** Creates a new element with specified attributes and children.
  - **Parameters:**
    - `tag` (string): The tag name of the element.
    - `id` (string): The ID of the element.
    - `classes` (Array): An array of class names.
    - `children` (Array): An array of child elements to append.
  - **Returns:** The created element.

- **`remove(element)`**
  - **Description:** Removes the specified element from the DOM.
  - **Parameters:**
    - `element` (Element): The element to remove.

- **`copy(element)`**
  - **Description:** Creates a deep copy of the specified element.
  - **Parameters:**
    - `element` (Element): The element to copy.
  - **Returns:** The copied element.

### AJAX Requests

- **`ajax.get(url)`**
  - **Description:** Sends a GET request to the specified URL.
  - **Parameters:**
    - `url` (string): The URL to request.
  - **Returns:** A promise that resolves to the response data.

- **`ajax.post(url, data)`**
  - **Description:** Sends a POST request to the specified URL with the given data.
  - **Parameters:**
    - `url` (string): The URL to request.
    - `data` (object): The data to send.
  - **Returns:** A promise that resolves to the response data.

- **`ajax.put(url, data)`**
  - **Description:** Sends a PUT request to the specified URL with the given data.
  - **Parameters:**
    - `url` (string): The URL to request.
    - `data` (object): The data to send.
  - **Returns:** A promise that resolves to the response data.

- **`ajax.del(url)`**
  - **Description:** Sends a DELETE request to the specified URL.
  - **Parameters:**
    - `url` (string): The URL to request.
  - **Returns:** A promise that resolves to the response data.

### Cookie Management

- **`cookies.set(name, value, days)`**
  - **Description:** Sets a cookie with the specified name, value, and expiration in days.
  - **Parameters:**
    - `name` (string): The name of the cookie.
    - `value` (string): The value of the cookie.
    - `days` (number): The number of days until the cookie expires.

- **`cookies.get(name)`**
  - **Description:** Retrieves the value of the specified cookie.
  - **Parameters:**
    - `name` (string): The name of the cookie.
  - **Returns:** The value of the cookie, or `null` if not found.

- **`cookies.erase(name)`**
  - **Description:** Deletes the specified cookie.
  - **Parameters:**
    - `name` (string): The name of the cookie.

### Local Storage

- **`storage.get(key)`**
  - **Description:** Retrieves the value associated with the specified key from local storage.
  - **Parameters:**
    - `key` (string): The key of the item.
  - **Returns:** The value associated with the key.

- **`storage.set(key, value)`**
  - **Description:** Sets the value for the specified key in local storage.
  - **Parameters:**
    - `key` (string): The key of the item.
    - `value` (any): The value to store.

- **`storage.remove(key)`**
  - **Description:** Removes the item with the specified key from local storage.
  - **Parameters:**
    - `key` (string): The key of the item.

### Scrolling

- **`scroll(element)`**
  - **Description:** Smoothly scrolls the specified element into view.
  - **Parameters:**
    - `element` (Element): The element to scroll into view.

- **

`scrollTop()`**
  - **Description:** Smoothly scrolls the window to the top.

### Function Utilities

- **`limit(fn, wait)`**
  - **Description:** Limits the execution of a function to once every specified number of milliseconds.
  - **Parameters:**
    - `fn` (function): The function to limit.
    - `wait` (number): The number of milliseconds to wait before allowing the function to execute again.

- **`delay(fn, delay)`**
  - **Description:** Delays the execution of a function by the specified number of milliseconds.
  - **Parameters:**
    - `fn` (function): The function to delay.
    - `delay` (number): The number of milliseconds to delay the function.

### Script Loading

- **`script.load(url, callback)`**
  - **Description:** Loads an external script and executes a callback upon completion.
  - **Parameters:**
    - `url` (string): The URL of the script to load.
    - `callback` (function): The function to execute after the script loads.

### URL Handling

- **`url.get()`**
  - **Description:** Retrieves the query parameters from the current URL as an object.
  - **Returns:** An object containing the query parameters.

- **`url.set(params)`**
  - **Description:** Sets the query parameters in the current URL.
  - **Parameters:**
    - `params` (object): An object containing the query parameters to set.

### Random Generators

- **`gen.hex(length = 8)`**
  - **Description:** Generates a random hexadecimal string of the specified length.
  - **Parameters:**
    - `length` (number): The length of the generated string (default is 8).
  - **Returns:** A random hexadecimal string.

- **`gen.num(length = 8)`**
  - **Description:** Generates a random decimal number with the specified number of digits.
  - **Parameters:**
    - `length` (number): The number of digits (default is 8).
  - **Returns:** A random decimal number.

- **`gen.abc(length = 8)`**
  - **Description:** Generates a random string of letters with the specified length.
  - **Parameters:**
    - `length` (number): The length of the generated string (default is 8).
  - **Returns:** A random string of letters.

### Example Usage

Here's a simple example of how you can use some of the xxAPI functions:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xxAPI Example</title>
    <script defer src="/path/to/xxapi/api.js"></script>
</head>
<body>
    <div id="content" class="hidden">Hello, World!</div>
    <button id="toggleBtn">Toggle Content</button>

    <script>
        ready(function() {
            const content = q('#content');
            const toggleBtn = q('#toggleBtn');

            on(toggleBtn, 'click', function() {
                toggle(content, 'block');
            });

            // Example of using ajax
            ajax.get('https://api.example.com/data')
                .then(data => console.log(data))
                .catch(error => console.error(error));

            // Example of using cookies
            cookies.set('username', 'john_doe', 7);
            console.log(cookies.get('username'));
        });
    </script>
</body>
</html>
```

In this example:
- The `ready` function ensures the code runs only after the DOM has fully loaded.
- The `q` function is used to select the content div and toggle button.
- An event listener is added to the button to toggle the visibility of the content div.
- The `ajax.get` function demonstrates how to make a GET request and handle the response.
- The `cookies` object is used to set and get a cookie.

## Conclusion

xxAPI offers a range of utility functions to simplify common tasks in frontend development, from DOM manipulation to AJAX requests and cookie management. By following this documentation, you can quickly integrate and use xxAPI in your projects.

For more information and updates, visit:
- xxDev: [https://xxdev.my.id](https://xxdev.my.id)
- xxAPI on GitHub: [https://github.com/N3M1K/xxAPI](https://github.com/N3M1K/xxAPI)

Feel free to explore and contribute to the project!
