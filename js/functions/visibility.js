function vanish() {
  $(document.getElementsByClassName('N/A')).children('*').hide()
  $('.exData').hide()
  $('.exData').css('zIndex', 10)
};

function show(el) {
  $("#"+el).fadeIn()
};
function hide(el) {
  $("#"+el).fadeOut()
};

function loadbuttons() {
	/*
	[].forEach.call(document.querySelectorAll('.Yes'), function (el) {
	  el.style.display = 'inherit';
	});
	*/
};