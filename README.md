# ng-parallax

### What Am I?!
An easy way to implement parallax scrolling with Angularjs.  
  - No dependencies
  - Responsive
  - Simple
  - Tiny (only 292B)
  
### Updates
 - v1.1.2 - Eliminated jankiness when using Macbook touchpads.

### Live Demo 
[Check it out](https://allenroyston.herokuapp.com/access/ng-parallax/index.html "Title")


### Dependencies
- None!  (Other than Angular).


### Version
1.0.0

### NPM / Bower
<code>
npm install ng-parallax --save-dev
</code>
<br>
<code>
bower install ng-simple-parallax --save
</code>

### Installation
Include the module in your scripts.<br>
<code>
&lt;script src="./js/ngParallax.min.js"&gt; &lt;script&gt;
</code>

Add ngParallax in your apps dependencies.<br> 
<code>
var app = angular.module('myApp', ['ngParallax']);
</code>

### Usage
<code>
&lt;div ng-parallax pattern="myPattern" speed="0"&gt; &lt; /div&gt; 
</code>

### Parameters
<code>
&lt;div ng-parallax pattern="'imageLocation'" speed="[0-3]" reverse="[true/false]"&gt; &lt; /div&gt; 
</code>
<br><br>
speed: 0-3              (slowest to fastest)<br>
* Using negative numbers reverses the direction.  
** The speed is directly related to the image size, so tinker with your speed to get the right effect. 



License
----

MIT - go nuts y'all.
