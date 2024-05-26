import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - VeryFire',
  description:
    'This privacy policy explains how VeryFire collects, uses, and protects the data of users of our Google Sheets addon. We do not sell, trade, or rent personal information to others. If you have any questions or concerns, please contact us.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-left">
        Privacy Policy
      </h1>
      <p className="mb-4 text-xl">
        This Privacy Policy governs the manner in which Email VeriFire collects, uses, maintains, and discloses
        information collected from users (&quot;Users&ldquo;) of the email verification addon (&quot;Addon&ldquo;) provided by Email VeriFire.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">
        1. Information Collection
      </h2>

      <p className="mb-6">
        <strong>1.1 Personal Information:</strong> The Addon collects personal identification information from Users,
          such as email addresses. This information is obtained directly from the spreadsheet and is required in order to
          use the Addon. Users may not use the Addon anonymously, as authentication and access to the spreadsheet data are
          required for its operation.
        </p>

      <p className="mb-6">
        <strong>1.2 Non-Personal Information:</strong> Additionally, the Addon may collect non-personal identification
          information about Users whenever they interact with it. Non-personal identification information may include the
          browser name, the type of computer, and technical information about Users means of connection to the Addon.
        </p>

      <h2 className="text-2xl font-bold mb-4 text-left">
        2. Information Use
      </h2>

      <p className="mb-6">
        <strong>2.1 Email Verification:</strong> The primary purpose of collecting email addresses is to provide email
          verification services to Users. We may use the email addresses provided by Users to verify the validity of the
          email addresses and return verification results to Users.
        </p>

      <p className="mb-6">
        <strong>2.2 Improvement of Services:</strong> We may use feedback provided by Users to improve our products and
          services. We may also use collected information for troubleshooting, data analysis, testing, research, and
          statistics purposes.
        </p>

      <h2 className="text-2xl font-bold mb-4 text-left">
        3. Information Protection
      </h2>

      <p className="mb-6">
        <strong>3.1 Data Security:</strong> We adopt appropriate data collection, storage, and processing practices and
          security measures to protect against unauthorized access, alteration, disclosure, or destruction of Users
          personal information and data stored in the Addon.
        </p>

      <h2 className="text-2xl font-bold mb-4 text-left">
        4. Information Disclosure
      </h2>

      <p className="mb-6">
        <strong>4.1 Third-Party Services:</strong> We do not sell, trade, or rent Users personal identification
          information to others. We may use third-party service providers to assist us in providing and maintaining the
          Addon or to perform services on our behalf, such as email verification services. These third parties are
          contractually obligated to keep the information confidential and secure.
        </p>

      <h2 className="text-2xl font-bold mb-4 text-left">
        5. Changes to this Privacy Policy
      </h2>

      <p className="mb-6">
        <strong>5.1 Updates:</strong> Email VeriFire has the discretion to update this Privacy Policy at any time. When
          we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this
          page for any changes to stay informed about how we are helping to protect the personal information we collect.
        </p>

      <h2 className="text-2xl font-bold mb-4 text-left">
        6. Acceptance of these Terms
      </h2>

      <p className="mb-6">
        <strong>6.1 Consent:</strong> By using the Addon, Users signify their acceptance of this Privacy Policy. If Users
          do not agree to this policy, they should not use the Addon. Continued use of the Addon following the posting of
          changes to this policy will be deemed as acceptance of those changes.
        </p>

      <h2 className="text-2xl font-bold mb-4 text-left">
        7. Contact Us
      </h2>

      <p className="mb-6">
        <strong>7.1 Questions:</strong> If Users have any questions about this Privacy Policy, the practices of the
          Addon, or their dealings with the Addon, please contact us at <strong>Contact Us</strong> page.
        </p>
    </div>
  );
}

