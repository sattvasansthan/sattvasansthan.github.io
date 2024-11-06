
var thankam = angular.module('thankam', ['ui.router']);
var url = 'http://localhost/learning/le-admin/';
thankam.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'template/home.html'

    })
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'template/about.html'

    })
  $stateProvider
    .state('support', {
      url: '/support',
      templateUrl: 'template/support.html'

    })
  $stateProvider
    .state('gallery', {
      url: '/gallery',
      templateUrl: 'template/gallery.html'

    })
  $stateProvider
    .state('testimony', {
      url: '/testimony',
      templateUrl: 'template/testimony.html'

    })
  $stateProvider
    .state('contact', {
      url: '/contact',
      templateUrl: 'template/contact.html'

    })

  $stateProvider
    .state('news', {
      url: '/news',
      templateUrl: 'template/news.html'

    })
  $stateProvider
    .state('payment', {
      url: '/payment',
      templateUrl: 'template/payment.html'

    })
}])

const goToTop = document.querySelector('#goToTop');
goToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

$(document).ready(function () {
  var owl = $("#updatesSlider");
  owl.owlCarousel({
    margin: 20,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      200: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });
});

$(document).ready(function () {
  var owl = $("#gallerySlider1, #gallerySlider2, #gallerySlider3");
  owl.owlCarousel({
    margin: 20,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      200: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});

$('[data-fancybox="updates"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: true,
  protect: true
});

const fixHeader = () => {
  const goToTop = document.querySelector('#goToTop');
  const mobHeader = document.querySelector('#mobHeader');
  const header = document.querySelector('#header');
  const headerPlaceholder = document.querySelector('#headerPlaceholder');
  const sticky = header.clientHeight;
  if (window.scrollY > sticky) {
    mobHeader.classList.add("position-fixed", "top-0", "start-0");
    header.classList.add("position-fixed", "top-0", "start-0");
    headerPlaceholder.classList.remove("d-none")
    goToTop.style.right = "30px";
  } else {
    mobHeader.classList.remove("position-fixed", "top-0", "start-0");
    header.classList.remove("position-fixed", "top-0", "start-0");
    headerPlaceholder.classList.add("d-none")
    goToTop.style.right = "-100%";
  }
}

document.querySelectorAll('.volFormBlock input, .volFormBlock textarea').forEach(input => {
  const label = input.nextElementSibling;

  // Move label up if input is focused or has value
  input.addEventListener('focus', () => {
    label.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      label.classList.remove('active');
    }
  });

  // Check if there is already a value (when page reloads)
  if (input.value) {
    label.classList.add('active');
  }
});

const sendMail = (type) => {
  if (type == "vol") {
    let params = {
      volunteerName: document.querySelector('#volunteerName').value,
      volunteerEmail: document.querySelector('#volunteerEmail').value,
      volunteerPhone: document.querySelector('#volunteerPhone').value,
      volunteerMessage: document.querySelector('#volunteerMessage').value
    };
  
    emailjs.send("service_jddimzf", "template_22r26fu", params).then(alert("Email Sent Successfully!"));
  }
  else if (type == "contact") {
    let params = {
      contactName: document.querySelector('#contactName').value,
      contactEmail: document.querySelector('#contactEmail').value,
      contactPhone: document.querySelector('#contactPhone').value,
      contactMessage: document.querySelector('#contactMessage').value
    };
  
    emailjs.send("service_jddimzf", "template_0on5tlr", params).then(alert("Email Sent Successfully!"));
  }
}