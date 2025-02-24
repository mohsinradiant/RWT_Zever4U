/*########################################################################*/
/*#################-------------HERO SLIDER---------------################*/ 
/*########################################################################*/
 
var swiper = new Swiper(".hero-section", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
	effect: 'fade',
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});

 

/*########################################################################*/
/*#################-----------PRODUCT SLIDER--------------################*/ 
/*########################################################################*/ 

var productsSlider = new Swiper(".products-slider", {
    slidesPerView: 4,
    spaceBetween: 18,
	loop: true,
    pagination: {
     el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1
          
        },
        480: {
          slidesPerView: 2
          
        },
        576: {
          slidesPerView: 2
          
        },
        640: {
          slidesPerView: 3
          
        },
        768: {
          slidesPerView: 3
          
        },
        1024: {
          slidesPerView: 4
          
        },
        1280: {
          slidesPerView: 4
          
        },
    },
});

/*########################################################################*/
/*#################-----------Shop by Occasions SLIDER-------------################*/ 
/*########################################################################*/ 

 var exhibitorSlider = new Swiper(".Occasions-swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 2500,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    breakpoints: {
        0: { slidesPerView: 2 },
        480: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4},
    },
}); 
 
/*########################################################################*/
/*####################------TESTIMONIALS SLIDER-------####################*/ 
/*########################################################################*/ 

var swiperTestimonials = new Swiper(".testimonials-slider", {
    loop:  true,
    autoplay:  true,
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
       el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); 


/*LISTING SIDEBAR COLLAPSE*/ 

jQuery('.filter-block .filter-block-title').click(function(){
    jQuery(this).siblings('.filter-block-body').slideToggle('500');
    jQuery(this).find('.bi-dash').toggleClass('bi-plus');
});
 
 
 /*FEATURE COLLAPSE*/
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

         
        var links = this.el.find('.product-info-header');
         
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('isOpen');

        if (!e.data.multiple) {
            $el.find('.product-info-content').not($next).slideUp().parent().removeClass('isOpen');
        };
    }   

    var accordion = new Accordion($('.product-info-details '), false);
});

 /*PRODUCT QUANTITY INCEARSE - DESCREASE*/ 
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value);
    //value = isNaN(value) ? 1 : value;
    if(value > 1) value--;
    else value = 1;
  //alert(value);
    document.getElementById('number').value = value;
}
/*########################################################################*/
/*#################----------MEGA MENU---------------################*/ 
/*########################################################################*/ 
const MegaMenuList = document.querySelector("#Company-MegaMenu");
const MMListItem = MegaMenuList.querySelectorAll("li");
const MmTabsContent = document.querySelectorAll(".megamenu-tabcontent");

 MMListItem.forEach((listItem, i) => {
  listItem.addEventListener("mouseover", function() {
    var divID = listItem.getAttribute('data-href').toString();
    for (let el of MmTabsContent) el.style.display = 'none';
    for (let el of MMListItem) el.classList.remove("active");
    document.getElementById(divID).style.display = "block";
    listItem.classList.add("active");
  })
});



