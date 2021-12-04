import Image from 'next/image';
import { useState, useEffect } from 'react';
import data from '../data2.json';

const Technology = () => {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (id) => {
		setToggleState(id);
	};

	const tdata = data.technology;

	const [image, setImage] = useState([
		{
			id: 1,
			img: tdata[0].images.landscape,
		},
		{
			id: 2,
			img: tdata[1].images.landscape,
		},
		{
			id: 3,
			img: tdata[2].images.landscape,
		},
	]);

	// console.log(image);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 961) {
				setImage([
					{
						id: 1,
						img: tdata[0].images.landscape,
					},
					{
						id: 2,
						img: tdata[1].images.landscape,
					},
					{
						id: 3,
						img: tdata[2].images.landscape,
					},
				]);
			} else {
				setImage([
					{
						id: 1,
						img: tdata[0].images.portrait,
					},
					{
						id: 2,
						img: tdata[1].images.portrait,
					},
					{
						id: 3,
						img: tdata[2].images.portrait,
					},
				]);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<>
			<div className='tech__tab__container'>
				<div>
					<button
						className={
							toggleState === 1 ? 'tech-tab active-tech-tab' : 'tech-tab'
						}
						onClick={() => toggleTab(1)}
					>
						1
					</button>
				</div>
				<div>
					<button
						className={
							toggleState === 2 ? 'tech-tab active-tech-tab' : 'tech-tab'
						}
						onClick={() => toggleTab(2)}
					>
						2
					</button>
				</div>
				<div>
					<button
						className={
							toggleState === 3 ? 'tech-tab active-tech-tab' : 'tech-tab'
						}
						onClick={() => toggleTab(3)}
					>
						3
					</button>
				</div>
			</div>
			<div className='tech__text__container'>
				{tdata.map((td) => (
					<div
						className={
							toggleState == td.id
								? 'tech__tab__text active-tech-text'
								: 'tech__tab__text'
						}
						key={td.id}
					>
						<span>the terminology...</span>
						<h1>{td.name}</h1>
						<p className='text__description'>{td.description}</p>
					</div>
				))}
			</div>
			<div className='tech__image__container'>
				{image.map((img) => (
					<div
						className={
							toggleState == img.id
								? 'tech__tab__image active-tech-image'
								: 'tech__tab__image'
						}
						key={img.id}
					>
						<Image
							src={img.img}
							width='550'
							height='550'
							alt='technology item'
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Technology;
