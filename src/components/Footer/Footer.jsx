import React from "react";
import { Social, Container, Info } from "./styles";

import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <Container id="footer">
      <Info>2020 MeatAdda. All Rights Reserved. </Info>
      <Social>
        <AiFillFacebook
          onClick={() => window.open("https://www.facebook.com/Meatadda")}
          style={{
            color: "#b80c09",
            fontSize: "35px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        />

        <AiFillYoutube
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCjNmOd3omWv2XOpymR5DZTQ"
            )
          }
          style={{
            color: "#b80c09",
            fontSize: "35px",
            marginLeft: "7px",
            cursor: "pointer",
          }}
        />
      </Social>
    </Container>
  );
};

export default Footer;
