import React from "react";
import styled from "styled-components";
//import React, { Component } from "react";
import Blink from 'react-blink-text';

import DateList from "./DateList";
import media from "./media";
import animationParams from "./animation-params";
import { graphql, useStaticQuery } from "gatsby";

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
  height: 120%;
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

      </MapContainer>
      <TextContainer>
        <Heading {...animationParams}>When & Where</Heading>
        <div>
          <Blink color='Red' text='Catatan :' fontSize='30' fontWeight='bold'>
        </Blink> 
      </div>
        <Note data-sal="slide-left" data-sal-delay="300" data-sal-duration= "800" data-sal-easing= "ease-in"> <u>sesuai protokol kesehatan, setiap tamu diwajibkan menggunakan masker dan menjaga jarak. </u> </Note>
        <DateList />
      </TextContainer>
    </Container>
  );
}

export default Map;

