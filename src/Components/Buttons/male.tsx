import React from 'react';
import { Button } from './styles';

export interface Props {
  isBlack?: boolean;
}

export const MaleBTN: React.FC<Props> = ({
  isBlack,
}) => {
  return (
    <Button isBlack={isBlack}>Ver Masculino</Button>
  );
}

export default MaleBTN;
