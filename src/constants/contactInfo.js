import { businessInfo } from "../constants/businessInfo";

const {
  legalName,
  geo,
  displayAddress,
  srAddress,
  telephone,
  displayTelephone,
  email,
} = businessInfo;

export const contactInfo = [
  {
    id: "address",
    title: "Visit Us",
    value: displayAddress,
    srValue: srAddress,
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(legalName)}&query_place_id=${geo.googlePlaceId}`,
    iconName: "mapPin",
  },

  {
    id: "phone",
    title: "Call Us",
    value: displayTelephone,
    link: `tel:${telephone}`,
    iconName: "phone",
  },

  {
    id: "email",
    title: "Email Us",
    value: email,
    link: `mailto:${email}`,
    iconName: "email",
  },
];
