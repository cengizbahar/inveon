$(document).ready(function(){
	$(".three").attr("src","img/3.svg");
	$('.three').click(function(){
		$('.col_3').removeClass('col_3').addClass('col_4');
		$(".three").attr("src","img/33.svg");
		$(".four").attr('src','img/4.svg');
	});

	$(".four").attr("src","img/44.svg");
	$('.four').click(function(){
		$(".col_4").removeClass("col_4").addClass("col_3");
		$('.four').attr('src','img/44.svg');
		$('.three').attr('src','img/3.svg');


	});
	


});

