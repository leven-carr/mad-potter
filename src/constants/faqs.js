export const FAQ_DATA = [
  {
    id: "reservation",
    question: "Do I need to make a reservation?",
    answers: [
      "We are a walk-in studio, so no reservations are necessary. As long as we are open and have tables available, you are always welcome!",
      "For groups of 8 people or more, we do ask that you call ahead to ensure that we have enough tables available. If you are planning a group event in advance, please take a look at our [LINK] page for more information!",
    ],
    iconName: "openDoor",
    link: {
      to: "/parties-and-keepsakes",
      label: "Parties",
    },
  },

  {
    id: "pickup",
    question: "When can I take my piece home?",
    answers: [
      "Unfortunately, your piece has to stay with us for a week. The kiln takes time to work its magic. Please note that due to the volume of pieces that we have, we rely on you to remember that your piece is in the studio; we do not call to let you know that it is ready for pick-up.",
    ],
    iconName: "hourglass",
  },

  {
    id: "pricing",
    question: "How much should I plan to spend?",
    answers: [
      "Payment consists of the price of your piece + an $8 studio fee that covers painting, glazing, and kiln-firing for up to 2 pieces per person. For kids age 12 and under, the studio fee is reduced to $6. We have a variety of pieces for you to choose from, ranging in price from about $5 to $40.",
      "Please visit our [LINK] to see when we may be running promotions!",
    ],
    iconName: "piggyBank",
    link: {
      to: "/",
      label: "Calendar",
      isExternal: true,
    },
  },

  {
    id: "creativity",
    question: "What if I'm not creative?",
    answers: [
      "No worries! Everyone is creative, and the staff here will help guide you the best we can!",
    ],
    iconName: "lightBulb",
  },
];
