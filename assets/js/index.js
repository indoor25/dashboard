$(document).ready(function () {
  const overlay = $('.overlay')
  const aside = $('.aside')
  const burgerMenu = $('.burger__menu')
  let winWidth = $(window).innerWidth()
  
  function handleResize() {
    winWidth = $(window).innerWidth()
    if (winWidth > 1009 && burgerMenu.hasClass('burger_active')) {
      aside.removeAttr('style')
      overlay.removeAttr('style')
      burgerMenu.removeClass('burger_active')
    }
  }

  function handleBurger(flag) {
    const containerHeight = $('.container').height()
    if (winWidth < 1010) {
      burgerMenu.toggleClass('burger_active');

      aside.css('height', containerHeight); // Установка высоты

      aside.stop(true, true).slideToggle('500', function () {
        if (!burgerMenu.hasClass('burger_active')) {
          aside.removeAttr('style')
        }
      });

      overlay.stop(true, true).fadeIn('500', function () {
        if (!burgerMenu.hasClass('burger_active')) {
          overlay.fadeOut('500', () => overlay.removeAttr('style'))
        }
      });
    }

  }

  $(window).on('load resize', handleResize)
  burgerMenu.on('click', handleBurger);
  $('.navbar__link').on('click', () => handleBurger(true));
});
