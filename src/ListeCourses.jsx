import { useState } from "react";
function ListeCourses(){
    const [articles,setArticles] = useState([]);
    const[nouvelArticle,setNouvelArticle]=useState("");
    const ajouterArticle =() =>{
        if(nouvelArticle.trim()!==""){
            setArticles([...articles,nouvelArticle]);
            setNouvelArticle("");
        }
    };
return(
    <div>
        <h2>Liste de courses</h2>
        <input
        type="text"
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.valueAsDate)}
        />
        <button onClick={ajouterArticle}>Ajouter</button>
        <ul>
            {articles.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);
}
export default ListeCourses;