import PropTypes from "prop-types";
import { Dot } from "pure-react-carousel";
import React from "react";
import { Button, Container } from "semantic-ui-react";

const CustomDotGroup = ( {slides} ) => (
  <Container textAlign="center">
    <Button.Group size="mini">
      {[...Array(slides).keys()].map(slide => (
        <Button as={Dot} key={slide} icon="circle" slide={slide} />
      ))}
    </Button.Group>
  </Container>
);

export default CustomDotGroup;
