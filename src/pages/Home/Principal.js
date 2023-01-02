import React from 'react';
import { Link } from 'react-router-dom';

const Principal = () => {
	return (
		<Link to="/voiceOfPrincipal">
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img src="principal_sir.jpeg" alt="" />
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">Muhammad Abdur Rouf</h2>
					<p>Principal</p>
					<p>Hazi Asmat Govrt. College</p>
				</div>
			</div>
		</Link>
	);
};

export default Principal;
