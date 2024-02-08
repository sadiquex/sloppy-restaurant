/* 
[+] colorSystem.js [+]
----------------------

This file defines all the different UI color styles
in the app depending on the theme: light or dark
*/

export const colorSystem = {
  light: {
    primary: "#004643",
    secondary: "#2b8475",
    accent: "#ffdce7",
    text: "#141415",
    backgroundColor: "#f5f5f5",
    button: {
      color: "#2b8475",
      borderColor: "#2b8475",
    },
    card: {},
    status: {},
  },
  dark: {
    primary: "#fff",
    secondary: "#fbc31b",
    accent: "#ffdce7",
    text: "#f5f5f5",
    // backgroundColor: "#1b1b1b",
    backgroundColor: "hsl(0, 0%, 15%)",
    button: {
      color: "#f5f5f5",
      borderColor: "#fbc31b",
    },
    card: {},
    status: {},
  },
};
