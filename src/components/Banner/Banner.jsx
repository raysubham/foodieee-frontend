import React from "react";
import {
  Container,
  Bg,
  VideoBg,
  Content,
  Header,
  Para,
  BtnWrapper,
  Button,
} from "./styles";
import video from "../../videos/video4.mp4";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Banners = () => {
  return (
    <>
      <Container>
        <Bg>
          <VideoBg>
            <video autoPlay muted loop src={video} type="video/mp4"></video>
          </VideoBg>
        </Bg>
        <Content>
          <Header>Where Foodies Unite</Header>
          <Para>
            Download Our App Now & Recieve &#8377; 200 Off on your Next Order
          </Para>
          <BtnWrapper>
            <Button
              type="button"
              onClick={() => window.open("https://wa.me/919093922502")}
            >
              <AiOutlineCloudDownload style={{ fontSize: "2rem" }} />
              <span style={{ marginLeft: "9px" }}> Download </span>
            </Button>
          </BtnWrapper>
        </Content>
      </Container>
    </>
  );
};

export default Banners;
