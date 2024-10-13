$( document ).ready( function(){
	var IS_IE_6 = $.browser.msie && $.browser.version < 7;
	
	$('.portfolio').jcarousel({ scroll: 1, wrap: 'both' });
	$('#latest-projects-bg').jcarousel({ scroll: 1, wrap: 'both' });	
	
	$('.close').click(function(){
		if( !IS_IE_6 ) {
			$('#latest-projects').animate({ 'top': top_window + 'px', 'opacity': 0 }, 'slow', function(){
				$('#latest-projects').hide();
				$('.latest-project-button')
					.css({'opacity' : 0})
					.show()
					.animate({ 'top': top_latest + 'px', 'opacity': 1 }, 'slow', function(){});
				
			});
		}else {
			$('#latest-projects').css({ 'visibility': 'hidden' });
			$('.latest-project-button').show();
		}
		
		return false;	
	});
	
	
	$('#navigation-handler').hover(
		function(){ $('#navigation').animate({ 'top' : '20px' }); },
		function(){ $('#navigation').animate({ 'top' : '-20px' }); }
	);
	
	$('#navigation a').click(function(){
		var to = $(this).attr('href');
		$.scrollTo(to, 1200);
		return false;
	});
});


var top_latest = 250;
var top_window = 150;