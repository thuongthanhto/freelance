import React, { Component } from 'react';
import { Section, GoodNumber, GoodCart, GoodDescription } from './styled';

export default class GoodSection extends Component {
  render() {
    return (
      <div>
        <Section>
          <GoodCart>
            <GoodNumber>100+</GoodNumber>
            <GoodDescription>Clients worldwide</GoodDescription>
          </GoodCart>
          <GoodCart>
            <GoodNumber>2,000+</GoodNumber>
            <GoodDescription>Tech developers and designers</GoodDescription>
          </GoodCart>
          <GoodCart>
            <GoodNumber>30</GoodNumber>
            <GoodDescription>Developers hired</GoodDescription>
          </GoodCart>
        </Section>
      </div>
    );
  }
}
