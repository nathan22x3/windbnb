import Drawer from 'components/Drawer';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import StayList from 'features/Stay/components/StayList';
import { fetchStays } from 'features/Stay/staysSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`overflow-x-hidden max-w-screen-xl mx-auto px-3 pt-5 font-mulish md:(px-5 pt-[32px]) 2xl:px-0`}
`;

const App = () => {
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchStays());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={isDrawerOpen && ''}>
      <Drawer {...{ isDrawerOpen, setIsDrawerOpen }} />
      <NavBar openDrawer={() => setIsDrawerOpen(true)} />
      <StayList />
      <Footer />
    </Container>
  );
};

export default App;
