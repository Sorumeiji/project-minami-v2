import '../styles/global.scss';
import NextNProgress from 'nextjs-progressbar';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress
				color='hsl(15, 100%, 76%)'
				startPosition={0.3}
				stopDelayMs={200}
				height={1}
				showOnShallow={false}
				options={{ showSpinner: false }}
			/>
			<Component {...pageProps} />
		</>
	);
}
