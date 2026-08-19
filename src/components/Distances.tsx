import React from 'react';

type DistanceItem = { value: string; label: string };
type DistancesContent = {
  eyebrow: string;
  headingPrefix: string;
  headingAccent: string;
};

const fallback: DistancesContent = {
  eyebrow: 'Proximity',
  headingPrefix: 'So',
  headingAccent: 'Near',
};

const fallbackItems: DistanceItem[] = [
  { value: '6', label: 'Vijayapura Town' },
  { value: '6.7', label: 'Jangamakote Cross' },
  { value: '10', label: 'Sidlaghatta Town' },
  { value: '12', label: 'Hi-Tech Defence Park' },
  { value: '14', label: 'Satellite Town Ring Road (S.T.R.R.)' },
  { value: '16', label: 'Bangalore North University Campus' },
  { value: '17', label: 'H Cross' },
  { value: '18', label: 'Devanahalli Town' },
  { value: '18', label: 'KIADB Industrial Zone' },
  { value: '24', label: 'Nandi Hills' },
  { value: '25', label: 'Bangalore International Airport' },
  { value: '25', label: 'Vemgal Industrial Area' },
  { value: '28', label: 'AERO SEZ' },
  { value: '32', label: 'Hoskote' },
  { value: '36', label: 'Yelahanka' },
  { value: '49', label: 'Hebbal' },
];

export default async function Distances() {
  const data = fallback;
  const items = fallbackItems;

  return (
    <section id="distances" className="section distances-section">
      <div className="container">
        <div className="slider-sub-title-box">
          <div className="description dark">{data.eyebrow}</div>
        </div>
        <h2 className="section-heading">
          {data.headingPrefix} <span className="heading-accent">{data.headingAccent}</span>
        </h2>
        <div className="distance-grid">
          {items.map((d, i) => (
            <div className="distance-tile" key={`${d.label}-${i}`}>
              <div className="distance-value">
                {d.value}
                <span className="distance-unit">km</span>
              </div>
              <div className="distance-label">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
