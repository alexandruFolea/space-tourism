import Image from 'next/image';
import { useState } from 'react';
import crewData from '../data.json';
import { BsCircleFill } from 'react-icons/bs';

const Crew = () => {
	const cdata = crewData.crew;

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (id) => {
		setToggleState(id);
	};
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
				{cdata.map((cd) => (
					<div
						className={
							toggleState == cd.id
								? 'crew__tab__text active-crew-text'
								: 'crew__tab__text'
						}
						key={cd.id}
					>
						<span>{cd.role}</span>
						<h1>{cd.name}</h1>
						<p>{cd.bio}</p>
					</div>
				))}
			</div>
			<div className='crew__tab__image__container'>
				{cdata.map((pd) => (
					<div
						className={
							toggleState == pd.id
								? 'crew__tab__image active-crew-image'
								: 'crew__tab__image'
						}
						key={pd.id}
					>
						<Image src={pd.images} width='650' height='720' alt='crew item' />
					</div>
				))}
			</div>
		</>
	);
};

export default Crew;
