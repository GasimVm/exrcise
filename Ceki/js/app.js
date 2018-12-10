
 $(".hesab").click(function(event) {
 	 let age=($("input:first").val())*1;
 	 let boy=($("#boyu").val())/100;
 	 let ceki=($("input:last").val())*1;
 	 let emsal=ceki/(boy*boy);
 	 $(".seh1").css({
 	 	display: "none",
 	 	
 	 });
 	 $(".seh2").css({
 	 	display: "inline-block",
 	 });
 	 if(emsal<25){
 	 	$(".ariq").css({
 	 		display: "inline-block",
 	 		marginLeft:"200px"
 	 		
 	 	});
 	 }
 	 	if(emsal>25 && emsal<29){
 	 		$(".normal").css({
 	 		display: "inline-block",
 	 		marginLeft:"200px"
 	 		
 	 	});
 	 	}
 	 	if(emsal>29 && emsal<32){

 	 $(".kok").css({
 	 		display: "inline-block",
 	 		marginLeft:"200px"
 	 		
 	 	});		
 	 }
 	 if(emsal>32){

 	 $(".lapkok").css({
 	 		display: "inline-block",
 	 		marginLeft:"200px"
 	 		
 	 	});		
 	 }
 }); 	 	
$(".geri").click(function(event) {
	$(".seh2").css({
 	 	display: "none",
 	 	
 	 });
 	 $(".seh1").css({
 	 	display: "inline-block",
 	 });
});