'use client';

import React, { useState, type FormEvent } from 'react';

type HeroContent = {
  heading: string;
  formTitle: string;
  submitLabel: string;
  callLabel: string;
  callHref: string;
  phoneDisplay: string;
  email: string;
};

const fallback: HeroContent = {
  heading: 'A Life of Silken Grace. Takes Good Living to Another Level.',
  formTitle: 'Plan Your Visit to Mulberry Hills',
  submitLabel: 'Enquire Now',
  callLabel: 'Call Now',
  callHref: 'tel:+917090944944',
  phoneDisplay: '+91 70909 44944',
  email: 'sale@landmarknet.com',
};

export default function Hero() {
  const data = fallback;
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('Email'),
          phone: formData.get('Phone'),
          message: formData.get('Message'),
        }),
      });
      if (!res.ok) throw new Error('submission failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section is-hero"><div className="main-wrapper"><div className="section-hero-full"><div className="container-full"><div data-animation="bg" className="hero-container"><div className="hero-sticky"><div className="hero-wrap"><div data-animation="word" className="hero-title home"><div className="hero-title-block"><div className="inner-hero-wrap center is-home"><div className="inner-hero-title-box hero"><h1 className="large-title white">{data.heading}</h1><a href={data.callHref} className="primary-button-link w-inline-block"><div className="primary-button-shadow"></div><div className="primary-button-text-box"><div className="primary-button-text">{data.callLabel}</div><div className="primary-button-hover-text">{data.callLabel}</div></div></a><div className="medium-description white" style={{ marginTop: '16px' }}><a href={data.callHref} style={{ color: '#ffd035' }}>{data.phoneDisplay}</a>{' · '}<a href={`mailto:${data.email}`} style={{ color: '#ffd035' }}>{data.email}</a></div></div></div><div className="hero-form-block-wrap"><div className="hero-form-block w-form"><h2 className="hero-form-title">{data.formTitle}</h2><form id="email-form-2" name="email-form-2" data-name="Email Form 2" onSubmit={handleSubmit}><div className="hero-input-block"><div id="w-node-abe7c5c8-7257-fb3a-2ab2-6677c5f2d4cb-fa0d5dd1" className="hero-input-wrapper"><label htmlFor="" className="labels">Name</label><div className="hero-input-wrap"><input className="hero-form-input w-input" maxLength={256} name="name" data-name="Name" aria-label="Name" placeholder="Full Name" type="text" id="name" required /><div className="hero-input-icon-wrap"><div className="hero-input-icon w-embed"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33366 4.08333H8.83366C8.83366 5.09586 8.01285 5.91667 7.00033 5.91667V6.41667V6.91667C8.56513 6.91667 9.83366 5.64814 9.83366 4.08333H9.33366ZM7.00033 6.41667V5.91667C5.9878 5.91667 5.16699 5.09586 5.16699 4.08333H4.66699H4.16699C4.16699 5.64814 5.43552 6.91667 7.00033 6.91667V6.41667ZM4.66699 4.08333H5.16699C5.16699 3.07081 5.9878 2.25 7.00033 2.25V1.75V1.25C5.43552 1.25 4.16699 2.51853 4.16699 4.08333H4.66699ZM7.00033 1.75V2.25C8.01285 2.25 8.83366 3.07081 8.83366 4.08333H9.33366H9.83366C9.83366 2.51853 8.56513 1.25 7.00033 1.25V1.75ZM11.0837 10.2083H10.5837C10.5837 10.4807 10.3499 10.8619 9.66407 11.2048C9.00819 11.5327 8.06712 11.75 7.00033 11.75V12.25V12.75C8.1887 12.75 9.28929 12.5102 10.1113 12.0992C10.9034 11.7032 11.5837 11.0635 11.5837 10.2083H11.0837ZM7.00033 12.25V11.75C5.93354 11.75 4.99246 11.5327 4.33658 11.2048C3.65079 10.8619 3.41699 10.4807 3.41699 10.2083H2.91699H2.41699C2.41699 11.0635 3.09728 11.7032 3.88937 12.0992C4.71136 12.5102 5.81195 12.75 7.00033 12.75V12.25ZM2.91699 10.2083H3.41699C3.41699 9.93596 3.65079 9.55476 4.33658 9.21187C4.99246 8.88393 5.93354 8.66667 7.00033 8.66667V8.16667V7.66667C5.81195 7.66667 4.71136 7.90644 3.88937 8.31744C3.09728 8.71349 2.41699 9.35313 2.41699 10.2083H2.91699ZM7.00033 8.16667V8.66667C8.06712 8.66667 9.00819 8.88393 9.66407 9.21187C10.3499 9.55476 10.5837 9.93596 10.5837 10.2083H11.0837H11.5837C11.5837 9.35313 10.9034 8.71349 10.1113 8.31744C9.28929 7.90644 8.1887 7.66667 7.00033 7.66667V8.16667Z" fill="#898989"></path>
</svg></div></div></div></div><div id="w-node-_675fc80b-fc53-d929-f96f-763611e5029c-fa0d5dd1" className="hero-input-wrapper"><label htmlFor="" className="labels">Email</label><div className="hero-input-wrap"><input className="hero-form-input w-input" maxLength={256} name="Email" data-name="Email" aria-label="email" placeholder="Email address" type="email" id="Email" required /><div className="hero-input-icon-wrap"><div className="hero-input-icon w-embed"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.50033 4.66667L5.70603 6.13713C6.48979 6.65964 7.51086 6.65964 8.29463 6.13713L10.5003 4.66667M3.50033 12.25H10.5003C11.789 12.25 12.8337 11.2053 12.8337 9.91667V4.08333C12.8337 2.79467 11.789 1.75 10.5003 1.75H3.50033C2.21166 1.75 1.16699 2.79467 1.16699 4.08333V9.91667C1.16699 11.2053 2.21166 12.25 3.50033 12.25Z" stroke="#898989" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></div></div></div></div><div className="hero-input-wrapper"><label htmlFor="Phone" className="labels">Phone Number</label><div className="hero-input-wrap"><input className="hero-form-input w-input" maxLength={256} name="Phone" data-name="Phone" aria-label="phone number" placeholder="Phone Number" type="tel" id="Phone" required /><div className="hero-input-icon-wrap"><div className="hero-input-icon w-embed"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.55964 1.75H4.66699L5.83366 4.66667L4.37533 5.54167C4.9679 6.7345 5.93251 7.69911 7.12533 8.29167L8.00033 6.83333L10.917 8V10.1073C10.917 10.7156 10.4008 11.1953 9.79747 11.135C7.83587 10.9384 5.99274 10.0764 4.58253 8.66617C3.17232 7.25596 2.31029 5.41283 2.11366 3.45123C2.05333 2.84791 2.53306 2.33167 3.14133 2.33167" stroke="#898989" strokeLinecap="round" strokeLinejoin="round"></path></svg></div></div></div></div><div className="hero-input-wrapper is-message"><label htmlFor="Message" className="labels">Message</label><div className="hero-input-wrap"><textarea className="hero-form-input w-input" maxLength={5000} name="Message" data-name="Message" aria-label="message" placeholder="Your Message" id="Message" required></textarea></div></div><div id="w-node-ed2f6285-bd0d-b87f-2d2f-cb4c8d90045d-fa0d5dd1" className="hero-form-button-wrap"><div data-w-id="1f75a466-6b61-608d-dd45-1feaa74d9c0c" className="primary-button-link is-hero-form"><input type="submit" data-wait="Please wait..." disabled={status === 'submitting'} className="submit-button w-button" value={status === 'submitting' ? 'Please wait...' : data.submitLabel} /><div className="primary-button-shadow second"></div><div className="primary-button-text-box"><div style={{"WebkitTransform":"translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","MozTransform":"translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","msTransform":"translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)","transform":"translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="primary-button-text">{data.submitLabel}</div><div className="primary-button-hover-text black">{data.submitLabel}</div></div></div></div></div></form><div className="w-form-done" style={{ display: status === 'success' ? 'block' : 'none' }}><div>Thank you! Your submission has been received!</div></div><div className="w-form-fail" style={{ display: status === 'error' ? 'block' : 'none' }}><div>Oops! Something went wrong while submitting the form.</div></div></div></div></div><div data-w-id="a4818449-d2ff-eaf5-a082-b74c88a0955f" style={{"opacity":"0"}} className="hero-roofing-ticker-wrap"><div className="roofing-ticker"><div className="roofing-image-wrap"><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div></div><div className="roofing-image-wrap"><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div></div><div className="roofing-image-wrap"><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div><div className="roofing-single-image-box"><p className="roofing">MULBERRY HILLS</p></div></div></div></div></div><div className="hero-line-block"><div className="hero-line-block-inner"></div></div></div></div><div className="hero-bg hero"></div></div></div></div></div></section>
  );
}
