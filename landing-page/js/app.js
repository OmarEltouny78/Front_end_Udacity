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
function sectionswtich(id,min,max,a){
  const element= document.getElementById(id);
  const active=document.getElementById(a);
    if (document.body.scrollTop > min && document.body.scrollTop < max || document.documentElement.scrollTop > min &&document.documentElement.scrollTop < max) {
        element.className = "your-active-class";
        active.className="active";
        
      } else {
        element.className = "";
        active.className="";

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



// Set sections as active

window.onscroll=function(){myFunction()};
function myFunction() {
    sectionswtich("section1",50,100);
    sectionswtich("section2",100,150);
    sectionswtich("section3",150,200);
    sectionswtich("section4",200,250);

  }
  // Scroll to section on link click
  window.onclick=function(){myFunction()};
  function scrollingFunction(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  }


