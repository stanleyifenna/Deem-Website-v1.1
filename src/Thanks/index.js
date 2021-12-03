import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  FormWrap,
  FormButton,
  Icon,
  Form,
  FormH1,
  FormP,
  FormContent,
} from "./ThanksElements";

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
};

const Thanks = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <img src={"../../images/deempay-logo.svg"} alt="logo" />
          </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>
                <img
                  src="images/thanks.svg"
                  alt="thank you"
                  className="thanks-img"
                />
              </FormH1>
              <FormH1>Thank you</FormH1>
              <FormP>
                {" "}
                Your details is submitted succeful. We will notify you once it
                is ready.
              </FormP>
              <FormButton type="submit">
                <Link to="/" style={linkStyle}>
                  Homepage
                </Link>
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Thanks;
