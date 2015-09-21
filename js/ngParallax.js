'use strict';
angular.module('ngParallax', []).directive('ngParallax', [
  '$timeout',
  function ($window, $timeout) {
    return {
        restrict: 'AE',
        scope:{
          pattern: '=',
          speed: '='
        },
        link: function(scope, elem, attr) {

            var bgObj = elem[0];
                bgObj.style.backgroundRepeat = "repeat";
                bgObj.style.backgroundAttachment = "fixed";
                bgObj.style.height = "100%";
                bgObj.style.margin = "0 auto"
                bgObj.style.position = "relative"
                bgObj.style.background = "url(" + scope.pattern + ")"
                bgObj.style.backgroundAttachment = 'fixed';

            function execute(){
              var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
              bgObj.style.backgroundPosition = '0% '+ (scrollTop / scope.speed) + '%';
            };

            // for mobile
            window.document.addEventListener("touchmove", function(){
              execute();
            })

            // for browsers
            window.document.addEventListener("scroll", function() {
              execute();
            });
            execute();

        },

    };
  }
]);
