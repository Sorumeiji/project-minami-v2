import React from 'react';
import { useEffect, useState } from 'react';
import Vtuber from '../src/components/Vtuber.js';
import Link from 'next/link';
import Illustration from '../src/components/Illustration.js';
import Emotes from '../src/components/Emotes.js';
import Terms from '../src/components/Terms.js';
import Navigation from '../src/components/Navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClipboardList,
	faDollarSign,
	faList,
	faMoneyCheck,
} from '@fortawesome/free-solid-svg-icons';
import { createClient } from 'contentful';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: 'commissionPricing' });
	const pes = await client.getEntries({ content_type: 'gallery' });

	return {
		props: {
			pricing: res.items,
			gallery: pes.items,
		},
	};
}

const commission = ({ pricing, gallery }) => {
	const [emotes, setEmotes] = useState(<Emotes pricing={pricing} />);
	const [isActive, setActive] = useState('emotes');

	const handleEmotes = () => {
		// update the state to tab1
		setActive('emotes');
	};

	const handleIllustrations = () => {
		// update the state to tab1
		setActive('illustrations');
	};

	const handleVtubers = () => {
		// update the state to tab1
		setActive('vtubers');
	};

	const handleTerms = () => {
		// update the state to tab1
		setActive('terms');
	};

	useEffect(() => {});
	return (
		<>
			<section className='hero'>
				<Navigation />
				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
						},
						visible: {
							scale: 1,
							opacity: 1,
							transition: {
								delay: 0.5,
							},
						},
					}}
					className='container flow'>
					<h1>
						Services & <br /> Pricing<span className='accent'>.</span>
					</h1>
					<div>
						<h4 className='status'>
							<span className='accent-gray'>Status: </span> Closed
						</h4>
					</div>
					<p>
						Below are my prices for Digital Art, Twitch Emotes, and Traditonal Art. For any prices
						not listed, reach out for quote.
					</p>
					<ul>
						<li>
							<a href='#pricing' role='button'>
								View Prices &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faMoneyCheck} />
								</span>
							</a>
						</li>
					</ul>
				</motion.div>
			</section>
			<section className='information'>
				<section className='decoration container'>
					<svg width='100%' height='118' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<mask
							id='b'
							maskUnits='userSpaceOnUse'
							x='0'
							y='0'
							width='852'
							height='118'
							fill='#000'>
							<path fill='#fff' d='M0 0h852v118H0z' />
							<path d='M52.264 19.61c-10.144 0-18.122 3.595-23.933 10.783-5.81 7.189-8.716 17.11-8.716 29.763 0 13.244 2.782 23.264 8.347 30.058 5.614 6.794 13.715 10.192 24.302 10.192 4.58 0 9.012-.443 13.297-1.33 4.284-.935 8.74-2.117 13.37-3.544v15.139c-8.47 3.201-18.073 4.801-28.809 4.801-15.807 0-27.947-4.776-36.417-14.328C5.235 91.544 1 77.831 1 60.008 1 48.783 3.044 38.96 7.131 30.541c4.137-8.42 10.095-14.869 17.876-19.35 7.78-4.48 16.916-6.72 27.405-6.72 11.031 0 21.225 2.314 30.582 6.942L76.64 26.11c-3.644-1.723-7.51-3.225-11.597-4.505-4.038-1.33-8.298-1.994-12.78-1.994Zm120.553 53.396c0 13.343-3.422 23.756-10.268 31.24-6.845 7.484-16.374 11.226-28.586 11.226-7.633 0-14.38-1.724-20.24-5.17-5.861-3.446-10.366-8.395-13.518-14.844-3.152-6.45-4.728-13.934-4.728-22.452 0-13.244 3.398-23.583 10.194-31.018 6.796-7.434 16.374-11.151 28.735-11.151 11.819 0 21.175 3.815 28.07 11.447 6.894 7.582 10.341 17.823 10.341 30.722Zm-59.464 0c0 18.857 6.969 28.286 20.905 28.286 13.789 0 20.683-9.429 20.683-28.286 0-18.66-6.944-27.99-20.831-27.99-7.288 0-12.582 2.413-15.881 7.238-3.251 4.825-4.876 11.742-4.876 20.752Zm148.327 40.989h-17.432V63.627c0-6.253-1.182-10.906-3.546-13.958-2.364-3.102-6.057-4.653-11.08-4.653-6.698 0-11.622 2.191-14.774 6.573-3.102 4.333-4.654 11.57-4.654 21.713v40.693h-17.359V32.314h13.592l2.438 10.708h.886c2.265-3.89 5.54-6.893 9.825-9.01 4.333-2.117 9.085-3.175 14.256-3.175 12.558 0 20.88 4.283 24.968 12.85h1.181c2.414-4.037 5.811-7.188 10.194-9.453 4.383-2.265 9.406-3.398 15.069-3.398 9.751 0 16.842 2.462 21.274 7.386 4.482 4.923 6.722 12.432 6.722 22.525v53.248h-17.359V63.627c0-6.253-1.206-10.906-3.619-13.958-2.364-3.102-6.057-4.653-11.08-4.653-6.747 0-11.696 2.117-14.848 6.352-3.102 4.184-4.654 10.634-4.654 19.349v43.278Zm93.148 0h-17.359V32.314h17.359v81.681Zm-18.393-103.32c0-3.102.837-5.49 2.511-7.164C340.67 1.837 343.108 1 346.259 1c3.054 0 5.417.837 7.092 2.511 1.723 1.674 2.585 4.062 2.585 7.164 0 2.954-.862 5.292-2.585 7.016-1.675 1.674-4.038 2.51-7.092 2.51-3.151 0-5.589-.836-7.313-2.51-1.674-1.723-2.511-4.062-2.511-7.016Zm98.171 80.056c0 7.976-2.906 14.106-8.717 18.389-5.811 4.235-14.133 6.352-24.967 6.352-10.883 0-19.625-1.65-26.223-4.948V95.531c9.602 4.432 18.54 6.647 26.814 6.647 10.686 0 16.029-3.225 16.029-9.674 0-2.068-.591-3.792-1.773-5.17-1.182-1.379-3.127-2.807-5.835-4.284-2.709-1.477-6.476-3.15-11.302-5.022-9.406-3.643-15.783-7.286-19.132-10.93-3.299-3.643-4.949-8.37-4.949-14.18 0-6.99 2.807-12.407 8.421-16.247 5.663-3.89 13.345-5.834 23.047-5.834 9.603 0 18.688 1.944 27.257 5.834l-5.614 13.072c-8.815-3.644-16.226-5.465-22.234-5.465-9.16 0-13.74 2.61-13.74 7.828 0 2.56 1.182 4.727 3.546 6.5 2.413 1.772 7.633 4.209 15.66 7.31 6.747 2.61 11.646 4.998 14.7 7.164 3.053 2.167 5.318 4.678 6.796 7.533 1.477 2.807 2.216 6.18 2.216 10.118Zm73.72 0c0 7.976-2.906 14.106-8.716 18.389-5.811 4.235-14.134 6.352-24.968 6.352-10.883 0-19.624-1.65-26.223-4.948V95.531c9.603 4.432 18.541 6.647 26.814 6.647 10.686 0 16.029-3.225 16.029-9.674 0-2.068-.591-3.792-1.772-5.17-1.182-1.379-3.127-2.807-5.836-4.284-2.708-1.477-6.476-3.15-11.302-5.022-9.406-3.643-15.783-7.286-19.132-10.93-3.299-3.643-4.949-8.37-4.949-14.18 0-6.99 2.807-12.407 8.421-16.247 5.663-3.89 13.346-5.834 23.047-5.834 9.603 0 18.689 1.944 27.257 5.834l-5.614 13.072c-8.815-3.644-16.226-5.465-22.234-5.465-9.16 0-13.739 2.61-13.739 7.828 0 2.56 1.181 4.727 3.545 6.5 2.413 1.772 7.633 4.209 15.66 7.31 6.747 2.61 11.647 4.998 14.7 7.164 3.053 2.167 5.319 4.678 6.796 7.533 1.477 2.807 2.216 6.18 2.216 10.118Zm36.195 23.264h-17.359V32.314h17.359v81.681Zm-18.393-103.32c0-3.102.837-5.49 2.512-7.164C530.363 1.837 532.801 1 535.953 1c3.053 0 5.417.837 7.091 2.511 1.724 1.674 2.585 4.062 2.585 7.164 0 2.954-.861 5.292-2.585 7.016-1.674 1.674-4.038 2.51-7.091 2.51-3.152 0-5.59-.836-7.313-2.51-1.675-1.723-2.512-4.062-2.512-7.016Zm115.751 62.331c0 13.343-3.422 23.756-10.267 31.24-6.845 7.484-16.374 11.226-28.587 11.226-7.633 0-14.38-1.724-20.24-5.17-5.86-3.446-10.366-8.395-13.518-14.844-3.152-6.45-4.727-13.934-4.727-22.452 0-13.244 3.397-23.583 10.193-31.018 6.796-7.434 16.374-11.151 28.735-11.151 11.819 0 21.176 3.815 28.07 11.447 6.894 7.582 10.341 17.823 10.341 30.722Zm-59.463 0c0 18.857 6.968 28.286 20.904 28.286 13.789 0 20.683-9.429 20.683-28.286 0-18.66-6.943-27.99-20.83-27.99-7.289 0-12.583 2.413-15.882 7.238-3.25 4.825-4.875 11.742-4.875 20.752Zm151.355 40.989h-17.433v-50.22c0-6.302-1.28-11.004-3.841-14.106-2.511-3.102-6.525-4.653-12.04-4.653-7.338 0-12.705 2.167-16.103 6.5-3.398 4.332-5.097 11.594-5.097 21.786v40.693h-17.359V32.314h13.591l2.438 10.708h.886c2.463-3.89 5.959-6.893 10.49-9.01 4.53-2.117 9.553-3.175 15.069-3.175 19.6 0 29.399 9.97 29.399 29.91v53.248Zm79.039-23.264c0 7.976-2.905 14.106-8.716 18.389-5.811 4.235-14.134 6.352-24.968 6.352-10.883 0-19.624-1.65-26.223-4.948V95.531c9.603 4.432 18.541 6.647 26.814 6.647 10.687 0 16.03-3.225 16.03-9.674 0-2.068-.591-3.792-1.773-5.17-1.182-1.379-3.127-2.807-5.836-4.284-2.708-1.477-6.476-3.15-11.302-5.022-9.405-3.643-15.783-7.286-19.131-10.93-3.3-3.643-4.95-8.37-4.95-14.18 0-6.99 2.807-12.407 8.421-16.247 5.664-3.89 13.346-5.834 23.047-5.834 9.603 0 18.689 1.944 27.258 5.834l-5.614 13.072c-8.815-3.644-16.227-5.465-22.235-5.465-9.159 0-13.739 2.61-13.739 7.828 0 2.56 1.182 4.727 3.545 6.5 2.414 1.772 7.634 4.209 15.661 7.31 6.746 2.61 11.646 4.998 14.699 7.164 3.053 2.167 5.319 4.678 6.796 7.533 1.477 2.807 2.216 6.18 2.216 10.118Zm16.251 14.032c0-3.594.936-6.351 2.807-8.272 1.871-1.92 4.58-2.88 8.126-2.88 3.595 0 6.328 1.01 8.199 3.028 1.871 1.97 2.807 4.678 2.807 8.124 0 3.496-.96 6.278-2.881 8.345-1.871 2.019-4.58 3.028-8.125 3.028-3.546 0-6.255-1.009-8.126-3.028-1.871-2.018-2.807-4.8-2.807-8.345Z' />
						</mask>
						<path
							d='M52.264 19.61c-10.144 0-18.122 3.595-23.933 10.783-5.81 7.189-8.716 17.11-8.716 29.763 0 13.244 2.782 23.264 8.347 30.058 5.614 6.794 13.715 10.192 24.302 10.192 4.58 0 9.012-.443 13.297-1.33 4.284-.935 8.74-2.117 13.37-3.544v15.139c-8.47 3.201-18.073 4.801-28.809 4.801-15.807 0-27.947-4.776-36.417-14.328C5.235 91.544 1 77.831 1 60.008 1 48.783 3.044 38.96 7.131 30.541c4.137-8.42 10.095-14.869 17.876-19.35 7.78-4.48 16.916-6.72 27.405-6.72 11.031 0 21.225 2.314 30.582 6.942L76.64 26.11c-3.644-1.723-7.51-3.225-11.597-4.505-4.038-1.33-8.298-1.994-12.78-1.994Zm120.553 53.396c0 13.343-3.422 23.756-10.268 31.24-6.845 7.484-16.374 11.226-28.586 11.226-7.633 0-14.38-1.724-20.24-5.17-5.861-3.446-10.366-8.395-13.518-14.844-3.152-6.45-4.728-13.934-4.728-22.452 0-13.244 3.398-23.583 10.194-31.018 6.796-7.434 16.374-11.151 28.735-11.151 11.819 0 21.175 3.815 28.07 11.447 6.894 7.582 10.341 17.823 10.341 30.722Zm-59.464 0c0 18.857 6.969 28.286 20.905 28.286 13.789 0 20.683-9.429 20.683-28.286 0-18.66-6.944-27.99-20.831-27.99-7.288 0-12.582 2.413-15.881 7.238-3.251 4.825-4.876 11.742-4.876 20.752Zm148.327 40.989h-17.432V63.627c0-6.253-1.182-10.906-3.546-13.958-2.364-3.102-6.057-4.653-11.08-4.653-6.698 0-11.622 2.191-14.774 6.573-3.102 4.333-4.654 11.57-4.654 21.713v40.693h-17.359V32.314h13.592l2.438 10.708h.886c2.265-3.89 5.54-6.893 9.825-9.01 4.333-2.117 9.085-3.175 14.256-3.175 12.558 0 20.88 4.283 24.968 12.85h1.181c2.414-4.037 5.811-7.188 10.194-9.453 4.383-2.265 9.406-3.398 15.069-3.398 9.751 0 16.842 2.462 21.274 7.386 4.482 4.923 6.722 12.432 6.722 22.525v53.248h-17.359V63.627c0-6.253-1.206-10.906-3.619-13.958-2.364-3.102-6.057-4.653-11.08-4.653-6.747 0-11.696 2.117-14.848 6.352-3.102 4.184-4.654 10.634-4.654 19.349v43.278Zm93.148 0h-17.359V32.314h17.359v81.681Zm-18.393-103.32c0-3.102.837-5.49 2.511-7.164C340.67 1.837 343.108 1 346.259 1c3.054 0 5.417.837 7.092 2.511 1.723 1.674 2.585 4.062 2.585 7.164 0 2.954-.862 5.292-2.585 7.016-1.675 1.674-4.038 2.51-7.092 2.51-3.151 0-5.589-.836-7.313-2.51-1.674-1.723-2.511-4.062-2.511-7.016Zm98.171 80.056c0 7.976-2.906 14.106-8.717 18.389-5.811 4.235-14.133 6.352-24.967 6.352-10.883 0-19.625-1.65-26.223-4.948V95.531c9.602 4.432 18.54 6.647 26.814 6.647 10.686 0 16.029-3.225 16.029-9.674 0-2.068-.591-3.792-1.773-5.17-1.182-1.379-3.127-2.807-5.835-4.284-2.709-1.477-6.476-3.15-11.302-5.022-9.406-3.643-15.783-7.286-19.132-10.93-3.299-3.643-4.949-8.37-4.949-14.18 0-6.99 2.807-12.407 8.421-16.247 5.663-3.89 13.345-5.834 23.047-5.834 9.603 0 18.688 1.944 27.257 5.834l-5.614 13.072c-8.815-3.644-16.226-5.465-22.234-5.465-9.16 0-13.74 2.61-13.74 7.828 0 2.56 1.182 4.727 3.546 6.5 2.413 1.772 7.633 4.209 15.66 7.31 6.747 2.61 11.646 4.998 14.7 7.164 3.053 2.167 5.318 4.678 6.796 7.533 1.477 2.807 2.216 6.18 2.216 10.118Zm73.72 0c0 7.976-2.906 14.106-8.716 18.389-5.811 4.235-14.134 6.352-24.968 6.352-10.883 0-19.624-1.65-26.223-4.948V95.531c9.603 4.432 18.541 6.647 26.814 6.647 10.686 0 16.029-3.225 16.029-9.674 0-2.068-.591-3.792-1.772-5.17-1.182-1.379-3.127-2.807-5.836-4.284-2.708-1.477-6.476-3.15-11.302-5.022-9.406-3.643-15.783-7.286-19.132-10.93-3.299-3.643-4.949-8.37-4.949-14.18 0-6.99 2.807-12.407 8.421-16.247 5.663-3.89 13.346-5.834 23.047-5.834 9.603 0 18.689 1.944 27.257 5.834l-5.614 13.072c-8.815-3.644-16.226-5.465-22.234-5.465-9.16 0-13.739 2.61-13.739 7.828 0 2.56 1.181 4.727 3.545 6.5 2.413 1.772 7.633 4.209 15.66 7.31 6.747 2.61 11.647 4.998 14.7 7.164 3.053 2.167 5.319 4.678 6.796 7.533 1.477 2.807 2.216 6.18 2.216 10.118Zm36.195 23.264h-17.359V32.314h17.359v81.681Zm-18.393-103.32c0-3.102.837-5.49 2.512-7.164C530.363 1.837 532.801 1 535.953 1c3.053 0 5.417.837 7.091 2.511 1.724 1.674 2.585 4.062 2.585 7.164 0 2.954-.861 5.292-2.585 7.016-1.674 1.674-4.038 2.51-7.091 2.51-3.152 0-5.59-.836-7.313-2.51-1.675-1.723-2.512-4.062-2.512-7.016Zm115.751 62.331c0 13.343-3.422 23.756-10.267 31.24-6.845 7.484-16.374 11.226-28.587 11.226-7.633 0-14.38-1.724-20.24-5.17-5.86-3.446-10.366-8.395-13.518-14.844-3.152-6.45-4.727-13.934-4.727-22.452 0-13.244 3.397-23.583 10.193-31.018 6.796-7.434 16.374-11.151 28.735-11.151 11.819 0 21.176 3.815 28.07 11.447 6.894 7.582 10.341 17.823 10.341 30.722Zm-59.463 0c0 18.857 6.968 28.286 20.904 28.286 13.789 0 20.683-9.429 20.683-28.286 0-18.66-6.943-27.99-20.83-27.99-7.289 0-12.583 2.413-15.882 7.238-3.25 4.825-4.875 11.742-4.875 20.752Zm151.355 40.989h-17.433v-50.22c0-6.302-1.28-11.004-3.841-14.106-2.511-3.102-6.525-4.653-12.04-4.653-7.338 0-12.705 2.167-16.103 6.5-3.398 4.332-5.097 11.594-5.097 21.786v40.693h-17.359V32.314h13.591l2.438 10.708h.886c2.463-3.89 5.959-6.893 10.49-9.01 4.53-2.117 9.553-3.175 15.069-3.175 19.6 0 29.399 9.97 29.399 29.91v53.248Zm79.039-23.264c0 7.976-2.905 14.106-8.716 18.389-5.811 4.235-14.134 6.352-24.968 6.352-10.883 0-19.624-1.65-26.223-4.948V95.531c9.603 4.432 18.541 6.647 26.814 6.647 10.687 0 16.03-3.225 16.03-9.674 0-2.068-.591-3.792-1.773-5.17-1.182-1.379-3.127-2.807-5.836-4.284-2.708-1.477-6.476-3.15-11.302-5.022-9.405-3.643-15.783-7.286-19.131-10.93-3.3-3.643-4.95-8.37-4.95-14.18 0-6.99 2.807-12.407 8.421-16.247 5.664-3.89 13.346-5.834 23.047-5.834 9.603 0 18.689 1.944 27.258 5.834l-5.614 13.072c-8.815-3.644-16.227-5.465-22.235-5.465-9.159 0-13.739 2.61-13.739 7.828 0 2.56 1.182 4.727 3.545 6.5 2.414 1.772 7.634 4.209 15.661 7.31 6.746 2.61 11.646 4.998 14.699 7.164 3.053 2.167 5.319 4.678 6.796 7.533 1.477 2.807 2.216 6.18 2.216 10.118Zm16.251 14.032c0-3.594.936-6.351 2.807-8.272 1.871-1.92 4.58-2.88 8.126-2.88 3.595 0 6.328 1.01 8.199 3.028 1.871 1.97 2.807 4.678 2.807 8.124 0 3.496-.96 6.278-2.881 8.345-1.871 2.019-4.58 3.028-8.125 3.028-3.546 0-6.255-1.009-8.126-3.028-1.871-2.018-2.807-4.8-2.807-8.345Z'
							stroke='url(#a)'
							strokeOpacity='.2'
							strokeWidth='2'
							mask='url(#b)'
						/>
						<defs>
							<linearGradient
								id='a'
								x1='25.216'
								y1='116.136'
								x2='743.028'
								y2='116.136'
								gradientUnits='userSpaceOnUse'>
								<stop offset='.245' stopColor='#FC8A6B' />
								<stop offset='.411' stopColor='#CF818D' />
								<stop offset='.589' stopColor='#9577B9' />
								<stop offset='1' stopColor='#3E66FB' />
							</linearGradient>
						</defs>
					</svg>
				</section>
				<article className='general container flow' id='general'>
					<h2>
						General Information<span className='accent'>.</span>
					</h2>
					<div>
						<p>
							In order to save a spot on the waiting list, you have to wait until commissions are
							open; then a Google form link will be available for you to add all your commission
							info, and I'll pick the ones I'll be adding to the waitlist.
						</p>
					</div>
					<div>
						<p>
							<span className='accent'>+</span> Payment via PayPal only.
						</p>
					</div>
					<ul>
						<li>
							<a
								href='https://trello.com/b/DSUJQavY/nyacchii-commissions'
								target='_blank'
								role='outlineButton'>
								Waiting List &nbsp;
								<FontAwesomeIcon icon={faClipboardList} />
							</a>
						</li>
					</ul>
					<div className='trelloNotifi flow'>
						<p>
							To enable notifications from the waiting list, you can{' '}
							<a
								className='accent'
								target='_blank'
								href='https://help.trello.com/article/799-watching-cards-lists-and-boards'>
								follow these easy instructions.
							</a>
						</p>
					</div>
				</article>
			</section>
			<section className='pricing' id='pricing'>
				<menu className='pricing__menu container flow'>
					<div className='menu-group'>
						<div className='line-border'></div>
						<ul>
							<li>
								<a
									onClick={() => {
										setEmotes(<Emotes pricing={pricing} />);
										handleEmotes();
									}}
									className={isActive === 'emotes' ? 'menuActive' : ''}>
									Emotes
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										setEmotes(<Illustration pricing={pricing} />);
										handleIllustrations();
									}}
									className={isActive === 'illustrations' ? 'menuActive' : ''}>
									Illustrations
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										setEmotes(<Vtuber pricing={pricing} />);
										handleVtubers();
									}}
									className={isActive === 'vtubers' ? 'menuActive' : ''}>
									Vtubers
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										setEmotes(<Terms pricing={pricing} />);
										handleTerms();
									}}
									className={isActive === 'terms' ? 'menuActive' : ''}>
									Terms
								</a>
							</li>
						</ul>
						<div className='line-border'></div>
					</div>
				</menu>
				{emotes}
				{isActive !== 'vtubers' && isActive !== 'terms' && (
					<summary className='pricing__terms container flow'>
						<div className='flow accent-gray'>
							<p>Extra information:</p>

							<p>*Price may change based on complexity.</p>
							<p>
								<span className='openSansBold' style={{ color: 'white' }}>
									{' '}
									Animated Emotes -{' '}
								</span>{' '}
								In the case of animation, if length is bigger than 60 frames total for Twitch
								emotes, the frame rate will be reduced as necessary. If the file size is bigger than
								256kb for Discord emotes, the frame rate will be lowered to 30fps.
							</p>
							<p>
								<span className='openSansBold' style={{ color: 'white' }}>
									{' '}
									Illustrations -{' '}
								</span>{' '}
								Every extra character drawn within the same image will be priced at 80% of the
								original price. For work with a tight deadline, price will increase a 30%.
							</p>
							<p>
								Commissions are for personal use only, in channels such as: Twitch, Picarto,
								Discord, any social network, etc. It is forbidden to use the commission for business
								purposes (such as merchandise) without my express permission.
							</p>
							<p>
								Please{' '}
								<Link href='/contact'>
									<a className='accent'>contact me</a>
								</Link>{' '}
								directly if you would like to use a commission for business purposes.
							</p>
						</div>
					</summary>
				)}
			</section>
		</>
	);
};

export default commission;
