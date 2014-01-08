$(function() {
	var currentMousePos = { x: -1, y: -1 };
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
    });
	var $element = $('.portfolio'),
		$coder = $('.coder-img'),
		$color = $('.color-img');

	$element.mouseover(function() {
		var width = $(this).width();
		var height = $(this).height();

		if(currentMousePos.y <= height) {
			var diff = Math.abs(currentMousePos.x - width / 2);
			if(currentMousePos.x <= width / 2) {
				//Coder
				var width = $coder.width();
				var dataWid = $coder.data('width');
				if(width + dataWid > dataWid * 2) width = dataWid * 2;
				else width += diff;
				$coder.animate({ width: width }, 1000);
				var diffWidth = Math.abs(width - diff);
				if(diffWidth < 0) diffWidth = 0;
				$color.animate({ width: diffWidth }, 1000);
			} 
			else {
				//Color
				var width = $color.width();
				var dataWid = $color.data('width');
				if(width + dataWid > dataWid * 2) width = dataWid * 2;
				else width += diff;
				$color.animate({ width: width }, 1000);
				var diffWidth = Math.abs(width - diff);
				if(diffWidth < 0) diffWidth = 0;
				$coder.animate({ width: diffWidth }, 1000);
			}
		}
		else{
			// Normal Condition
			$coder.animate({ width: $coder.data('width') }, 1000);
			$color.animate({ width: $color.data('width') }, 1000);
		}
	});
});