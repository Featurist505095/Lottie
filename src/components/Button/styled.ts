import { Button } from '@material-ui/core';
import styled from 'styled-components';

import Colors from '../../utils/colors';

export const StyledButton = styled(Button)`
  &&{
    color: ${Colors.white};
    background-color:${Colors.ceruleanBlue};

    &:hover {
      background-color: ${Colors.waikawaGray};
    }
  }
`;