'use client'
import axios from "axios";
import { useState } from "react";


type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: number;
  message: string;
  createdAt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [data, setData] = useState<Contact[]>([]);
  const [error, setError] = useState('');

  const correctPassword = "123"; // 🔒 Change this to your secure password

  const handleLogin = () => {
    if (password === correctPassword) {
      setAuthorized(true);
      fetchData();
    } else {
      setError("Wrong password!");
    }
  };

const fetchData = async () => {
  try {
    const res = await axios.get("/api/contacts"); 
    if (res.data) {
      setData(res.data.reverse()); 
    }
  } catch (err) {
    console.error("Failed to fetch contacts:", err);
  }
};
// bg-[url('/path/to/image.jpg')] bg-cover bg-center h-64 w-full
  if (!authorized) {
    return (
      <div className=" min-h-screen flex items-center justify-center text-white p-4">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Admin Password"
            className="w-full p-3 rounded-md bg-zinc-800 border border-gray-600 mb-2"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
          >
            Access Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      {data.length === 0 ? (
        <p>No contact messages found.</p>
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item._id} className="border border-gray-700 p-4 rounded-md">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phone}</p>
              <p><strong>Message:</strong> {item.message}</p>
              <p className="text-sm text-gray-400 mt-2">{new Date(item.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
