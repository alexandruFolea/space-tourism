import Image from 'next/image';
import { useState, useEffect } from 'react';
import data from '../data2.json';

const DestinationTwo = () => {
	const pdata = data.destinations;

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (id) => {
		setToggleState(id);
	};

	const [image, setImage] = useState([
		{
			id: 1,
			img: pdata[0].images.png,
		},
		{
			id: 2,
			img: pdata[1].images.png,
		},
		{
			id: 3,
			img: pdata[2].images.png,
		},
		{
			id: 4,
			img: pdata[3].images.png,
		},
	]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 961) {
				setImage([
					{
						id: 1,
						img: pdata[0].images.png,
					},
					{
						id: 2,
						img: pdata[1].images.png,
					},
					{
						id: 3,
						img: pdata[2].images.png,
					},
					{
						id: 4,
						img: pdata[3].images.png,
					},
				]);
			} else {
				setImage([
					{
						id: 1,
						img: pdata[0].images.webp,
					},
					{
						id: 2,
						img: pdata[1].images.webp,
					},
					{
						id: 3,
						img: pdata[2].images.webp,
					},
					{
						id: 4,
						img: pdata[3].images.webp,
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
			<div className='tabs__container'>
				<button
					className={toggleState === 1 ? 'tab active-tab' : 'tab'}
					onClick={() => toggleTab(1)}
				>
					Moon
				</button>
				<button
					className={toggleState === 2 ? 'tab active-tab' : 'tab'}
					onClick={() => toggleTab(2)}
				>
					Mars
				</button>
				<button
					className={toggleState === 3 ? 'tab active-tab' : 'tab'}
					onClick={() => toggleTab(3)}
				>
					Europa
				</button>
				<button
					className={toggleState === 4 ? 'tab active-tab' : 'tab'}
					onClick={() => toggleTab(4)}
				>
					Titan
				</button>
			</div>

			<div className='tab__text__container'>
				{pdata.map((pd) => (
					<div
						className={
							toggleState == pd.id ? 'tab__text active-text' : 'tab__text'
						}
						key={pd.id}
					>
						<h1>{pd.name}</h1>
						<p className='text__description'>{pd.description}</p>
						<div className='more__info'>
							<div className='more__info__left'>
								<span>avg. distance</span>
								<p>{pd.distance}</p>
							</div>
							<div className='more__info__right'>
								<span>est. travel time</span>
								<p>{pd.travel}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='tab__image__container'>
				{image.map((img) => (
					<div
						className={
							toggleState == img.id
								? 'tab__image active-destination-image'
								: 'tab__image'
						}
						key={img.id}
					>
						<Image src={img.img} width='500' height='500' alt='crew item' />
					</div>
				))}
			</div>
		</>
	);
};

export default DestinationTwo;
