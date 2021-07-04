import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import StayList from 'features/Stay/components/StayList';
import React from 'react';
import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`overflow-x-hidden max-w-screen-xl mx-auto px-3 pt-5 font-mulish md:(px-5 pt-[32px]) 2xl:px-0`}
`;

const Header = styled.header`
  ${tw`flex justify-between items-center mt-8 mb-6 font-montserrat md:(mt-[60px] mb-8)`}

  h1 {
    ${tw`font-bold text-2xl`}
  }

  span {
    ${tw`font-medium text-sm`}
  }
`;

const App = () => {
  return (
    <Container>
      <NavBar />
      <Header>
        <h1>Stays in Finland</h1>
        <span>12+ stays</span>
      </Header>
      <StayList />
      <Footer />
    </Container>
  );
};

export default App;
