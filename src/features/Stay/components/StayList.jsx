import {
  selectFilteredStays,
  selectFilteredStaysCount,
} from 'features/Stay/staysSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';
import { selectCountry } from '../locationSlice';
import StayCard from './StayCard';

const Container = styled.div`
  ${tw`flex flex-col gap-y-6 mt-8`}
`;

const Header = styled.div`
  ${tw`flex justify-between items-center mt-8 mb-6 font-montserrat md:(mt-[60px] mb-8)`}

  h1 {
    ${tw`font-bold text-2xl`}
  }

  span {
    ${tw`font-medium text-sm`}
  }
`;

const List = styled.div`
  ${tw`grid grid-cols-1 justify-items-center gap-8 mb-12 sm:grid-cols-2 lg:(grid-cols-3 mb-24) xl:mb-36`}

  & > div {
    ${tw`w-full`}
  }
`;

const Message = styled.div`
  ${tw`font-medium text-center md:text-left`}
`;

const StayList = () => {
  const stays = useSelector(selectFilteredStays);
  const count = useSelector(selectFilteredStaysCount);
  const country = useSelector(selectCountry);

  return (
    <Container>
      <Header>
        <h1>Stays in {country}</h1>
        <span>
          {count > 12 ? '12+' : count} {count === 1 ? ' stay' : ' stays'}
        </span>
      </Header>
      <List>
        {count > 0 ? (
          stays.map((stay) => (
            <StayCard
              key={String(Math.trunc(Math.random() * 1000))}
              {...stay}
            />
          ))
        ) : (
          <Message>There are no stays matched your criteria.</Message>
        )}
      </List>
    </Container>
  );
};

export default StayList;
