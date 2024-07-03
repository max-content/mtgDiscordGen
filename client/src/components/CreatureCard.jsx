import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import { CardContainer, ContentContainer, TextBar, ImageWrapper, Stats, Oracle, Flavor, Image, Artist} from './styles/CreatureCardStyle';

const CreatureCard = ( { card }) => {


  return (
      <CardContainer>
        <ContentContainer>
          <TextBar>
            {card.name} {card.mana_cost}
          </TextBar>
          <ImageWrapper>
            <Image src={card.image_uris.art_crop} alt={`${card.name} ${card.mana_cost}, ${card.type_line}, ${card.artist}`}/> 
          </ImageWrapper>
          <TextBar> {card.type_line} </TextBar>
          <Oracle> {card.oracle_text} </Oracle>
          <Flavor> {card.flavor_text} </Flavor>
          <Artist> {card.artist} </Artist>
        </ContentContainer>
        <Stats> {card.power}/{card.toughness} </Stats>
    </CardContainer>
  )
}

CreatureCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type_line: PropTypes.string.isRequired,
    image_uris: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }),
    oracle_text: PropTypes.string,
    flavor_text: PropTypes.string
  }),
};


export default CreatureCard