import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)(() => ({
  // Correction : on cible le notchedOutline pour le vrai border
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px",
    borderColor: "transparent",
    transition: "border-color 0.2s",
  },

  "& .MuiSelect-select": {
    height: "24px !important",
    borderRadius: "10px",
    backgroundColor: "#39373E",
    color: "#FFFFFF",
    fontSize: 14,
    padding: "8px 8px 8px 12px",
    paddingRight: "42px !important",
  },
  // Hover effect
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px",
  },
  "&:hover .MuiSelect-select": {
    backgroundColor: "#504e57",
  },
  "&.Mui-focused .MuiSelect-select": {
    backgroundColor: "#504e57",
    color: "#00FFB2",
    borderRadius: "10px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px",
    border: "1px solid #00FFB2",
  },

  "& .MuiSvgIcon-root": {
    color: "#FFFFFF",
    right: 8,
  },
}));

export default CustomSelect;

CustomSelect.displayName = "Select";
