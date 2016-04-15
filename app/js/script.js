
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

	$('.top-menu-enter').click(function(){
		$('.log-wraper').slideToggle()
	})
	

	 $(document).click(function (event) {
        if ($(event.target).closest('.log-wraper').length == 0 
            && $(event.target).attr('class') != 'top-menu-enter' 

             ) {
            $('.log-wraper').hide();
        }
    });
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


	$('.registration-trigger').click(function(){
		$('#login-form').hide()
		$('#registration-form').show()
	})
	$('.toggle-top-menu').click(function(){
		$('.top-menu-items').slideToggle()
	})

	$('.toggle-top-menu').unbind('click').click(function(){
		$('.main-head-cont-menu').slideToggle()
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
	$(".mewtwo-hotels-submit_button").removeAttr('class');
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


	$('#get-bron').click(function(){
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
			$('.modal-bron').bPopup({
				closeClass:'btn-main',
				position:['auto','auto'], // position center
				follow: [true,false],
				})
	})
	$('#modal-get-bay').click(function(){
			$('.modal-order').bPopup().close();
			$('.modal-exs').bPopup({
					closeClass:'btn-main',
					position:['auto','auto'], // position center
			}); 
	})

	//datePicker
	
		$('.input-date').datepicker({
			language: 'ru'
		});
		$('.input-date').on('changeDate', function(ev){
		    $(this).datepicker('hide');
		});


		$('#modal-date').datepicker({
			language: 'ru'
		});
		$('#modal-date').on('changeDate', function(ev){
		    $(this).datepicker('hide');
		});

	var slider = document.getElementById('rangeSlider');

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});

	

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
	// $(".play").fancybox();
	// a(href="img/item-house-1.png" rel="group-element(для объединения в группу)") - image in a
	//	img(src="img/item-house-1.png", alt="")
	
	/* ###### init scrollup  ######*/
	/* ###### bower i scrollup  ######*/
	/*http://www.jqueryscript.net/animation/Customizable-Back-To-Top-Button-with-jQuery-backTop.html*/
	// $('.write-review-arrow').backTop();
	
})