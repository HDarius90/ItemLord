import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAllItemsQty } from '../utils';
import Overlay from './Overlay';

export default function Pocket({
  market,
  pocket,
  onInputChange,
  closeOverlay,
  openOverlay,
  isOverlayOpened,
  inputValue,
  itemToTrade,
  tradeType,
  handleSell,
  handleDump,
  pocketSize,
  getMaxToTrade,
}) {
  const color = { color: 'white', backgroundColor: 'black' };

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>
        Your Pants Pocket ({getAllItemsQty(pocket)}/{pocketSize})
      </h3>
      <TableContainer
        component={Paper}
        sx={{
          marginBottom: '5rem',
          ...color,
          maxHeight: 230,
        }}
      >
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: 'white' }}>Name</TableCell>
              <TableCell align="right" sx={{ backgroundColor: 'white' }}>
                Qty
              </TableCell>
              <TableCell align="right" sx={{ backgroundColor: 'white' }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pocket.map((item, index) => (
              <TableRow
                onClick={() => {
                  openOverlay(
                    item.name,
                    'sell', index
                  );
                }}
                key={item.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0, ...color },
                  cursor: 'pointer',
                }}
              >
                <TableCell component="th" scope="row" sx={{ ...color }}>
                  {item.name}
                </TableCell>
                <TableCell align="right" sx={{ ...color }}>
                  {item.qty}
                </TableCell>
                <TableCell align="right" sx={{ ...color }}>
                  {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Overlay
        market={market}
        inputValue={inputValue}
        isOpen={isOverlayOpened}
        handleClose={closeOverlay}
        handleDump={handleDump}
        handleTrade={handleSell}
        onInputChange={onInputChange}
        tradeType={tradeType}
        itemToTrade={itemToTrade}
        maxToTrade={getMaxToTrade()}
      />
    </div>
  );
}
