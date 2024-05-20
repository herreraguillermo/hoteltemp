import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.umd.js';

CookieConsent.run({

  categories: {
    necessary: {
      enabled: true,  // this category is enabled by default
      readOnly: true  // this category cannot be disabled
    },
    analytics: {},
    advertising: {}
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description: 'We use cookies on our website to provide you with a better browsing experience.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Preferences'
        },
        preferencesModal: {
          title: 'Manage cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Accept current selection',
          closeIconLabel: 'Close modal',
          sections: [
            {
              title: 'Why we use cookies',
              description: 'Overall, the use of cookies allows us to provide a more personalized and efficient experience for our users, and they are an important tool for us to continually improve our website and services.'
            },
            {
              title: 'Strictly necessary cookies',
              description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

              //this field will generate a toggle linked to the 'necessary' category
              linkedCategory: 'necessary'
            },
            {
              title: 'Website analytics',
              description: 'These cookies are utilized to gather anonymized data about your usage of our website, providing insights into how it is accessed and navigated, without revealing any personally identifiable information.',
              linkedCategory: 'analytics'
            },
            {
              title: 'Advertising precision',
              description: 'These cookies are designed to gather user data specifically pertaining to advertising and personalized advertising on the Google platform. They track and analyze information such as browsing behavior, preferences, and interactions with advertisements to deliver more targeted and relevant ads.',
              linkedCategory: 'advertising'
            },
            {
              title: 'More information',
              description: 'For any questions or concerns regarding our use of cookies and your privacy options, please consult our <a href="/privacy.html">privacy policy</a> or feel free to <a href="/contact.html">contact us</a>.'
            }
          ]
        }
      }
    }
  }
});