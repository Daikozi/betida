import React, { FC, MouseEvent } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from // toggleButtonGroupClasses,
"@mui/material/ToggleButtonGroup";
// import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

// const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
//   gap: "1rem",
//   [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
//     {
//       borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
//       borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
//     },
//   [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
//     {
//       borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
//       borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
//       borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
//     },
//   [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
//     {
//       borderLeft: `1px solid ${
//         (theme.vars || theme).palette.action.disabledBackground
//       }`,
//     },
// }));

type ToggleButtonGroupProps = {
  toggleButtons: { value: string; label: string }[];
  value?: string;
  ariaLabel?: string;
  onChange?: (event: MouseEvent<HTMLElement>, newValue: string | null) => void;
};

const ToggleButtonGroupp: FC<ToggleButtonGroupProps> = ({
  toggleButtons,
  value,
  ariaLabel,
  onChange,
}) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={onChange}
      size="small"
      aria-label={ariaLabel}>
      {toggleButtons.map((button) => (
        <ToggleButton
          key={button.value}
          value={button.value}
          aria-label={button.label}>
          <Typography variant="body2">{button.label}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleButtonGroupp;
