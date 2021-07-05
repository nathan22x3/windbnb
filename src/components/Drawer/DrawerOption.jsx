import React from 'react';
import tw, { styled } from 'twin.macro';

const Container = styled.button`
  ${tw`flex flex-col gap-y-1 items-start px-7 py-3 ring-1 rounded-2xl ring-gray-200 duration-300 focus:(ring-2 ring-gray-300)`}
`;

const Label = styled.span`
  ${tw`uppercase font-extrabold text-xxs text-gray-700`}
`;

const Value = styled.p`
  ${tw`font-normal text-sm text-gray-700`}
`;

const Placeholder = tw(Value)`text-gray-400`;

const DrawerOption = ({ label, value, placeholder, onClick }) => {
  return (
    <Container {...{ onClick }}>
      <Label>{label}</Label>
      {value ? (
        <Value>{value}</Value>
      ) : (
        <Placeholder>{placeholder}</Placeholder>
      )}
    </Container>
  );
};

export default DrawerOption;
