export const environments = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || '@generic-name',
  siteUrl: `https://${process.env.VERCEL_URL}`,
  backend_url: process.env.NEXT_PUBLIC_BACKEND_URL,
  analytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
};
