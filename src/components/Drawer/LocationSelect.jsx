import { setLocation } from 'features/Stay/locationSlice';
import { selectStays } from 'features/Stay/staysSlice';
import React, { useMemo } from 'react';
import { MapPin as LocationIcon } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`flex flex-col px-5`}

  button {
    ${tw`flex gap-x-2 items-center px-2 py-3 rounded-lg normal-case font-normal text-sm focus:ring-2`}

    svg {
      ${tw`w-4`}
    }
  }
`;

const LocationSelect = ({ show }) => {
  const dispatch = useDispatch();
  const stays = useSelector(selectStays);

  const locations = useMemo(
    () =>
      [
        ...new Set(stays?.map(({ city, country }) => `${city}, ${country}`)),
      ].map((location) => ({
        city: location.split(', ')[0],
        country: location.split(', ')[1],
      })),
    [stays]
  );

  const handleLocationChange = (location) => {
    dispatch(setLocation(location));
  };

  return (
    <Container className={!show && '!hidden'}>
      {locations?.map((location) => (
        <button
          key={String(Math.trunc(Math.random() * 2000))}
          onClick={() => handleLocationChange(location)}
        >
          <LocationIcon />
          {`${location.city}, ${location.country}`}
        </button>
      ))}
    </Container>
  );
};

export default LocationSelect;
