// check legal vs short name, add logoUrl
// 39.342538418971984, -84.33469236499846

export const businessInfo = {
  legalName: "Mad Potter",
  shortName: "Mad Potter",
  url: "https://madpottermason.com",
  telephone: "+1-513-770-5585",
  email: "madpottermason@yahoo.com",
  displayTelephone: "(513) 770-5585",

  address: {
    streetAddress: "6680 Tri Way Drive",
    addressLocality: "Mason",
    addressRegion: "OH",
    postalCode: "45040",
    addressCountry: "US",
    displayAddress: "6680 Tri Way Dr, Mason, OH 45040",
    srAddress: "6680 Tri Way Drive, Mason, Ohio 45040",
  },

  geo: {
    latitude: "39.34254",
    longitude: "-84.33469",
    googlePlaceId: "ChIJPbeUr11XQIgRST__1RTQno4",
  },

  hours: [
    {
      days: ["Sunday"],
      opens: "13:00",
      closes: "18:00",
      displayDays: "Sun",
      srDays: "Sunday",
      displayHours: "1 – 6 PM",
      srHours: "1 to 6 PM",
    },

    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "21:00",
      displayDays: "Mon – Fri",
      srDays: "Monday through Friday",
      displayHours: "11 AM – 9 PM",
      srHours: "11 AM to 9 PM",
    },

    {
      days: ["Saturday"],
      opens: "10:00",
      closes: "21:00",
      displayDays: "Sat",
      srDays: "Saturday",
      displayHours: "10 AM – 9 PM",
      srHours: "10 AM to 9 PM",
    },
  ],
};
