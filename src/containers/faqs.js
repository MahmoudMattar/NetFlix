import React from "react";
import faqs from "../fixtures/faqs.json";
import { Accordion } from "../components/index";

export function FaqContainers() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqs.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
