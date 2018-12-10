let vaxt=new Date();
let saat=vaxt.getHours();
let deq=vaxt.getMinutes();
$(".saat").html(""+saat+":"+deq+"")
let lampa=true;
$(".btn").click(function(event) {
    if(lampa){
    	$("div").css({
    		display: "none",
    		
    	});
    	lampa=false;
    
    }else{
    	$("div").css({
    		display: "",
    		
    	});
    	lampa=true;
    }

	});


var url = 'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=34b54c3e825a484c86b00e8a0f802576';
let http=new XMLHttpRequest();
http.open("get",url,false )
http.send();

let xeber=JSON.parse(http.responseText);
let marq=$("marquee");
let xeb=$("h2");
for(let i=0;xeber.articles.length;i++){
	xeb.html(xeber.articles[i].author)
	marq.append("<span>"+xeber.articles[i].title+"</span>")
}
