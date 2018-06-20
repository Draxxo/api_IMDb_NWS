$( document ).ready(function() {
    $('.select li').click(function() {
    	$(this).next('ul').toggleClass('active');
    });

     $('.dropdown li').click(function() {
     	console.log($(this).parent().parent());
     });
});