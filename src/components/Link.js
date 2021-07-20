import { colors } from '../util/constants';
import styled from 'styled-components';
import { Link as MuiLink } from '@material-ui/core';

export const Link = styled(MuiLink)`
    font-family: "Arial Black", Gadget, sans-serif;
    &:link, &:visited {
        background-color: ${colors.link.default};
        color: ${colors.link.textDefault};
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 4px;
      }
      
      &:hover, &:active {
        background-color: ${colors.link.hover};
        border-radius: 8px;
        color: ${colors.link.textHover};
        text-decoration: none;
      }
`;
