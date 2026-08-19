import React from 'react';

type RoofingContent = {
  eyebrow: string;
  heading: string;
  body1: string;
  body2: string;
  imageSmall: string;
  imageLarge: string;
  imageLargeAlt: string;
};

const fallback: RoofingContent = {
  eyebrow: 'About Mulberry Hills',
  heading: 'A premium gated community plotted development, designed for modern living.',
  body1:
    'Mulberry Hills is a premium gated community plotted development by Landmark Nest, set on an elevated plateau surrounded by mulberry plantation near Vijayapura Town, North Bangalore. Clear marketable title, DTCP approval with E-Khata, and RERA registration simplify the journey to owning a plot, backed by planned infrastructure across every street.',
  body2:
    'By combining a secure title, full statutory approvals and a transparent buying process, Landmark Nest helps plot owners move from enquiry to possession with confidence. Every plot at Mulberry Hills sits within a layout built with attention to roads, drainage, greenery and everyday amenities.',
  imageSmall: '/images/3e1ab70b-9574-477d-b726-431dd7182913.png',
  imageLarge: '/images/7696353e-45c7-4ccb-b8ad-6bab90dab678.png',
  imageLargeAlt: 'Mulberry Hills gated community plotted development',
};

export default async function Roofing() {
  const data = fallback;

  return (
    <section id="about" className="section is-roofing">
      <div className="container">
        <div
          data-w-id="47adde46-7c33-5aa8-3c3c-245c981f6207"
          style={{ opacity: '0' }}
          className="roofing-wrap"
        >
          <div className="roofing-content-box">
            <div className="roofing-content-left-box">
              <div className="slider-sub-title-box">
                <div className="description">{data.eyebrow}</div>
              </div>
              <h2
                data-w-id="b17794b3-4195-007d-b736-e7942d60132b"
                style={{ opacity: '0' }}
                className="roofing-content"
              >
                {data.heading}
              </h2>
              <div className="secondary-text dark roofing-body-text">
                {data.body1}
              </div>
              <div
                data-w-id="a2c20b7d-ccc9-4057-91c6-d6645e7e4441"
                style={{ opacity: '0' }}
                className="roofing-image-grid"
              >
                <div className="roofing-review-box">
                  <div className="reviews-content-wrap"></div>
                  <div className="hero-review-box-wrap"></div>
                  <div className="description-medium">
                    {data.body2}
                  </div>
                </div>
                <div className="roofing-image-box">
                  <img
                    src={data.imageSmall}
                    loading="lazy"
                    alt=""
                    className="roofing-image"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
            <div className="roofing-image-box is-large">
              <img
                src={data.imageLarge}
                loading="lazy"
                alt={data.imageLargeAlt}
                className="roofing-image"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
