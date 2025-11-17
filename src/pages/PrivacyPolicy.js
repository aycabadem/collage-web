import React from 'react';

const PrivacyPolicy = () => (
  <article className="LegalPage">
    <header>
      <h1>Privacy Policy</h1>
      <p className="LegalPage-meta">Last Updated: November 17, 2025</p>
      <p className="LegalPage-subtitle">
        This Privacy Policy explains how Custom Photo Collage (“the App”, “we”, “our”) handles user data, permissions,
        analytics, and third-party services.
      </p>
    </header>

    <section>
      <h2>1. Information We Collect</h2>
      <h3>1.1 Personal Information</h3>
      <p>We do not collect personal information such as your name, email address, phone number, or contact details.</p>

      <h3>1.2 Photos &amp; Media</h3>
      <p>
        The App requests access to your device’s photo gallery solely so you can select and use photos when creating
        collages. These images remain on your device and are never uploaded, transmitted, or stored on any server.
      </p>

      <h3>1.3 Automatically Collected Data (via Firebase Analytics)</h3>
      <p>
        To improve the App’s performance and understand usage patterns, we use Google Firebase Analytics. Firebase
        automatically collects non-personal and aggregated information such as:
      </p>
      <ul>
        <li>app interactions (e.g., button taps, feature usage)</li>
        <li>device type and operating system version</li>
        <li>approximate location (country/region only)</li>
        <li>app performance data and crash reports</li>
        <li>screen views and session duration</li>
      </ul>
      <p>This data does not identify you personally and is used only to improve functionality and stability.</p>

      <h3>1.4 Advertising</h3>
      <p>The App does not use personalized advertising and does not collect the advertising identifier (IDFA).</p>
    </section>

    <section>
      <h2>2. Subscriptions and Payments</h2>
      <p>The App offers optional weekly, monthly, and yearly subscription plans.</p>
      <p>All purchases are processed securely through Apple’s App Store.</p>
      <p>We do not access, store, or process any payment information.</p>
      <p>You may manage or cancel subscriptions anytime in the App Store account settings.</p>
    </section>

    <section>
      <h2>3. Data Security</h2>
      <p>Your collages, saved images, and imported photos remain stored locally on your device.</p>
      <p>We implement reasonable technical and organizational measures to help prevent unauthorized access, loss, or misuse.</p>
    </section>

    <section>
      <h2>4. Your Rights</h2>
      <p>You may revoke photo gallery permissions at any time through your device settings.</p>
      <p>You can stop all analytics collection by uninstalling the App.</p>
      <p>When the App is uninstalled, all locally stored data is permanently deleted from your device.</p>
    </section>

    <section>
      <h2>5. Children’s Privacy</h2>
      <p>The App is suitable for all ages. We do not knowingly collect personal information from children under 13.</p>
    </section>

    <section>
      <h2>6. Third-Party Services</h2>
      <p>
        The App uses the following third-party service: Google Firebase Analytics – used for anonymized usage statistics,
        crash diagnostics, and app performance improvements. Firebase may collect device identifiers and usage behavior,
        but not personal information.
      </p>
      <p>
        Firebase Privacy Policy:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
          https://policies.google.com/privacy
        </a>
      </p>
      <p>We do not share your data with any other third-party services.</p>
    </section>

    <section>
      <h2>7. Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically. Any changes will be reflected with an updated “Last Updated” date.</p>
    </section>

    <section>
      <h2>8. Contact Us</h2>
      <p>
        For questions about this Privacy Policy, contact us at:{' '}
        <a href="mailto:photo.custom.collage@outlook.com">photo.custom.collage@outlook.com</a>
      </p>
    </section>
  </article>
);

export default PrivacyPolicy;
