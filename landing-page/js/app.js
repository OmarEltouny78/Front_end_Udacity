
/**
 * Define Global Variables
 * 
*/


let unorderedList = document.getElementById("unordered-list");
let containerCount = document.getElementsByClassName("landing__container")
  .length;

/**
 * End Global Variables
 * 
*/

// build the nav
for (i = 1; i < containerCount + 1; i++) {
  let item = "#section" + i + "-title";
  let itemValue = document.querySelector(item);
  let itemText = itemValue.textContent;
  let newLine = document.createElement("li");
  let lineText = document.createTextNode(itemText);
  let listItem = "sample-nav-" + i;
  newLine.setAttribute("id", listItem);
  newLine.setAttribute("class", "nav-list-item");
  newLine.appendChild(lineText);
  unorderedList.appendChild(newLine);

  let itemTarget = document.getElementById("section" + i);
  let listTarget = document.getElementById(listItem);
  let buttonName = "section" + i + "-button";
  let buttonToAdd = document.getElementById(buttonName);

  //Adds button when scrolls into view

  listTarget.addEventListener("click", function() {
    itemTarget.scrollIntoView ({
      behavior: 'smooth'}
    )

  });
}


// Add class 'active' to section when near top of viewport
function sectionSwtich(min) {
  let isInViewport = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= min &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };
// Set sections as active
  for (i = 1; i < containerCount + 1; i++) {
    let sectionInFullView = document.getElementById("section" + i);

    window.addEventListener(
      "scroll",
      function(event) {
        if (isInViewport(sectionInFullView)) {
          sectionInFullView.classList.add("your-active-class");
        } else {
          sectionInFullView.classList.remove("your-active-class");
        }
      },
      false
    );
  }
}

//Add sticky header as per review (Used tutorial here: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp)

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("header");
console.log(navbar)

// Get the offset position of the navbar
let sticky = header.offsetTop;
console.log(sticky)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
sectionSwtich(50);