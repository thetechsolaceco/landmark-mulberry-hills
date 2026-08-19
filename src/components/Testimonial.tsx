import React from 'react';
import { getTestimonials } from '@/lib/content';

// No resident testimonials exist yet for Mulberry Hills. Per the client content brief,
// this uses trust markers instead of invented quotes/names — replace with genuine
// resident testimonials once Phase 1 is occupied.
const fallback = [
  {
    description: 'Every plot at Mulberry Hills comes with a clear, marketable title.',
    title: 'Clear Marketable Title',
  },
  {
    description: 'The layout is DTCP approved, carries E-Khata, and is registered under RERA.',
    title: 'DTCP Approved, E-Khata, RERA Registered',
  },
  {
    description: 'Buyers can access bank loan facilitation to finance their plot purchase.',
    title: 'Bank Loan Facilitation',
  },
];

export default async function Testimonial() {
  const entries = await getTestimonials();
  const trustMarkers = entries.length
    ? entries.map((e) => ({ title: e.title, description: e.description }))
    : fallback;

  return (
    <section className="section testimonial">
      <div
        data-w-id="08b15570-e15d-75e0-beb3-3cf142898a71"
        style={{ opacity: '0' }}
        className="tesimonial-container"
      >
        <div className="slider-item testimonial-row">
          <div
            data-delay="2000"
            data-data-animation="cross"
            className="testimonials-slider w-slider"
            data-autoplay="true"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="skider-mask w-slider-mask">
              {trustMarkers.map((t, i) => (
                <div className="loop-slider w-slide" key={i}>
                  <div className="slider-content-box">
                    <div className="slider-sub-title-box">
                      <div className="description">Why Buyers Trust Mulberry Hills</div>
                    </div>
                    <div className="slider-botton-content-box">
                      <h2>{t.description}</h2>
                    </div>
                    <div className="slider-author-content-box">
                      <h3 className="slider-author-name">{t.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="display-none w-slider-arrow-left">
              <div className="w-icon-slider-left"></div>
            </div>
            <div className="display-none w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
            </div>
            <div className="slide-nav w-slider-nav w-slider-nav-invert w-shadow w-round"></div>
          </div>
          <div className="slider-author-image-wrap">
            <div className="slider-author-active-box">
              <div className="slider-author-active-image-box">
                <img
                  src="/images/testimonial-buyer.png"
                  loading="lazy"
                  alt="Mulberry Hills"
                  className="slider-author-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
