import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = [
	"/",
	"/api/clerk-webhook",
	"/api/drive-activity/notification",
	"/api/payment/success",
];

const ignoredRoutes = [
	"/api/auth/callback/discord",
	"/api/auth/callback/notion",
	"/api/auth/callback/slack",
	"/api/flow",
	"/api/cron/wait",
];

const isProtectedRoute = createRouteMatcher([
	"/dashboard(.*)",
	"/billing(.*)",
	"/connections(.*)",
	"/settings(.*)",
	"/workflows(.*)",
]);

export default clerkMiddleware((auth, req) => {
	if (ignoredRoutes.some((route) => req.url.startsWith(route))) {
		return;
	}
	if (publicRoutes.some((route) => req.url.startsWith(route))) {
		return;
	}
	if (isProtectedRoute(req)) auth().protect();
});

export const config = {
	matcher: [
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		"/(api|trpc)(.*)",
	],
};

// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly
