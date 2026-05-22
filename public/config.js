window.APP_CONFIG = {
  // Genesys Cloud region/domain. For Dublin/EUW1 use mypurecloud.ie
  region: "mypurecloud.ie",

  // OAuth Client ID for Authorization Code + PKCE client in Genesys Cloud.
  // Do NOT put a client secret in this client-side project.
  clientId: "e6f47e59-cd46-4e5e-a60d-d88e2a7c0b9b",

  // Leave empty to use current URL origin/path, e.g. http://localhost:3000/ or https://your-app.vercel.app/
  // Add every redirect URI you use into the Genesys Cloud OAuth client configuration.
  redirectUri: "http://localhost:3000/",

  // Main media type for queue performance statistics.
  mediaType: "voice",

  // Auto refresh interval. Set to 0 to disable auto refresh.
  refreshSeconds: 60,

  // My Queues endpoint returns queues for the logged-in user. Keep false to match Genesys My Queues Activity more closely.
  // Set true if you only want queues where joined=true.
  onlyJoinedQueues: false,

  // Optional hard filters. Keep empty arrays for true "My Queues" behavior.
  queueIdAllowList: [],
  queueIdDenyList: [],

  // Daily queue table: current day start is calculated in this timezone.
  timeZone: "Europe/Belgrade",

  // Service level target fallback if Genesys does not return target in oServiceLevel.
  defaultServiceLevelTarget: 0.8,

  // Chart interval for service-level chart. Usually PT1H for hourly.
  chartGranularity: "PT1H"
};
