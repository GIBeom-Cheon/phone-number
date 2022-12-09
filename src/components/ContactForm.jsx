import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from "./ContactFrom.module.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault(); //리로드 되는것을 막아줌(submit의 기본 속성)
    dispatch({
      //던져줄 액션을 dispatch를 이용해 만들어 준다
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
    setName("");
    setPhoneNumber("");
  };
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group xs className="mb-3" controlId="formName">
          <Form.Label className={style.white}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={style.pwhite}
          />
        </Form.Group>

        <Form.Group  xs className="mb-3" controlId="formContact">
          <Form.Label className={style.white}>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            className={style.pwhite}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
