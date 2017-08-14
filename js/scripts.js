$(document).ready(function(){
  var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  var suits = ["hearts", "clubs", "spades", "diamonds"];
  var deck = [];
  suits.forEach(function(suit){
    cards.forEach(function(card){
      deck.push(card + " of " + suit);
    });
  });

  var deckString = deck.toString();
  deckString = deckString.replace(/,/g,"<br>");

  $("p").html(deckString);
});
