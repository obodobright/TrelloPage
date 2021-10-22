import React from "react";
import styled from "styled-components";
import TrelloFeature from "./TrelloFeature";
import {
  FeatureAccordion1,
  FeatureAccordion2,
  FeatureAccordion3,
  FeatureAccordion4,
} from "./FeatureAccordon";
import view from "../asset/view.svg";
import cardBack from "../asset/card-back.svg";
import automation from "../asset/automation.png";
import powerup from "../asset/power-ups.png";

const Features = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <ContentHead>Features to help your team succeed</ContentHead>
          <ContentDesc>
            Powering a productive team means using a powerful tool (and plenty of snacks). From
            meetings and projects to events and goal setting, Trello’s intuitive features give any
            team the ability to quickly set up and customize workflows for just about anything.
          </ContentDesc>
        </Content>
        <TrelloFeature
          Ch="CHOOSE A VIEW"
          FImg={view}
          Ct="The board is just the beginning"
          Cd="Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more."
          Acc={<FeatureAccordion1 />}
        />
        <TrelloFeature
          Ch="DIVE INTO THE DETAILS"
          FImg={cardBack}
          Ct="Cards contain everything you need"
          Cd="Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more."
          Acc={<FeatureAccordion2 />}
          Tt
        />
        <TrelloFeature
          Ch="MEET YOUR NEW BUTLER"
          FImg={automation}
          Ct="No-code automation"
          Cd="Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team."
          Acc={<FeatureAccordion3 />}
        />
        <TrelloFeature
          Ch="POWER-UPS"
          FImg={powerup}
          Ct="Integrate top work tools"
          Cd="Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered."
          Acc={<FeatureAccordion4 />}
          Tt
        />
      </Wrapper>
    </Container>
  );
};

export default Features;

const ContentDesc = styled.div`
  font-size: 18px;
  line-height: 1.2;
  width: 450px;

  padding: 10px 0;
`;
const ContentHead = styled.div`
  font-size: 35px;
  font-weight: 700;
  font-family: sans-serif;
  line-height: 1.2;
`;
const Content = styled.div`
  width: 500px;
  margin-left: 10%;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height:100vh;
  padding: 20px 0;
  f
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: whitesmoke;
`;
