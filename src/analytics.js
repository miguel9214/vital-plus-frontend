// src/analytics.js
import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-LLQCW20GVY"; // 🔁 Reemplaza con tu ID GA4

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const trackPage = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};
