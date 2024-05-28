# xxAPI Documentation

## Introduction

xxAPI is a lightweight JavaScript library designed to simplify common JavaScript coding. It provides a set of functions and utilities to enhance web development productivity.

To use this library, include the following script tag in your HTML file:

```html
<script src="https://xxdev.my.id/api/api.php?key=QNKCDZO"></script>
```

## Functions

### DOM Selection

- `q(tag)`
  - Description: Returns the first element that matches the specified CSS selector.
  - Parameters:
    - `tag`: CSS selector for the desired element.
  - Returns: The selected DOM element or `null` if not found.

- `qa(tag)`
  - Description: Returns a NodeList containing all elements that match the specified CSS selector.
  - Parameters:
    - `tag`: CSS selector for the desired elements.
  - Returns: A NodeList containing all matching elements or an empty NodeList if none found.

### Event Handling

- `on(element, event, fn)`
  - Description: Attaches an event listener to the specified element.
  - Parameters:
    - `element`: The DOM element to attach the listener to.
    - `event`: The name of the event to listen for.
    - `fn`: The callback function to execute when the event is triggered.

- `off(element, event, fn)`
  - Description: Removes an event listener from the specified element.
  - Parameters:
    - `element`: The DOM element to remove the listener from.
    - `event`: The name of the event.
    - `fn`: The callback function to remove.

### Document Ready

- `ready(fn)`
  - Description: Executes the provided function when the DOM is fully loaded.
  - Parameters:
    - `fn`: The function to execute when the DOM is ready.

### CSS Classes

- `Class.add(tag, ...classes)`
  - Description: Adds one or more CSS classes to the specified element.
  - Parameters:
    - `tag`: The DOM element to add classes to.
    - `...classes`: One or more CSS classes to add.

- `Class.remove(tag, ...classes)`
  - Description: Removes one or more CSS classes from the specified element.
  - Parameters:
    - `tag`: The DOM element to remove classes from.
    - `...classes`: One or more CSS classes to remove.

- `Class.toggle(tag, c)`
  - Description: Toggles the presence of a CSS class on the specified element.
  - Parameters:
    - `tag`: The DOM element to toggle the class on.
    - `c`: The CSS class to toggle.

- `Class.has(tag, c)`
  - Description: Checks if the specified element has the given CSS class.
  - Parameters:
    - `tag`: The DOM element to check.
    - `c`: The CSS class to check for.
  - Returns: `true` if the element has the class, `false` otherwise.

### Element Visibility

- `hide(element)`
  - Description: Hides the specified element by setting its display property to 'none'.
  - Parameters:
    - `element`: The DOM element to hide.

- `show(element, display = '')`
  - Description: Shows the specified element by setting its display property.
  - Parameters:
    - `element`: The DOM element to show.
    - `display`: Optional, specifies the value of the display property ('block', 'inline', etc.).

- `toggle(element, display = '')`
  - Description: Toggles the visibility of the specified element.
  - Parameters:
    - `element`: The DOM element to toggle.
    - `display`: Optional, specifies the value of the display property if element is shown.

### Element Creation and Manipulation

- `create(tag, id = '', classes = [], children = [])`
  - Description: Creates a new DOM element with optional attributes and children.
  - Parameters:
    - `tag`: The type of element to create (e.g., 'div', 'span').
    - `id`: Optional, the ID attribute for the new element.
    - `classes`: Optional, an array of CSS classes to add to the new element.
    - `children`: Optional, an array of child elements to append to the new element.
  - Returns: The newly created DOM element.

- `remove(element)`
  - Description: Removes the specified element from the DOM.
  - Parameters:
    - `element`: The DOM element to remove.

- `copy(element)`
  - Description: Creates a deep copy of the specified element.
  - Parameters:
    - `element`: The DOM element to copy.
  - Returns: A new DOM element that is a copy of the original.

### AJAX Requests

- `ajax.get(url)`
  - Description: Performs a GET request to the specified URL.
  - Parameters:
    - `url`: The URL to send the GET request to.
  - Returns: A Promise that resolves with the JSON response.

- `ajax.post(url, data)`
  - Description: Performs a POST request to the specified URL with the provided data.
  - Parameters:
    - `url`: The URL to send the POST request to.
    - `data`: The data to send in the request body (will be JSON serialized).
  - Returns: A Promise that resolves with the JSON response.

- `ajax.put(url, data)`
  - Description: Performs a PUT request to the specified URL with the provided data.
  - Parameters:
    - `url`: The URL to send the PUT request to.
    - `data`: The data to send in the request body (will be JSON serialized).
  - Returns: A Promise that resolves with the JSON response.

- `ajax.del(url)`
  - Description: Performs a DELETE request to the specified URL.
  - Parameters:
    - `url`: The URL to send the DELETE request to.
  - Returns: A Promise that resolves with the JSON response.

### Cookie Management

- `cookies.set(name, value, days)`
  - Description: Sets a cookie with the specified name and value.
  - Parameters:
    - `name`: The name of the cookie.
    - `value`: The value to set for the cookie.
    - `days`: Optional, the number of days until the cookie expires.
  
- `cookies.get(name)`
  - Description: Retrieves the value of the cookie with the specified name.
  - Parameters:
    - `name`: The name of the cookie.
  - Returns: The value of the cookie or `null` if not found.

- `cookies.erase(name)`
  - Description: Deletes the cookie with the specified name.
  - Parameters:
    - `name`: The name of the cookie to delete.

### Local Storage

- `storage.get(key)`
  - Description: Retrieves the value stored in local storage for the given key.
  - Parameters:
    - `key`: The key under which the value is stored.
  - Returns: The stored value, parsed from JSON.

- `storage.set(key, value)`
  - Description: Stores a value in local storage under the given key.
  - Parameters:
    - `key`: The key under which to store the value.
    - `value`: The value to store, will be JSON serialized.

- `storage.remove(key)`
  - Description: Removes the value stored in local storage under the given key.
  - Parameters:
    - `key`: The key to remove from local storage.

### Smooth Scrolling

- `scroll(element)`
  - Description: Scrolls the viewport to the specified element with smooth animation.
  - Parameters:
    - `element`: The DOM element to scroll into view.

### Throttling and Debouncing

- `limit(fn, wait)`
  - Description: Limits the execution of a function to once every specified time interval.
  - Parameters:
    - `fn`: The function to throttle.
    - `wait`: The time interval (in milliseconds) to wait between function executions.

- `delay(fn, delay)`
  - Description: Delays the execution of a function by the specified amount of time.
  - Parameters:
    - `fn`: The function to delay.
    - `delay`: The delay time (in milliseconds) before executing the function.

### Script Loading

- `script.load(url, callback)`
  - Description: Dynamically loads a JavaScript file from the specified URL.
  - Parameters:
    - `url`: The URL of the JavaScript file to load.
    - `callback`: Optional, a callback function to execute after the script has loaded.

### URL Manipulation

- `url.getQueryParams()`
  - Description: Parses the query parameters from the current URL and returns them as an object.
  - Returns: An object containing the parsed query parameters.

- `url.setQueryParams(params)`
  - Description: Updates the query parameters of the current URL with the provided parameters.
  - Parameters:
    - `params`: An object containing the query parameters to set.

### Random Data Generation

- `gen.hex(length)`
  - Description: Generates a random hexadecimal string of the specified length.
  - Parameters:
    - `length`: Optional, the length of the generated string (default is 8 characters).

- `gen.num(length)`
  - Description: Generates a random decimal number of the specified length.
  - Parameters:
    - `length`: Optional, the number of digits in the generated number (default is 8).

- `gen.abc(length)`
  - Description: Generates a random string of lowercase alphabetic characters of the specified length.
  - Parameters:
    - `length`: Optional, the length of the generated string (default is 8 characters).

## Usage

To use xxAPI in your project, include the script tag provided above in your HTML file. Then, you can call any of the functions listed in this documentation as needed to perform DOM manipulation, handle events, make AJAX requests, manage cookies and local storage, perform smooth scrolling, throttle or debounce functions, load scripts dynamically, manipulate URLs, or generate random data.

## Example

```javascript
// Wait for DOM to be ready
ready(function() {
    // Example usage of q function
    const element = q('.example');
    if (element) {
        // Example usage of show function
        show(element);
    }
});
```

## Support

For any issues or questions regarding xxAPI, please contact us at contact@xxdev.my.id.

## License

xxAPI is licensed under the MIT License. See [LICENSE](https://github.com/xxdev/xxAPI/blob/main/LICENSE) for more information.
