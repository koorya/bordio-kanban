export type CardType = { color: string; title: string; time: string };

export type Deck = {
  title: string;
  cardList: CardType[];
};
