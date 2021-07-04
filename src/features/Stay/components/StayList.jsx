import React from 'react';
import { connect } from 'react-redux';
import tw, { styled } from 'twin.macro';
import StayCard from './StayCard';

const Container = styled.div`
  ${tw`grid grid-cols-1 justify-items-center gap-8 mb-12 sm:grid-cols-2 lg:(grid-cols-3 mb-24) xl:mb-36`}

  & > div {
    ${tw`w-full`}
  }
`;

const StayList = ({ stays }) => {
  return (
    <Container>
      {stays.map((stay) => (
        <StayCard key={String(Math.random() * 1000)} {...stay} />
      ))}
    </Container>
  );
};

const mapStateToProps = ({ stays }) => ({ stays });

export default connect(mapStateToProps, null)(StayList);
