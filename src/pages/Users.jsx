import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(err => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Foydalanuvchilar ro‘yxati</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="p-4 border rounded shadow">
            <img src={user.image} alt={user.firstName} className="w-24 h-24 rounded-full mx-auto mb-2" />
            <h2 className="text-lg font-semibold text-center">{user.firstName} {user.lastName}</h2>
            <p className="text-sm text-center text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
