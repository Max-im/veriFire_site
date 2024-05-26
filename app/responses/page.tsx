import React from 'react'

export default function Responses() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Response to Verification Requests</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Note</th>
              <th className="px-4 py-2 border border-gray-300">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Valid</td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300">
                SMTP server accepted email
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Valid</td>
              <td className="px-4 py-2 border border-gray-300">Recommended</td>
              <td className="px-4 py-2 border border-gray-300">
                SMTP server accepted email. The deliverability rank is more than 97%
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Valid</td>
              <td className="px-4 py-2 border border-gray-300">Accept all</td>
              <td className="px-4 py-2 border border-gray-300">
                Email address is valid and the server accepts all emails, including invalid ones
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Valid</td>
              <td className="px-4 py-2 border border-gray-300">Non corporative email</td>
              <td className="px-4 py-2 border border-gray-300">
                Email address not associated with a corporate or business domain
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Valid</td>
              <td className="px-4 py-2 border border-gray-300">Role Email</td>
              <td className="px-4 py-2 border border-gray-300">
                Email address is valid but belongs to a role or function rather than an individual
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Valid</td>
              <td className="px-4 py-2 border border-gray-300">Disposable</td>
              <td className="px-4 py-2 border border-gray-300">
                Email address is temporary or disposable
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Invalid</td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <td className="px-4 py-2 border border-gray-300">
                The email was rejected by the SMTP server
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Invalid</td>
              <td className="px-4 py-2 border border-gray-300">Please try &lt;email&gt;</td>
              <td className="px-4 py-2 border border-gray-300">
                There was an issue with this email. The email in suggestion contains an alternative spelling which is
                more likely to be the correct email address
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Invalid</td>
              <td className="px-4 py-2 border border-gray-300">Invalid domain</td>
              <td className="px-4 py-2 border border-gray-300">
                The domain part of this email address is not exist
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Invalid</td>
              <td className="px-4 py-2 border border-gray-300">Invalid email</td>
              <td className="px-4 py-2 border border-gray-300">
                This email address itself is not valid (Is not according to RFC standards)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Invalid</td>
              <td className="px-4 py-2 border border-gray-300">Exceeded storage</td>
              <td className="px-4 py-2 border border-gray-300">
                The inbox for this email address has exceeded its storage limit
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Invalid</td>
              <td className="px-4 py-2 border border-gray-300">No MX record</td>
              <td className="px-4 py-2 border border-gray-300">
                There is no MX (Mail Exchange) record for the domain of this email address
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Unknown</td>
              <td className="px-4 py-2 border border-gray-300">Verifying...</td>
              <td className="px-4 py-2 border border-gray-300">
                Verification process for this email address is currently underway
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Unknown</td>
              <td className="px-4 py-2 border border-gray-300">Please try again later</td>
              <td className="px-4 py-2 border border-gray-300">
                There was an issue verifying this email address. Please try again later
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

