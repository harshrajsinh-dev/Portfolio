import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔐 Route protection
  if (!localStorage.getItem("isAdmin")) {
    return <Navigate to="/admin" />;
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("https://portfolio-rh2g.onrender.com/api/contact/");
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Contact Messages
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : contacts.length === 0 ? (
        <p className="text-slate-500">No messages found</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="w-full text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Message</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="p-4">{item.name}</td>
                  <td className="p-4 text-blue-600">{item.email}</td>
                  <td className="p-4 max-w-md">{item.message}</td>
                  <td className="p-4 text-sm text-slate-500">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
