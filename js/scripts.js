(function () {
	let burger = document.querySelector('.js-burger');
	burger.addEventListener('click', () => {
		burger.classList.toggle('is-active');
	});
}());

function openPost(evt, postName) {
	// Объявить все переменные
	let i, tabcontent, tablinks;
 
	// Получить все элементы с помощью class="tabcontent" и спрятать их
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
	}

	// Получить все элементы с помощью class="tablinks" и удалить class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" has-active", "");
	}

	// Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку
	document.getElementById(postName).style.display = "flex";
	evt.currentTarget.className += " has-active";
 };