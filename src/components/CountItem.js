import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import media from "./media";

const Container = styled.div`
  margin: 0 0.6rem;
  text-align: center;
`;

const Count = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};

  ${media.phone`
    margin: 3rem 0;
  `}
`;

function CountItem({ title, count }) {
  return (
    <Container>
      <Count>{String(count).padStart(2, "0")}</Count>
      <p>{title.toUpperCase()}</p>
    </Container>
  );
}

CountItem.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default CountItem;
