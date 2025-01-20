import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const ContactUs = () => {
  const handleTelegramBot = () => {
    window.open("https://t.me/Umidjon_Izzatullayev", "_blank");
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href="mailto:your-email@example.com">umidizzatullayev@gmail.com</a>
              <br />
              <br />
              <p>
                <strong>Phone:</strong> +998 (99) 418-50-35
              </p>
            </address>
            <button className="btn btn-primary" onClick={handleTelegramBot}>
              Telegram 
            </button>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
