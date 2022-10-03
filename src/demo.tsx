import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const CustomDialog = () => (
    <Box height="97vh">
      <DialogTitle
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <span>Fleetio Integration</span>
        <IconButton aria-label="close" onClick={toggleDrawer("bottom", false)}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {" "}
        <iframe
          title="Connect"
          src="http://google.com"
          height="480"
          width="100%"
          frameBorder="0"
        />
      </DialogContent>
    </Box>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <CustomDialog />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
