$( document ).ready(function() {
    $('.select li').click(function() {
    	$(this).next('ul').toggleClass('active');
    });

     $('.dropdown li').click(function() {
     	$(this).parent().parent().find('.choice').text($(this).text());
     	$('.select ul').removeClass('active');
     });

     $('.filters-films .card .button').click(function() {
     	$('.filters-window').addClass('show');
     	$('.container').addClass('blur');
     	$("html, body").animate({ scrollTop: 70 }, 600);
 	 });

 	 $('.filters-window .cross').click(function() {
 	 	$('.filters-window').addClass('unshow');
 	 	
 	 	setTimeout(function() {
	 	 	$('.filters-window').removeClass('show');
	 	 	$('.filters-window').removeClass('unshow');
	 	 	$('.container').removeClass('blur');
	 	 }, 200);
 	 });
});