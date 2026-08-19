import React from 'react';

type FooterNavLink = { label: string; href: string };
type FooterContent = {
  companyName: string;
  address: string;
  phone: string;
  phoneHref: string;
  website: string;
  websiteHref: string;
  tagline: string;
  copyright: string;
  logo: string;
};

const fallback: FooterContent = {
  companyName: 'Landmark Nest Pvt. Ltd.',
  address: '#147, First Floor, S R K Nagar, MCECHS Layout, Bengaluru - 560 077',
  phone: '+91-7090 299 399',
  phoneHref: 'tel:+917090299399',
  website: 'www.landmarknest.com',
  websiteHref: 'https://www.landmarknest.com',
  tagline: 'Takes Good Living to Another Level.',
  copyright: '©2026 Mulberry Hills All Right Reserved.',
  logo: '/images/logo.png',
};

const fallbackLinks: FooterNavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Amenities & Layout', href: '#amenities' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '#contact' },
];

export default async function Footer() {
  const data = fallback;
  const navLinks = fallbackLinks;

  return (
    <section className="section footer">
      <div className="footer-wrap">
        <div className="container">
          <div className="footer-flex-wrap">
            <div className="footer-inner-flex">
              <div data-w-id="45e5b901-c7f4-283d-5f0f-a774bdcc7425" className="footer-wedget-wrap">
                <div className="footer-single-widget">
                  <div className="footer-wized-title">Links</div>
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="footer-menu">{link.label}</a>
                  ))}
                </div>
                <div className="footer-single-widget">
                  <div className="footer-wized-title">{data.companyName}</div>
                  <div className="footer-menu">{data.address}</div>
                  <a href={data.phoneHref} className="footer-menu footer-menu-nowrap">Phone: {data.phone}</a>
                  <a href={data.websiteHref} rel="noopener" target="_blank" className="footer-menu footer-menu-nowrap">Website: {data.website}</a>
                </div>
              </div>
              <div className="footer-left-box">
                <div data-w-id="45e5b901-c7f4-283d-5f0f-a774bdcc7442" className="footer-link-blog">
                  <a href="/" aria-current="page" className="footer-logo-box w-inline-block w--current">
                    <img loading="lazy" src={data.logo} alt="" className="footer-logo" />
                  </a>
                </div>
                <div data-w-id="45e5b901-c7f4-283d-5f0f-a774bdcc7453" className="small-text gray">{data.tagline}</div>
              </div>
            </div>
            <div className="footer-copyright-wrap">
              <div data-w-id="45e5b901-c7f4-283d-5f0f-a774bdcc7456" className="footer-divider"></div>
              <div data-w-id="45e5b901-c7f4-283d-5f0f-a774bdcc7457" className="footer-bottom-box">
                <div className="footer-bottom-content">{data.copyright}</div>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="45e5b901-c7f4-283d-5f0f-a774bdcc7461" className="footer-roofing-box">
          <h1 className="rooging" style={{ fontSize: '15vw', margin: '0', textAlign: 'center', lineHeight: '1', textTransform: 'uppercase' }}>MULBERRY HILLS</h1>
        </div>
      </div>
    </section>
  );
}
