/********************************************

HOLY MOUNTAIN COMPONENT - MODALS

	NOTES
	- 	Which modal is called is controlled by the data-modal attribute.
		A button with data-modal="thank_you" will open the corresponding 
		modal with data-modal="thank_you"

********************************************/


/***** ============== *****/
/*****  Custom Cursor *****/
/***** ============== *****/
/* Code lifted from: https://medium.com/javascript-in-plain-english/how-to-make-a-custom-cursor-with-lerp-that-follows-pointer-6aa6f92fe48a */
/* .custom_cursor div lives in the Header file */


/********************************************

HOLY MOUNTAIN COMPONENT - CUSTOM CURSOR

	NOTES
	- 	source: https://medium.com/javascript-in-plain-english/how-to-make-a-custom-cursor-with-lerp-that-follows-pointer-6aa6f92fe48a
	- 	place the target element as high up in the <body> as you can.

********************************************/
$(document).ready(function(){

	var target = $('#custom_cursor');
	var target_w = parseInt(target.css("width"));
	var target_h = parseInt(target.css("height"));
	var target_offset_x = 20;
	var target_offset_y = 25;
	var lerp_easing = 0.1;

	console.log(target_w +","+ target_h);
	if(target.length){
		console.log("Custom Cursor Detected");

		/***** Mouse follow function *****/
			var mouseX=window.innerWidth/2,
			    mouseY=window.innerHeight/2;

			var cursor = { 
			     el: target,
			     x:window.innerWidth/2, 
			     y:window.innerHeight/2, 
			     w:target_w + target_offset_x, 
			     h:target_h + target_offset_y, 
			     update:function(){
			                   l = this.x-this.w/2; 
			                   t = this.y-this.h/2; 
			                   this.el.css({ 
			                            'transform':
			                            'translate3d('+l+'px,'+t+'px, 0)' }); 
			                           } 
			}

			$(window).mousemove (function(e){
			  mouseX = e.clientX;
			  mouseY = e.clientY;
			})

			setInterval (move,1000/60)
			function move(){
			  cursor.x = lerp (cursor.x, mouseX, lerp_easing);
			  cursor.y = lerp (cursor.y, mouseY, lerp_easing);
			  cursor.update() 
			}

			function lerp (start, end, amt){
			  return (1-amt)*start+amt*end
			}

		/***** Hover State *****/
					
			//Function
			$.fn.custom_hover = function(){

				$(this).mouseenter(function(){
					$(target).addClass('hover');
				});
				$(this).mouseleave(function(){
					$(target).removeClass('hover');
				});

			};

			//Targets
			$('a').custom_hover();
			$('#toggle').custom_hover();
			$('button').custom_hover();
			$('input').custom_hover();


		/***** Click State *****/
		
			//click state applies to whole document
			$(document).mousedown(function(){
				$(target).addClass('click');
			});
			$(document).mouseup(function(){
				$(target).removeClass('click');
			});
	}
		
});
