import card1 from "./img/card_1.jpg";
import card2 from "./img/card_2.jpg";
import card3 from "./img/card_3.jpg";
import card4 from "./img/card_4.jpg";
import card5 from "./img/card_5.jpg";
import card6 from "./img/card_6.jpg";
import card7 from "./img/card_7.jpg";
import card8 from "./img/card_8.jpg";
// Cardback
import cardBack from "./img/card_back.jpg";

//properties for card
export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

// put the imgs into the array

const cards: string[] = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
];

export const createBoard = (): CardType[] =>
  //we are spreding it twice as we have pairs to mathc! w tablicy mamy 8 cart a chcemy miec ich pary 2*8=16
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
  }));
