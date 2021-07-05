import LogoImage from 'assets/images/logo.svg';
import { selectGuestsSum } from 'features/Stay/guestSlice';
import { selectLocation } from 'features/Stay/locationSlice';
import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import { useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';

const Container = styled.nav`
  ${tw`flex flex-col justify-between items-start gap-y-9 md:(flex-row items-center)`}
`;

const Logo = styled.img`
  ${tw`flex justify-center items-center`}
`;

const SearchBar = styled.div`
  ${tw`self-center flex items-center divide-x divide-gray-100 rounded-2xl shadow-md cursor-pointer`}
`;

const Item = styled.span`
  ${tw`px-4 py-5 text-sm text-gray-400`}
  ${({ hasValue }) => hasValue && tw`text-gray-700`}
`;

const SearchButton = styled.button`
  ${tw`px-4 py-5 text-sm text-red-500`}
`;

const Navbar = ({ openDrawer }) => {
  const location = useSelector(selectLocation);
  const guests = useSelector(selectGuestsSum);

  return (
    <Container>
      <Logo src={LogoImage} alt='Logo' />
      <SearchBar onClick={openDrawer}>
        {location.city && location.country ? (
          <Item hasValue>{`${location.city}, ${location.country}`}</Item>
        ) : (
          <Item>Add Location</Item>
        )}
        {guests > 0 ? (
          <Item hasValue>
            {guests} {guests === 1 ? 'guest' : 'guests'}
          </Item>
        ) : (
          <Item>Add Guests</Item>
        )}
        <SearchButton>
          <SearchIcon size={18} />
        </SearchButton>
      </SearchBar>
    </Container>
  );
};

export default Navbar;
