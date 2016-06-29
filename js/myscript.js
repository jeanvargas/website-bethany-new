// JavaScript Document

//document.getElementById('pre-loader').style.display='block';

//Pre-loader
jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#pre-loader').animate({'opacity' : '0'},300,function(){jQuery('#pre-loader').hide()})",800);
	setTimeout("jQuery('.page_block').animate({'opacity' : '1'},500)",800);

});
