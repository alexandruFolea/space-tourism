import Head from 'next/head';
import Intro from '../components/Intro';

export default function Home() {
	return (
		<>
			<Head>
				<title>Space Tourism - Frontend Mentor Challenge</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Intro />
		</>
	);
}
