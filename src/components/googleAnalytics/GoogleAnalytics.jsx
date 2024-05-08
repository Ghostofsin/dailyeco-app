
import React from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() { 
	return (
		<>
			<Script
			strategy='lazyOnload'
			async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANAlYTICS_ID}`}></Script>
			<Script id="google-analytics-script" strategy='lazyOnload'>
				{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', '${process.env.GOOGLE_ANAlYTICS_ID}');`}
			</Script>
		</>
	)
}