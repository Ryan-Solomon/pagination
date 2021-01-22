import React, { useState } from 'react';
import styled from 'styled-components';

type TProps = {
  pageCount: number;
};

export default function BottomPages({ pageCount }: TProps) {
  const [pagesArray, setPagesArray] = useState(
    new Array(pageCount).fill(null).map((_, idx) => idx + 1)
  );
  console.log(pagesArray);
  return <PagesContainer>{}</PagesContainer>;
}

const PagesContainer = styled.ul`
  display: flex;
`;

const PageSelector = styled.li`
  background: #444;
  color: white;
`;
