 /*  Filter */
 $(function() {
    
   /*  PRELOADER */

    document.body.onload = function() {
        setTimeout(function() {
        let preloader = document.querySelector('#page-preloader');
        if ( !preloader.classList.contains('done') ) {
        preloader.classList.add('done');
        }
        }, 1000);
        };

    /*  FILTER  */

    let filter = $("[data-filter]");
 
     filter.on("click", function(event){
       event.preventDefault();

       let cat = $(this).data('filter');

       if( cat == 'All') {
           $("[data-cat]").removeClass("hide");
       }else {
        $("[data-cat]").each(function() {
           
            let workCat = $(this).data('cat');

            if(workCat != cat) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }

       }); 
       } 

    });
 
/* NAV BAR */

    const navToggle = $("#navToggle");
    const nav = $("#nav");
    const home = $("#homepage");
    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
        home.toggleClass("hide");
    });

 
  


/* SCROLLING ALL PAGE */

 $('.nav__link').on('click', function (e) {
	 	
    e.preventDefault();

  var target = this.hash,
   $target = $(target);

   $('html, body').stop().animate({
      'scrollTop': $target.offset().top
 }, 800, 'swing', function () {
     window.location.hash = target;
 }); 
});

/* MODAL */

const btn = $('.works__btn');
const modal = $('.modal');
const modalClose = $('.modal__close');

btn.on('click', function (event){
    event.preventDefault();

    modal.addClass('show');
    $("body").addClass('no-scroll');
});

/* CLOSE */

 modalClose.on('click', function (event){
    event.preventDefault();

    modal.removeClass('show');
    $("body").removeClass('no-scroll');
}); 

/* CLOSE TO CLICK BACKGROUND */

$(".modal").on("click", function (event){

    modal.removeClass('show');
    $("body").removeClass('no-scroll');
});

/* BUTTON UP */

$(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('.button__up').fadeIn();
    } else {
    $('.button__up').fadeOut();
    }
    });
    
    $('.button__up').click(function() {
    $('body,html').animate({scrollTop:0},600);
    });

}); 

/* SLIDER */

let slideIndex = 1,
slides = document.querySelectorAll('.badge__intro'),
dotsWrap = document.querySelector('.slider__dots'),
dots = document.querySelectorAll('.dot');
showSlides(slideIndex);
function showSlides(n) {
slides.forEach((item) => item.style.display = 'none');
        for (let i =0; i < slides.length; i++) {
    slides[i].style.display = 'none';
}  
 dots.forEach((item) => item.classList.remove('dot-active'));

slides.forEach((item) => item.style.display = 'none');
slides[slideIndex - 1].style.display = 'block';
dots[slideIndex - 1].classList.add('dot-active');
} 
function currentSlide(n) {
showSlides(slideIndex = n);
}
 dotsWrap.addEventListener('click', function(event) {
   for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
          currentSlide(i);
      }
   }
});  







