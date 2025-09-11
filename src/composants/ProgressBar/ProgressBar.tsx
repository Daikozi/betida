import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const ProgressBar = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: "#252427",
  },
  [`& .${linearProgressClasses.bar}`]: {
    background: "linear-gradient(180deg, #F8A902 0%, #F3696E 100%)",
  },
}));

export default ProgressBar;
