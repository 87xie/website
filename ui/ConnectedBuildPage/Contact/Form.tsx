import React from 'react';
import styled from 'styled-components';

import { SocialMedias } from './SocialMedia';
import { InputField } from './Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const Description = styled.div`
  margin: 10px 0;
  font-size: 14px;
  font-weight: 300;
  color: #919FB5;
`;

const Input = styled(InputField)`
  margin: 15px 0 40px 0;
`;

export const Form: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Join the Connected Build consortium of companies</Title>
      <Description>
        Make the maintainers of the open source libraries your code is using, work for you!
        Take control over your infrastructure.
      </Description>
      <Input />
      <SocialMedias />
    </Container>
  );
};
