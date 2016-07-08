// JavaScript Document

//document.getElementById('pre-loader').style.display='block';

//Pre-loader
/*/jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#pre-loader').animate({'opacity' : '0'},300,function(){jQuery('#pre-loader').hide()})",800);
	setTimeout("jQuery('.page_block').animate({'opacity' : '1'},500)",800);
	
	      $("#main-menu").sticky({ topSpacing: 0 });

    });

});*/

jQuery(window).load(function(){
      $("#main-menu").sticky({ topSpacing: 0});
    });
	
	jQuery(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade"
  });
  
  $(function() {
  $('.acc_ctrl').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next()
      .stop()
      .slideUp(300);
    } else {
      $(this).addClass('active');
      $(this).next()
      .stop()
      .slideDown(300);
    }
  });
});

});