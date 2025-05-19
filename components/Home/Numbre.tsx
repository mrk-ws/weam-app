'use client';

import { useEffect, useState } from 'react';
import { RiHotelLine, RiBarChartBoxLine, RiHandHeartLine, RiUserStarLine } from 'react-icons/ri';
import type { ReactElement } from 'react';

const stats = [
	{ icon: <RiHotelLine size={60} />, target: 350, label: 'المشاريع' },
	{ icon: <RiBarChartBoxLine size={60} />, target: 206, label: 'البرامج' },
	{ icon: <RiHandHeartLine size={60} />, target: 295, label: 'المتطوعين' },
	{ icon: <RiUserStarLine size={60} />, target: 653, label: 'المستفيدين' },
];

const CounterBox = ({ icon, target, label }: { icon: ReactElement; target: number; label: string }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const increment = target / 100;
		const interval = setInterval(() => {
			start += increment;
			if (start >= target) {
				setCount(target);
				clearInterval(interval);
			} else {
				setCount(Math.ceil(start));
			}
		}, 20);

		return () => clearInterval(interval);
	}, [target]);

	return (
		<div className="text-center flex flex-col items-center bg-slate-50 dark:bg-darkTheme2 rounded-2xl py-6">
			{icon}
			<h2 className="text-4xl font-bold text-primeryColor">{count}</h2>
			<p className="font-semibold mt-2 text-xl">{label}</p>
		</div>
	);
};

const Achievements = () => {
	return (
		<div className="p-6 shadow-lg text-center backg">
			<h2 className="text-4xl font-bold mb-16 text-slate-50">إنجازاتنا في أرقام</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{stats.map((stat, index) => (
					<CounterBox key={index} icon={stat.icon} target={stat.target} label={stat.label} />
				))}
			</div>
		</div>
	);
};

export default Achievements;
