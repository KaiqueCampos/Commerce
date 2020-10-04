import React from 'react';
import { Button } from './styles';

export interface Props {
  isBlack?: boolean;
}

export const VermaisBTN: React.FC<Props> = ({
  isBlack,
}) => {
  return (
    <Button isBlack={isBlack}>Ver Mais</Button>
  );
}

export default VermaisBTN;
