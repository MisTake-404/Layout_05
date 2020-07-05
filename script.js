$(function() {
    $(document).ready(function(){
  	// вешаем обработчик на ссылку с классом "menu_icon" (верхнее меню)
  	$(".menu_icon").click(function(){
  		// выдвигаем/прячем панель с id = panel
  		$("#panel").slideToggle("slow");
  		// изменяем класс самой ссылки
  		$(this).toggleClass("active");
  		// и ничего не делаем дальше (дабы не было перехода по ссылки)
  		return false;
  	});
  });
})
