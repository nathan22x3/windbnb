import React from 'react';
import tw, { styled } from 'twin.macro';

const Container = styled.footer`
  ${tw`flex justify-center items-center py-7 font-montserrat text-sm text-gray-400`}
`;

const Link = styled.a`
  ${tw`font-bold underline`}
`;

const Footer = () => {
  return (
    <Container>
      <span>
        created by
        <Link
          href='https://github.com/nathan22x3'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          nathan22x3{' '}
        </Link>
        - devChallenges.io
      </span>
    </Container>
  );
};

export default Footer;
