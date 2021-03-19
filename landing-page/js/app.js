/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function sectionswtich(id,min,max){
    if (document.body.scrollTop > min && document.body.scrollTop < max || document.documentElement.scrollTop > min &&document.documentElement.scrollTop < max) {
        document.getElementById(id).className = "your-active-class";
      } else {
        document.getElementById(id).className = "";
      }

}

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } // End if
    });
  });

// Set sections as active

window.onscroll=function(){myFunction()};
function myFunction() {
    sectionswtich("section1",50,100);
    sectionswtich("section2",100,150);
    sectionswtich("section3",150,200);
    sectionswtich("section4",200,250);

  }


