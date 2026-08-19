import React from 'react';

type CtaContent = {
  faqHeading: string;
  faqCtaLabel: string;
  faqCtaHref: string;
  bannerHeading: string;
  bannerBody: string;
  bannerCtaLabel: string;
  bannerCtaHref: string;
};

const ctaFallback: CtaContent = {
  faqHeading: 'Frequently Asked Questions',
  faqCtaLabel: 'Ask Question Now',
  faqCtaHref: '#contact',
  bannerHeading: 'Your Path to Owning a Plot at Mulberry Hills',
  bannerBody: 'Our team will get in touch with you to schedule a site visit to Mulberry Hills.',
  bannerCtaLabel: 'Enquire Now',
  bannerCtaHref: '#contact',
};

const faqFallback = [
  {
    question: 'Where is Mulberry Hills located?',
    answer: 'Mulberry Hills is located on an elevated plateau surrounded by mulberry plantation, near Vijayapura Town in North Bangalore.',
  },
  {
    question: 'Is Mulberry Hills DTCP approved and RERA registered?',
    answer: 'Yes. The Mulberry Hills layout is DTCP approved and carries E-Khata, and the project is registered under the Real Estate Regulatory Authority (RERA). Plots come with clear marketable title.',
  },
  {
    question: 'Is a bank loan available for buying a plot?',
    answer: 'Yes, bank loan facilitation is available for plot purchases at Mulberry Hills.',
  },
  {
    question: 'How do I book a plot at Mulberry Hills?',
    answer: 'You can book a plot at Mulberry Hills by contacting Landmark Nest for a site visit, plot selection and booking documentation.',
  },
];

export default async function CTA() {
  const data = ctaFallback;
  const items = faqFallback;

  return (
    <section id="faq" className="section cta">
      <div className="container cta">
        <div className="cta-wraps">
          <div className="faq-wrapper">
            <div className="faq-left-box">
              <div data-w-id="47b3983a-d7c9-b798-d17b-7e314de4be52" className="inner-title-box faq">
                <h2 className="inner-title faq">{data.faqHeading}</h2>
              </div>
              <div data-w-id="47b3983a-d7c9-b798-d17b-7e314de4be55" className="faq-button-box">
                <a id="w-node-_8c95b06c-3db1-8e2f-101f-2874817c5b8c-817c5b8c" data-w-id="8c95b06c-3db1-8e2f-101f-2874817c5b8c" href={data.faqCtaHref} className="primary-button-link w-inline-block">
                  <div className="primary-button-shadow"></div>
                  <div className="primary-button-text-box">
                    <div className="primary-button-text">{data.faqCtaLabel}</div>
                    <div className="primary-button-hover-text">{data.faqCtaLabel}</div>
                  </div>
                </a>
              </div>
            </div>
            <div data-w-id="47b3983a-d7c9-b798-d17b-7e314de4be58" className="faq-right-box">
              {items.map((item, i) => (
                <div data-delay="300" data-hover="false" className="accordion w-dropdown" key={i}>
                  <div className="accordion-title-wrap w-dropdown-toggle">
                    <div className="accordion-title">{item.question}</div>
                    <div className="accordion-icon-wrapper">
                      <img loading="lazy" src="/images/695eca33ca4700602aa438ab_plus.svg" alt="" className="accordion-icon-in" />
                      <img loading="lazy" src="/images/695eca334ba20d65b39efc90_plus%20none.svg" alt="" className="accordion-icon-out" />
                    </div>
                  </div>
                  <nav className="accordion-description-wrap w-dropdown-list">
                    <div className="accordion-text-wrap">
                      <p className="ans-text">{item.answer}</p>
                    </div>
                  </nav>
                </div>
              ))}
            </div>
          </div>
          <div className="cta-wrap">
            <div className="inner-hero-wrap center cta">
              <div data-w-id="47b3983a-d7c9-b798-d17b-7e314de4be87" className="inner-hero-title-box cta">
                <h2 className="large-title white">{data.bannerHeading}</h2>
              </div>
              <div data-w-id="47b3983a-d7c9-b798-d17b-7e314de4be8a" className="inner-hero-description-box solution">
                <p className="secondary-text white">{data.bannerBody}</p>
              </div>
              <div data-w-id="47b3983a-d7c9-b798-d17b-7e314de4be8d" className="cta-button-box">
                <a id="w-node-_8c95b06c-3db1-8e2f-101f-2874817c5b8c-817c5b8c" data-w-id="8c95b06c-3db1-8e2f-101f-2874817c5b8c" href={data.bannerCtaHref} className="primary-button-link w-inline-block">
                  <div className="primary-button-shadow"></div>
                  <div className="primary-button-text-box">
                    <div className="primary-button-text">{data.bannerCtaLabel}</div>
                    <div className="primary-button-hover-text">{data.bannerCtaLabel}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="linear"></div>
    </section>
  );
}
