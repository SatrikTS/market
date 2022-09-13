(function () {
	let burger = document.querySelector('.js-burger');
	burger.addEventListener('click', () => {
		burger.classList.toggle('is-active');
	});
}());



const toggleTabs = () => {
	const btnTab = document.querySelectorAll(".js-tablinks");
	const tabContent = document.querySelectorAll(".js-tabcontent");
	function removeActiveClass(param) {
		param.forEach((item) => {
			item.classList.remove( "has-active" );
		})
	}
	btnTab.forEach((element, index) => {
		element.addEventListener("click", () => {
			removeActiveClass(btnTab);
			removeActiveClass(tabContent);
			element.classList.add( "has-active" );
			tabContent[index].classList.add( "has-active" );
		})
	})
}
toggleTabs()



/* function openPost( evt, postName ) {
	// Объявить все переменные
	let i, tabcontent, tablinks;

	// Получить все элементы с помощью class="tabcontent" и спрятать их
	tabcontent = document.getElementsByClassName( "js-tabcontent" );
	for ( i = 0; i < tabcontent.length; i++ ) {
	tabcontent[i].style.display = "none";
	}

	// Получить все элементы с помощью class="tablinks" и удалить class " has-active"
	tablinks = document.getElementsByClassName( "tablinks" ) ;
	for ( i = 0; i < tablinks.length; i++ ) {
	tablinks[i].className = tablinks[i].className.replace( " has-active", "");
	}

	// Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку
	document.getElementById(postName).style.display = "flex";
	evt.currentTarget.className += " has-active";
}; */
