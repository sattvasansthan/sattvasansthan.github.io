// the below code is of angular js
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

// the below code is for go to top button
const goToTop = document.querySelector('#goToTop');
goToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// the below code is for updates carousel slider
$(document).ready(function () {
  var owl = $("#updatesSlider");
  owl.owlCarousel({
    margin: 20,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
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

// the below code is for gallery carousel slider
$(document).ready(function () {
  var owl = $("#gallerySlider1, #gallerySlider2, #gallerySlider3");
  owl.owlCarousel({
    margin: 20,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
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

// the below code is for the fancybox
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

// the below code is for fixing the header to top on scroll
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

// Select all carousel items for eventCard and motiveSection
const eventCarouselItems = document.querySelectorAll('.carousel-item .eventCard span');
const motiveCarouselItems = document.querySelectorAll('.carousel-item .motiveSection .motiveOver');
const updateCarouselItems = document.querySelectorAll('.item .updatesBlock .updatesOver');
const galleryCarouselItems = document.querySelectorAll('.item .galImgBlock .updatesOver');

// Function to handle entry behavior for eventCarousel items
const handleEventCardEntry = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), 500);
    } else {
      entry.target.classList.remove('in-view');
    }
  });
};

// Function to handle entry behavior for motiveSection items
const handleMotiveSectionEntry = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), 500);
    } else {
      entry.target.classList.remove('in-view');
    }
  });
};

// Function to handle entry behavior for updatesBlock items
const handleUpdateSectionEntry = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), 100);
    } else {
      entry.target.classList.remove('in-view');
    }
  });
};

// Function to handle entry behavior for galImgBlock items
const handleGallerySectionEntry = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), 100);
    } else {
      entry.target.classList.remove('in-view');
    }
  });
};

// Create separate observers for each carousel type
const eventCardObserver = new IntersectionObserver(handleEventCardEntry, { threshold: 0.3 });
const motiveSectionObserver = new IntersectionObserver(handleMotiveSectionEntry, { threshold: 0.3 });
const updateSectionObserver = new IntersectionObserver(handleUpdateSectionEntry, { threshold: 0.3 });
const gallerySectionObserver = new IntersectionObserver(handleGallerySectionEntry, { threshold: 0.3 });

// Initialize observers only if screen size is below 991px
function initializeObservers() {
  eventCarouselItems.forEach((item) => eventCardObserver.observe(item));
  motiveCarouselItems.forEach((item) => motiveSectionObserver.observe(item));
  updateCarouselItems.forEach((item) => updateSectionObserver.observe(item));
  galleryCarouselItems.forEach((item) => gallerySectionObserver.observe(item));
}

// Disconnect observers to stop observing items
function disconnectObservers() {
  eventCardObserver.disconnect();
  motiveSectionObserver.disconnect();
  updateSectionObserver.disconnect();
  gallerySectionObserver.disconnect();
}

// Handle screen size changes
const mediaQuery = window.matchMedia('(max-width: 991px)');

function handleScreenChange(e) {
  if (e.matches) {
    initializeObservers();
  } else {
    disconnectObservers();
  }
}

// Initial check and event listener for screen resizing
mediaQuery.addEventListener('change', handleScreenChange);
handleScreenChange(mediaQuery);

// the below code is for the input box animation
document.querySelectorAll('.volFormBlock input, .volFormBlock textarea').forEach(input => {
  const label = input.nextElementSibling;
  input.addEventListener('focus', () => {
    label.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      label.classList.remove('active');
    }
  });
  if (input.value) {
    label.classList.add('active');
  }
});

// the below code is for sending a mail
const sendMail = (type) => {
  let serviceId = "service_jddimzf";
  let templateId;
  let params;

  if (type === "vol") {
    params = {
      volunteerName: document.querySelector('#volunteerName')?.value,
      volunteerEmail: document.querySelector('#volunteerEmail')?.value,
      volunteerPhone: document.querySelector('#volunteerPhone')?.value,
      volunteerMessage: document.querySelector('#volunteerMessage')?.value
    };
    templateId = "template_22r26fu";
  }
  else if (type === "contact") {
    params = {
      contactName: document.querySelector('#contactName')?.value,
      contactEmail: document.querySelector('#contactEmail')?.value,
      contactPhone: document.querySelector('#contactPhone')?.value,
      contactMessage: document.querySelector('#contactMessage')?.value
    };
    templateId = "template_0on5tlr";
  }
  console.log(params);
  emailjs.send(serviceId, templateId, params).then(() => alert("Email Sent Successfully!"));
};

// the below code is for form validation
const forms = document.querySelectorAll('.needs-validation');
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (form.checkValidity()) {
      form.classList.add('was-validated');
      const type = form.id === 'contactForm' ? 'contact' : 'vol';
      sendMail(type);
      form.reset();
      setTimeout(() => form.classList.remove('was-validated'), 0);
    } else {
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
});