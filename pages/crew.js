import Crew from '../components/Crew';

const crew = () => {
	return (
		<div className='crew__page'>
			<div className='crew__page__title'>
				<h5>
					<span>02</span> Meet your crew
				</h5>
			</div>

			<div className='crew__container'>
				<Crew />
			</div>
		</div>
	);
};

export default crew;
