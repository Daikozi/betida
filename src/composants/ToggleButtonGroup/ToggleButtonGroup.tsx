import {
  ToggleButtonGroup as MUIToggleButtonGroup,
  toggleButtonGroupClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const ToggleButtonGroup = styled(MUIToggleButtonGroup)(() => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    textTransform: "none",
    color: "#9D9C9E",
    border: 0,
    padding: "14px 10px",
    height: "44px",
    borderRadius: "10px",
    marginRight: "8px",
    width: "fit-content",
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
    [`&.${toggleButtonGroupClasses.selected}`]: {
      backgroundColor: "#464547",
      color: "white",
    },
  },
}));

export default ToggleButtonGroup;
