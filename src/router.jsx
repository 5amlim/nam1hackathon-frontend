import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import App from '/App.jsx';

import { Landing } from '/pages/landing';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Landing />} />
			<Route path="dashboard" element={<Dashboard />} />
			<Route path="login" element={<Login />} />
		</Route>
	)
);

export default router;
