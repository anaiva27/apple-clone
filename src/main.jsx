import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import * as Sentry from "@sentry/react";

Sentry.init({
	dsn: "https://e52fc96d80af0739fc763d2579da0680@o4508685332643840.ingest.us.sentry.io/4508685357023232",
	integrations: [
		Sentry.browserTracingIntegration(),
		// Sentry.metrics.metricsAggregatorIntegration(),
		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect: React.useEffect,
		}),
		Sentry.replayIntegration(),
	],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
