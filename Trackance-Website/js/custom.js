       
/*JQuery Box Slider Responsive*/
         (function() {
            loader = new SVGLoader(document.getElementById('loader'), {
                speedIn: 400,
                easingIn: mina.easeinout
                  
            });
            loader.show();
            setTimeout(function() {
                loader.hide();
             
            }, 2000);
                    setTimeout(function() {
                $('#page-2').css('display', 'block');
                        
             
            }, 2000);
             
        })();

		

/*Wow Js Function */
        new WOW().init();
/* Google Nexus Menu Function*/        
        new gnMenu(document.getElementById('gn-menu'));
        
        
       
        
        
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

     
                   
          
             
  
         
        /*HeaderCSS*/
             jQuery(window).scroll(function(){
        if (jQuery(".navbar-default").offset().top > 300)
        {
            jQuery(".navbar-default").addClass("active");
            jQuery(".gn-menu-main").addClass("active");
            jQuery(".scrolltop").addClass("active");
             
        }
            else
        {
            jQuery(".navbar-default").removeClass("active");
            jQuery(".gn-menu-main").removeClass("active");
            jQuery(".scrolltop").removeClass("active");
       
           
        }  
    });
/*scrolling js*/
        
        // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
