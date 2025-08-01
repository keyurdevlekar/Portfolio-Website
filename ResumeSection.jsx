import { useState } from 'react';

function ResumeSection() {
  const openResume = () => {
    window.open('/documents/Keyur_Devlekar_Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="section resume-section">
      <h2 className="section-title">My Resume</h2>
      
      <div className="resume-container">
        {/* Resume Card - Directly clickable */}
        <div className="resume-card" onClick={openResume}>
          <div className="resume-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#e63946" viewBox="0 0 16 16">
              <path d="M5.523 10.424q.21-.124.459-.124a.9.9 0 0 1 .63.252.9.9 0 0 1 .126 1.175l-2.22 3.22q-.213.31-.641.31H2.96q-.322 0-.505-.223a.7.7 0 0 1-.063-.706l2.22-3.294q.206-.304.553-.304z"/>
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
            </svg>
          </div>
          <h3>Keyur Devlekar - Full Stack Developer</h3>
          <p>Click to view full resume</p>
        </div>

        {/* Download Button */}
        <div className="resume-actions">
          <a 
            href="/assets/documents/Keyur_Devlekar_Resume.pdf" 
            download="Keyur_Devlekar_Resume.pdf"
            className="download-button"
            onClick={(e) => e.stopPropagation()}
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;