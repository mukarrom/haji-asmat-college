import React from 'react';
import logo from '../../assets/asmat-logo.jpeg';

function Logo() {
	return (
		<div className="bg-white text-[#016fb9] flex justify-center items-center space-x-8">
			<div className="w-28 h-28">
				<img src={logo} alt="" className="w-full" />
			</div>
			<div className="text-primary uppercase text-center">
				<h1 className="text-3xl md:text-4xl font-black font-mono">
					hazi asmat government college
				</h1>
				<p>Upazila Road , Bhairab-2350, 2350 Bhairab Town, Dhaka, Bangladesh</p>
			</div>
		</div>
	);
}

export default Logo;
