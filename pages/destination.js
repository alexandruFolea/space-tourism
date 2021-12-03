import DestinationTwo from '../components/DestinationTwo';

const destination = () => {
	// console.log(data.destinations[0].images);
	return (
		<div className='destination__page'>
			<div className='page__wrapper'>
				<div className='wrapper__title'>
					<h5>
						<span>01</span> pick your destination
					</h5>
				</div>
				<div className='destination__container'>
					<DestinationTwo />
				</div>
			</div>
		</div>
	);
};

export default destination;
