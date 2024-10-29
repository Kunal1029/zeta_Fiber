/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import {
  React,
  PropTypes,
  Backdrop,
  Box,
  Modal,
  Button,
  Typography,
  useSpring,
  animated,
} from "./imports/MuiImports";

// import UserName from "../UserCredential/UserName";
import UserName from "./UserCredential/UserName"

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BuyModal({ amount, onOpenModal, onCloseModal }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    onOpenModal(); // Pause the slider when modal opens
  };

  const handleClose = () => {
    setOpen(false);
    onCloseModal(); // Resume the slider when modal closes
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          "&:focus": {
            outline: "none", // Remove the outline on focus
            boxShadow: "none", // Remove box shadow if any
          },
        }}
      >
        Buy Now
      </Button>
      <Modal
        className=""
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="ModalCard">
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              {amount}
              <UserName />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
