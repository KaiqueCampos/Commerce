import React from 'react';
import { Button } from './styles';

export interface Props {
  isBlack?: boolean;
}

export const ColectionBTN: React.FC<Props> = ({
  isBlack,
}) => {
  return (
    <Button isBlack={isBlack}>Ver Coleção</Button>
  );
}

export default ColectionBTN;
