$(document).ready(function () {
    // Add the "active" class to the clicked item
    $('.navbar-nav .nav-link').on('click', function () {
      $('.navbar-nav .nav-item').removeClass('active');
      $(this).parent().addClass('active');
    });
  });