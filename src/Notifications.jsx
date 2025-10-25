import React, { useState, useEffect } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([
        'Bienvenue sur l’application ',
        'Vous avez reçu un nouveau message ',
        'Votre profil a été mis à jour ',
      ]);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Chargement des notifications...</p>;

  return (
    <div style={{ background: '#eef2ff', padding: 15, borderRadius: 10 }}>
      <h3> Notifications</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
