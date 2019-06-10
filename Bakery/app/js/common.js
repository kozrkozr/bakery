$(function() {

   //Изменение бэкграунда навигации при прокрутке страницы
   function scroll(){
	   let navMenu = $('.nav-menu');
	   if($(window).scrollTop() > 50) {
		   navMenu.addClass('scrolling');
	   } else {
		   navMenu.removeClass("scrolling");
	   }
	}

	scroll();
    
	$(window).on('scroll', function (){
		scroll();
	}); 
	
    //закрытие навигации на мобильных экранах после нажатия на ссылку
	$('.navbar-nav > li > a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
	
	//добавление бэкграунда в самом верхнем положении навигации
	$('.navbar-toggler').on('click', function (){
		$('.nav-menu').addClass('scrolling');
	})
	 
    //плавный скролл	
	$('a.scrollto').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 80
            }, 900);
            return false;
          }
        }
      });

    
});
