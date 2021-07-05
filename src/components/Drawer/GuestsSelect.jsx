import {
  decrementAdult,
  decrementChildren,
  incrementAdult,
  incrementChildren,
  selectAdult,
  selectChildren,
} from 'features/Stay/guestSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';
import GuestsCounter from './GuestsCounter';

const Container = styled.div`
  ${tw`flex flex-col px-5 gap-y-10 md:col-start-2`}
`;

const GuestsSelect = ({ show }) => {
  const dispatch = useDispatch();
  const adults = useSelector(selectAdult);
  const children = useSelector(selectChildren);

  const increaseAdult = () => {
    dispatch(incrementAdult());
  };

  const decreaseAdult = () => {
    dispatch(decrementAdult());
  };

  const increasChildren = () => {
    dispatch(incrementChildren());
  };

  const decreaseChildren = () => {
    dispatch(decrementChildren());
  };

  return (
    <Container className={!show && '!hidden'}>
      <GuestsCounter
        label='Adults'
        description='Ages 13 or above'
        value={adults}
        increase={increaseAdult}
        decrease={decreaseAdult}
      />
      <GuestsCounter
        label='Children'
        description='Ages 2-12'
        value={children}
        increase={increasChildren}
        decrease={decreaseChildren}
      />
    </Container>
  );
};

export default GuestsSelect;
