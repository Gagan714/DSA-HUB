import React, { useState } from 'react';

const App = () => {
  const [handle, setHandle] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/codeforces/user?handle=${handle}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching Codeforces data:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Codeforces Handle Checker</h1>
      <input
        type="text"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
        placeholder="Enter Codeforces handle"
        className="border px-2 py-1 rounded mr-2"
      />
      <button onClick={fetchUserData} className="bg-blue-500 text-white px-4 py-1 rounded">
        Fetch
      </button>

      {userData && userData.status === "OK" && (
        <div className="mt-4">
          <h2 className="font-semibold">User: {userData.result[0].handle}</h2>
          <p>Rating: {userData.result[0].rating || 'Unrated'}</p>
          <p>Rank: {userData.result[0].rank || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default App;
