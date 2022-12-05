import React from "react";
import { CreateColumn } from "./AddColumn/CreateColumn";
import {
  CanbanBody,
  CanbanContainer,
  CanbanHeader,
  ButtonsRounded,
  ButtonsRoundedArrowed,
  HeaderGroup,
  Avatar,
  SearchInput,
  Notification,
} from "./Canban.styled";
import { Column } from "./Column/Column";
import { Deck } from "./Column/types";

const decks: Deck[] = [
  {
    title: "New task",
    cardList: [
      { color: "#ABE9CE", time: "3:20pm", title: "Check email" },
      {
        color: "#D8DCFF",
        time: "3:00h",
        title: `Compare PPC agencies and make a report for Steven`,
      },
      {
        color: "#ABE9CE",
        time: "3:00h",
        title: `Meeting with Amanda (PR department)`,
      },
      {
        color: "#D8DCFF",
        time: "3:00h",
        title: `Get Patrick's approval for homepage new design`,
      },
    ],
  },
  {
    title: "Scheduled",
    cardList: [
      { color: "#FFDFBA", time: "3:20pm", title: "Check email" },
      {
        color: "#FEC6B7",
        time: "5:00h",
        title: `Write a blogpost "7 best strategies for SEO in 2020`,
      },
      {
        color: "#D9E6A2",
        time: "2:00h",
        title: `New Ad copies for Manamaja`,
      },
    ],
  },
  {
    title: "In progress",
    cardList: [
      { color: "#FFDFBA", time: "3:20pm", title: "Check email" },
      {
        color: "#F2BAE1",
        time: "0:20h",
        title: `Record a video comment about last week's analytics report`,
      },
      {
        color: "#FFDFBA",
        time: "1:00h",
        title: `Process all resumes for Content Marketer position`,
      },
    ],
  },
  {
    title: "Complited",
    cardList: [
      { color: "#FFDFBA", time: "3:20pm", title: "Check email" },
      {
        color: "#F2BAE1",
        time: "0:20h",
        title: `Weekly planning session`,
      },
      {
        color: "#D8DCFF",
        time: "3:00h",
        title: `Create 5+ target audiences in Facebook for Samsung ...`,
      },
      {
        color: "#FFDFBA",
        time: "1:00h",
        title: `Check FB Banner Design and give feedback`,
      },
      {
        color: "#FFDFBA",
        time: "1:00h",
        title: `Check email`,
      },
    ],
  },
];

export const Canban = () => {
  return (
    <CanbanContainer>
      <CanbanHeader>
        <HeaderGroup>
          <ButtonsRounded>+ Add new</ButtonsRounded>
          <ButtonsRoundedArrowed>Canban</ButtonsRoundedArrowed>
          <ButtonsRoundedArrowed>Filter</ButtonsRoundedArrowed>
        </HeaderGroup>

        <HeaderGroup>
          <SearchInput />
          <Notification />
          <Avatar />
        </HeaderGroup>
      </CanbanHeader>
      <CanbanBody>
        {decks.map(({ title, cardList }, idx) => (
          <Column
            key={"column" + idx}
            cardList={cardList}
            title={title}
            isLast={idx + 1 == decks.length}
          ></Column>
        ))}
        <CreateColumn></CreateColumn>
      </CanbanBody>
    </CanbanContainer>
  );
};
