# ng-parallax
[![CDNJS](https://img.shields.io/cdnjs/v/ng-parallax.svg)](https://cdnjs.com/libraries/ng-parallax)

### Ng2 Version
There is a [Angular2 directive](https://github.com/allenRoyston/ng2-parallax "Angular2 directive"), but I haven't really been vigiliant about updating it.  (I'm only one person - sorry).

### What Am I?!
An easy way to implement parallax scrolling with Angularjs.  
  - No dependencies
  - Responsive
  - Simple
  - Works for mobile!  (Well, iPhones at least - haven't tested on an Android yet)
  - Tiny (only 292B)


### Usage
<code>
&lt;div ng-parallax pattern="myPattern" speed="0"&gt; &lt; /div&gt; 
</code>

### Version
1.1.3

### Updates
 - v1.1.3 - Merged changes from emelent.
 - v1.1.3 - Added support for use in Webpack/ComponentJS
 - v1.1.2 - Eliminated jankiness when using Macbook touchpads and touchscreens.

### Live Demo 
[Check it out](https://allenroyston.herokuapp.com/access/ng-parallax/index.html "Title")


### Dependencies
- None!  (Other than AngularJS).

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
&lt;script src="./src/ngParallax.min.js"&gt; &lt;script&gt;
</code>

Add ngParallax in your apps dependencies.<br> 
<code>
var app = angular.module('myApp', ['ngParallax']);
</code>

or include just like any other component in Webpack


### Parameters
<code>
&lt;div ng-parallax pattern="'imageLocation'" speed="[0-3]" reverse="[true/false]"&gt; &lt; /div&gt; 
</code>
<br><br>
speed: 0-3              (slowest to fastest)<br>

<ul>
 <li>Setting the speed at 0 will lock the image in place.</li>
 <li> ... unless it's iOS, in which case the image will act as a static image and scroll naturally.</li>
 <li>Using negative numbers reverses the direction.</li>  
 <li>The speed is directly related to the image size, so tinker with your speed to get the right effect.</li>
</ul>


License
----

MIT - go nuts y'all.
