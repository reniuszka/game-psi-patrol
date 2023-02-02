import React, { useState, useEffect } from "react";
import { createBoard } from "./setup";
import { shuffleArray } from "./utils";
import Card from "./components/Card/Card";
// Types
import { CardType } from "./setup";
// Styles
import { Grid, Title } from "./App.styles";

const App = () => {
  // create the bords and shuffle it for us
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log("Game Won!");
      setGameWon(true);
    }
  }, [matchedPairs]);

  // const handleClickCallback = (currentCardClicked: CardType) => {
  //   console.log("click");
  //   //flip the card
  //   setCards((prev) =>
  //     prev.map((card) =>
  //       card.id === currentCardClicked.id
  //         ? { ...card, flipped: true, clickable: false }
  //         : card
  //     )
  //   );
  //   //if this is the first card that is flippped just keep it flipped
  //   if (!clickedCard) {
  //     setClickedCard({ ...currentCardClicked });
  //     return;
  //   }

  //   //if it is a match
  //   if (clickedCard.matchingCardId === currentCardClicked.id) {
  //     console.log("it is a match");
  //     setMatchedPairs((prev) => prev + 1);
  //     setCards((prev) =>
  //       prev.map((card) =>
  //         card.id === clickedCard.id || card.id === currentCardClicked.id
  //           ? { ...card, clickable: false }
  //           : card
  //       )
  //     );
  //     //to reset everything to new turn
  //     setClickedCard(undefined);
  //     return;
  //   }

  //   //if it is nOT a match pair, wait 1 ssecond and flip back
  //   setTimeout(() => {
  //     setCards((prev) =>
  //       prev.map((card) =>
  //         card.id === clickedCard.id || card.id === currentCardClicked.id
  //           ? { ...card, clickable: true, flippe: false }
  //           : card
  //       )
  //     );
  //   }, 1000);

  //   setClickedCard(undefined);
  // };
  const handleCardClick = (currentClickedCard: CardType) => {
    // Flip the card
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );
    // If this is the first card that is flipped
    // just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // If it's a match
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    // If it's not a matched pair, wait one second and flip them back
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };

  return (
    <div>
      <Title>Dla Stokrotki &#127804; &hearts;</Title>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </div>
  );
};

export default App;
