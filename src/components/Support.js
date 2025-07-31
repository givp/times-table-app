import React from 'react';
import { Link } from 'react-router-dom';
import './Support.css';

function Support() {
  return (
    <div className="support-container">
      <div className="support-content">
        <header className="support-header">
          <h1>Support</h1>
          <Link to="/" className="back-link">← Back to App</Link>
        </header>
        
        <div className="support-body">
          <section>
            <h2>Need Help?</h2>
            <p>
              We're here to help! If you have any questions, feedback, or need assistance with the Times Table App, please don't hesitate to reach out to us.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              For support, bug reports, feature requests, or general inquiries, please contact us at:
            </p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> timestablefun [äť] pm.me
              </p>
            </div>
            <p>
              We typically respond within 24-48 hours during business days.
            </p>
          </section>

          <section>
            <h2>Before Contacting Us</h2>
            <p>To help us assist you better, please include:</p>
            <ul>
              <li>Your device type and operating system version</li>
              <li>A detailed description of the issue or question</li>
              <li>Steps to reproduce the problem (if applicable)</li>
              <li>Screenshots (if helpful)</li>
            </ul>
          </section>

          <section>
            <h2>Common Questions</h2>
            <div className="faq-item">
              <h3>How do I reset my progress?</h3>
              <p>You can reset your progress by clicking on the "Restart Game" link in the settings menu, or byclearing the app data in your device settings or reinstalling the app. You can always restore your purchase if you have the Premium version.</p>
            </div>
            <div className="faq-item">
              <h3>Is the app suitable for children?</h3>
              <p>Yes! Our app is designed specifically for educational purposes and is safe for children of all ages.</p>
            </div>
            <div className="faq-item">
              <h3>Does the app work offline?</h3>
              <p>Yes, the app works completely offline. No internet connection is required to play and learn.</p>
            </div>
          </section>

          <section>
            <h2>Feedback</h2>
            <p>
              We love hearing from our users! Your feedback helps us improve the app and make it better for everyone. 
              Whether you have suggestions for new features, found a bug, or just want to share your experience, 
              we'd love to hear from you.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              For information about how we handle your data and privacy, please see our{' '}
              <Link to="/privacy" className="inline-link">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Support; 