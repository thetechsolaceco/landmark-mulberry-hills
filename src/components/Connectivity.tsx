import React from 'react';

const RoadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 20L9 4H15L18 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 6V9M12 12V15M12 18V19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const InstitutionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10L12 4L21 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10V19M9 10V19M15 10V19M19 10V19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M3 19H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C12 21 19 14.5 19 9.5C19 5.63401 15.866 2.5 12 2.5C8.13401 2.5 5 5.63401 5 9.5C5 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const ICONS: Record<string, React.ComponentType> = {
  road: RoadIcon,
  institution: InstitutionIcon,
  pin: PinIcon,
};

type ConnectivityGroup = {
  title: string;
  icon: string;
  accent: string;
  items: string[];
};
type ConnectivityGroupEntry = {
  title: string;
  icon: string;
  accent: string;
  items: string;
};
type ConnectivityContent = {
  eyebrow: string;
  headingPrefix: string;
  headingAccent: string;
};

const fallback: ConnectivityContent = {
  eyebrow: 'Location',
  headingPrefix: 'Multi-Modal',
  headingAccent: 'Connectivity',
};

const fallbackGroups: ConnectivityGroup[] = [
  {
    title: 'Road & Highway Access',
    icon: 'road',
    accent: 'var(--color--brand-maroon)',
    items: [
      'Well connected to Satellite Town Ring Road (S.T.R.R.)',
      'Off Devanahalli to Kolar State Highway',
      'Easy Approach from Hyderabad Highway (NH 44)',
      'Bangalore Airport Development Region (New Terminal T2)',
      'Located between North Bangalore (BIAPPA) and Chikkaballpur (CUDA) Growth Corridors',
      'DMart, Reliance Store, and many shopping centers and retail outlets',
    ],
  },
  {
    title: 'Social Infrastructure & Transit',
    icon: 'institution',
    accent: 'var(--color--brand-gold)',
    items: [
      'Social infrastructure with multiple schools, colleges and hospitals nearby, including Akash International School, Brigade School for Global Minds, Chanakya University, Nagarjuna College of Engineering and Ramaiah Leena Hospital, and much more',
      'Connected to Bangalore – Chennai Expressway thru Kolar highway',
      'Rail Connectivity',
      'Metro Connectivity',
      'Airport City',
    ],
  },
  {
    title: 'Nearby Developments',
    icon: 'pin',
    accent: 'var(--color--brand-teal)',
    items: [
      'Nearby other Real Estate Projects: Brigade Atmosphere Row House and Pearl Apartment Project',
    ],
  },
];

export default async function Connectivity() {
  const data = fallback;
  const groups = fallbackGroups;

  return (
    <section id="connectivity" className="section connectivity-section">
      <div className="container">
        <div className="slider-sub-title-box">
          <div className="description dark">{data.eyebrow}</div>
        </div>
        <h2 className="section-heading">
          {data.headingPrefix} <span className="heading-accent">{data.headingAccent}</span>
        </h2>
        <div className="info-columns">
          {groups.map((group) => {
            const Icon = ICONS[group.icon] ?? RoadIcon;
            return (
              <div className="info-card" style={{ '--accent': group.accent } as React.CSSProperties} key={group.title}>
                <div className="card-icon-box">
                  <Icon />
                </div>
                <h3 className="info-card-title">{group.title}</h3>
                <ul className="info-card-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
