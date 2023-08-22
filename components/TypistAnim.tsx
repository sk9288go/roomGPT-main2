import React, { FC } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactRotatingText from "react-rotating-text";

const TypistAnim: FC = () => {
  return (
    <div className="my-2 typist">
      <h2>
        Using
        <ReactRotatingText items={[" Sketch", " image", " Text"]} />
      </h2>
    </div>
  );
};

export default TypistAnim;
