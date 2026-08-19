import React from 'react';
import { getList } from '@/lib/content';

type MaterialSlide = { title: string; description: string; image: string };
type MaterialContent = {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
};

const fallback: MaterialContent = {
  heading: 'A Closer Look at Life at Mulberry Hills',
  ctaLabel: 'View Full Layout & Amenities',
  ctaHref: '#amenities',
};

const fallbackSlides: MaterialSlide[] = [
  {
    title: 'Grand Entrance',
    description: 'A tall signage tower in wood toned cladding, framed by tiered planters, feature walls and mature trees along the approach road.',
    image: '/images/7696353e-45c7-4ccb-b8ad-6bab90dab678.png',
  },
  {
    title: 'Landscaped Avenue & Gardens',
    description: 'A tarred internal avenue lined with trees, shrubs and planters, with paved walking paths and manicured lawns running alongside the internal roads.',
    image: '/images/63b9c01d-24ae-4c7b-a9d7-c795f7ea9c85.png',
  },
  {
    title: "Butterfly Theme Park & Children's Play Area",
    description: "A themed garden with a wooden pergola, bench seating and play equipment forms the dedicated children's play area at Mulberry Hills.",
    image: '/images/f2483a58-c504-494a-a72d-50f1015fccfb.png',
  },
];

export default async function Material() {
  const data = fallback;
  const slideEntries = await getList<MaterialSlide>('material-slide');
  const slides = slideEntries.length ? slideEntries : fallbackSlides;

  return (
    <section className="section is-material">
      <div className="container">
        <div data-w-id="667da081-e39e-edd1-6197-8b8cfbb02a0d" style={{ opacity: '0' }} className="material-content-block">
          <div className="material-title-block">
            <div data-w-id="d4ee992e-fcab-2f49-7dae-f2978208b12d" style={{ opacity: '0' }} className="materials-left-title-wrap">
              <h2 className="materials-title">{data.heading}</h2>
              <a id="w-node-_8c95b06c-3db1-8e2f-101f-2874817c5b8c-817c5b8c" data-w-id="8c95b06c-3db1-8e2f-101f-2874817c5b8c" href={data.ctaHref} className="primary-button-link w-inline-block">
                <div className="primary-button-shadow"></div>
                <div className="primary-button-text-box">
                  <div className="primary-button-text">{data.ctaLabel}</div>
                  <div className="primary-button-hover-text">{data.ctaLabel}</div>
                </div>
              </a>
            </div>
            <div className="material-overlay"></div>
          </div>
          <div data-delay="4000" data-data-animation="slide" className="material-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
            <div className="mask w-slider-mask">
              {slides.map((slide) => (
                <div className="material-slide w-slide" key={slide.title}>
                  <div className="material-slide-content">
                    <div className="material-slide-image-wrap">
                      <img src={slide.image} loading="lazy" width="738" height="1107" alt="" className="material-slide-image" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="material-slide-text-block">
                      <div className="material-slide-title">{slide.title}</div>
                      <div className="material-slide-description">{slide.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="material-arrow is-left w-slider-arrow-left">
              <div className="w-embed">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99996 7L5 12L10 17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M19 12L5 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <div className="material-arrow is-right w-slider-arrow-right">
              <div className="w-embed">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 17L19 12L14 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M5 12L19 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
