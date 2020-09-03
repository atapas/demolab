import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(GatsbyLink)`
  color: ${({ theme }) => theme.colors.link.text};
  opacity: ${({ theme }) => theme.colors.link.opacity};
  &:hover {
    color: ${({ theme }) => theme.colors.link.text};
    opacity: 1;
  }
`;

export default StyledLink;