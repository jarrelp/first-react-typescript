import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { WidgetNames } from "./data/ComponentsListData";
import { IChartTypes } from "../../interfaces";

// interface WidgetProps {
//   id: string
//   onRemoveItem: (itemId: string) => void
//   component: React.ReactNode
// }

const RootWrapper = styled(Card)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const HeaderWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "0.5rem",
});

const SpacerWrapper = styled("div")({
  flexGrow: 1,
});

const BodyWrapper = styled("div")({
  // padding: "0.5rem",
  flexGrow: 1,
});

export default function Widget({ id, onRemoveItem, component: Item }) {
  return (
    <RootWrapper>
      <HeaderWrapper>
        <Typography variant="h6" gutterBottom>
          {WidgetNames[id]}
        </Typography>
        <SpacerWrapper />
        <IconButton aria-label="delete" onClick={() => onRemoveItem(id)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </HeaderWrapper>
      <BodyWrapper>
        <Item />
      </BodyWrapper>
    </RootWrapper>
  );
}
