import React, { useState } from 'react';
import styled from 'styled-components';

type TProps = {
  pageCount: number;
  changePage: (direction: 'PREV' | 'NEXT') => void;
};

export default function BottomPages({ pageCount, changePage }: TProps) {
  const [pagesArray, setPagesArray] = useState(
    new Array(pageCount).fill(null).map((_, idx) => idx + 1)
  );
  console.log(pagesArray);
  return (
    <PagesContainer>
      {pagesArray.map((v, idx) => {
        return <PageSelector key={v + idx}>{v}</PageSelector>;
      })}
      <Button onClick={() => changePage('PREV')}>Prev</Button>
      <Button onClick={() => changePage('NEXT')}>Next</Button>
    </PagesContainer>
  );
}

const PagesContainer = styled.ul`
  display: flex;
  list-style: none;
`;

const PageSelector = styled.li`
  background: #444;
  color: white;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
`;
