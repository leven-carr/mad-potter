import { businessInfo } from "../constants/businessInfo";

const { legalName, geo, address, telephone, displayTelephone, email } =
  businessInfo;

export const CONTACT_INFO = [
  {
    id: "address",
    title: "Visit Us",
    value: address.displayAddress,
    srValue: address.srAddress,
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
