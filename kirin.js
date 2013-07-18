(function($) {
	$.fn.suiken = function( options ){
		var timer = 0;
		var slicecount;
		var currentframe = 0;
		var sliceheight;
		var imgobj = $(this);
		var parentobj = $(this).parent();
		var toRad =  Math.PI / 180;
		function init() {
			var imgwidth  = imgobj.width();
			var imgheight  = imgobj.height();
			var imgsrc = imgobj.attr("src");
			slicecount = imgheight;
			sliceheight = imgheight/slicecount;
			imgobj.css("display","none");
			parentobj.prepend($("<ul>").addClass("kirinul").css({"padding-right":setting.amplitude+"px","padding-left":setting.amplitude+"px"}));
			var myobj = parentobj.find("ul.kirinul");
			for (var i=0;i<slicecount;i++) {
				var myy = i*-1*sliceheight;
				myobj.append($('<li/>').css({
					"height":sliceheight+"px",
					"width":imgwidth+"px",
					"display":"block",
					"margin":"0px",
					"padding":"0px",
					"background-repeat":"no-repeat",
					"background-image":"url("+imgsrc+")",
					"background-position":"0px "+myy+"px"
				}));
			}
			myobj.click(function(){
		//console.log(timer);
				if (timer) {
					clearInterval(timer);
					timer = 0;
				} else {
					timer = setInterval(function(){
						parentobj.find("li").each(function(index, Element){
							var mykakudo = Math.floor((currentframe*setting.speed + index)/slicecount*setting.wavelength);
							var myx = Math.floor(setting.amplitude * Math.cos(mykakudo * toRad));
					//		var myy = index*-1*sliceheight;
							$(Element).css({"margin-left":myx+"px"});
							//$(Element).css({"background-position":myx+"px "+myy+"px"});
						});
						currentframe ++;
					},1000/setting.fps);
				}
			});
		};
		
		var defaults = {
			'fps' : 24,
			'speed' : 5,
			'amplitude' : 100,
			'wavelength' : 500
		};

		var setting = $.extend( defaults, options );

		if(imgobj.width() > 0) {
			init();
		} else {
			imgobj.on('load',init);
		}
		return this;
	}
})(jQuery);
