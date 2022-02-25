/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZ2Vydi0iLCJhIjoiY2wwMW14ODR5MHZsYzNpcDZhbHhiZGxjaiJ9.LQAaBLoRRxUBtPax080irA",
  },
};

module.exports = nextConfig;
