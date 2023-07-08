'use client';
import React, { useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

const nicknames = [
	'МaJLeHbkiu_MaFi0Ze',
	'IIo3uTuB4uK',
	'MaJIeHkuu_Ho_OnacHekuu',
	'McTuTeJIb',
	'3JlOu_XJlE6yWEK',
	'TBo9 cMepTb',
	'CuCe4Ka',
	'6a6ka B Hau`KoBCKuX KeDaX:D',
	'MaJIeHbkuu Prince',
	'DIVIDER',
	'МaJLeHbkiu_MaFi0Ze',
	'IIo3uTuB4uK',
	'MaJIeHkuu_Ho_OnacHekuu',
	'McTuTeJIb',
	'3JlOu_XJlE6yWEK',
	'TBo9 cMepTb',
	'CuCe4Ka',
	'6a6ka B Hau`KoBCKuX KeDaX:D',
];

const getRandomIn = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Matrix = () => {
	const { width, height } = useWindowSize();
	const textHeight = 24;
	const lines = ~~(height / textHeight);

	return (
		<div className='flex flex-col'>
			{[...Array(lines)].map((value, index) => {
				const random = getRandomIn(0, nicknames.length);
				let nicks = nicknames;
				const slicedPart = nicks.splice(0, random);
				nicks.push(...slicedPart);
				return (
					<div
						className='flex gap-2 overflow-hidden whitespace-nowrap'
						key={index}
					>
						{nicks.map((nick, index) => {
							const delay = getRandomIn(2, 5) * 1000;
							return (
								<p
									key={index}
									className={`text-white animate-fade animate-once animate-duration-[${delay}ms]`}
								>
									{nick}
								</p>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Matrix;
