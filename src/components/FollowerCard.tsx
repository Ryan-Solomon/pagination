import { TUser } from '../types/types';
import styled from 'styled-components';

type TProps = {
  user: TUser;
};

export default function FollowCard({ user }: TProps) {
  const { avatar_url, login } = user;
  return (
    <CardContainer>
      <CardImage src={avatar_url} alt='user' />
      <CardName>{login}</CardName>
      <CardButton>View Profile</CardButton>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 2px 2px 10px #555555;
`;

const CardImage = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const CardName = styled.h3`
  color: black;
`;

const CardButton = styled.button`
  background: #444444;
  color: white;
  padding: 0.5rem;
  margin-top: 1rem;
`;
