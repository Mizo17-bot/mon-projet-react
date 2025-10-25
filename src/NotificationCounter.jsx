import React, { useState } from 'react';

export default function NotificationCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: 20, background: '#fff5e6', padding: 15, borderRadius: 10 }}>
      <h3> Compteur de notifications lues</h3>
      <p>Notifications lues : {count}</p>
      <button onClick={() => setCount(count + 1)}>Marquer une notification lue</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 10 }}>
        Réinitialiser
      </button>
    </div>
  );
}
