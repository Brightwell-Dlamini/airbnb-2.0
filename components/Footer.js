import React from "react";

function Footer() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibilty</p>
        <p>This is not the real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referral code</p>
        <p>daradarda</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Mr Gerv</p>
        <p>Presents</p>
        <p>Zero to fullstack hero</p>
        <p>Hundreds of students</p>
        <p>Gervfam</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Donation</p>
        <p>Helo Center</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
    </section>
  );
}

export default Footer;
