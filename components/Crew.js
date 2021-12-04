import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import data from '../data2.json';

const Crew = () => {
	const crewData = data.crew;

	// console.log(cdata[2].name);
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (id) => {
		setToggleState(id);
	};

	const [image, setImage] = useState([
		{
			id: 1,
			img: crewData[0].images.png,
		},
		{
			id: 2,
			img: crewData[1].images.png,
		},
		{
			id: 3,
			img: crewData[2].images.png,
		},
		{
			id: 4,
			img: crewData[3].images.png,
		},
	]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 961) {
				setImage([
					{
						id: 1,
						img: crewData[0].images.png,
					},
					{
						id: 2,
						img: crewData[1].images.png,
					},
					{
						id: 3,
						img: crewData[2].images.png,
					},
					{
						id: 4,
						img: crewData[3].images.png,
					},
				]);
			} else {
				setImage([
					{
						id: 1,
						img: crewData[0].images.webp,
					},
					{
						id: 2,
						img: crewData[1].images.webp,
					},
					{
						id: 3,
						img: crewData[2].images.webp,
					},
					{
						id: 4,
						img: crewData[3].images.webp,
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
			<div className='crew__tabs__container'>
				<button
					className={
						toggleState === 1 ? 'crew__tab active-crew-tab' : 'crew__tab'
					}
					onClick={() => toggleTab(1)}
				>
					<BsCircleFill />
				</button>
				<button
					className={
						toggleState === 2 ? 'crew__tab active-crew-tab' : 'crew__tab'
					}
					onClick={() => toggleTab(2)}
				>
					<BsCircleFill />
				</button>
				<button
					className={
						toggleState === 3 ? 'crew__tab active-crew-tab' : 'crew__tab'
					}
					onClick={() => toggleTab(3)}
				>
					<BsCircleFill />
				</button>
				<button
					className={
						toggleState === 4 ? 'crew__tab active-crew-tab' : 'crew__tab'
					}
					onClick={() => toggleTab(4)}
				>
					<BsCircleFill />
				</button>
			</div>

			<div className='crew__tab__text__container'>
				{crewData.map((info) => (
					<div
						className={
							toggleState == info.id
								? 'crew__tab__text active-crew-text'
								: 'crew__tab__text'
						}
						key={info.id}
					>
						<span>{info.role}</span>
						<h1>{info.name}</h1>
						<p>{info.bio}</p>
					</div>
				))}
			</div>
			<div className='crew__tab__image__container'>
				{image.map((img) => (
					<div
						className={
							toggleState == img.id
								? 'crew__tab__image active-crew-image'
								: 'crew__tab__image'
						}
						key={img.id}
					>
						<Image src={img.img} width='650' height='720' alt='crew item' />
					</div>
				))}
			</div>
		</>
	);
};

export default Crew;
