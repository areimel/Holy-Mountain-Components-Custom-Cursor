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

$(document).ready(function(){
	
	if($('#custom_cursor').length){
		console.log("Custom Cursor Detected");

		var mouseX=window.innerWidth/2,
		    mouseY=window.innerHeight/2;

		var cursor = { 
		     el:$('#custom_cursor'),
		     x:window.innerWidth/2, 
		     y:window.innerHeight/2, 
		     w:80, 
		     h:80, 
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
		  cursor.x = lerp (cursor.x, mouseX, 0.1);
		  cursor.y = lerp (cursor.y, mouseY, 0.1);
		  cursor.update() 
		}

		function lerp (start, end, amt){
		  return (1-amt)*start+amt*end
		}
	}
		
});
