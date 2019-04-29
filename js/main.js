//Preloader animation
$(window).on('load', function() {
  $('.loader .inner').fadeOut(500, function() {
    $('.loader').fadeOut(750);
  });

  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
});

$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  var typed = new Typed('.typed', {
    strings: ['Software Engineer', 'Web Developer', 'Equity Trader'],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    // autoplayTimeout: 10000,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  //Pie Chart only activates when scrolling down
  var skillsTopOffset = $('.skillsSection').offset().top;
  var statsTopOffset = $('.statsSection').offset().top;
  var countUpFinished = false;
  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find('.percent')
            .text(Math.round(percent));
        }
      });
    }

    //Counting up stats
    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $('.counter').each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal);
      });

      countUpFinished = true;
    }
  });

  $('[data-fancybox]').fancybox();

  $('#filters a').click(function() {
    $('#filters .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');

    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });

  //Smooth Scroll
  $('#navigation li a').click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
  });
});
