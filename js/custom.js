

(function( $ ){


	/* ----------------------------------------------------------- */
	/*  1. FULL OVERLYAY MENU
	/* ----------------------------------------------------------- */

   $('.mu-menu-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.mu-menu-full-overlay').addClass('mu-menu-full-overlay-show');
       
    });
   
    // when click colose btn
    
    $('.mu-menu-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-menu-full-overlay').removeClass('mu-menu-full-overlay-show');
		
    });

    // when click menu item overlay disappear

    $('.mu-menu a').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.mu-menu-full-overlay').removeClass('mu-menu-full-overlay-show');
       
    });

    /* ----------------------------------------------------------- */
	/*  2. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	 $(".mu-menu a").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
	    

		
	/* ----------------------------------------------------------- */
	/*  3. VIDEO POPUP
	/* ----------------------------------------------------------- */

   $('.mu-video-play-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.mu-video-iframe-area').addClass('mu-video-iframe-display');
		// $('.app-showcase-video').attr('src', yt_link)
    });
   
    // when click the close btn

    // disappear iframe window
    
    $('.mu-video-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');
		
    });

    // stop iframe if it is play while close the iframe window

    $('.mu-video-close-btn').click(function(){
		let empty_src = ""
		// $('.mu-video-iframe').attr('src');
        $('.mu-video-iframe').attr('src', empty_src);

    });

    // when click overlay area

     $('.mu-video-iframe-area').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');

		let empty_src = ""
        $('.mu-video-iframe').attr('src', empty_src);
		
    });

	$('.mu-video-iframe-area, .mu-video-iframe').on('click', function(e){
	    e.stopPropagation();
	});

		
	/* ----------------------------------------------------------- */
	/*  4. APPS SCREENSHOT SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

		$('.mu-apps-screenshot-slider').slick({
		  slidesToShow: 4,
		  responsive: [
			{
				breakpoint: 1058,
				settings: {
				  arrows: true,
				  slidesToShow: 2
				}
			},
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        slidesToShow: 1
		      }
		    }
		  ]
		});



	/* ----------------------------------------------------------- */
	/*  5. BOOTSTRAP ACCORDION 
	/* ----------------------------------------------------------- */ 

		$('.panel-heading').on('click', function() {
	  
			current_pannel = $(this).parent().find('.panel-collapse')
			current_pannel.collapse('toggle')

			// Toggle the plus/minus icon
			var icon = $(this).find('.fa');
			icon.toggleClass('fa-minus fa-plus');
		
			var otherPanels = $('.panel-collapse').not(current_pannel);
			otherPanels.collapse('hide');
			otherPanels.prev().find('.fa').removeClass('fa-minus').addClass('fa-plus');
		
			// Change link color
			$('.panel-heading-collapse').removeClass('link-color1')
			$(this).find('.panel-heading-collapse').toggleClass('link-color1')

		  })

	/* ----------------------------------------------------------- */
	/*  6. Header
	/* ----------------------------------------------------------- */ 

		  // Function to toggle the navigation bar's background on scroll
		//   function handleScroll() {
		// 	 let navbar = document.querySelector('.navbar');
		// 	 let heroSection = document.querySelector('.hero-banner, #mu-header');
		// 	 let heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

		// 	 let navbar_expanded = $('button.navbar-toggler').attr('aria-expanded');


		// 	 if (window.pageYOffset >= heroBottom ) {

		// 		navbar.classList.add('navbar-solid');
		// 	 } else if(navbar_expanded != 'true') {
		// 		navbar.classList.remove('navbar-solid');
		// 	 }
		//   }
	   
		//   // Add an event listener to handle the scroll
		//   window.addEventListener('scroll', handleScroll);

	


		$('.navbar-toggler').on( "click", function() {

				navbar_expanded = $('button.navbar-toggler').attr('aria-expanded');
			
				let navbar = document.querySelector('.navbar');

				if (navbar_expanded == 'true'){
					navbar.classList.add('navbar-solid');
				}else{
					navbar.classList.remove('navbar-solid');
					handleScroll()
				}


		});


})( jQuery );



// Temporary start




let page_html = `



`

  

  