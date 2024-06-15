import React, { useEffect, useState } from 'react';
import HttpRequestForm from './components/HttpRequestForm';
import RequestHistory from './components/RequestHistory';

function App() {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/requests');
      const data = await res.json();
      setRequests(data);
    } catch (error) {
      console.error("Failed to fetch request history:", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#360033] to-[#0b8793] py-6 flex flex-col items-center backdrop-blur-md">
      <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-purple-200 to-teal-200 shadow-lg mb-8">REST Client Application</h1>
      <div className="flex space-x-4 w-full max-w-8xl p-5">
        <HttpRequestForm fetchRequests={fetchRequests} />
        <RequestHistory requests={requests} />
      </div>
    </div>
  );
}

export default App;
