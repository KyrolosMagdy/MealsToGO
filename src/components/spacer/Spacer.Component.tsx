import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";

import { Position, Sizes } from "../../utils/types/SpacerVariants";
export interface MainProps {
  position: Position;
  size: keyof Sizes;
}

export interface SpacerComponentProps extends MainProps {
  theme: DefaultTheme;
}

export interface SpacerProps extends MainProps {
  children?: any;
}

const sizeVariant: Sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  bottom: "marginBottom",
  left: "marginLeft",
  right: "marginRight",
};

const getVariant = ({ position, size, theme }: SpacerComponentProps) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  return `${property}:${theme.space[sizeIndex]}`;
};

export const SpacerView = styled.View`
  ${({ variant }: { variant: any }) => variant}
`;

export const Spacer = ({
  position,
  size,
  children,
}: SpacerProps): React.ReactElement => {
  const theme = useTheme();
  const variant = getVariant({ position, size, theme });

  return <SpacerView variant={variant}> {children} </SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
