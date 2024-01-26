import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { toogleOverlay } from "../redux/actions";

export default function Overlay({
  inputValue,
  handleTrade,
  handleDump,
  onInputChange,
  itemToTrade,
  maxToTrade,
}) {
  const market = useSelector((state) => state.market);
  const selectedItem = useSelector((state) => state.selectedItem);
  const tradeType = useSelector((state) => state.tradeType);
  const isOverlayOpen = useSelector((state) => state.isOverlayOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toogleOverlay());
  };

  const isValid = () => {
    if (inputValue > 0 && inputValue <= maxToTrade) {
      return false;
    }
    return true;
  };

  const itemFromMarket = market.forSale.filter(
    (item) => item.name === selectedItem
  );
  const isOnMarket = () => {
    return !!Object.keys(itemFromMarket).length;
  };
  return (
    <>
      <Dialog
        open={isOverlayOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: "black" }}>
          {isOnMarket()
            ? tradeType.charAt(0).toUpperCase() + tradeType.slice(1)
            : "Dump"}
          ing {itemToTrade}
        </DialogTitle>
        <DialogContent>
          {isOnMarket() ? (
            <>
              <DialogContentText id="alert-dialog-description">
                {itemToTrade} is currently{" "}
                {tradeType === "sell"
                  ? `being bought for ${itemFromMarket.price}`
                  : `selling for $${itemFromMarket.price}`}
              </DialogContentText>
              <DialogContentText id="alert-dialog-description2">
                {tradeType === "sell"
                  ? `You have ${maxToTrade} units to sell`
                  : `Whith your available founds, you can buy ${maxToTrade} units`}
              </DialogContentText>
            </>
          ) : (
            <>
              {" "}
              <DialogContentText id="alert-dialog-description">
                The market has no use for {itemToTrade} today, if you really
                need to get it off your hand, pumping it is an option...is
                currently{" "}
              </DialogContentText>
              <DialogContentText id="alert-dialog-description2">
                {`You have ${maxToTrade} units to dump`}
              </DialogContentText>
              <DialogContentText id="alert-dialog-description2">
                How mutch do you wish to dump?
              </DialogContentText>
            </>
          )}

          <TextField
            autoFocus
            margin="dense"
            id="tradeAmount"
            label="Trade Amount"
            type="number"
            fullWidth
            variant="standard"
            value={inputValue}
            placeholder="0"
            onChange={onInputChange}
          />
        </DialogContent>
        <DialogActions>
          {isOnMarket() ? (
            <Button onClick={handleTrade} disabled={isValid()}>
              {tradeType}
            </Button>
          ) : (
            <Button onClick={handleDump}>Dump</Button>
          )}
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
