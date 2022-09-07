import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { Typography } from '@material-ui/core';

import { StyledButton } from './styled';

const Button = ({...props}) => {
  return (
    <StyledButton 
      variant='contained' 
      startIcon={<PowerSettingsNewOutlinedIcon />}
      size='large'
      {...props}
    >
      <Typography variant='button'>{props.children}</Typography>
    </StyledButton>
  )
}

export default Button;