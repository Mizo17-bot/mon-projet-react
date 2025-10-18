import { useState } from "react";
function Formulaire(){
    const[nom,setnom] = useState("");
    const handleclick = () => {
        alert('Bonjour, ${nom} !');
    };
return(
    <div>
        <input 
        type="text"
        value={nom}
        onChange={(e) => setnom(e.target.value)}
        placeholder="Entrez votre nom"
        />
        <button onClick={handleclick}>Dire Bonjour</button>
    </div>
);
}
export default Formulaire;