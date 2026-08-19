import React from 'react';

type AmenityGroup = {
  icon: string;
  title: string;
  accent: string;
  items: string[];
};
type AmenityGroupEntry = {
  icon: string;
  title: string;
  accent: string;
  items: string;
};
type HeroServiceContent = {
  heading: string;
  imagePhoto: string;
  imagePhotoAlt: string;
  imageDiagram: string;
  imageDiagramAlt: string;
};

const fallback: HeroServiceContent = {
  heading: 'Amenities & Infrastructure at Mulberry Hills',
  imagePhoto: '/images/amenities-garden.png',
  imagePhotoAlt: "Landscaped pergola, walkways and children's play area at Mulberry Hills",
  imageDiagram: '/images/amenities-road-diagram.png',
  imageDiagramAlt:
    'Road infrastructure cross-section showing landscaping, street light, foot path, water supply, bioretention, sewer water drain and sewage drain',
};

const fallbackGroups: AmenityGroup[] = [
  {
    icon: '/images/69665c4191e90125c5dfa8cd_Hero%20Service%20Icon%201.svg',
    title: 'Gated Community & Grand Entrance',
    accent: 'var(--color--brand-gold)',
    items: [
      'Gated Community',
      'Entrance Arch with Outstanding Architectural Design',
      'Beautifully Landscaped Entrance',
    ],
  },
  {
    icon: '/images/69665e0657df938d099131c1_Hero%20Service%20Icon%202.svg',
    title: 'Underground Utility Connections',
    accent: 'var(--color--brand-maroon)',
    items: [
      'Underground electrical connection to each plot',
      'Water connection to each plot',
      'Sanitary connection to each plot',
    ],
  },
  {
    icon: '/images/69665e062a4fd62285dbf651_Hero%20Service%20Icon%203.svg',
    title: 'Drainage & Rainwater Management',
    accent: 'var(--color--brand-teal)',
    items: [
      'Drainage Lines',
      'Storm water drainage',
      'Rainwater harvesting',
    ],
  },
  {
    icon: '/images/69665e0656eeaccdeb5590ed_Hero%20Service%20Icon%204.svg',
    title: 'Roads & Recreation',
    accent: 'var(--color--brand-gold)',
    items: [
      'Well tarred 30 ft roads',
      'Street lights',
      'Well-developed Butterfly Theme Park',
      "Children's Play area",
    ],
  },
];

export default async function HeroService() {
  const data = fallback;
  const groups = fallbackGroups;

  return (
    <section id="amenities" className="section hero-service">
      <div className="container">
        <div className="hero-service-wrap">
          <div className="hero-service-title-box">
            <h2 className="hero-service-title">{data.heading}</h2>
          </div>
        </div>
      </div>
      <div className="hero-service-card-block">
        <div className="container">
          <div className="amenities-info-grid">
            <div className="amenities-info-content">
              {groups.map((group) => (
                <div className="info-card" style={{ '--accent': group.accent } as React.CSSProperties} key={group.title}>
                  <div className="card-icon-box">
                    <img src={group.icon} loading="lazy" alt="" className="amenities-card-icon" />
                  </div>
                  <h3 className="info-card-title">{group.title}</h3>
                  <ul className="info-card-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="amenities-info-media">
              <img
                src={data.imagePhoto}
                loading="lazy"
                alt={data.imagePhotoAlt}
                className="amenities-info-photo"
              />
              <div className="amenities-info-diagram-wrap">
                <img
                  src={data.imageDiagram}
                  loading="lazy"
                  alt={data.imageDiagramAlt}
                  className="amenities-info-diagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
