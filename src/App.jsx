import { Outlet } from 'react-router-dom';
import './styling.scss';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createContext, useState } from 'react';
import { Nav } from './components/nav';
import { Footer } from './components/footer';
export const FullContext = createContext({
	fullInfo: {},
	setFullInfo: () => {},
});
function App() {
	const [fullInfo, setFullInfo] = useState({});
	return (
		<div className="App">
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<FullContext.Provider value={{ fullInfo, setFullInfo }}>
					<Nav />
					<Outlet />
					<Footer />
				</FullContext.Provider>
			</LocalizationProvider>
		</div>
	);
}

export default App;
