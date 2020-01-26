$(function() {
    /* filter */

        let filter = $("[data-filter]");
     
         filter.on("click", function(event) {
           event.preventDefault();
    
           let cat = $(this).data('filter');
    
           if( cat == 'all') {
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
    /* Modal */
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event){
        event.preventDefault();
        //отменяем стандартное резюме

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show')
        $("body").addClass('no-scroll');

        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                transform:"scale(1)"
            }); 
        },200);

        $('#worksSlider').slick('setPosition');
    });


    modalClose.on("click", function(event){
        event.preventDefault(); //отменяем стандартное резюме

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform:"scale(0)"
        });

        setTimeout(function(){
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        },200);
    });

    $(".modal").on("click", function(event){
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform:"scale(0)"
        });

        setTimeout(function(){
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        },200);

    }); // закрывалось модальное окно кликая по нему
    $(".modal__dialog").on("click", function(event){
        event.stopPropagation(); // не закрывалось при клике на само внутрнее модальное окно
    });

    /* slider  slick.js */

    $('#worksSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: false
      }); 
    
});


    // Mobile nav
    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function (event) {
        event.preventDefault();

     nav.toggleClass("show");
    });


