import { TUser } from '../types/types';
import styled from 'styled-components';

type TProps = {
  user: TUser;
};

export default function FollowCard({ user }: TProps) {
  return <h1>Follow</h1>;
}

const CardContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const CardName = styled.h3`
  color: black;
`;

const CardButton = styled.button`
  background: #444444;
  color: white;
`;
