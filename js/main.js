//Поиск формы и отправка данных через php файл методом POST
$(document).ready(function() {

	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", 
			data: th.serialize()
		}).done(function() {
			$('header').after('<div id="openModal" class="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3 class="modal-title">Название</h3><a id="close" href="" title="Close" class="close">×</a></div><div class="modal-body"><p>Содержимое модального окна...</p></div></div></div></div>');
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
//Выполняет присваивание стилевого правила к элементу с классом .popup при нажатии на элемент с классом .popup_open (открыть элемент)
$('.popup_open').click(function() {
	$('.popup').css("display", "block")
});
//Выполняет присваивание стилевого правила к элементу с классом .popup при нажатии на элемент с классом .close (скрыть элемент)
$('.close').click(function() {
	$('.popup').css("display", "none")
});
//Добавление изображения к кнопкам слайдера
$('.slider_block').slick({
    prevArrow: '<button class="slide-prev" type="button"><img class="slide-prev-img"></button>',
    nextArrow: '<button class="slide-next" type="button"><img class="slide-next-img"></button>'
});
//Добавление изображения к кнопкам слайдера
//Показ 3-х элементов в одном слайде
$('.multiple-items').slick({
    prevArrow: '<button class="slide-card-prev" type="button"><img class="slide-prev-img"></button>',
    nextArrow: '<button class="slide-card-next" type="button"><img class="slide-next-img"></button>',
    slidesToShow: 3,
    slidesToScroll: 3
});

