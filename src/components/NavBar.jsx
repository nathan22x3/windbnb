import LogoImage from 'assets/images/logo.svg';
import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import tw, { styled } from 'twin.macro';

const Container = styled.nav`
  ${tw`flex flex-col justify-between items-start gap-y-9 md:(flex-row items-center)`}
`;

const Logo = styled.img`
  ${tw`flex justify-center items-center`}
`;

const SearchBar = styled.div`
  ${tw`self-center flex items-center divide-x divide-gray-100 rounded-2xl shadow-md`}
`;

const Item = styled.span`
  ${tw`px-4 py-5 text-sm text-gray-700 last-of-type:text-red-500`}

  &:nth-of-type(2) {
    ${tw`text-gray-400`}
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Logo src={LogoImage} alt='Logo' />
      <SearchBar>
        <Item>Helsinki, Finland</Item>
        <Item>Add guests</Item>
        <Item>
          <SearchIcon size={18} />
        </Item>
      </SearchBar>
    </Container>
  );
};

export default Navbar;
