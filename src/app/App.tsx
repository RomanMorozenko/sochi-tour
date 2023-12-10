import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { WithRouter } from './withRouter.tsx';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <WithRouter />
    </LocalizationProvider>
  );
}

export default App;
