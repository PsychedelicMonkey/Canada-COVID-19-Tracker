import React, { useEffect, useState } from 'react';
import provinces from './utils/provinces';

import Cards from './components/Cards';
import Header from './components/Header';
import Loading from './components/Loading';

import './css/App.scss';

const App = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [location, setLocation] = useState('canada');

	const title = provinces.find((p) => p.value === location);

	const fetchData = async (location) => {
		try {
			setLoading(true);
			setLocation(location);

			const res = await fetch(
				`https://api.opencovid.ca/summary?loc=${location}`
			);
			const data = await res.json();

			setData(data.summary);
		} catch (err) {
			alert('Error fetching data');
		}

		setLoading(false);
	};

	useEffect(() => {
		// Get data for all provinces on load
		fetchData('canada');
	}, []);

	if (loading) return <Loading />;

	return (
		<>
			<Header />
			<section>
				<h2 className="province">{title.label}</h2>
				<select
					value={location}
					onChange={(e) => {
						console.log(e.target.value);
						fetchData(e.target.value);
					}}
				>
					{provinces.map((p) => (
						<option value={p.value}>{p.label}</option>
					))}
				</select>

				<Cards data={data} />
			</section>
		</>
	);
};

export default App;
