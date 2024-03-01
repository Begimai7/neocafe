import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Pagination,
  styled,
} from '@mui/material';
import icon from '../assets/tableIcons/DotsThreeVertical.svg';
import deleteIcon from '../assets/tableIcons/dustbin.svg';
import redactionIcon from '../assets/tableIcons/Pencil.svg';
// import { stockTableColumns } from '../utils/constants/constants';

interface DataRows {
  id: number;
  [key: string]: string | number | null;
}

const rows: DataRows[] = [
  {
    id: 1,
    numbering: '№1',
    name: 'Сахар',
    quantity: '15 кг',
    limit: '30 кг',
    date: '20.09.2021',
  },
  {
    id: 2,
    numbering: '№2',
    name: 'Сахар',
    quantity: '15 кг',
    limit: '30 кг',
    date: '20.09.2021',
  },
  {
    id: 3,
    numbering: '№3',
    name: 'Сахар',
    quantity: '15 кг',
    limit: '30 кг',
    date: '20.09.2021',
  },
  {
    id: 4,
    numbering: '№4',
    name: 'Сахар',
    quantity: '15 кг',
    limit: '30 кг',
    date: '20.09.2021',
  },
  {
    id: 5,
    numbering: '№5',
    name: 'Сахар',
    quantity: '15 кг',
    limit: '30 кг',
    date: '20.09.2021',
  },
  {
    id: 6,
    numbering: '№6',
    name: 'Сахар',
    quantity: '15 кг',
    limit: '30 кг',
    date: '20.09.2021',
  },
  {
    id: 7,
    numbering: '№7',
    name: 'Сахар',
    quantity: '15 кг',
    limit: '30 кг',
    date: '20.09.2021',
  },
];

interface TableColumn {
  id: keyof DataRows;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

interface TableProps {
  coloumnData: TableColumn[]
}

const ColumnGroupingTable: React.FC<TableProps> = ({ coloumnData }) => {
  const [buttonId, setButtonId] = React.useState<number | null>(null);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage] = React.useState(5);

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    event.stopPropagation();
    setButtonId(id);
  };

  const handleClick = () => {
    console.log('clicked');
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(event, 'event')
    setPage(newPage);
  };

  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const paginatedData = rows.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {coloumnData.map((column) => (
                <StyledHeadTableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledHeadTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => {
              const isClickedButton = buttonId === row.id;
              return (
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  className="relative"
                >
                  <StyledTableCell>{row.numbering}</StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.quantity}</StyledTableCell>
                  <StyledTableCell>{row.limit}</StyledTableCell>
                  <StyledTableCell>{row.date}</StyledTableCell>
                  <StyledTableCell>
                    <button
                      onClick={(event) => handleButtonClick(event, row.id)}
                    >
                      <img src={icon} alt="Button Icon" />
                    </button>
                    {isClickedButton && (
                      <div className="flex flex-col border absolute top-3 right-20 rounded min-w-[200px]">
                        <button
                          onClick={handleClick}
                          className="border h-10 flex gap-2 items-center p-2 bg-white max-w-10"
                        >
                          <img className="mt-0.5" src={deleteIcon} />
                          Удалить
                        </button>
                        <button className="border h-10 flex gap-2 items-center p-2 bg-white">
                          <img className="mt-0.5" src={redactionIcon} />
                          Редактировать
                        </button>
                      </div>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} justifyContent="center" alignItems="center" mt={2}>
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
        />
      </Stack>
    </Paper>
  );
};

export default ColumnGroupingTable;

const StyledHeadTableCell = styled(TableCell)(() => ({
  borderBottom: '2px solid #171717',
  fontWeight: '700',
}));

const StyledTableRow = styled(TableRow)(() => ({
  height: '79px',
}));

const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: '2px solid #CDD3DD',
  color: '#000',
  fontWeight: '600',
}));
