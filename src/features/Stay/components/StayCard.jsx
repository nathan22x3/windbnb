import React from 'react';
import { Star as StarIcon } from 'react-feather';
import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`flex flex-col max-w-[400px] font-montserrat`}
`;

const Photo = styled.img`
  ${tw`max-h-[270px] rounded-3xl`}
`;

const Info = styled.div`
  ${tw`grid grid-cols-[auto 1fr auto] items-center gap-x-3 mt-[14px] mb-3`}
`;

const SuperHostTag = styled.span`
  ${tw`flex justify-center items-center w-[88px] h-6 border rounded-full border-gray-600 uppercase font-bold text-xxs text-gray-600
  md:(w-[100px] h-7 text-xs)`}
`;

const Type = styled.span`
  ${tw`font-medium text-xs text-gray-500 md:text-sm`}
`;

const Rating = styled.span`
  ${tw` flex gap-x-[6px] justify-self-end items-center text-xs md:text-sm`}

  svg {
    ${tw`fill-current text-red-500 w-[14px] md:w-4`}
  }
`;

const Title = styled.span`
  ${tw`font-semibold text-gray-700 text-sm md:text-base`}
`;

const StayCard = ({ photo, title, superHost, type, beds, rating }) => {
  return (
    <Container>
      <Photo src={photo} alt={title} />
      <Info>
        {superHost && <SuperHostTag>Super Host</SuperHostTag>}
        <Type>
          {type}
          {beds && ' . ' + beds + `${beds > 1 ? ' beds' : ' bed'}`}
        </Type>
        <Rating>
          <StarIcon />
          {rating}
        </Rating>
      </Info>
      <Title>{title}</Title>
    </Container>
  );
};

export default StayCard;
