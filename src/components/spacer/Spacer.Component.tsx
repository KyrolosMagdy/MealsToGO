import React from "react";
import { Variant } from "../../utils/types/SpacerVariants";

import {
  TopSmall,
  TopMedium,
  TopLarge,
  LeftSmall,
  LeftMedium,
  LeftLarge,
} from "./Spacer.StyledComponent";

export interface SpacerComponentProps {
  variant: Variant;
}

export const SpacerComponent = ({
  variant = "top.small",
}: SpacerComponentProps): React.ReactElement => {
  switch (variant) {
    case "top.large":
      return <TopLarge />;

    case "top.medium":
      return <TopMedium />;

    case "left.small":
      return <LeftSmall />;

    case "left.medium":
      return <LeftMedium />;

    case "left.large":
      return <LeftLarge />;

    default:
      return <TopSmall />;
  }
};
