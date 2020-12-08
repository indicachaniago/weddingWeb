import React from "react";
import styled from "styled-components";

import DateList from "./DateList";
import media from "./media";
import animationParams from "./animation-params";
import { graphql, useStaticQuery } from "gatsby";

import cover from "../images/3m.jpg";

const Image = styled.img`
  height: 30%;
  object-fit: cover;
  width: 60%;
`;

const Container = styled.section`
  height: 100vh;
  display: flex;
  padding-bottom: 0.5rem;

  & > * {
    flex: 1 100%;
  }

  ${media.phone`
    height: auto;
    flex-direction: column-reverse;
  `}
`;

const TextContainer = styled.div`
  padding: 5rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`;

const Note = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #a8394c;
`;

const MapContainer = styled.div``;

const GoogleMap = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`;

const QUERY = graphql`
  query {
    event {
      events {
        occasion {
          place {
            map
          }
        }
      }
    }
  }
`;



function Map() {
  const {
    event: { events }
  } = useStaticQuery(QUERY);
  return (
    <Container>
      <MapContainer>
        <GoogleMap
          src={events[0].occasion.place.map}
          frameBorder="0"
          allowfullscreen=""
        ></GoogleMap>
        <GoogleMap
          src={events[2].occasion.place.map}
          frameBorder="0"
          allowfullscreen=""
        ></GoogleMap>
      </MapContainer>
      <TextContainer>
        <Heading {...animationParams}>When & Where</Heading>
        <Note> <b> Catatan: </b> </Note>
        <Note data-sal="slide-left" data-sal-delay="300" data-sal-duration= "800" data-sal-easing= "ease-in"> <u>Sesuai protokol kesehatan, para tamu undangan wajib menerapkan 3M : </u> </Note>
        <Note data-sal="slide-left" data-sal-delay="300" data-sal-duration= "800" data-sal-easing= "ease-in"> <u>1. Memakai masker </u> </Note>
        <Note data-sal="slide-left" data-sal-delay="300" data-sal-duration= "800" data-sal-easing= "ease-in"> <u>2. Mencuci tangan </u> </Note>
        <Note data-sal="slide-left" data-sal-delay="300" data-sal-duration= "800" data-sal-easing= "ease-in"> <u>3. Menjaga jarak </u> </Note>
        <Image data-sal="zoom-in" data-sal-delay="300" data-sal-duration= "800" data-sal-easing= "ease-in" src={cover} alt="" />
        <DateList />
      </TextContainer>
    </Container>
  );
}

export default Map;

