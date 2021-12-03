import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Navigation />
			<main>{children}</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
