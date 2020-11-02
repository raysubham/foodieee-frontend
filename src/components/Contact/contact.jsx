import React, { useState } from "react";
import { Header, Form, Input, Button, Container } from "./styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isInvalid = name === "" || email === "" || message === "";

  const handleSubmit = () => {
    console.log("ndn");
  };

  return (
    <Container id="contact">
      <Header>Contact Us</Header>
      <Form onSubmit={handleSubmit} method="POST">
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          id="name"
        ></Input>

        <Input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          id="email"
        ></Input>

        <Input
          placeholder="Message"
          type="text"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          id="message"
        ></Input>

        <Button type="button" disabled={isInvalid}>
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
