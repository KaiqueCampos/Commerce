import React from 'react';
import { Button } from './styles';

export interface Props {
  isBlack?: boolean;
}

export const FamaleBTN: React.FC<Props> = ({
  isBlack,
}) => {
  return (
    <Button isBlack={isBlack}>Ver Feminino</Button>
  );
}

export default FamaleBTN;
