jQuery(function($){
	$(document).scroll(function(){
		/* examples of scroll function; onScroll(element, minWindowScroll, maxWindowScroll) */
		onScroll($('.portfolio-section-1'), 850, 1000);
		onScroll($('.portfolio-section-1 h2'), 1000, 1300);
	});

	function onScroll(findSection, winMin, winMax){
		if(findSection && winMin && winMax){
			// once vars are passed in, the function will see what the scrollTop is and calculate max and min of passed in vars.
			var winScoll = $(window).scrollTop();
			var dif = (winScoll-winMin)/100;
			if(winScoll < winMin){
				findSection.css({opacity:0});
			}
			if(winScoll > winMin && winScoll < winMax){
				findSection.css({opacity:dif});
			}
			if(winScoll >= winMax){
				findSection.css({opacity:1});
			}
		} else {
			console.log('Missing a var!');
		}
	}
});
