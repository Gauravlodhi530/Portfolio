'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { Trash2, Search, Filter, Mail, User, Phone, Calendar, Eye, EyeOff, RefreshCw } from "lucide-react";

type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [data, setData] = useState<Contact[]>([]);
  const [filteredData, setFilteredData] = useState<Contact[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'email'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const correctPassword = "123"; // 🔒 Change this to your secure password

  const handleLogin = () => {
    if (password === correctPassword) {
      setAuthorized(true);
      fetchData();
    } else {
      setError("Wrong password!");
      setPassword('');
    }
  };

  const handleLogout = () => {
    setAuthorized(false);
    setPassword('');
    setData([]);
    setFilteredData([]);
    setSearchTerm('');
    setSortBy('date');
    setSortOrder('desc');
  };

const fetchData = async () => {
    setLoading(true);
  try {
    const res = await axios.get("/api/contacts"); 
    if (res.data) {
        setData(res.data);
        setFilteredData(res.data);
    }
  } catch (err) {
    console.error("Failed to fetch contacts:", err);
      setError("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;
    
    try {
      await axios.delete(`/api/contacts/${id}`);
      setData(data.filter(contact => contact._id !== id));
      setFilteredData(filteredData.filter(contact => contact._id !== id));
      setNotification({ type: 'success', message: 'Contact deleted successfully!' });
      setTimeout(() => setNotification(null), 3000);
    } catch (err) {
      console.error("Failed to delete contact:", err);
      setNotification({ type: 'error', message: 'Failed to delete contact' });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  // Filter and sort data
  useEffect(() => {
    let filtered = data.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort data
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'email':
          aValue = a.email.toLowerCase();
          bValue = b.email.toLowerCase();
          break;
        case 'date':
        default:
          aValue = new Date(a.createdAt).getTime();
          bValue = new Date(b.createdAt).getTime();
          break;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredData(filtered);
  }, [data, searchTerm, sortBy, sortOrder]);

  // Statistics
  const totalContacts = data.length;
  const todayContacts = data.filter(contact => {
    const today = new Date().toDateString();
    return new Date(contact.createdAt).toDateString() === today;
  }).length;
  const thisWeekContacts = data.filter(contact => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return new Date(contact.createdAt) > weekAgo;
  }).length;

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-4">
        <div className="w-full max-w-md bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Admin Login
            </h2>
            <p className="text-slate-300 mt-2">Enter your credentials to access the dashboard</p>
          </div>
          
          <div className="space-y-4">
            <div className="relative">
          <input
                type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Admin Password"
                className="w-full p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 focus:border-blue-500 focus:outline-none transition-all duration-200"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-red-400 text-sm">
                {error}
              </div>
            )}
            
          <button
            onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Access Dashboard
          </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg transition-all duration-300 ${
          notification.type === 'success' 
            ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400' 
            : 'bg-red-500/20 border border-red-500/50 text-red-400'
        }`}>
          {notification.message}
        </div>
      )}
      
      {/* Header */}
      <div className="bg-slate-800/60 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-slate-300 mt-1">Manage your contact messages</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 hover:bg-red-500/30 transition-all duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Statistics Cards */}
        <div className=" md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Total Contacts</p>
                <p className="text-3xl font-bold text-white">{totalContacts}</p>
              </div>
              <div className="p-3 bg-blue-500/30 rounded-xl">
                <Mail className="text-blue-300" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-200"
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'name' | 'email')}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-200"
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="email">Sort by Email</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl hover:bg-slate-700/70 transition-all duration-200"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
              
              <button
                onClick={fetchData}
                disabled={loading}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl hover:bg-slate-700/70 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Refresh contacts"
              >
                <RefreshCw className={`${loading ? 'animate-spin' : ''}`} size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Contact List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-slate-400 mt-4">Loading contacts...</p>
          </div>
        ) : filteredData.length === 0 ? (
          <div className="text-center py-12">
            <Mail className="mx-auto text-slate-600" size={48} />
            <p className="text-slate-400 mt-4">
              {searchTerm ? 'No contacts found matching your search.' : 'No contact messages found.'}
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredData.map((item) => (
              <div key={item._id} className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="text-blue-400" size={20} />
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="text-cyan-400" size={20} />
                      <p className="text-slate-300">{item.email}</p>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="text-emerald-400" size={20} />
                      <p className="text-slate-300">{item.phone}</p>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">
                      <Calendar className="inline mr-2" size={16} />
                      {new Date(item.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteContact(item._id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all duration-200"
                    title="Delete contact"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                
                <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-300 leading-relaxed">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Detail Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Contact Details</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
        <div className="space-y-4">
              <div>
                <label className="text-slate-400 text-sm">Name</label>
                <p className="text-white font-semibold">{selectedContact.name}</p>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Email</label>
                <p className="text-white">{selectedContact.email}</p>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Phone</label>
                <p className="text-white">{selectedContact.phone}</p>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Message</label>
                <p className="text-white bg-slate-700/30 rounded-lg p-3 mt-1">{selectedContact.message}</p>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Date</label>
                <p className="text-white">{new Date(selectedContact.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
