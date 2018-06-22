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

	     	if ($("html, body").scrollTop() < 70)
	     		$("html, body").animate({ scrollTop: 70 }, 600);
	 	 });

	 	 $('.lightbox .cross').click(function() {
	 	 	$('.lightbox').addClass('unshow');
	 	 	
	 	 	setTimeout(function() {
		 	 	$('.lightbox').removeClass('show');
		 	 	$('.lightbox').removeClass('unshow');
		 	 	$('.container').removeClass('blur');
		 	 }, 200);
	 	 });

<<<<<<< HEAD
	  $('.home-caroussel .cards').click(function() {
	  	let card = $(this).find('.card:first-child');
	    card.animate({"margin-left": -350}, 400, function(){  
	    	setTimeout(function() {
	     		card.css("margin-left",0).appendTo(card.parent());
	     	}, 500);
	    });  
	  });
      $(document).ready(function(){
          $("#myInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $(".wrapper article").filter(function() {
                  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
          });
      });
=======
		  $('.home-caroussel .arrow').click(function() {
		  	let card = $(this).parent().find('.card:first-child');
		    card.animate({"margin-left": -360}, 1000, function(){  
		    	setTimeout(function() {
		     		card.css("margin-left",0).appendTo(card.parent());
		     	}, 500);
		    });  
		  });
	}, 1000);
>>>>>>> 8f1dbcb6910246f28e7e233999d29125b8e8760d
});