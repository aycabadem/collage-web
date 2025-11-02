import React from 'react';

const PrivacyPolicy = () => (
  <article className="LegalPage">
    <header>
      <h1>Privacy Policy</h1>
      <p className="LegalPage-meta">Last Updated: November 2, 2025</p>
      <p className="LegalPage-subtitle">
        This Privacy Policy explains how Custom Photo Collage handles user data and permissions.
      </p>
    </header>

    <section>
      <h2>1. Information We Collect</h2>
      <p>We do not collect personal information such as your name, email, or contact details.</p>
      <p>
        The app only requests access to your photo gallery so that you can select photos to create collages. These images
        stay on your device and are never uploaded, shared, or stored on our servers.
      </p>
    </section>

    <section>
      <h2>2. Subscriptions and Payments</h2>
      <p>Custom Photo Collage offers optional subscription plans (weekly, monthly, or yearly).</p>
      <p>All purchases and subscription management are handled securely through Google Play or the App Store.</p>
      <p>We do not store or process any payment information ourselves.</p>
    </section>

    <section>
      <h2>3. Data Security</h2>
      <p>All the collages and media you create in the app are stored locally on your device.</p>
      <p>We do not access, save, or share your content externally.</p>
    </section>

    <section>
      <h2>4. Your Rights</h2>
      <p>You can revoke gallery permissions anytime through your device settings.</p>
      <p>If you uninstall the app, all locally saved data will be permanently deleted.</p>
    </section>

    <section>
      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Any changes will appear with a new “Last Updated” date at the top
        of this page.
      </p>
    </section>

    <section>
      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:photo.custom.collage@outlook.com">photo.custom.collage@outlook.com</a>
      </p>
    </section>
  </article>
);

export default PrivacyPolicy;
