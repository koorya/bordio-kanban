import { decksGlobal } from "./initValue";

export type CardType = {
  color: string;
  title: string;
  time: string;
};

export type Column = {
  title: string;
  cardList: CardType[];
};

export interface CardInserter {
  insertAfter: (item: CardType, after: CardType) => void;
  insertBefore: (item: CardType, before: CardType) => void;
}

export interface CardMover extends CardInserter {
  moveCardToColumn: (card: CardType, title: string) => void;
}

export class CardController implements CardMover {
  private _columnList: Column[];

  constructor(deck: Column[]) {
    this._columnList = deck;
  }
  insertAfter(card: CardType, after: CardType) {
    console.log(`${card.title} after ${after.title}`);

    if (card === after) return;
    this._columnList.forEach(({ cardList }) => {
      const cardIdx = cardList.findIndex((c) => c === card);

      if (cardIdx > -1) cardList.splice(cardIdx, 1);
    });

    const column = this._columnList.find(({ cardList }) =>
      cardList.includes(after)
    );
    if (!column) return;
    const idx = column.cardList.indexOf(after);
    if (idx === -1) return;
    column.cardList.splice(idx + 1, 0, card);
  }

  insertBefore(card: CardType, before: CardType) {
    console.log(`${card.title} before ${before.title}`);
    if (card === before) return;
    this._columnList.forEach(({ cardList }) => {
      const cardIdx = cardList.findIndex((c) => c === card);

      if (cardIdx > -1) cardList.splice(cardIdx, 1);
    });

    const column = this._columnList.find(({ cardList }) =>
      cardList.includes(before)
    );
    if (!column) return;
    const idx = column.cardList.indexOf(before);
    if (idx === -1) return;
    column.cardList.splice(idx, 0, card);
  }

  moveCardToColumn(card: CardType, title: string) {
    console.log(title, card);
    const cardList = this._columnList.find(
      ({ title: t }) => t === title
    )?.cardList;
    if (cardList) this.insertAfter(card, cardList[cardList.length - 1]);
  }
  public get columnList() {
    return this._columnList;
  }
}

export const getCardController = () => new CardController(decksGlobal);
