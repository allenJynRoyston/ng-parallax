# ng-parallax

### What Am I?!
An easy way to implement parallax scrolling with Angularjs.  
  - No dependencies
  - Responsive
  - Simple
  
### Live Demo 
[Check it out](http://allenroyston.herokuapp.com/access/demo1/index.html "Title")


### Dependencies
- None!  (Other than Angular).


### Version
1.0.0


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
reverse: true/false     (go from up to down)


### Want to Contribute?
Great!  Just make a fork and submit a pull request. 

### Requirements
None, just get that local server installed or else you will see nothing. NOTHING!




License
----

MIT - go nuts y'all.
