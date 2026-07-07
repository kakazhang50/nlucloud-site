/** Reader list copy — MailerLite URL / form ID live in siteConfig.json. */
export const subscribe = {
  button: 'Subscribe for new issues',
  buttonShort: 'Subscribe',
  copy: {
    home: {
      kicker: 'Reader List',
      heading: 'Get each new issue by email',
      body: 'One cover essay per month. No daily noise — just a brief note when a new issue is published.',
    },
    essay: {
      heading: 'Get the next issue by email',
      body: 'Subscribe for a monthly note when NLUCloud publishes a new cover essay.',
    },
    page: {
      heading: 'Subscribe to NLUCloud',
      body: [
        'NLUCloud AI & Society Review publishes one long-form cover essay each month.',
        'Join the reader list for a brief email when a new issue goes live. No promotions, no daily digest — issue notifications only.',
      ],
    },
    annualReview: {
      heading: 'Join the release list',
      body: 'Get notified when the AI & Society Annual Review 2026 executive summary and full edition are available.',
    },
  },
} as const;
