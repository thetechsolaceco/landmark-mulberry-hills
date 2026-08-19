import React from 'react';

type TimelineStep = { title: string; description: string; image: string };
type TimelineContent = {
  heading: string;
  subtitle: string;
};

const fallback: TimelineContent = {
  heading: 'How Owning Your Plot Works',
  subtitle: 'A seamless, guided journey from your first site visit to owning your plot at Mulberry Hills.',
};

const fallbackSteps: TimelineStep[] = [
  {
    title: 'Enquiry & Site Visit',
    description: 'Reach out by phone or the enquiry form, and schedule a visit to see the Mulberry Hills layout and location firsthand.',
    image: '/images/b8d5ad51-6261-4e51-a9e9-24c2ae8e2575.png',
  },
];

export default async function Timeline() {
  const data = fallback;
  const steps = fallbackSteps;

  return (
    <section className="section" style={{ backgroundColor: "#fafafa", padding: "160px 0", position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Watermark */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)', fontSize: '20vw', fontWeight: 900, color: 'rgba(0,0,0,0.02)', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 0 }}>
        PROCESS
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .editorial-wrap {
          display: flex;
          flex-direction: column;
          gap: 160px;
          position: relative;
          z-index: 1;
        }
        .editorial-row {
          display: flex;
          align-items: center;
          gap: 0;
          position: relative;
        }
        .editorial-img-container {
          flex: 0 0 55%;
          position: relative;
          overflow: hidden;
        }
        .editorial-img {
          width: 100%;
          height: 100%;
          min-height: 500px;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .editorial-img-container:hover .editorial-img {
          transform: scale(1.05);
        }
        .editorial-content-box {
          flex: 1;
          background: #ffffff;
          padding: 60px;
          position: relative;
          margin-left: -100px;
          z-index: 2;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .editorial-content-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .editorial-number-bg {
          position: absolute;
          top: -40px;
          right: 20px;
          font-size: 8rem;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(0,0,0,0.06);
          line-height: 1;
          pointer-events: none;
          z-index: -1;
        }
        .editorial-title {
          font-size: 2.5rem;
          color: #1a1a1a;
          margin-bottom: 24px;
          font-weight: 600;
          position: relative;
        }
        .editorial-title::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 40px;
          height: 3px;
          background-color: #e2ff00;
        }
        .editorial-desc {
          font-size: 1.125rem;
          color: #555;
          line-height: 1.7;
          margin-top: 30px;
        }
        @media (max-width: 991px) {
          .editorial-wrap { gap: 80px; }
          .editorial-row { flex-direction: column; }
          .editorial-img-container { flex: none; width: 100%; }
          .editorial-img { min-height: 300px; }
          .editorial-content-box {
            margin: -40px 20px 0 20px;
            padding: 40px;
          }
        }
      `}} />

      <div className="container">
        <div className="hero-service-wrap" style={{ marginBottom: '120px', position: 'relative', zIndex: 1 }}>
          <div className="hero-service-title-box" style={{ maxWidth: '100%' }}>
            <h2 className="hero-service-title" style={{ textAlign: 'center', fontSize: '4rem', color: '#1a1a1a' }}>{data.heading}</h2>
            <p style={{ textAlign: 'center', color: '#666', fontSize: '1.25rem', marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>{data.subtitle}</p>
          </div>
        </div>

        <div className="editorial-wrap">
          {steps.map((step, i) => (
            <div className="editorial-row" key={step.title}>
              <div className="editorial-img-container">
                <img src={step.image} alt={step.title} className="editorial-img" loading="lazy" />
              </div>
              <div className="editorial-content-box">
                <div className="editorial-number-bg">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="editorial-title">{step.title}</h3>
                <div className="editorial-desc">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
