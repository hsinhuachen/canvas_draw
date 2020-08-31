$(document).ready(function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    var bMouseDown = false;
		var strokeStyle = "#FF0000";
    var bErasing = false;
        
    $("#pencil").click(function() {
		strokeStyle = "#FF0000";
       bErasing = false;
	});
	
	$("#eraser").click(function() {
//		strokeStyle = "#FFFFFF";
        bErasing = true;
	});
	
    $("#canvas").mousedown(function() {
        bMouseDown = true;
    });
    
    $("#canvas").mouseup(function() {
        bMouseDown = false;  
    });
    
    $("#canvas").mousemove(function(e) {
        if (bMouseDown) {
			context.strokeStyle = strokeStyle;
            context.lineWidth = 5;
            context.beginPath();
            if(bErasing == true){
              context.globalCompositeOperation="destination-out";
            }else{
              context.globalCompositeOperation="source-over";
            }
            context.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            context.lineTo(e.pageX ,e.pageY);
            context.stroke();
            
            
            
        }  
    });
});
