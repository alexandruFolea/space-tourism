import Image from 'next/image';
import { useState } from 'react';
import data from '../data.json';

const Technology = () => {
	const tdata = data.technology;

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (id) => {
		setToggleState(id);
	};

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
				{tdata.map((td) => (
					<div
						className={
							toggleState == td.id
								? 'tech__tab__image active-tech-image'
								: 'tech__tab__image'
						}
						key={td.id}
					>
						<Image
							src={td.images}
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
