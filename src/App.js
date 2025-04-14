import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</HashRouter>
		</>
	)
}

export default App;
