import React from 'react';
import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`flex flex-col font-mulish text-sm`}
`;

const Label = styled.span`
  ${tw`font-bold`}
`;

const Description = styled.span`
  ${tw`font-normal`}
`;

const Counter = styled.div`
  ${tw`flex items-center mt-3`}
`;

const Value = styled.span`
  ${tw`w-10 font-bold text-center`}
`;

const Button = styled.button`
  ${tw`flex justify-center items-center w-6 h-6 border rounded-[4px] focus:ring-2`}
`;

const GuestsCounter = ({
  label,
  description,
  value,
  min = 0,
  max = 99,
  increase,
  decrease,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Description>{description}</Description>
      <Counter>
        <Button disabled={value <= min} onClick={decrease}>
          -
        </Button>
        <Value>{value}</Value>
        <Button disabled={value >= max} onClick={increase}>
          +
        </Button>
      </Counter>
    </Container>
  );
};

export default GuestsCounter;
