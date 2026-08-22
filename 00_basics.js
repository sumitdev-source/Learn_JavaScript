/*
1. What is JavaScript?
JavaScript is a high-level programming language used to add behavior and interactivity to applications, especially web pages.

*Think of a website as three major things:
-> HTML → structure/content
-> CSS → appearance/design
-> JavaScript → behavior/logic

* For example:
HTML       → "Login" button exists
CSS        → Button is blue and looks good
JavaScript → What happens when I click the button?


2. Why was JavaScript created?

This is the important historical part.
In the early days of the web, websites were mostly static.
Imagine a webpage containing:
Name: [________]
Password: [________]
       [Login]

-> When you clicked Login, the browser often had to send the information to the server, wait for the server to process it, and then receive a new webpage.
-> There was very little logic happening directly inside the browser.
-> The web needed a programming language that could run inside the browser and make webpages interactive. That's where JavaScript came in.
* The original problem:
    Static Web
        ↓
    User does something
        ↓
    Request goes to server
        ↓
    Server processes it
        ↓
    Server sends response
        ↓
    Browser displays new page

* Then, JavaScript introduced the ability to do some logic directly in the browser:
    User does something
          ↓
    JavaScript runs in browser
          ↓
    Page responds immediately  

-> So the fundamental reason JavaScript was created was:
To make web pages interactive and capable of running logic in the browser.

3. Who created JavaScript?
-> JavaScript was created by Brendan Eich at Netscape in 1995.
-> It was originally developed for Netscape Navigator, one of the major web browsers at that time.
-> It was created very quickly because Netscape wanted a scripting language that could be used by web developers to add behavior to webpages.

4. What was JavaScript originally called?
-> JavaScript went through several names. 
    -  Initially, it was called Mocha.
    -  Later, it was called LiveScript.
    -  Eventually, it became JavaScript.
-> But here's an important point:
JavaScript is not a version of Java and is not fundamentally based on Java.

-> The name "JavaScript" was largely influenced by the popularity of Java at the time and marketing considerations.
So: Java       ≠       JavaScript, They are separate programming languages.

5. Why does JavaScript run in the browser?
-> Because browsers contain a JavaScript engine, The browser provides an environment capable of reading and executing JavaScript code.
-> For example: alert("Hello"); (The browser's JavaScript engine executes that code.)

-> Different browsers historically used different engines:
    Chrome       → V8
    Firefox      → SpiderMonkey
    Safari       → JavaScriptCore
    Edge         → V8

-> You don't need to memorize all of these yet. For a fresher, the important concept is:
   Browser → JavaScript Engine → Executes JavaScript
*/

/*
NOTE;
STATEMENT: JavaScript runs in the browser → dynamically updates the webpage without a full page reload → makes the webpage dynamic and interactive.

-> One small caveat(condition): Dynamic and interactive webpages don't always require avoiding a full reload. JavaScript can also cause navigation or a reload when needed. But for understanding the core purpose of JavaScript, your statement is correct.
*/

/*
What specifically can JavaScript do?
(1) Make webpages interactive;
JavaScript can respond to user actions.
For example:
button clicks
typing
mouse movement
selecting options
submitting forms
scrolling

Example:
Click "Show Password"
        ↓
JavaScript changes password field
        ↓
Password becomes visible

Without JavaScript, many such interactions wouldn't happen dynamically.

(2) Dynamically change the webpage;
JavaScript can modify the current webpage while it is running.
For example:
User clicks "Add to Cart"
        ↓
JavaScript updates cart count
        ↓
"Cart (2)" → "Cart (3)"
The entire webpage doesn't necessarily need to reload.

This connects to what you were asking earlier:
By dynamically updating the current page without a full reload when appropriate, JavaScript makes webpages dynamic and interactive.

(3) Validate user input;
JavaScript can check data before sending it to the server.
Example:
Email: abc
Password: 123
        ↓
JavaScript checks input
        ↓
"Please enter a valid email"

This is called client-side validation.

-> But important:
Client-side validation is for user experience; the backend must still validate the data for security.

-> JavaScript is the programming language.
-> JavaScript
   ↓
React → frontend UI
Node.js → server-side runtime
Express → backend framework
React Native → mobile apps
Electron → desktop apps

(4) Communicate with a backend/server;
This is extremely important for a full-stack developer.
JavaScript can send requests to APIs.
For example:
Frontend
   ↓
JavaScript
   ↓
GET /users
   ↓
Backend API
   ↓
Database

The backend sends data back:
Database
   ↓
Backend
   ↓
JSON response
   ↓
JavaScript
   ↓
Update webpage

For example, an e-commerce page can use JavaScript to request:
GET /products
and then display the products returned by the backend.
*/

/*
How is JavaScript different from Java?
-> JavaScript and Java are completely different programming languages. 
-> JavaScript is mainly used for web development, while Java is commonly used for backend and enterprise application development. 
-> JavaScript is dynamically typed and prototype-based, whereas Java is statically typed and class-based. 
-> JavaScript is executed by a JavaScript engine such as V8, while Java programs run on the JVM (Java Virtual Machine).

EXAMPLE:
JAVASCRIPT;
let x = 10;
x = "Hello";  // Valid, IT IS KNOWN AS DYNAMICALLY TYPED

JAVA;
int x = 10;
x = "Hello";  // Error, IT IS KNOWN AS STATICALLY TYPED
*/

/*
How does JavaScript work with a web browser?
-> When a user opens a web page, the browser downloads the HTML, CSS, and JavaScript files. The browser creates the page from HTML/CSS and uses a JavaScript engine to execute the JavaScript code.

FLOW;
User enters URL
      ↓
Browser sends request to server
      ↓
Server sends HTML, CSS, JavaScript
      ↓
Browser receives the files
      ↓
HTML → DOM is created
CSS → CSSOM is created
      ↓
JavaScript Engine executes JavaScript
      ↓
JavaScript can access/modify the DOM
      ↓
Browser updates the page
      ↓
User sees the result.

EXPLANATION OF FLOW;
-> User enters a URL
Example: https://example.com
The user asks the browser to open a website.

-> Browser sends a request to the server
The browser sends an HTTP/HTTPS request to the website's server.
Basically: "Give me the resources for this webpage."

-> Server sends HTML, CSS, and JavaScript
The server responds with the required files.
HTML → structure of the webpage
CSS → styling
JavaScript → behavior/logic

-> Browser receives the files
The browser downloads and starts processing these resources.

-> HTML → DOM is created
The browser reads the HTML.
It converts the HTML into a DOM (Document Object Model).
JavaScript uses the DOM to access and change HTML elements.
Example: <h1>Hello</h1>
Browser creates a DOM representation of that <h1>.

-> CSS → CSSOM is created
The browser reads the CSS.
It creates a CSSOM (CSS Object Model).
This represents the styles that should be applied to the elements.

-> JavaScript Engine executes JavaScript
The browser's JavaScript engine executes the JavaScript code.
For example, Chrome uses V8.

-> JavaScript can access/modify the DOM
JavaScript can find HTML elements and change them.
document.querySelector("h1").textContent = "Welcome";
Here, JavaScript changes the <h1> text from Hello to Welcome.

-> Browser updates the page
Because the DOM or styles changed, the browser determines what needs to be updated and renders the changes.

-> User sees the result
The updated webpage appears on the screen.

WHEN THE USER CLICKS THE BUTTON:

User clicks button
      ↓
Browser detects the click
      ↓
JavaScript function runs
      ↓
DOM is modified
      ↓
<h1> changes from "Hello" → "Welcome"
      ↓
Browser renders the updated page

THE KEY IDEA;
-> The JavaScript engine does not update the webpage directly.
-> It executes JavaScript, and JavaScript can modify the DOM. Then the browser renders the changes on the screen.
*/

/*
What happens from entering a URL until JavaScript runs?
When a user enters a URL, the browser performs several steps before JavaScript can execute:

1. URL → DNS Lookup

Browser needs the server's IP address.
DNS converts the domain name, e.g. google.com, into an IP address.

2. Establish Connection

Browser connects to the server using TCP.
For HTTPS, a TLS handshake also happens to establish a secure connection.

3. Send HTTP Request
The browser sends a request such as:

GET / HTTP/1.1
Host: example.com

4. Server Sends Response
The server returns the requested resources, usually starting with HTML:

HTTP/1.1 200 OK
Content-Type: text/html

5. Browser Parses HTML
The browser reads the HTML and builds the DOM (Document Object Model).

Example:

<script src="app.js"></script>

The browser discovers that JavaScript file needs to be downloaded.

6. Download JavaScript
The browser sends another HTTP request for app.js and receives the JavaScript code.

7. JavaScript Engine Executes It
The browser's JavaScript engine executes the code.

For example, Chrome uses V8.

console.log("Hello");

The engine parses/compiles the JavaScript and executes it.

The complete mental flow

URL → DNS → Connection → HTTP Request → Server Response → HTML Parsing → DOM → JS Download → JS Engine → JavaScript Executes
*/

/*
Where does JavaScript run, and what is a JavaScript runtime environment?
-> JavaScript runs inside a runtime environment. 
-> A runtime environment provides a JavaScript engine to execute the code along with additional APIs and features. 

(1) Browser JavaScript
-> When JavaScript runs in Chrome, Firefox, etc., the browser provides a JavaScript runtime such as V8 in Chrome.

-> FLOW;
    JavaScript Code
          ↓
    Browser
          ↓
    JavaScript Engine (V8)
          ↓
    Execution

-> The browser also provides Web APIs like:
    DOM
    fetch()
    setTimeout()
    localStorage

(2) JavaScript with Node.js
-> Node.js is a JavaScript runtime that allows JavaScript to run outside the browser.
-> Node.js uses the V8 JavaScript engine to execute JavaScript, but instead of browser APIs, Node.js provides its own APIs for things like:
        File system
        HTTP/networking
        Operating system
        Servers
        Databases

-> Example: console.log("Hello from Node.js");
-> You can run it from the terminal, just write this: node app.js (here, you wrote node and file name)

-> Flow:
    JavaScript Code
          ↓
    Node.js
          ↓
    V8 JavaScript Engine
          ↓
    Execution    

-> JavaScript Engine ≠ JavaScript Runtime
    Engine → Executes JavaScript code.
    Runtime → Provides the engine plus additional APIs/features needed to run JavaScript in a particular environment.

-> Browser :  Chrome, Firefox, Edge, Safari
              Example: JavaScript for websites
              Chrome uses V8
-> Server/Outside Browser : Most commonly Node.js
              Example: backend APIs
              Node.js uses V8 + provides additional system APIs
*/

/*
JAVASCRIPT ENGINE
What is a JavaScript Engine?
-> A JavaScript engine is a program that reads, interprets, and executes JavaScript code.
-> It converts JavaScript code into machine code that the computer's CPU can execute.
-> Examples:Chrome → V8
            Edge → V8
            Firefox → SpiderMonkey
            Safari → JavaScriptCore

** How does it execute JavaScript?
Basic flow: JavaScript Code → Parsing → Compilation → Machine Code → Execution
-> Parsing
   The engine reads your JavaScript code and checks its syntax. It creates an internal structure called an AST (Abstract Syntax Tree).
-> Compilation
   The engine converts the JavaScript into executable code. Modern engines use JIT (Just-In-Time) compilation, which compiles code while the program is running and optimizes frequently executed code.
-> Execution
   The generated machine code is executed by the CPU.
-> Example
          let a = 10;
          let b = 20;
          console.log(a + b);

NOTE;
A JavaScript engine is a program that executes JavaScript code. It parses the code, compiles it into executable machine code using techniques such as JIT compilation, and then executes it. Different browsers use different engines, such as V8 in Chrome and SpiderMonkey in Firefox.

REMEMBER: JavaScript itself is the language; the JavaScript engine is the program that executes that language.
*/

/*
DOM and Browser/Web APIs
1. What is the DOM?
-> DOM (Document Object Model) is a programming representation of an HTML document.
-> When a browser loads HTML, it converts it into a tree of objects/nodes called the DOM.

-> Example: <body>
            <h1>Hello</h1>
            <button>Click</button>
            </body>

-> Browser creates a structure roughly like:
      Document
        └── body
              ├── h1
              └── button

-> JavaScript can use the DOM to read, change, add, or remove HTML elements and their content/styles.
      const heading = document.querySelector("h1");
      heading.textContent = "Hello JavaScript";
      Here, document is provided by the browser and represents the webpage's DOM.

2. What are Browser/Web APIs?
-> Browser APIs (Web APIs) are capabilities provided by the browser that JavaScript can use.
-> They are not part of the JavaScript language itself.

-> WEB API      	--    PURPOSE
   DOM API	      ->    Manipulate webpage
   fetch()	      ->    Make HTTP requests
   setTimeout()	->    Schedule code
   localStorage	->    Store data in browser
   Geolocation   ->    API	Get user's location
   Web Storage   ->    API	Browser storage
   Events API	  ->    Handle clicks, keyboard events, etc.

 3. How does JavaScript interact with Web APIs?
 -> JavaScript is the caller. Web APIs are the browser's services. JavaScript requests a service, the browser performs it, and the result comes back to JavaScript. 

 -> BASIC FLOW
    JavaScript
        ↓
    Calls Web API
        ↓
    Browser performs the operation
        ↓
    Result / event is given back to JavaScript

-> EXAMPLE; 
(1) setTimeout()
    setTimeout(() => {
        console.log("Hello");
    }, 2000);
  What happens:
          JavaScript calls setTimeout().
          setTimeout() is provided by the browser Web API.
          The browser starts the 2-second timer.
          JavaScript doesn't have to wait for the timer to finish.
          After 2 seconds, the callback becomes ready to execute.
          JavaScript executes the callback.

(2) DOM - 
  code ex: document.querySelector("h1");
        document → browser-provided object
        querySelector() → DOM API method
        JavaScript calls it to access an HTML element.
        
(3) fetch() - 
  code ex:  fetch("/users");
    JavaScript calls fetch().
    Browser's Fetch API handles the HTTP request.
    When the response is available, JavaScript can process it.
*/


/*
What are ECMAScript and JavaScript, and what do ES5, ES6, and modern JavaScript mean?
(1) ECMAScript
-> ECMAScript is the standard/specification that defines how JavaScript should work.
   Think of it like a rulebook.

-> It defines things such as:
    Variables
    Functions
    Objects
    Classes
    Promises
    Modules
    Syntax and language features

-> Interview answer:
   ECMAScript is the standardized specification on which JavaScript is based. It defines the rules and features of the JavaScript language.

(2) What is ES5?
-> ES5 = ECMAScript 5, Released in 2009.
-> It was an important version of JavaScript and introduced/improved features such as:
      Strict mode: "use strict"
      Array.forEach()
      Array.map()
      Array.filter()
      JSON

-> Code Example:
    "use strict";
    var numbers = [1, 2, 3];
    var doubled = numbers.map(function (n) {
        return n * 2;
    });

(3) ES6 = ECMAScript 2015
-> ES6 was a major update to JavaScript.
-> It introduced many features that you use heavily in modern JavaScript:
    let and const
    Arrow functions
    Template literals
    Destructuring
    Spread/rest operators
    Default parameters
    Classes
    Promises
    Modules (import / export)
    Map and Set
-> Code Example:
   const numbers = [1, 2, 3];
   const doubled = numbers.map(n => n * 2);

-> Important: ES6 and ES2015 mean the same version. 
              ES6 and ES2015 refer to the same ECMAScript edition. It was the sixth edition and was standardized in 2015, so ES6 is also called ECMAScript 2015 or ES2015.

(4) What is Modern JavaScript?
-> Modern JavaScript simply means using newer JavaScript features and current best practices instead of older ways of writing JavaScript.
-> There is no separate language called "Modern JavaScript."
-> Think of it like this:
    JavaScript
      ↓
    New features added over time
      ↓
    ES6 (2015) + ES2017 + ES2018 + ES2019 + ...
      ↓
    Modern JavaScript

-> Code Example of Older JavaScript:
     - var name = "Sumit";

     - function greet(name) {
          return "Hello " + name;
      }

 * Code Example of Modern JavaScript:
     - const name = "Sumit";

     - const greet = (name) => {
          return `Hello ${name}`;
      };

  * The second example uses newer features:
    const → instead of var
    Arrow function → =>
    Template literal → `Hello ${name}`
    These are commonly considered modern JavaScript.

-> What features are considered modern?
  - These use features such as:
    let / const
    Arrow functions
    Destructuring
    Spread/rest operators
    Promises
    async/await
    Modules
    Classes
    Optional chaining ?.
    Nullish coalescing ?? 

-> One important point: Modern JavaScript doesn't mean only ES6. It means, JavaScript using features from ES6 and newer ECMAScript versions.
 - Flow will be:
   ES5 → Older JavaScript style
   ES6 → Major modernization
   ES2017+
      ↓
   More new features
      ↓
   Modern JavaScript
*/