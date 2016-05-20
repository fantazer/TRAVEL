
/* ###### init skrol to point  ######*/
/* ###### bower i page-scroll-to-id  ######*/
/*(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:200,
				    highlightClass:"left-nav-el-active"
				});
    });
 })(jQuery);*/ 

/* ###### init slide mobile menu  ######*/
/* ###### bower i jQuery.mmenu  ######*/
/* ###### more  https://gist.github.com/fantazer/a35dfd0f7b8dea3b1cf6  ######*/
/*
	$("#my-menu").mmenu({
		extensions: ["effect-menu-slide", "effect-listitems-slide"] - for animation
	});
*/

$(document).ready(function(){

//Hide toggle el
var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}

	hideToggle('.top-menu-enter','.log-wraper');
	hideToggle('.main-head-cont-enter','.log-wraper');

	$(".main-head-slider").owlCarousel({
	 	items : 1,
	 	pagination : false,
	 	autoplay:true,
    autoplayTimeout:10000,
	 	singleItem:true,
	 	loop:true,
	 	animateOut: 'fadeOut'
	 	}
	 );

	 $(".result-left-img").owlCarousel({
	 	items : 1,
	 	pagination : false,
	 	autoplay:true,
    autoplayTimeout:10000,
	 	singleItem:true,
	 	loop:true,
	 	autoHeight:true,
	 	//animateOut: 'fadeOut'
	 	}
	 );  
	 

	$('.result-right-img-el').click(function(){
		var NumberSlide = $(this).index();
		$('.result-left-img').trigger('to.owl.carousel', NumberSlide)
	})



	 $('.main-head-cont-enter').click(function(){
		$('.log-wraper-main').slideToggle()
	})
	 $(document).click(function (event) {
        if ($(event.target).closest('.log-wraper-main').length == 0 
            && $(event.target).attr('class') != 'main-head-cont-enter' 

             ) {
            $('.log-wraper-main').hide();
        }
    });

	$('.lk-list-el-sub-triger').click(function(){
		$(this).parent().next('.lk-list-el-sub').slideToggle()
	})

	$('.registration-trigger').click(function(){
		$('#login-form').hide()
		$('#registration-form').show()
	})

	$('.toggle-top-menu').unbind('click').click(function(){
		$('.main-head-cont-menu').slideToggle()
	})


	$('.help-contact-bot').click(function(){
		$('.help-contact-wraper').slideToggle()
	})

	$('.toggle-basket-edit').click(function(){
		$('.toggle-basket-wraper').slideToggle()
	})
	
	$('.toggle-basket-edit').click();
	$('.lk-left-el-profil').click(function(){
		$(this).find('.lk-left-el-sub').slideToggle()
	})

	$('.toggle-top-menu').click(function(){
		$('.top-menu-items').slideToggle()
	})

	$('.fa-sort-desc').click(function(){
		$('.faq-menu').slideToggle()
	})

	
	$('.content-right-sort-title-toggle').click(function(){
		$('.content-right-sort-el').slideToggle()
	})
	$('.content-right-sort-title-filter').click(function(){
		$('.content-left').slideToggle()
	})
	$('.btn-more').click(function(){
		$('.result-right-hide-mobile').slideToggle()
	})
	$('.top-search-more').click(function(){
		$('.top-search-date').slideToggle()
		$('.top-search-time').slideToggle()
	})

	//Forms style
	$(".mewtwo-hotels-container label").css('color','#fff');
	$('.mewtwo-hotels').removeAttr('class');
	$(".mewtwo-show_hotels").css('display','none');
	//$(".mewtwo-hotels-submit_button").removeAttr('class');
	$(".mewtwo-hotels").addClass('FormStyle')

	//Get progress Bar
	$('.result-mark-value').each(function(){
		var progress = $(this).data('mark');
		$(this).css('width',progress+'%')
		if(progress<30 && progress>0){
			$(this).css('background-color','#C34632')
		}
		if(progress<70 && progress>30){
			$(this).css('background-color','#0074D9')
		}
		if( progress>70){
			$(this).css('background-color','#5DC332')
		}
	})


	$('.get-bron').click(function(){
		$('.modal-order').bPopup({
				closeClass:'fa',
					position:['auto','auto'], // position center
				follow: [true,false]
		}); 
	})

	$('.tour-table-el-right .btn-main').click(function(){
		$('.modal-bron').bPopup({
				closeClass:'btn-main',
				position:['auto','auto'], // position center
				follow: [true,false],
		}); 
	})

	$('#modal-get-bron').click(function(){
			$('.modal-order').bPopup().close();
			$('.modal-bron-phone').bPopup({
				position:['auto','auto'], // position center
				follow: [true,false],
				})
	})
	$('.modal-bron-phone-wraper .btn-main').click(function(){
			$('.modal-bron-phone').bPopup().close();
			$('.modal-bron').bPopup({
				closeClass:'btn-main',
				position:['auto','auto'], // position center
				follow: [true,false],
				})
	})
	
		
	
	/* ###### init EasyDropDown style for selects  ######*/
	/* ###### bower i easydropdown  ######*/
	/*<select class="dropdown"> add class (dropdown)
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
</select>
*/

	/* ###### init bpopup  ######*/
	/* ###### bower i bpopup  ######*/
	// Add class hide
	// $('.section-main-form button').click(function(){
	//	$('.section-modal').bPopup({
	// 			closeClass:'section-modal-but',
	//			position:['auto','auto'], // position center
	//			follow: [true,false],
	// 	}); 
	//})


	/* ###### init stickUp  ######*/
	/* ###### bower i sticky  ######*/
	/*$("#sticker").sticky({topSpacing:0});*/


	/* ###### init OwlCarousel2  ######*/
	/*!!! add class owlCarousel !!!*/
	/* ###### bower i OwlCarousel2 ######*/
	
	//		.owl-next,
	//		.owl-prev
	//			position absolute
	//			top 50%
	//			margin-top -20px
	//			
	//		.owl-carousel
	//			position relative
	//		.owl-prev
	//			left -5%
	//		.owl-next
	//			right -5%
	//

	/* ###### init validate form  ######*/
	/* ###### bower i jquery-validation ######*/
	/*$('#myform').validate({
			rules:{ //правила для полей 
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязатлеьно для заполнения',
					number:'Введите правильный телефон'
				},
				
			}
			submitHandler:function(){ //выполнять если все валидно
					alert('Форма заполнена правильно');
				}
	})*/

	/* ###### init animatedModal  ######*/
	/* ###### bower i animatedModal  ######*/
	// $(".play").animatedModal({
	//  	 animatedIn:'lightSpeedIn',
	//     animatedOut:'bounceOutDown',
	//     color:'#0394c7'
	//  	});

	/* ###### init responsive-tabs  ######*/
	/* ###### bower i responsive-tabs  ######*/
/*    $('#horizontalTab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        active: 0
        
    });*/

	/* ###### init fancybox  ######*/
	/* ###### bower i fancybox  ######*/
	
	
	
	/* ###### init scrollup  ######*/
	/* ###### bower i scrollup  ######*/
	/*http://www.jqueryscript.net/animation/Customizable-Back-To-Top-Button-with-jQuery-backTop.html*/
	// $('.write-review-arrow').backTop();
	
})