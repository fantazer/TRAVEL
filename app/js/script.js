
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
	// $("#owl-example").owlCarousel({
	//  	items : 1,
	//		responsive : {
	//		 		0:{
	//				 	items : 1
	//			 	},
	//			 	768:{
	//				 	items : 2
	//			 	},
	//			 	960:{
	//				 	items : 2
	//			 	},
	//			 	
	//		  },
	//  	margin:50,
	//  	autoHeight : true,
	//  	pagination : false,
	//  	autoPlay : true,
	//  	singleItem:true,
	//  	nav:true,
	// 		navText:['<i class="fa fa-arrow-circle-o-left"></i>','<i class="fa fa-arrow-circle-o-right"></i>']
	//  	}
	//  ); 
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