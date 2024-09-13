import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';

Sentry.init({
	dsn: 'https://eeaa9606c9ecc0182e28e77e480e65de@o4507943974404096.ingest.us.sentry.io/4507943979122688',
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.browserProfilingIntegration(),
		Sentry.replayIntegration(),
	],
	// Tracing
	tracesSampleRate: 1.0, //  Capture 100% of the transactions
	// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
	tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
	// Set profilesSampleRate to 1.0 to profile every transaction.
	// Since profilesSampleRate is relative to tracesSampleRate,
	// the final profiling rate can be computed as tracesSampleRate * profilesSampleRate
	// For example, a tracesSampleRate of 0.5 and profilesSampleRate of 0.5 would
	// results in 25% of transactions being profiled (0.5*0.5=0.25)
	profilesSampleRate: 1.0,
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
