import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';
export default function UserProfile(){
    const {user,toggleConnection}=useContext(UserContext);
     return (
    <div style={{ marginBottom: 20, background: '#f9f9f9', padding: 15, borderRadius: 10 }}>
      <h2>Profil utilisateur</h2>
      <p><strong>Nom :</strong> {user.name}</p>
      <p>
        <strong>Status :</strong> 
        {user.connected ? ' Connecté 🟢' : ' Déconnecté 🔴'}
      </p>
      <button onClick={toggleConnection}>
        {user.connected ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </div>
  );
}