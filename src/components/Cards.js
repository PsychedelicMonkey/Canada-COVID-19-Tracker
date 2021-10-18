import React from 'react';

const Cards = (props) => {
	const { data } = props;

	const formatNumber = (x) => {
		return (
			<strong>{x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>
		);
	};

	return (
		<div className="cards">
			{data.map(
				({
					active_cases,
					active_cases_change,
					recovered,
					deaths,
					cumulative_cases,
					cumulative_deaths,
					cumulative_recovered,
					province,
				}) => (
					<>
						<div className="card">
							<h3>Active Cases</h3>
							<p>Active Cases: {formatNumber(active_cases)}</p>
							<p>Change: {formatNumber(active_cases_change)}</p>

							<p>Recovered: {formatNumber(recovered)}</p>
							<p>Deaths: {formatNumber(deaths)}</p>
						</div>
						<div className="card">
							<h3>Cummulative</h3>
							<p>Cases: {formatNumber(cumulative_cases)}</p>
							<p>Recovered: {formatNumber(cumulative_recovered)}</p>
							<p>Deaths: {formatNumber(cumulative_deaths)}</p>
						</div>
					</>
				)
			)}
		</div>
	);
};

export default Cards;
