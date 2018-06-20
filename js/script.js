$( document ).ready(function() {
    $('.select li').click(function() {
    	$(this).next('ul').toggleClass('active');
    });

     $('.dropdown li').click(function() {
     	$(this).parent().parent().find('.choice').text($(this).text());
     });

     $('.filters-films .card .button').click(function() {
     	$('.filters-window').show();
     	$('.container').addClass('blur');
 	 });
});