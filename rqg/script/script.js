//-- Quotes (total: 24) --//
var quotes = ["Do not take life too seriously. You will never get out of it alive.  -Elbert Hubbard", "People who think they know everything are a great annoyance to those of us who do.  -Isaac Asimov", "Always remember that you are absolutely unique. Just like everyone else.  -Margaret Mead", "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.  -Winston Churchill", "Everything is funny, as long as it\'s happening to somebody else.  -Will Rogers", "If you haven\'t got anything nice to say about anybody, come sit next to me.  -Alice Roosevelt Longworth", "No man has a good enough memory to be a successful liar.  -Abraham Lincoln", "A day without sunshine is like, you know, night.  -Steve Martin", "Laugh and the world laughs with you, snore and you sleep alone.   -Anthony Burgess", "I always wanted to be somebody, but now I realize I should have been more specific.  -Lily Tomlin", "Behind every great man is a woman rolling her eyes.  -Jim Carrey", "Roses are red, violets are blue, I'm schizophrenic, and so am I.  -Oscar Levant", "A woman\'s mind is cleaner than a man\'s: She changes it more often.  -Oliver Herford", "Get your facts first, then you can distort them as you please.  -Mark Twain", "We are all here on earth to help others; what on earth the others are here for I don\'t know.  -W H Auden", "Wine is constant proof that God loves us and loves to see us happy.  -Benjamin Franklin", "A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.  -Lana Turner", "Go to Heaven for the climate, Hell for the company.  -Mark Twain", "My fake plants died because I did not pretend to water them.  -Mitch Hedberg", "Procrastination is the art of keeping up with yesterday.  -Don Marquis", "I\'m sorry, if you were right, I\'d agree with you.  -Robin Williams", "I believe that if life gives you lemons, you should make lemonade... And try to find somebody whose life has given them vodka, and have a party.  -Ron White", "Happiness is having a large, loving, caring, close~knit family in another city.  -George Burns", "Too much agreement kills a chat.  -Eldridge Cleaver", "An optimist is a fellow who believes a housefly is looking for a way to get out.  -George Jean Nathan"];

//-- Begin Script Block --//
//Onload Event
window.onload = function() {
    quoteor();
};
//Store randomQuote String for Twitter
//Quoteor function
function quoteor() {
    //Random a number
    var randomQuoteID = Math.floor(Math.random() * quotes.length);   //Get quote 
    var randomQuote = "<q>" + quoteStr(quotes[randomQuoteID]);
    //Match quote for twitter
    tweetit(quotes[randomQuoteID]);
    //Print quote to screen
    return document.getElementById('quoteblock').innerHTML = randomQuote;
};
//Add italic tag to quote string
function quoteStr(str) {
    str = str.replace(/[\-]/gi, '</q><p id="quote">-');
    str += "</p>";
    return str;
}
//Twitter button and quote matching
function tweetit(str) {
    var twitterDiv = document.getElementById('twitterButton');
    twitterDiv.parentNode.removeChild(twitterDiv);
    var twitter = document.createElement('a');
    var tweetNode = document.createTextNode("Tweet");
    var tweet = "https://twitter.com/intent/tweet?text=" + str;
    twitter.setAttribute('href', tweet);
    twitter.setAttribute('id', 'twitterButton');
    twitter.setAttribute('target', '_blank');
    twitter.appendChild(tweetNode);
    document.getElementById('twitter').appendChild(twitter);
}
