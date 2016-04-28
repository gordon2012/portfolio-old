require('./style.css');

var $ = require('jquery');

// console.log('Hello from index.js');

var sections = $('section'),
    nav = $('nav'),
    navs = $('li'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function()
{
  var cur_pos = $(this).scrollTop();
  sections.each(function()
  {
    // console.log($(this));
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom)
    {
      // nav.find("a").removeClass("active");
      navs.removeClass('active');
      sections.removeClass("active");

      $(this).addClass("active");
      // nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');

      //var tar_id = ;
      // console.log(tar_id);
      $('#nav' + $(this).attr('id')).addClass('active');
    }
  });
});


nav.find('a').on('click', function()
{
  var $el = $(this),
      id = $el.attr('href');

  $('html, body').animate(
  {
    scrollTop: $(id).offset().top - nav_height
  }, 500);

});
