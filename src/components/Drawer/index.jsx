import { selectGuestsSum } from 'features/Stay/guestSlice';
import { selectLocation } from 'features/Stay/locationSlice';
import React, { useState } from 'react';
import { Search as SearchIcon } from 'react-feather';
import { useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';
import DrawerOption from './DrawerOption';
import GuestsSelect from './GuestsSelect';
import LocationSelect from './LocationSelect';

const Wrapper = styled.div`
  ${tw`fixed -top-full left-0 w-screen h-screen`}
`;

const Container = styled.div`
  ${tw`absolute -top-full grid grid-cols-1 gap-x-1.5 gap-y-10 w-screen px-24 py-16 md:w-full bg-white duration-700 z-10 md:(grid-cols-[2fr 1fr])`}
`;

const Backdrop = styled.div`
  ${tw`absolute inset-0 bg-black bg-opacity-50`}
`;

const Filter = styled.div`
  ${tw`flex flex-col gap-6`}
`;

const Selects = styled.div`
  ${tw`grid grid-cols-1 items-center min-h-[200px] md:(grid-cols-2)`}
`;

const Options = styled.div`
  ${tw`grid grid-cols-1 gap-1.5 md:(grid-cols-2)`}
`;

const SearchButton = styled.button`
  ${tw`self-start flex items-center gap-x-2 px-6 py-4 rounded-xl bg-red-400 text-white focus:bg-red-500 md:(justify-self-start)`}
`;

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const location = useSelector(selectLocation);
  const guests = useSelector(selectGuestsSum);
  const [showOption, setShowOption] = useState('location');

  return (
    <Wrapper className={isDrawerOpen ? '!top-0' : null}>
      <Container className={isDrawerOpen ? '!top-0' : null}>
        <Filter>
          <Options>
            <DrawerOption
              label='Location'
              value={
                location.city &&
                location.country &&
                `${location.city}, ${location.country}`
              }
              placeholder='Add location'
              onClick={() => setShowOption('location')}
            />
            <DrawerOption
              label='Guest'
              value={
                guests > 0
                  ? `${guests} ${guests === 1 ? 'guest' : 'guests'}`
                  : ''
              }
              placeholder='Add guests'
              onClick={() => setShowOption('guests')}
            />
          </Options>
          <Selects>
            <LocationSelect show={showOption === 'location'} />
            <GuestsSelect show={showOption === 'guests'} />
          </Selects>
        </Filter>
        <SearchButton onClick={() => setIsDrawerOpen(false)}>
          <SearchIcon />
          Search
        </SearchButton>
      </Container>
      <Backdrop />
    </Wrapper>
  );
};

export default Drawer;
