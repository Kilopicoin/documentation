window.addEventListener('load', function() {
  var navbar = document.getElementById('navbar');
  var article = document.getElementById('article');

  function setNavbarHeight() {
    var articleHeight = article.offsetHeight;
    navbar.style.height = articleHeight + 'px';
  }

  setNavbarHeight(); // Sayfa yüklendiğinde yüksekliği ayarla

  // Article içeriği değiştiğinde yüksekliği yeniden ayarla
  article.addEventListener('DOMSubtreeModified', function() {
    setNavbarHeight();
  });
});


const lists = document.querySelectorAll('.lists');

lists.forEach(list => {
    const icon = list.querySelector('.material-symbols-outlined');
    let isExpanded = false;

    list.addEventListener('click', function() {
        if (isExpanded) {
            icon.style.transform = 'rotate(0deg)';
            isExpanded = false;
        } else {
            icon.style.transform = 'rotate(90deg)';
            isExpanded = true;
        }
    });
});


//Sayfa load olurken diğer containerların görünmemesini sağlar
document.addEventListener("DOMContentLoaded", function() {
  var containerElements = document.querySelectorAll(".container");
  for (var i = 0; i < containerElements.length; i++) {
    var container = containerElements[i];
    if (container.id !== "default-container") {
      container.style.display = "none";
    }
  }
});



//List-item larıyla etkileşime geçince containerleri getirir
var listItems = document.querySelectorAll(".list-container li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function (event) {
    var containerId = "container" + (Array.from(listItems).indexOf(event.target) + 1);
    var containerElements = document.querySelectorAll(".container");
    for (var j = 0; j < containerElements.length; j++) {
      containerElements[j].style.display = "none";
    }
    var targetContainer = document.getElementById(containerId);
    if (targetContainer) {
      targetContainer.style.display = "block";
    }
  });
}






lists.forEach(function (list) {
  list.addEventListener('click', function () {
    var listContainer = this.nextElementSibling;

    // "listContainer"ın başlangıçta display stilini kontrol et
    var displayStyle = window.getComputedStyle(listContainer).getPropertyValue('display');

    if (displayStyle === 'none') {
      listContainer.style.display = 'block';
    } else {
      listContainer.style.display = 'none';
    }
  });
});





// Overview e tıklayınca diğer containerler gizlenir
function showDefaultContainer() {
  var defaultContainer = document.getElementById("default-container");
  if (defaultContainer) {
    defaultContainer.style.display = "block";
  }

  var containerElements = document.querySelectorAll(".container");
  for (var i = 0; i < containerElements.length; i++) {
    var container = containerElements[i];
    if (container.id !== "default-container") {
      container.style.display = "none";
    }
  }
}

var overviewList = document.querySelector(".list");
overviewList.addEventListener("click", showDefaultContainer);






const exitIcon = document.getElementById("exit-icon");
const hambMenu = document.getElementById("hamb-menu");
const navbar = document.querySelector(".navbar");
const container = document.querySelector(".container");
let isNavbarOpen = false;

exitIcon.addEventListener("click", function() {
  navbar.style.visibility = "hidden";
  container.classList.remove("blur");
  isNavbarOpen = false;
});

hambMenu.addEventListener("click", function() {
  if (isNavbarOpen) {
    navbar.style.visibility = "hidden";
    container.classList.remove("blur");
    isNavbarOpen = false;
  } else {
    navbar.style.visibility = "visible";
    container.classList.add("blur");
    isNavbarOpen = true;
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth > 768) {
    navbar.style.visibility = "visible";
    container.classList.remove("blur");
    isNavbarOpen = false;
  }
});









