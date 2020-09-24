$("#s-b").hide();
$("#p-b").hide();
$("#p-w").show();
$("#s-w").hide();
$("#one").hide();
var video  = document.getElementById("schoolVideo");
//for video pause & display
addVideoControlEvents($("#s-w"));
addVideoControlEvents($("#s-b"));
addVideoControlEvents($("#p-b"));
addVideoControlEvents($("#p-w"));

function addVideoControlEvents(tar){
	tar.bind({
	click: function() {

		if(video.paused){
			video.play();
			$("#s-b").hide();
			$("#p-b").show();
	        $("#pause-black").show();
			$("#p-w").hide();
			$("#s-w").hide();
		} else {
			video.pause();
			$("#s-b").show();
			$("#start-b").show();
			$("#p-b").hide();
			$("#p-w").hide();
			$("#s-w").hide();
		} 
	},
	mouseenter: function() {
		
		if(video.paused){
            $("#start-b").show();
			$("#s-b").show();
	     	$("#p-b").hide();
		    $("#p-w").hide();
			$("#s-w").hide();
		}
		else{
			$("#pause-black").show();
			$("#s-b").hide();
	     	$("#p-b").show();
		    $("#p-w").hide();
			$("#s-w").hide();
		}
	},
	mouseleave: function () {
		
		if(video.paused){
			$("#s-b").hide();
	     	$("#p-b").hide();
		    $("#p-w").hide();
			$("#s-w").show();
			$("#start-w").show();
		}
		else {
			$("#s-b").hide();
	     	$("#p-b").hide();
		    $("#p-w").show();
			$("#s-w").hide();
			$("#pause-w").show()
		}
	}
})
}

