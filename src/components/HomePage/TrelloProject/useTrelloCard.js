import { useEffect, useState } from "react";
import { useTimer } from "../../../hooks/useTimer";

export const useTrelloCard = (card, updateCard) => {
  const { timerComplete, restartTimer } = useTimer(3000);
  const [cardState, setCardState] = useState(card.content ? card.content : "");

  useEffect(() => {
    setCardState(() => card.content);
  }, [card.content]);

  useEffect(() => {
    if (timerComplete) {
      updateCard({ content: cardState }, card.id);
    }
  }, [timerComplete, card.id, cardState]);

  return { cardState, setCardState, restartTimer };
};
