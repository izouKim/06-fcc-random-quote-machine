/*
Code by Victoria Bergquist.
Modified by Izou Kim.
*/

/*------------------------------
           Quotes 
------------------------------*/
var quotes = [
  "The unexamined life is not worth living.",
  "Whereof one cannot speak, thereof one must be silent.",
  "Entities should not be multiplied unnecessarily.",
  "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "We have to dare to be ourselves, however frightening or strange that self may prove to be.",
  "There is nothing either good or bad, but thinking makes it so.",
  "Wise men speak because they have something to say; fools because they have to say something.",
  "Without deviation from the norm, progress is not possible.",
  "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.",
  "A truth that's told with bad intent Beats all the lies you can invent.",
  "We are addicted to our thoughts. We cannot change anything if we cannot change our thinking.",
  "I cannot teach anybody anything. I can only make them think.",
  "Those who know do not speak. Those who speak do not know.",
  "Morality is simply the attitude we adopt towards people we personally dislike.",
  "Life is really simple, but we insist on making it complicated."
];

var author = [
  "Socrates",
  "Ludwig Wittgenstein",
  "William of Ockham",
  "Thomas Hobbes",
  "Albert Einstein",
  "May Sarton",
  "William Shakespear",
  "Plato",
  "Frank Zappa",
  "Bertrand Russell",
  "William Blake",
  "Santosh Kalwar",
  "Socrates",
  "Lao Tsu",
  "Oscar Wilde",
  "Confucius"
];

/*------------------------------
        Get Quotes Function
------------------------------*/
var randomQuote;
var randomAuthor;

function getQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNumber];
  randomAuthor = author[randomNumber];

  $("#text").text(randomQuote);
  $("#author").text(randomAuthor);
}

/*------------------------------
        Initial Quote 
------------------------------*/
$(document).ready(function() {
  getQuote();
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
  $("#new-quote").on("click", function(event) {
    event.preventDefault();
    getQuote();
  });
  $("#tweet-quote").on("click", function(event) {
    event.preventDefault();
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        '"' +
        randomQuote +
        '" ' +
        "by " +
        randomAuthor
    );
  });
});
