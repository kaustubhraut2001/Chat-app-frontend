"use client";
import React from "react";
import ProfileMenu from "../components/auth/ProfileMenu";

interface DashNavProps {
	name: string;
	image?: string;
}

const DashNav: React.FC<DashNavProps> = ({ name, image }) => {
	return (
		<nav className="py-2 px-6 flex justify-between items-center bg-white shadow-sm">
			<h1 className="text-xl md:text-2xl font-extrabold">QuickChat</h1>
			<div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
				<ProfileMenu name={name} image={image} />
			</div>
		</nav>
	);
};

export default DashNav;
