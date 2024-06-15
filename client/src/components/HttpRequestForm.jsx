import React, { useRef, useState, useEffect } from 'react';

const HttpRequestForm = ({ fetchRequests }) => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState('{}');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to recalculate
      textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [body]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method, url, headers, body }),
    }).then(res => res.json());

    setResponse(res.response);
    fetchRequests(); // Fetch the updated request history
  };

  return (
    <div className="flex-1 cursor-pointer hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-teal-500 p-6 bg-white rounded-xl shadow-md space-y-4 transition-all duration-300 relative hover:z-10  ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Method</label>
          <select
            value={method}
            onChange={e => setMethod(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">URL</label>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Headers</label>
          <textarea
            value={headers}
            onChange={e => setHeaders(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Body</label>
          <textarea
            ref={textareaRef}
            value={body}
            onChange={e => setBody(e.target.value)}
            onInput={adjustHeight} // Adjust height as user types
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Request
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Response</h3>
        <pre className="mt-2 p-4 bg-gray-100 rounded-md overflow-x-auto overflow-y-scroll max-h-64  whitespace-pre-wrap">{response}</pre>
      </div>
    </div>
  );
};

export default HttpRequestForm;
