import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import Colors from '../../utils/colors';

export const StyledWidget = styled(Grid)`
  border-radius: 10px;
  padding: 10px;
  background-color: ${Colors.malachite};
  color: ${Colors.white};
`;

export const StyledGrid = styled(Grid)`
  height: 100px;
`;