import React, { useState } from 'react';
import styled from 'styled-components';

type TProps = {
  pageCount: number;
  pageNumber: number;
  changePage: (direction: 'PREV' | 'NEXT') => void;
  setPageNumber: (num: number) => void;
};

export default function BottomPages({
  pageCount,
  changePage,
  setPageNumber,
  pageNumber,
}: TProps) {
  const [pagesArray, setPagesArray] = useState(
    new Array(pageCount).fill(null).map((_, idx) => idx + 1)
  );
  console.log(pagesArray);
  return (
    <PagesContainer>
      <Button onClick={() => changePage('PREV')}>Prev</Button>
      {pagesArray.map((v, idx) => {
        return (
          <PageSelector
            background={v === pageNumber ? '#222' : '#444'}
            onClick={() => setPageNumber(v)}
            key={v + idx}
          >
            {v}
          </PageSelector>
        );
      })}
      <Button onClick={() => changePage('NEXT')}>Next</Button>
    </PagesContainer>
  );
}

const PagesContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
`;

type TPageSelectorProps = {
  background: string;
};

const PageSelector = styled.li<TPageSelectorProps>`
  background: ${({ background }) => background};
  margin: 0 10px;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
`;
