
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

function changeSelect(i) {
  $(".mom").removeClass('sel' + i);
  $("#mm" + i).addClass('sel' + i);
}

function showSM() {
  $("#sm-menu").show(500);
}


function hideSM() {
  $("#sm-menu").hide();
}

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

function fixHeader() {
  var header = document.querySelector('#header');
  var headerPlaceholder = document.querySelector('#headerPlaceholder');
  var sticky = header.clientHeight;
  console.log(sticky)
  if (window.scrollY > sticky) {
    header.classList.add("position-fixed", "top-0", "start-0");
    headerPlaceholder.classList.remove("d-none")
  } else {
    header.classList.remove("position-fixed", "top-0", "start-0");
    headerPlaceholder.classList.add("d-none")
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