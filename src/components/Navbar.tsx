import React from 'react';

type NavLink = { label: string; href: string };
type NavbarContent = {
  logo: string;
  logoAlt: string;
};

const fallback: NavbarContent = {
  logo: '/images/logo.png',
  logoAlt: '',
};

const fallbackLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Amenities & Layout', href: '#amenities' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '#contact' },
];

export default async function Navbar() {
  const data = fallback;
  const navLinks = fallbackLinks;
  const desktopLinks = navLinks.filter((link) => link.label !== 'Contact Us');

  return (
    <div data-w-id="68b47c9d-91e2-256b-f7a5-e4e33fb8c7b2" data-data-animation="default" suppressHydrationWarning data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar black w-nav"><div className="auto-container w-container"><div className="navbar-content"><a href="/" aria-current="page" className="navbar-logo-link w-nav-brand w--current"><img loading="lazy" src={data.logo} alt={data.logoAlt} className="navbar-logo-image" /></a><nav role="navigation" className="nave-menu w-nav-menu"><div className="nav-menu-content">{desktopLinks.map((link, i) => (<a key={link.href} href={link.href} aria-current={i === 0 ? 'page' : undefined} className={`nav-link white w-nav-link${i === 0 ? ' w--current' : ''}`}>{link.label}</a>))}<div className="primary-button-wrapper-two mobile"><a href="#" data-w-id="68b47c9d-91e2-256b-f7a5-e4e33fb8c800" className="nav-button w-inline-block"><div className="nav-button-content"><div className="primary-button-text-wrap-2"><div className="nav-button-text">Get Started</div><div className="nav-button-hover-text">Get Started</div></div></div></a></div></div><div className="mobile-nav-wrap"><div className="nav-dropdown-left-wrap-2"><div className="nav-link-wrapper"><div className="mobile-nav-title-box"><div className="description white">(Main Menu)</div></div><div className="nav-menu-wrap">{navLinks.map((link, i) => (<a key={link.href} href={link.href} aria-current={i === 0 ? 'page' : undefined} className={`nav-menu w-nav-link${i === 0 ? ' w--current' : ''}`}>{link.label}</a>))}</div></div></div></div></nav><div className="navbar-right-content"><div className="menu-button w-nav-button"><div className="menu-button-wrap"><div className="nav-hamburger-button"><img loading="lazy" src="/images/69614c8ded7e52c250f3e8a0_horizontal.svg" alt="" className="nav-hamburger-icon" /><img loading="lazy" src="/images/69614c8ded7e52c250f3e89b_x-close.svg" alt="" className="nav-close-ccon" /></div></div></div></div></div></div></div>
  );
}
