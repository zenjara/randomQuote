$(document).ready(function(){
    $("#generator").on("click",function () {

        $.getJSON("http://query.yahooapis.com/v1/public/yql",
            {
                q:"select * from json where url=\"http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json\"",
                format: "json"
            },
            function(data){
                if (data.query.results) {
                    $("#quote").text(data.query.results.json.quoteText);
                    $("#author").text(data.query.results.json.quoteAuthor);
                    $(".twitter").attr("href", "https://twitter.com/intent/tweet?text="+data.query.results.json.quoteText);
                } else {
                    console.log("No results found!");
                }
            }
        );
    });

});

