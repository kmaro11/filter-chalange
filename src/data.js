const dataArray = [{
  "values": [{
    "value": "ga:users",
    "name": "Users",
    "group": "User",
    "custom": false
  }, {"value": "ga:newUsers", "name": "New Users", "group": "User", "custom": false}, {
    "value": "ga:1dayUsers",
    "name": "1 Day Active Users",
    "group": "User",
    "custom": false
  }, {
    "value": "ga:7dayUsers",
    "name": "7 Day Active Users",
    "group": "User",
    "custom": false
  }, {
    "value": "ga:14dayUsers",
    "name": "14 Day Active Users",
    "group": "User",
    "custom": false
  }, {
    "value": "ga:30dayUsers",
    "name": "30 Day Active Users",
    "group": "User",
    "custom": false
  }, {
    "value": "ga:sessionsPerUser",
    "name": "Number of Sessions per User",
    "group": "User",
    "custom": false
  }, {"value": "ga:percentNewSessions", "name": "Percent new sessions", "group": "User", "custom": false}],
  "group": "User"
}, {
  "values": [{
    "value": "ga:sessions",
    "name": "Sessions",
    "group": "Session",
    "custom": false
  }, {"value": "ga:bounces", "name": "Bounces", "group": "Session", "custom": false}, {
    "value": "ga:bounceRate",
    "name": "Bounce rate",
    "group": "Session",
    "custom": false
  }, {
    "value": "ga:sessionDuration",
    "name": "Sessions duration",
    "group": "Session",
    "custom": false
  }, {
    "value": "ga:avgSessionDuration",
    "name": "Avg. Session Duration",
    "group": "Session",
    "custom": false
  }, {
    "value": "ga:uniqueDimensionCombinations",
    "name": "Unique dimension combinations",
    "group": "Session",
    "custom": false
  }, {"value": "ga:hits", "name": "Hits", "group": "Session", "custom": false}], "group": "Session"
}, {
  "values": [{
    "value": "ga:organicSearches",
    "name": "Organic searches",
    "group": "Traffic sources",
    "custom": false
  }], "group": "Traffic sources"
}, {
  "values": [{
    "value": "ga:impressions",
    "name": "Impressions",
    "group": "Google Ads",
    "custom": false
  }, {"value": "ga:adClicks", "name": "Ad clicks", "group": "Google Ads", "custom": false}, {
    "value": "ga:adCost",
    "name": "Ad cost",
    "group": "Google Ads",
    "custom": false
  }, {"value": "ga:CPM", "name": "CPM", "group": "Google Ads", "custom": false}, {
    "value": "ga:CPC",
    "name": "CPC",
    "group": "Google Ads",
    "custom": false
  }, {"value": "ga:CTR", "name": "CTR", "group": "Google Ads", "custom": false}, {
    "value": "ga:costPerTransaction",
    "name": "Cost per transaction",
    "group": "Google Ads",
    "custom": false
  }, {
    "value": "ga:costPerGoalConversion",
    "name": "Cost per goal conversion",
    "group": "Google Ads",
    "custom": false
  }, {
    "value": "ga:costPerConversion",
    "name": "Cost per conversion",
    "group": "Google Ads",
    "custom": false
  }, {"value": "ga:RPC", "name": "RPC", "group": "Google Ads", "custom": false}, {
    "value": "ga:ROAS",
    "name": "ROAS",
    "group": "Google Ads",
    "custom": false
  }, {
    "value": "ga:ROAS;ga:adCost",
    "name": "ROI",
    "group": "Google Ads",
    "custom": false
  }, {
    "value": "ga:transactionRevenue;ga:goalValueAll;ga:adCost",
    "name": "Ad spend",
    "group": "Google Ads",
    "custom": false
  }], "group": "Google Ads"
}, {
  "values": [{
    "value": "ga:goalStartsAll",
    "name": "Goal starts all",
    "group": "Goal conversions",
    "custom": false
  }, {
    "value": "ga:goalCompletionsAll",
    "name": "Goal completions all",
    "group": "Goal conversions",
    "custom": false
  }, {
    "value": "ga:goalValueAll",
    "name": "Goal value all",
    "group": "Goal conversions",
    "custom": false
  }, {
    "value": "ga:goalValuePerSession",
    "name": "Goal value per session",
    "group": "Goal conversions",
    "custom": false
  }, {
    "value": "ga:goalConversionRateAll",
    "name": "Goal conversion rate all",
    "group": "Goal conversions",
    "custom": false
  }, {
    "value": "ga:goalAbandonsAll",
    "name": "Goal abandons all",
    "group": "Goal conversions",
    "custom": false
  }, {
    "value": "ga:goalAbandonRateAll",
    "name": "Goal abandon rate all",
    "group": "Goal conversions",
    "custom": false
  }, {
    "value": "ga:goal1Starts",
    "name": "User Registration (Goal 1 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal1Completions",
    "name": "User Registration (Goal 1 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal1Value",
    "name": "User Registration (Goal 1 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal1ConversionRate",
    "name": "User Registration (Goal 1 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal1Abandons",
    "name": "User Registration (Goal 1 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal1AbandonRate",
    "name": "User Registration (Goal 1 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal2Starts",
    "name": "User Login (Goal 2 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal2Completions",
    "name": "User Login (Goal 2 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal2Value",
    "name": "User Login (Goal 2 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal2ConversionRate",
    "name": "User Login (Goal 2 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal2Abandons",
    "name": "User Login (Goal 2 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal2AbandonRate",
    "name": "User Login (Goal 2 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal3Starts",
    "name": "Credit Card Form Submition (Goal 3 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal3Completions",
    "name": "Credit Card Form Submition (Goal 3 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal3Value",
    "name": "Credit Card Form Submition (Goal 3 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal3ConversionRate",
    "name": "Credit Card Form Submition (Goal 3 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal3Abandons",
    "name": "Credit Card Form Submition (Goal 3 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal3AbandonRate",
    "name": "Credit Card Form Submition (Goal 3 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal4Starts",
    "name": "Click On Payment Submit Button (Goal 4 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal4Completions",
    "name": "Click On Payment Submit Button (Goal 4 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal4Value",
    "name": "Click On Payment Submit Button (Goal 4 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal4ConversionRate",
    "name": "Click On Payment Submit Button (Goal 4 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal4Abandons",
    "name": "Click On Payment Submit Button (Goal 4 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal4AbandonRate",
    "name": "Click On Payment Submit Button (Goal 4 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal5Starts",
    "name": "Interaction with CC inputfields (Goal 5 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal5Completions",
    "name": "Interaction with CC inputfields (Goal 5 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal5Value",
    "name": "Interaction with CC inputfields (Goal 5 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal5ConversionRate",
    "name": "Interaction with CC inputfields (Goal 5 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal5Abandons",
    "name": "Interaction with CC inputfields (Goal 5 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal5AbandonRate",
    "name": "Interaction with CC inputfields (Goal 5 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal6Starts",
    "name": "First Customer Payment (Goal 6 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal6Completions",
    "name": "First Customer Payment (Goal 6 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal6Value",
    "name": "First Customer Payment (Goal 6 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal6ConversionRate",
    "name": "First Customer Payment (Goal 6 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal6Abandons",
    "name": "First Customer Payment (Goal 6 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal6AbandonRate",
    "name": "First Customer Payment (Goal 6 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal7Starts",
    "name": "Req Free Trial Form Submition (Goal 7 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal7Completions",
    "name": "Req Free Trial Form Submition (Goal 7 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal7Value",
    "name": "Req Free Trial Form Submition (Goal 7 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal7ConversionRate",
    "name": "Req Free Trial Form Submition (Goal 7 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal7Abandons",
    "name": "Req Free Trial Form Submition (Goal 7 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal7AbandonRate",
    "name": "Req Free Trial Form Submition (Goal 7 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal8Starts",
    "name": "Requests a trial (inbound scheme) (Goal 8 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal8Completions",
    "name": "Requests a trial (inbound scheme) (Goal 8 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal8Value",
    "name": "Requests a trial (inbound scheme) (Goal 8 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal8ConversionRate",
    "name": "Requests a trial (inbound scheme) (Goal 8 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal8Abandons",
    "name": "Requests a trial (inbound scheme) (Goal 8 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal8AbandonRate",
    "name": "Requests a trial (inbound scheme) (Goal 8 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal9Starts",
    "name": "Requests trial (inbound scheme - social media audit) (Goal 9 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal9Completions",
    "name": "Requests trial (inbound scheme - social media audit) (Goal 9 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal9Value",
    "name": "Requests trial (inbound scheme - social media audit) (Goal 9 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal9ConversionRate",
    "name": "Requests trial (inbound scheme - social media audit) (Goal 9 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal9Abandons",
    "name": "Requests trial (inbound scheme - social media audit) (Goal 9 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal9AbandonRate",
    "name": "Requests trial (inbound scheme - social media audit) (Goal 9 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal10Starts",
    "name": "Request Free Trial: Step1 (Goal 10 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal10Completions",
    "name": "Request Free Trial: Step1 (Goal 10 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal10Value",
    "name": "Request Free Trial: Step1 (Goal 10 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal10ConversionRate",
    "name": "Request Free Trial: Step1 (Goal 10 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal10Abandons",
    "name": "Request Free Trial: Step1 (Goal 10 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal10AbandonRate",
    "name": "Request Free Trial: Step1 (Goal 10 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal11Starts",
    "name": "Request Free Trial: Thank You Page (Goal 11 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal11Completions",
    "name": "Request Free Trial: Thank You Page (Goal 11 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal11Value",
    "name": "Request Free Trial: Thank You Page (Goal 11 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal11ConversionRate",
    "name": "Request Free Trial: Thank You Page (Goal 11 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal11Abandons",
    "name": "Request Free Trial: Thank You Page (Goal 11 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal11AbandonRate",
    "name": "Request Free Trial: Thank You Page (Goal 11 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal12Starts",
    "name": "Start free trial: Step1 (Goal 12 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal12Completions",
    "name": "Start free trial: Step1 (Goal 12 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal12Value",
    "name": "Start free trial: Step1 (Goal 12 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal12ConversionRate",
    "name": "Start free trial: Step1 (Goal 12 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal12Abandons",
    "name": "Start free trial: Step1 (Goal 12 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal12AbandonRate",
    "name": "Start free trial: Step1 (Goal 12 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal13Starts",
    "name": "Start Free Trial Step2 (Goal 13 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal13Completions",
    "name": "Start Free Trial Step2 (Goal 13 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal13Value",
    "name": "Start Free Trial Step2 (Goal 13 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal13ConversionRate",
    "name": "Start Free Trial Step2 (Goal 13 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal13Abandons",
    "name": "Start Free Trial Step2 (Goal 13 abandons)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal13AbandonRate",
    "name": "Start Free Trial Step2 (Goal 13 abandon rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal14Starts",
    "name": "New Trial (Goal 14 starts)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal14Completions",
    "name": "New Trial (Goal 14 completions)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal14Value",
    "name": "New Trial (Goal 14 value)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal14ConversionRate",
    "name": "New Trial (Goal 14 conversion rate)",
    "group": "Goal conversions"
  }, {
    "value": "ga:goal14Abandons",
    "name": "New Trial (Goal 14 abandons)",
    "group": "Goal conversions"
  }, {"value": "ga:goal14AbandonRate", "name": "New Trial (Goal 14 abandon rate)", "group": "Goal conversions"}],
  "group": "Goal conversions"
}, {
  "values": [{
    "value": "ga:pageValue",
    "name": "Page value",
    "group": "Page tracking",
    "custom": false
  }, {
    "value": "ga:entrances",
    "name": "Entrances",
    "group": "Page tracking",
    "custom": false
  }, {
    "value": "ga:entranceRate",
    "name": "Entrance rate",
    "group": "Page tracking",
    "custom": false
  }, {
    "value": "ga:pageviews",
    "name": "Page views",
    "group": "Page tracking",
    "custom": false
  }, {
    "value": "ga:pageviewsPerSession",
    "name": "Page views per session",
    "group": "Page tracking",
    "custom": false
  }, {
    "value": "ga:uniquePageviews",
    "name": "Unique page views",
    "group": "Page tracking",
    "custom": false
  }, {
    "value": "ga:timeOnPage",
    "name": "Time on page",
    "group": "Page tracking",
    "custom": false
  }, {
    "value": "ga:avgTimeOnPage",
    "name": "Avg. time on page",
    "group": "Page tracking",
    "custom": false
  }, {"value": "ga:exits", "name": "Exits", "group": "Page tracking", "custom": false}, {
    "value": "ga:exitRate",
    "name": "Exit rate",
    "group": "Page tracking",
    "custom": false
  }], "group": "Page tracking"
}, {
  "values": [{
    "value": "ga:searchResultViews",
    "name": "Search result views",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:searchUniques",
    "name": "Search uniques",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:avgSearchResultViews",
    "name": "Avg. search result views",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:searchSessions",
    "name": "Search sessions",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:percentSessionsWithSearch",
    "name": "Percent sessions with search",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:searchDepth",
    "name": "Search depth",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:avgSearchDepth",
    "name": "Avg. search depth",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:searchRefinements",
    "name": "Search refinements",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:percentSearchRefinements",
    "name": "Percent search refinements",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:searchDuration",
    "name": "Search duration",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:avgSearchDuration",
    "name": "Avg. search duration",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:searchExits",
    "name": "Search exits",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:searchExitRate",
    "name": "Search exit rate",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:searchGoalConversionRateAll",
    "name": "Search goal conversion rate all",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:goalValueAllPerSearch",
    "name": "Goal value all per search",
    "group": "Internal search",
    "custom": false
  }, {
    "value": "ga:searchGoal1ConversionRate",
    "name": "User Registration (Site search goal 1 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal2ConversionRate",
    "name": "User Login (Site search goal 2 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal3ConversionRate",
    "name": "Credit Card Form Submition (Site search goal 3 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal4ConversionRate",
    "name": "Click On Payment Submit Button (Site search goal 4 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal5ConversionRate",
    "name": "Interaction with CC inputfields (Site search goal 5 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal6ConversionRate",
    "name": "First Customer Payment (Site search goal 6 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal7ConversionRate",
    "name": "Req Free Trial Form Submition (Site search goal 7 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal8ConversionRate",
    "name": "Requests a trial (inbound scheme) (Site search goal 8 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal9ConversionRate",
    "name": "Requests trial (inbound scheme - social media audit) (Site search goal 9 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal10ConversionRate",
    "name": "Request Free Trial: Step1 (Site search goal 10 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal11ConversionRate",
    "name": "Request Free Trial: Thank You Page (Site search goal 11 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal12ConversionRate",
    "name": "Start free trial: Step1 (Site search goal 12 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal13ConversionRate",
    "name": "Start Free Trial Step2 (Site search goal 13 conversion rate)",
    "group": "Internal search"
  }, {
    "value": "ga:searchGoal14ConversionRate",
    "name": "New Trial (Site search goal 14 conversion rate)",
    "group": "Internal search"
  }], "group": "Internal search"
}, {
  "values": [{
    "value": "ga:pageLoadTime",
    "name": "Page load time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:pageLoadSample",
    "name": "Page load sample",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:avgPageLoadTime",
    "name": "Avg. page load time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:domainLookupTime",
    "name": "Domain lookup time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:avgDomainLookupTime",
    "name": "Avg. domain lookup time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:pageDownloadTime",
    "name": "Page download time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:avgPageDownloadTime",
    "name": "Avg. page download time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:redirectionTime",
    "name": "Redirection time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:avgRedirectionTime",
    "name": "Avg. redirection time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:serverConnectionTime",
    "name": "Server connection time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:avgServerConnectionTime",
    "name": "Avg. server connection time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:serverResponseTime",
    "name": "Server response time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:avgServerResponseTime",
    "name": "Avg. server response time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:speedMetricsSample",
    "name": "Speed metrics sample",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:domInteractiveTime",
    "name": "DOM interactive time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:avgDomInteractiveTime",
    "name": "Avg. dom interactive time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:domContentLoadedTime",
    "name": "DOM content loaded time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:avgDomContentLoadedTime",
    "name": "Avg. dom content loaded time",
    "group": "Site speed",
    "custom": false
  }, {
    "value": "ga:domLatencyMetricsSample",
    "name": "DOM latency metrics sample",
    "group": "Site speed",
    "custom": false
  }], "group": "Site speed"
}, {
  "values": [{
    "value": "ga:screenviews",
    "name": "Screen views",
    "group": "App tracking",
    "custom": false
  }, {
    "value": "ga:uniqueScreenviews",
    "name": "Unique screen views",
    "group": "App tracking",
    "custom": false
  }, {
    "value": "ga:screenviewsPerSession",
    "name": "Screen views per session",
    "group": "App tracking",
    "custom": false
  }, {
    "value": "ga:timeOnScreen",
    "name": "Time on screen",
    "group": "App tracking",
    "custom": false
  }, {
    "value": "ga:avgScreenviewDuration",
    "name": "Avg. screen view duration",
    "group": "App tracking",
    "custom": false
  }], "group": "App tracking"
}, {
  "values": [{
    "value": "ga:totalEvents",
    "name": "Total events",
    "group": "Event tracking",
    "custom": false
  }, {
    "value": "ga:uniqueEvents",
    "name": "Unique events",
    "group": "Event tracking",
    "custom": false
  }, {
    "value": "ga:eventValue",
    "name": "Event value",
    "group": "Event tracking",
    "custom": false
  }, {
    "value": "ga:avgEventValue",
    "name": "Avg. event value",
    "group": "Event tracking",
    "custom": false
  }, {
    "value": "ga:sessionsWithEvent",
    "name": "Sessions with event",
    "group": "Event tracking",
    "custom": false
  }, {
    "value": "ga:eventsPerSessionWithEvent",
    "name": "Events per session with event",
    "group": "Event tracking",
    "custom": false
  }], "group": "Event tracking"
}, {
  "values": [{
    "value": "ga:transactions",
    "name": "Transactions",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:transactionsPerSession",
    "name": "Transactions per session",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:transactionRevenue",
    "name": "Transaction revenue",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:revenuePerTransaction",
    "name": "Avg. Order Value",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:transactionRevenuePerSession",
    "name": "Transaction revenue per session",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:transactionShipping",
    "name": "Transaction shipping",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:transactionTax",
    "name": "Transaction tax",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:totalValue",
    "name": "Total value",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:itemQuantity",
    "name": "Item quantity",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:uniquePurchases",
    "name": "Unique purchases",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:revenuePerItem",
    "name": "Revenue per item",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:itemRevenue",
    "name": "Item revenue",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:itemsPerPurchase",
    "name": "Items per purchase",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:localTransactionRevenue",
    "name": "Local transaction revenue",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:localTransactionShipping",
    "name": "Local transaction shipping",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:localTransactionTax",
    "name": "Local transaction tax",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:localItemRevenue",
    "name": "Local item revenue",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:buyToDetailRate",
    "name": "Buy to detail rate",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:cartToDetailRate",
    "name": "Cart to detail rate",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:internalPromotionCTR",
    "name": "Internal promotion CTR",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:internalPromotionClicks",
    "name": "Internal promotion clicks",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:internalPromotionViews",
    "name": "Internal promotion views",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:localProductRefundAmount",
    "name": "Local product refund amount",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:localRefundAmount",
    "name": "Local refund amount",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productAddsToCart",
    "name": "Product adds to cart",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productCheckouts",
    "name": "Product checkouts",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productDetailViews",
    "name": "Product detail views",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productListCTR",
    "name": "Product list CTR",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productListClicks",
    "name": "Product list clicks",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productListViews",
    "name": "Product list views",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productRefundAmount",
    "name": "Product refund amount",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productRefunds",
    "name": "Product refunds",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productRemovesFromCart",
    "name": "Product removes from cart",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:productRevenuePerPurchase",
    "name": "Product revenue per purchase",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:quantityAddedToCart",
    "name": "Quantity added to cart",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:quantityCheckedOut",
    "name": "Quantity checked out",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:quantityRefunded",
    "name": "Quantity refunded",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:quantityRemovedFromCart",
    "name": "Quantity removed from cart",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:refundAmount",
    "name": "Refund amount",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:revenuePerUser",
    "name": "Revenue per user",
    "group": "Ecommerce",
    "custom": false
  }, {
    "value": "ga:totalRefunds",
    "name": "Total refunds",
    "group": "Ecommerce",
    "custom": false
  }, {"value": "ga:transactionsPerUser", "name": "Transactions per user", "group": "Ecommerce", "custom": false}],
  "group": "Ecommerce"
}, {
  "values": [{
    "value": "ga:socialInteractions",
    "name": "Social interactions",
    "group": "Social interactions",
    "custom": false
  }, {
    "value": "ga:uniqueSocialInteractions",
    "name": "Unique social interactions",
    "group": "Social interactions",
    "custom": false
  }, {
    "value": "ga:socialInteractionsPerSession",
    "name": "Social interactions per session",
    "group": "Social interactions",
    "custom": false
  }], "group": "Social interactions"
}, {
  "values": [{
    "value": "ga:userTimingValue",
    "name": "User timing value",
    "group": "User timings",
    "custom": false
  }, {
    "value": "ga:userTimingSample",
    "name": "User timing sample",
    "group": "User timings",
    "custom": false
  }, {"value": "ga:avgUserTimingValue", "name": "Avg. user timing value", "group": "User timings", "custom": false}],
  "group": "User timings"
}, {
  "values": [{
    "value": "ga:exceptions",
    "name": "Exceptions",
    "group": "Exceptions",
    "custom": false
  }, {
    "value": "ga:exceptionsPerScreenview",
    "name": "Exceptions per screen view",
    "group": "Exceptions",
    "custom": false
  }, {
    "value": "ga:fatalExceptions",
    "name": "Fatal exceptions",
    "group": "Exceptions",
    "custom": false
  }, {
    "value": "ga:fatalExceptionsPerScreenview",
    "name": "Fatal exceptions per screen view",
    "group": "Exceptions",
    "custom": false
  }], "group": "Exceptions"
}, {
  "values": [{
    "value": "ga:dcmFloodlightQuantity",
    "name": "DCM floodlight quantity",
    "group": "DoubleClick Campaign Manager",
    "custom": false
  }, {
    "value": "ga:dcmFloodlightRevenue",
    "name": "DCM floodlight revenue",
    "group": "DoubleClick Campaign Manager",
    "custom": false
  }, {
    "value": "ga:dcmCPC",
    "name": "DCM CPC",
    "group": "DoubleClick Campaign Manager",
    "custom": false
  }, {
    "value": "ga:dcmCTR",
    "name": "DCM CTR",
    "group": "DoubleClick Campaign Manager",
    "custom": false
  }, {
    "value": "ga:dcmClicks",
    "name": "DCM clicks",
    "group": "DoubleClick Campaign Manager",
    "custom": false
  }, {
    "value": "ga:dcmCost",
    "name": "DCM cost",
    "group": "DoubleClick Campaign Manager",
    "custom": false
  }, {
    "value": "ga:dcmImpressions",
    "name": "DCM impressions",
    "group": "DoubleClick Campaign Manager",
    "custom": false
  }, {
    "value": "ga:dcmROAS",
    "name": "DCM ROAS",
    "group": "DoubleClick Campaign Manager",
    "custom": false
  }, {"value": "ga:dcmRPC", "name": "DCM rpc", "group": "DoubleClick Campaign Manager", "custom": false}],
  "group": "DoubleClick Campaign Manager"
}, {
  "values": [{
    "value": "ga:adsenseRevenue",
    "name": "AdSense revenue",
    "group": "AdSense",
    "custom": false
  }, {
    "value": "ga:adsenseAdUnitsViewed",
    "name": "AdSense ad units viewed",
    "group": "AdSense",
    "custom": false
  }, {
    "value": "ga:adsenseAdsViewed",
    "name": "AdSense ads viewed",
    "group": "AdSense",
    "custom": false
  }, {
    "value": "ga:adsenseAdsClicks",
    "name": "AdSense ads clicks",
    "group": "AdSense",
    "custom": false
  }, {
    "value": "ga:adsensePageImpressions",
    "name": "AdSense page impressions",
    "group": "AdSense",
    "custom": false
  }, {"value": "ga:adsenseCTR", "name": "AdSense CTR", "group": "AdSense", "custom": false}, {
    "value": "ga:adsenseECPM",
    "name": "AdSense ECPM",
    "group": "AdSense",
    "custom": false
  }, {
    "value": "ga:adsenseExits",
    "name": "AdSense exits",
    "group": "AdSense",
    "custom": false
  }, {
    "value": "ga:adsenseViewableImpressionPercent",
    "name": "AdSense viewable impression percent",
    "group": "AdSense",
    "custom": false
  }, {"value": "ga:adsenseCoverage", "name": "Adsensecoverage", "group": "AdSense", "custom": false}],
  "group": "AdSense"
}, {
  "values": [{
    "value": "ga:adxImpressions",
    "name": "ADX impressions",
    "group": "Ad exchange",
    "custom": false
  }, {
    "value": "ga:adxCoverage",
    "name": "ADX coverage",
    "group": "Ad exchange",
    "custom": false
  }, {
    "value": "ga:adxMonetizedPageviews",
    "name": "ADX monetized page views",
    "group": "Ad exchange",
    "custom": false
  }, {
    "value": "ga:adxImpressionsPerSession",
    "name": "ADX impressions per session",
    "group": "Ad exchange",
    "custom": false
  }, {
    "value": "ga:adxViewableImpressionsPercent",
    "name": "ADX viewable impressions percent",
    "group": "Ad exchange",
    "custom": false
  }, {"value": "ga:adxClicks", "name": "ADX clicks", "group": "Ad exchange", "custom": false}, {
    "value": "ga:adxCTR",
    "name": "ADX CTR",
    "group": "Ad exchange",
    "custom": false
  }, {
    "value": "ga:adxRevenue",
    "name": "ADX revenue",
    "group": "Ad exchange",
    "custom": false
  }, {
    "value": "ga:adxRevenuePer1000Sessions",
    "name": "ADX revenue per 1000 sessions",
    "group": "Ad exchange",
    "custom": false
  }, {"value": "ga:adxECPM", "name": "ADX ECPM", "group": "Ad exchange", "custom": false}], "group": "Ad exchange"
}, {
  "values": [{
    "value": "ga:dfpImpressions",
    "name": "DFP impressions",
    "group": "DoubleClick for Publishers",
    "custom": false
  }, {
    "value": "ga:dfpCoverage",
    "name": "DFP coverage",
    "group": "DoubleClick for Publishers",
    "custom": false
  }, {
    "value": "ga:dfpMonetizedPageviews",
    "name": "DFP monetized page views",
    "group": "DoubleClick for Publishers",
    "custom": false
  }, {
    "value": "ga:dfpImpressionsPerSession",
    "name": "DFP impressions per session",
    "group": "DoubleClick for Publishers",
    "custom": false
  }, {
    "value": "ga:dfpViewableImpressionsPercent",
    "name": "DFP viewable impressions percent",
    "group": "DoubleClick for Publishers",
    "custom": false
  }, {
    "value": "ga:dfpClicks",
    "name": "DFP clicks",
    "group": "DoubleClick for Publishers",
    "custom": false
  }, {
    "value": "ga:dfpCTR",
    "name": "DFP CTR",
    "group": "DoubleClick for Publishers",
    "custom": false
  }, {
    "value": "ga:dfpRevenue",
    "name": "DFP revenue",
    "group": "DoubleClick for Publishers",
    "custom": false
  }, {
    "value": "ga:dfpRevenuePer1000Sessions",
    "name": "DFP revenueper1000sessions",
    "group": "DoubleClick for Publishers",
    "custom": false
  }, {"value": "ga:dfpECPM", "name": "DFP ECPM", "group": "DoubleClick for Publishers", "custom": false}],
  "group": "DoubleClick for Publishers"
}, {
  "values": [{
    "value": "ga:backfillImpressions",
    "name": "Backfill impressions",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }, {
    "value": "ga:backfillCoverage",
    "name": "Backfill coverage",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }, {
    "value": "ga:backfillMonetizedPageviews",
    "name": "Backfill monetized page views",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }, {
    "value": "ga:backfillImpressionsPerSession",
    "name": "Backfill impressions per session",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }, {
    "value": "ga:backfillViewableImpressionsPercent",
    "name": "Backfill viewable impressions percent",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }, {
    "value": "ga:backfillClicks",
    "name": "Backfill clicks",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }, {
    "value": "ga:backfillCTR",
    "name": "Backfill CTR",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }, {
    "value": "ga:backfillRevenue",
    "name": "Backfill revenue",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }, {
    "value": "ga:backfillRevenuePer1000Sessions",
    "name": "Backfill revenue per 1000 sessions",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }, {
    "value": "ga:backfillECPM",
    "name": "Backfill ECPM",
    "group": "DoubleClick for Publishers Backfill",
    "custom": false
  }], "group": "DoubleClick for Publishers Backfill"
}, {
  "values": [{
    "value": "ga:dbmCPA",
    "name": "DBM CPA",
    "group": "DoubleClick Bid Manager",
    "custom": false
  }, {
    "value": "ga:dbmCPC",
    "name": "DBM CPC",
    "group": "DoubleClick Bid Manager",
    "custom": false
  }, {
    "value": "ga:dbmCPM",
    "name": "DBM CPM",
    "group": "DoubleClick Bid Manager",
    "custom": false
  }, {
    "value": "ga:dbmCTR",
    "name": "DBM CTR",
    "group": "DoubleClick Bid Manager",
    "custom": false
  }, {
    "value": "ga:dbmClicks",
    "name": "DBM clicks",
    "group": "DoubleClick Bid Manager",
    "custom": false
  }, {
    "value": "ga:dbmConversions",
    "name": "DBM conversions",
    "group": "DoubleClick Bid Manager",
    "custom": false
  }, {
    "value": "ga:dbmCost",
    "name": "DBM cost",
    "group": "DoubleClick Bid Manager",
    "custom": false
  }, {
    "value": "ga:dbmImpressions",
    "name": "DBM impressions",
    "group": "DoubleClick Bid Manager",
    "custom": false
  }, {"value": "ga:dbmROAS", "name": "DBM ROAS", "group": "DoubleClick Bid Manager", "custom": false}],
  "group": "DoubleClick Bid Manager"
}, {
  "values": [{
    "value": "ga:cohortActiveUsers",
    "name": "Cohort active users",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortAppviewsPerUser",
    "name": "Cohort app views per user",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortAppviewsPerUserWithLifetimeCriteria",
    "name": "Cohort app views per user with lifetime criteria",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortGoalCompletionsPerUser",
    "name": "Cohort goal completions per user",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortGoalCompletionsPerUserWithLifetimeCriteria",
    "name": "Cohort goal completions per user with lifetime criteria",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortPageviewsPerUser",
    "name": "Cohort page views peruser",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortPageviewsPerUserWithLifetimeCriteria",
    "name": "Cohort page views per user with lifetime criteria",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortRetentionRate",
    "name": "Cohort retention rate",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortRevenuePerUser",
    "name": "Cohort revenue per user",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortRevenuePerUserWithLifetimeCriteria",
    "name": "Cohort revenue per user with lifetime criteria",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortSessionDurationPerUser",
    "name": "Cohort session duration per user",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortSessionDurationPerUserWithLifetimeCriteria",
    "name": "Cohort session duration per user with lifetime criteria",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortSessionsPerUser",
    "name": "Cohort sessions per user",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortSessionsPerUserWithLifetimeCriteria",
    "name": "Cohort sessions per user with lifetime criteria",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortTotalUsers",
    "name": "Cohort total users",
    "group": "Lifetime value and cohorts",
    "custom": false
  }, {
    "value": "ga:cohortTotalUsersWithLifetimeCriteria",
    "name": "Cohort total users with lifetime criteria",
    "group": "Lifetime value and cohorts",
    "custom": false
  }], "group": "Lifetime value and cohorts"
}, {
  "values": [{
    "value": "ga:dsCPC",
    "name": "DS CPC",
    "group": "DoubleClick Search",
    "custom": false
  }, {"value": "ga:dsCTR", "name": "DS CTR", "group": "DoubleClick Search", "custom": false}, {
    "value": "ga:dsClicks",
    "name": "DS clicks",
    "group": "DoubleClick Search",
    "custom": false
  }, {
    "value": "ga:dsCost",
    "name": "DS cost",
    "group": "DoubleClick Search",
    "custom": false
  }, {
    "value": "ga:dsImpressions",
    "name": "DS impressions",
    "group": "DoubleClick Search",
    "custom": false
  }, {
    "value": "ga:dsProfit",
    "name": "DS profit",
    "group": "DoubleClick Search",
    "custom": false
  }, {
    "value": "ga:dsReturnOnAdSpend",
    "name": "DS return on ad spend",
    "group": "DoubleClick Search",
    "custom": false
  }, {"value": "ga:dsRevenuePerClick", "name": "DS revenue per click", "group": "DoubleClick Search", "custom": false}],
  "group": "DoubleClick Search"
}, {
  "values": [{"value": "32323", "name": "32323", "group": "Custom metrics", "custom": true}, {
    "value": "123",
    "name": "123",
    "group": "Custom metrics",
    "custom": true
  }, {"value": "sdfdsfdsfdsf", "name": "sdfdsfdsfdsf", "group": "Custom metrics", "custom": true}],
  "group": "Custom metrics"
}, {
  "values": [{
    "value": "ga:contentGroupUniqueViews1",
    "name": "Unique views 1",
    "group": "Content grouping",
    "custom": false
  }, {
    "value": "ga:contentGroupUniqueViews2",
    "name": "Unique views 2",
    "group": "Content grouping",
    "custom": false
  }, {
    "value": "ga:contentGroupUniqueViews3",
    "name": "Unique views 3",
    "group": "Content grouping",
    "custom": false
  }, {
    "value": "ga:contentGroupUniqueViews4",
    "name": "Unique views 4",
    "group": "Content grouping",
    "custom": false
  }, {"value": "ga:contentGroupUniqueViews5", "name": "Unique views 5", "group": "Content grouping", "custom": false}],
  "group": "Content grouping"
}, {
  "values": [{
    "value": "ga:metric1",
    "name": "Test custom metric (Custom metric 1)",
    "group": "Custom variables or columns"
  }], "group": "Custom variables or columns"
}]

export default dataArray