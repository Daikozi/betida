import { InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React from "react";
import searchIcon from "@/assets/svg/search.svg";

const SearchBar = () => {
  const CustomTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
      color: "#FFFFFF",
      backgroundColor: "#39373E",
      borderRadius: 10,
      fontSize: 14,
      height: 40,
      border: "none",
      "& input": {
        color: "#FFFFFF",
      },
    },
  }));

  return (
    <CustomTextField
      id="outlined-basic"
      variant="outlined"
      placeholder="Search your game"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Image src={searchIcon} alt="search" />
            </InputAdornment>
          ),
        },
      }}
      fullWidth
    />
  );
};

export default SearchBar;
