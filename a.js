
    $ = document.querySelector.bind(document)
    $$ = document.querySelectorAll.bind(document)
    var x = $$('.acti')
    var y = $('.line')
    y.style.left = x.offsetLeft +'px'
   y.style.width= x.offsetWidth +'px' 

    x.forEach(function(a){
        a.onmouseover = function(){
            y.style.left = a.offsetLeft +'px'    
            y.style.width= a.offsetWidth +'px'

        }
        a.onmouseout = function(){
            y.style.width= 0 +'px'
        }
        }
    )

    var a = $('.header-logo img')
    var b = $('.list-menu-left')
    var z = $$('.list-menu-option ')
    var active = $$('.active')
    var menu = $('.menu-option')
    z.forEach(function(a){
        a.onmouseover = function(){
            y.style.width= a.offsetWidth +'px'

        }
        a.onmouseout = function(){
            y.style.width= 0 +'px'

        }
    })
     b.style.width = a.offsetWidth +'px'
    active.forEach(function(ok){
        ok.onclick = function(){
            menu.classList.toggle('active')
            y.style.left = ok.offsetLeft +'px'    
            y.style.width= ok.offsetWidth +'px'

        }
           
    })
    var menuMobile1 = $("#menu1")
    var menuMobile2 = $("#menu2")
    var icon1 = $(".icon1")
    var icon2 = $(".icon2")
    menuMobile1.onclick = function(){
        $('.list-option1').classList.toggle('active')
    }
    menuMobile2.onclick = function(){
        $('.list-option2').classList.toggle('active')
    }
   icon1.onclick = function(){
       $('.menu-mobile').style.animation = 'transform ease-in 0.4s';
       $('.menu-mobile').style.transform = 'translateX(0%)';

   }
   icon2.onclick = function(){
    $('.menu-mobile').style.animation = 'transform2 ease-in 0.4s';
    $('.menu-mobile').style.transform = 'translateX(100%)';

   }


   var sliderIndex = 1  
    showSlides(sliderIndex)
   function currentSlide(n) {
    showSlides(sliderIndex = n);
  }
   function showSlides(n){
       var i
       var slides = $$('.slider-item')
    var dot = $$('.dot')
    
      
       for (i = 0; i< slides.length; i++){
           slides[i].style.display = 'none'; 
       }

       if (n < 1) { n = slides.length}

       if ( sliderIndex >slides.length){
        sliderIndex = 1
       }

       for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" dot-active", "");
      }
       slides[sliderIndex-1].style.display = 'block'
      dot[sliderIndex-1].className += " dot-active";


   }
   var slideIndex = 0;
showSlide();
   function showSlide() {
    var i;
    var slides = $$('.slider-item')
    var dot = $$('.dot')
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" dot-active", "");
    }
    slides[slideIndex-1].style.display = 'block'

    dot[slideIndex-1].className += " dot-active";
    setTimeout(showSlide, 2000); 
  }
  


 