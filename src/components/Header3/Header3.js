import React from "react";
import styled from "styled-components";

const Header3 = () => {
  const Title = styled.h1`
    color: green;
    border: 1px solid gray;
    font-size: 50px;
    width: 70%;
    margin: 10px auto;
  `;
  return (
    <div>
      <Title>This title styled from styled components</Title>
    </div>
  );
};

export default Header3;
