$(document).ready(function(){
	$('.js-slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:500,
		easing:'ease',
		infinite:true,
		initialSlide:0,
		autoplay:false,
		autoplaySpeed:7000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
	});
});
$(document).ready(function(){
	$('.js-carousel').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:2,
		slidesToScroll:1,
		speed:500,
		easing:'ease',
		infinite:true,
		initialSlide:0,
		autoplay:false,
		autoplaySpeed:7000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		centerMode:true,
	});
});
$(document).ready(function(){
	$('.js-sale').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:4,
		slidesToScroll:1,
		speed:500,
		easing:'ease',
		infinite:true,
		initialSlide:0,
		autoplay:true,
		autoplaySpeed:1000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
	});
});

(function () {
	let burger = document.querySelector('.js-burger');
	burger.addEventListener('click', () => {
		burger.classList.toggle('is-active');
	});
}());

const toggleTabs = () => {
	const btnTab = document.querySelectorAll('.js-tablinks');
	const tabContent = document.querySelectorAll('.js-tabcontent');
	function removeActiveClass(param) {
		param.forEach((item) => {
			item.classList.remove( 'has-active' );
		})
	}
	btnTab.forEach((element, index) => {
		element.addEventListener('click', () => {
			removeActiveClass(btnTab);
			removeActiveClass(tabContent);
			element.classList.add( 'has-active' );
			tabContent[index].classList.add( 'has-active' );
		})
	})
}
toggleTabs()