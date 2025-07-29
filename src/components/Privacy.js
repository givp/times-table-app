import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';

function Privacy() {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <Link to="/" className="back-link">← Back to App</Link>
        </header>
        
        <div className="privacy-body">
          <section>
            <h2>Introduction</h2>
            <p>
              This Privacy Policy describes how Times Table App ("we", "our", or "us") collects, uses, and protects your information when you use our mobile application.
            </p>
            <p>
              By using our app, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We do not collect any personally identifiable information such as names, email addresses, or phone numbers.
            </p>
            
            <h3>Usage Data</h3>
            <p>
              We do not collect any usage data. Apple automatically collects usage data for analytics purposes.
            </p>
          </section>

          <section>
            <h2>Data Storage</h2>
            <p>
              All game progress and settings are stored locally on your device. We do not store any personal data on our servers.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              Our app is designed for educational purposes and is suitable for children. We do not collect personal information from any user.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect any information we collect. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: timestablefun [äť] pm.me<br />
            </p>
          </section>

          <section>
            <h2>Last Updated</h2>
            <p>This Privacy Policy was last updated on {new Date().toLocaleDateString()}.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy; 