$( document ).ready(function() {
	setTimeout(function() {
	    $('.select li').click(function() {
	    	$(this).next('ul').toggleClass('active');
	    });

	     $('.dropdown li').click(function() {
	     	$(this).parent().parent().find('.choice').text($(this).text());
	     	$('.select ul').removeClass('active');
	     });

	     $('.button').click(function() {
	     	$('.lightbox').addClass('show');
	     	$('.container').addClass('blur');

	     	let scroll = 70;
			if (window.matchMedia("(max-width: 800px)").matches) scroll = 120;

	     	if ($("html, body").scrollTop() < scroll)
	     		$("html, body").animate({ scrollTop: scroll }, 600);
	 	 });

	 	 $('.lightbox .cross').click(function() {
	 	 	$('.lightbox').addClass('unshow');
	 	 	
	 	 	setTimeout(function() {
		 	 	$('.lightbox').removeClass('show');
		 	 	$('.lightbox').removeClass('unshow');
		 	 	$('.container').removeClass('blur');
		 	 }, 200);
	 	 });

		$(document).ready(function(){
		  $("#myInput").on("keyup", function() {
		      var value = $(this).val().toLowerCase();
		      $(".wrapper article").filter(function() {
		          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		      });
		  });
		});
		
		$('.home-caroussel .arrow').click(function() {

			let margin = -360;
			if (window.matchMedia("(max-width: 800px)").matches) margin = -280;

		  	let card = $(this).parent().find('.card:first-child');
		    card.animate({"margin-left": margin}, 200, "linear", function(){  
		    	setTimeout(function() {
		     		card.css("margin-left",0).appendTo(card.parent());
		     	}, 500);
		    });  
		  });
		}, 2000);
});