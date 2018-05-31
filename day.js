$(document).ready(function() {
  var url = "http://hn.algolia.com/api/v1/search?query=javascript";
  $.getJSON(url, function(data){
    var currentQuote='';
    var quotes = data.hits;
    $('.read').on('click', function(){
     currentQuote= quotes[Math.floor(Math.random() * quotes.length)]
     console.log(currentQuote);
     $('.quoteBody').hide(currentQuote.title);
     $('.quoteBodyLink').html(currentQuote.title);
     $('.quoteBodyLink').attr('href', currentQuote.url);
     $('.quoteAuthor').html(currentQuote.author);
     // $('tweetQuote').attr('href','https://twitter.com/intent/tweet?text= ' + currentQuote.title + ' - ' + currentQuote.author)
     // .attr('target', '_blank')
     // .attr('disabled' , false);
    });
    console.log(quotes[0].title);
  });
});
