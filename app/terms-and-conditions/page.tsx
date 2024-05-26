import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - VeryFire',
  description:
    'These terms and conditions outline the rules and regulations for the use of the VeryFire email verification addon. By using the addon, you agree to be bound by these terms. If you do not agree with any part of these terms, you may not use the addon. These terms are subject to change at any time, without notice.',
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-left">Terms and Conditions</h1>
      <p className="mb-4 text-xl">
        These Terms and Conditions (&quot;Terms&ldquo;) govern your use of the email verification addon
        (&quot;Addon&ldquo;) provided by Email VeriFire, a Google Sheets addon available through the Google
        Workspace Marketplace. By using the Addon, you agree to be bound by these Terms. If you do
        not agree with any part of these Terms, you may not use the Addon.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">1. License</h2>
      <p>
        <strong>1.1 Grant of License:</strong> Email VeriFire grants you a non-exclusive,
        non-transferable, revocable license to use the Addon for your personal or commercial
        purposes, subject to these Terms and any additional guidelines or policies provided by Email
        VeriFire.
      </p>

      <p>
        <strong>1.2 Restrictions:</strong> You may not sublicense, sell, rent, lease, distribute, or
        otherwise transfer the Addon or any portion thereof. You may not modify, adapt, translate,
        reverse engineer, decompile, or disassemble the Addon or attempt to create derivative works
        based on the Addon.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">2. Use of Addon</h2>
      <p>
        <strong>2.1 Email Verification:</strong> The Addon is designed to verify email addresses
        provided as input and return their verification status. While we strive to provide accurate
        and reliable results, we cannot guarantee the accuracy or completeness of the verification
        results.
      </p>

      <p>
        <strong>2.2 Data Collection:</strong> By using the Addon, you consent to the collection and
        processing of data necessary for the operation of the Addon. We may collect and store email
        addresses and verification results for the purpose of improving the Addon and providing
        support to users.
      </p>

      <p>
        <strong>2.3 Prohibited Uses:</strong> You may not use the Addon for any illegal or
        unauthorized purpose. You agree to comply with all applicable laws and regulations regarding
        your use of the Addon.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">3. Intellectual Property</h2>
      <p>
        <strong>3.1 Ownership:</strong> Email VeriFire retains all rights, title, and interest in
        and to the Addon, including all intellectual property rights. These Terms do not grant you
        any right, title, or interest in the Addon or any of its components except as expressly
        provided herein.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">4. Disclaimer of Warranties</h2>
      <p>
        <strong>4.1 No Warranty:</strong> THE ADDON IS PROVIDED &quot;AS IS&ldquo; WITHOUT WARRANTY OF ANY
        KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. Email VeriFire DISCLAIMS ALL WARRANTIES,
        INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">5. Limitation of Liability</h2>
      <p>
        <strong>5.1 Limitation:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, Email VeriFire
        SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE ADDON, INCLUDING, WITHOUT LIMITATION,
        ANY DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR PROCUREMENT OF
        SUBSTITUTE GOODS OR SERVICES.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">6. Modifications</h2>
      <p>
        <strong>6.1 Changes to Terms:</strong> Email VeriFire reserves the right to modify or amend
        these Terms at any time. Any changes to these Terms will be effective immediately upon
        posting. Your continued use of the Addon after the posting of any revised Terms constitutes
        your acceptance of such changes.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">7. Governing Law</h2>
      <p>
        <strong>7.1 Jurisdiction:</strong> These Terms shall be governed by and construed in
        accordance with the laws of Email VeriFire, without regard to its conflict of laws
        provisions.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">8. Payment Terms</h2>
      <p>
        <strong>8.1 Credits:</strong> If the Addon involves the use of credits for verification
        services, any purchased or allocated credits shall never expire and remain available for use
        until depleted or until termination of the user&apos;s account, whichever occurs first.
      </p>

      <p>
        <strong>8.2 Pay-as-You-Go:</strong> Alternatively, users may have the option to pay for
        verification services on a pay-as-you-go basis. In such cases, users shall be charged only
        for the number of verifications performed, with no expiration date imposed on unused
        credits.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-left">9. Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms, please contact us at{' '}
        <strong>Contact Us</strong> page.
      </p>
    </div>
  );
}

