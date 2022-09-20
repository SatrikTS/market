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