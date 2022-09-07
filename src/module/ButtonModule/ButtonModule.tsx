import Lottie from 'react-lottie';
import { Typography } from '@material-ui/core';

import useClick from '../../helpers';
import { Button } from '../../components';
import waitingAnimation from  '../../lotties/waiting.json';
import { RequestState } from '../../helpers/enums';

import { StyledGrid, StyledWidget } from './styled';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: waitingAnimation,
};

const renderSwitch = (state: RequestState, handleClick: () => void) => {
  switch(state) {
    case RequestState.Success: {
      return (
        <StyledWidget>
          <Typography variant='body1'>
            Привет
          </Typography>
          <Typography variant='body2'>
            чем могу помочь?
          </Typography>
        </StyledWidget>
      )
    }
    case RequestState.Pending: {
      return (
        <Lottie 
          options={defaultOptions}
            height={100}
            width={200}
        />
      );
    }
    default: {
      return <Button onClick={handleClick}>Click me!</Button>
    }
  }
}

const ButtonModule = () => {
    const {clickState, handleClick} = useClick(3000);

    return (
      <StyledGrid container alignItems='center' justifyContent='center'>
        {renderSwitch(clickState, handleClick)}
      </StyledGrid>
      );
};

export default ButtonModule;