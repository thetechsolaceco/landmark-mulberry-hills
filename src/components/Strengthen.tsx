import React from 'react';

type StrengthenContent = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const fallback: StrengthenContent = {
  heading: 'Start Your Journey to Owning a Plot at Mulberry Hills.',
  body: 'Visit Mulberry Hills and see the DTCP approved, RERA registered gated community plotted development firsthand.',
  ctaLabel: 'Book a Site Visit',
  ctaHref: '#contact',
};

export default async function Strengthen() {
  const data = fallback;

  return (
    <section className="section strengthen"><div className="container"><div className="strengthen-wrap"><div data-w-id="0c2524fd-a99c-3786-3a04-af605ffe7b0e" style={{"opacity":"0"}} className="strengthen-title-box"><h2 className="large-title white">{data.heading}</h2></div><div data-w-id="ff2825e5-dd04-7e57-2636-eb173f48cd1d" style={{"opacity":"0"}} className="strengthen-description-box"><div className="secondary-text white">{data.body}</div></div><div data-w-id="18261d98-64a7-b935-a209-9abdfb22e0ca" style={{"opacity":"0"}} className="strengthen-button-box"><a id="w-node-_8c95b06c-3db1-8e2f-101f-2874817c5b8c-817c5b8c" data-w-id="8c95b06c-3db1-8e2f-101f-2874817c5b8c" href={data.ctaHref} className="primary-button-link w-inline-block"><div className="primary-button-shadow"></div><div className="primary-button-text-box"><div className="primary-button-text">{data.ctaLabel}</div><div className="primary-button-hover-text">{data.ctaLabel}</div></div></a></div></div></div></section>
  );
}
