import Image from 'next/image';
import { useState } from 'react';
import data from '../data.json';

const DestinationTwo = () => {
	const pdata = data.destinations;

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (id) => {
		setToggleState(id);
	};

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
				{pdata.map((pd) => (
					<div
						className={
							toggleState == pd.id ? 'tab__image active-image' : 'tab__image'
						}
						key={pd.id}
					>
						<Image
							src={pd.image}
							width='500'
							height='500'
							alt='destination item'
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default DestinationTwo;
