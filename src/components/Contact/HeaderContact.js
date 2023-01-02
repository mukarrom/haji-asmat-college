import React from 'react';
import { MdCall, MdMail } from 'react-icons/md';

const HeaderContact = () => {
	return (
		<div className="flex justify-end gap-5 items-center pr-10 text-white font-bold bg-[#4d6cfa]">
			<p className="flex items-center gap-3">
				<MdCall />
				<p className="">01xxxxxxxxxx</p>
			</p>
			<p className="flex items-center gap-3">
				<MdMail />
				<p className="">info@email.com</p>
			</p>
		</div>
	);
};

export default HeaderContact;
