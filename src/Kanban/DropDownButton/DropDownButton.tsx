import React, { useState } from "react";
import {
  ButtonsRoundedArrowed,
  DropDownList,
  DropDownItem,
} from "./DropDownButton.styled";

export const DropDownButton = (props: {
  title: string;
  items: { title: string; handler?: () => void }[];
}) => {
  const { title, items } = props;

  const [isOpened, setIsOpened] = useState(false);

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const shouldOpen = () => {
    if (timer) clearTimeout(timer);
    setIsOpened(true);
  };

  const shouldClose = () => {
    setTimer(setTimeout(() => setIsOpened(false), 500));
  };

  return (
    <ButtonsRoundedArrowed
      isOpened={isOpened}
      onMouseMove={shouldOpen}
      onMouseOut={shouldClose}
    >
      {title}
      {isOpened && (
        <DropDownList onClick={() => setIsOpened(false)}>
          {items.map((item) => (
            <DropDownItem key={item.title} onClick={item.handler}>
              {item.title}
            </DropDownItem>
          ))}
        </DropDownList>
      )}
    </ButtonsRoundedArrowed>
  );
};
