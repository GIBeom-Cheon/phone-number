import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";

const SearchBox = () => {
  const [keyword, setKeyword] = useState(); //키워드값(입력값)을 인식하게
  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };

  return (
    <form action="" className={style.form} onSubmit={searchByName}>
      <Row>
        <Col xs md="9">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col xs md="3">
          <Button variant="dark" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default SearchBox;
