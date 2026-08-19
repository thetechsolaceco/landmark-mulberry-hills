import React from 'react';

type ScrollSlide = { heading: string; body: string; image: string };
type ScrollBlockContent = {
  eyebrow: string;
  ctaLabel: string;
  ctaHref: string;
};

const fallback: ScrollBlockContent = {
  eyebrow: 'What Mulberry Hills Offers',
  ctaLabel: 'Explore the Layout Plan',
  ctaHref: '#amenities',
};

const fallbackSlides: ScrollSlide[] = [
  {
    heading: 'Smoothness',
    body: 'Easy connectivity via Satellite Town Ring Road (STRR), a smooth approach from NH 44, and close proximity to Bangalore International Airport with rail and metro connectivity.',
    image: '/images/7696353e-45c7-4ccb-b8ad-6bab90dab678.png',
  },
  {
    heading: 'Strength',
    body: 'A protected environment for every plot owner, backed by clear marketable title, DTCP approval with E-Khata, RERA registration and bank loan facilitation.',
    image: '/images/3e1ab70b-9574-477d-b726-431dd7182913.png',
  },
  {
    heading: 'Good Living',
    body: "Landscaped gardens and walkways, a butterfly theme park and children's play area, underground electrical, water and sanitary connections, and well tarred 30 ft roads with street lighting.",
    image: '/images/f2483a58-c504-494a-a72d-50f1015fccfb.png',
  },
];

const SUFFIXES = ['_1', '_2', '_3'];
const WIDGET_IDS = [
  'c5fdc751-517a-6856-0503-4478d53b9bc0',
  'b4d20045-e45e-e405-97ae-65b187588168',
  '136f3fcc-edc3-0b3b-7c45-406e9a1ee988',
];

export default async function ScrollBlock() {
  const data = fallback;
  const slides = fallbackSlides;
  const total = slides.length;

  return (
    <section data-w-id="0fd441e5-4bc6-e1c4-e1d2-63396908416a" className="section scroll-block">
      {slides.map((slide, i) => {
        const suffix = SUFFIXES[i] ?? `_${i + 1}`;
        const num = String(i + 1).padStart(2, '0');
        return (
          <div className={`exhibition-section ${suffix}`} key={slide.heading}>
            <img src={slide.image} loading="lazy" alt="" className="exhibition-image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            <div className={`exhibition-container ${suffix}`}>
              <div className="exhibition-block">
                <div className="slider-left-box">
                  <div className="description yollow">{data.eyebrow}</div>
                  <div className="slider-left-content-box">
                    <div className="slider-inner-title-box">
                      <h2 className="large-title white">{slide.heading}</h2>
                    </div>
                    <div className="secondary-text white">{slide.body}</div>
                    <div className="slider-button-box">
                      <a data-w-id={WIDGET_IDS[i] ?? WIDGET_IDS[0]} href={data.ctaHref} className="secondary-button-link nav w-inline-block">
                        <div className="primary-button-shadow second"></div>
                        <div className="primary-button-text-box">
                          <div className="primary-button-text white">{data.ctaLabel}</div>
                          <div className="primary-button-hover-text black">{data.ctaLabel}</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-number">
                  <div className="slider-number-text">
                    <span className="slider-number-text-active">{num}</span> / {String(total).padStart(2, '0')}
                  </div>
                  <div className="dot-wrap">
                    {slides.map((s, j) => (
                      <div className={`slider-dot${j === i ? ' active' : ''}`} key={s.heading}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
