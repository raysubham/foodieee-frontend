import React from "react";

import {
  Container,
  ImageWrapper,
  Image,
  InfoWrapper,
  InfoHeader,
  InfoContent,
} from "./styles";

const About = () => {
  return (
    <div id="about">
      <Container>
        <ImageWrapper>
          <Image src="./images/about.svg" alt="about" />
        </ImageWrapper>
        <InfoWrapper>
          <InfoHeader>The Ultimate Cafe</InfoHeader>
          <InfoContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            culpa pariatur quibusdam cum quaerat sed quos qui officiis deleniti
            inventore, adipisci possimus amet, distinctio similique a fugit
            quisquam suscipit iusto!
          </InfoContent>
        </InfoWrapper>{" "}
        {/*    <NavHomeWrapper>
          <NavHome
            type="button"
            onClick={() => window.open("https://wa.me/919093922502")}
          >
            <SiWhatsapp style={{ fontSize: "1.5rem" }} />
            <span style={{ marginLeft: "9px" }}> Order Now </span>
          </NavHome>
        </NavHomeWrapper> */}
      </Container>
      <Container>
        <InfoWrapper>
          <InfoHeader>The Ultimate Cafe</InfoHeader>
          <InfoContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            culpa pariatur quibusdam cum quaerat sed quos qui officiis deleniti
            inventore, adipisci possimus amet, distinctio similique a fugit
            quisquam suscipit iusto!
          </InfoContent>
        </InfoWrapper>
        <ImageWrapper>
          <Image src="./images/about.svg" alt="about" />
        </ImageWrapper>
      </Container>
      <Container>
        <ImageWrapper>
          <Image src="./images/about.svg" alt="about" />
        </ImageWrapper>
        <InfoWrapper>
          <InfoHeader>The Ultimate Cafe</InfoHeader>
          <InfoContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            culpa pariatur quibusdam cum quaerat sed quos qui officiis deleniti
            inventore, adipisci possimus amet, distinctio similique a fugit
            quisquam suscipit iusto!
          </InfoContent>
        </InfoWrapper>
      </Container>
    </div>
  );
};

export default About;
