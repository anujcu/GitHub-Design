       /*scrolling js*/
   new WOW().init();
      //scrolling function end
   /* smooth scrolling for scroll to top */
$('.scrolltop').click(function(){
  $('body,html').animate({scrollTop:0},1000);
});
/*JQuery Box Slider Responsive*/
       (function () {
           loader = new SVGLoader(document.getElementById('loader'), {
               speedIn: 400,
               easingIn: mina.easeinout

           });
           loader.show();
           setTimeout(function () {
               loader.hide();

           }, 2000);
           setTimeout(function () {
               $('#page-2').css('display', 'block');


           }, 2000);

       })();
       /*Wow Js Function */
       /* Google Nexus Menu Function*/
       new gnMenu(document.getElementById('gn-menu'));

       /*HeaderCSS*/
       jQuery(window).scroll(function () {
           if (jQuery(".navbar-default").offset().top > 300) {
               //            jQuery(".navbar-default").addClass("active");
               jQuery(".gn-menu-main").addClass("active");
               jQuery(".scrolltop").addClass("active");
               jQuery(".navbar-default").addClass("down");

           } else {
               //            jQuery(".navbar-default").removeClass("active");
               jQuery(".gn-menu-main").removeClass("active");
               jQuery(".scrolltop").removeClass("active");
               jQuery(".navbar-default").removeClass("down");


           }
       });

       //          /header:hover*/
       $(function () {
           $('.dropdown').hover(
               function () {
                   $(this).addClass('open');
               },
               function () {
                   $(this).removeClass('open');
               }
           );
       });