import React, { useState } from "react";
import AccordioList from "./AccordionList";
import styled from "styled-components";
const accStyle = {
  fontSize: "16px",
};
export const FeatureAccordion1 = () => {
  const [more, seeMore] = useState([
    {
      id: 1,
      learnMore: (
        <div style={accStyle}>
          <div>
            From Reporting to Custom Fields to your beloved software integrations—we’ve got
            functionalities, your favorites, and more!
          </div>
          <p>Such as:</p>
          <ul>
            <li>Confluence</li>
            <li>Slack</li>
            <li>Dropbox</li>
            <li>ConGOogle Drivefluence</li>
            <li>Evernote</li>
          </ul>
        </div>
      ),
    },
  ]);
  return (
    <Container>
      <Wrapper>
        {more.map((data) => (
          <AccordioList data={data} />
        ))}
      </Wrapper>
    </Container>
  );
};
export const FeatureAccordion2 = () => {
  const [more, seeMore] = useState([
    {
      id: 2,
      learnMore: (
        <div style={accStyle}>
          <div>
            From Reporting to Custom Fields to your beloved software integrations—we’ve got
            functionalities, your favorites, and more!
          </div>
          <p>Such as:</p>
          <ul>
            <li>Confluence</li>
            <li>Slack</li>
            <li>Dropbox</li>
            <li>ConGOogle Drivefluence</li>
            <li>Evernote</li>
          </ul>
        </div>
      ),
    },
  ]);
  return (
    <Container>
      <Wrapper>
        {more.map((data) => (
          <AccordioList data={data} />
        ))}
      </Wrapper>
    </Container>
  );
};
export const FeatureAccordion3 = () => {
  const [more, seeMore] = useState([
    {
      id: 1,
      learnMore: (
        <div style={accStyle}>
          <div>
            From Reporting to Custom Fields to your beloved software integrations—we’ve got
            functionalities, your favorites, and more!
          </div>
          <p>Such as:</p>
          <ul>
            <li>Confluence</li>
            <li>Slack</li>
            <li>Dropbox</li>
            <li>ConGOogle Drivefluence</li>
            <li>Evernote</li>
          </ul>
        </div>
      ),
    },
  ]);
  return (
    <Container>
      <Wrapper>
        {more.map((data) => (
          <AccordioList data={data} />
        ))}
      </Wrapper>
    </Container>
  );
};
export const FeatureAccordion4 = () => {
  const [more, seeMore] = useState([
    {
      id: 1,
      learnMore: (
        <div style={accStyle}>
          <div>
            From Reporting to Custom Fields to your beloved software integrations—we’ve got
            functionalities, your favorites, and more!
          </div>
          <p>Such as:</p>
          <ul>
            <li>Confluence</li>
            <li>Slack</li>
            <li>Dropbox</li>
            <li>ConGOogle Drivefluence</li>
            <li>Evernote</li>
          </ul>
        </div>
      ),
    },
  ]);
  return (
    <Container>
      <Wrapper>
        {more.map((data) => (
          <AccordioList data={data} />
        ))}
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 20vh;
`;
