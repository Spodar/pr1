jQuery(document).ready(function() {

// BEGIN of script for toggle items on product page
	$('.btn-read').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).html('Read More');
			$(this).parents('.featured-item').find('.featured-item-detail').slideUp();
		}
		else {
			$('.featured-item-detail').slideUp();
			$('.btn-read').removeClass('active');
			$('.btn-read').html('Read More');
			$(this).parents('.featured-item').find('.featured-item-detail').slideDown();
			$(this).toggleClass('active')
			$(this).html('Read Less');
		}
	});
// END of script for toggle items on product page



});
