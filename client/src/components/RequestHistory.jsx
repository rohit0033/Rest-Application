import React, { useEffect, useState } from 'react';

const TruncatedText = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <div>
      {isTruncated ? `${text.substring(0, maxLength)}...` : text}
      <button onClick={toggleTruncation} className="text-blue-500 ml-2">
        {isTruncated ? 'Read More...' : 'Show Less'}
      </button>
    </div>
  );
};

const RequestHistory = ({ requests }) => {
  return (
    <div className="flex-1 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:z-15 from-blue-500 to-teal-500 p-8 bg-white rounded-xl shadow-md space-y-4 ">
      <h3 className="text-xl font-semibold text-gray-700">Request History</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Method</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Response</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.method}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.url}</td>
                <td className="px-6 py-4 whitespace-pre-wrap text-sm text-gray-500">
                  <TruncatedText text={JSON.stringify(request.response, null, 2)} maxLength={50} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestHistory;
