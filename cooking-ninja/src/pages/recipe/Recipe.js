import { useParams } from 'react-router-dom';


import './Recipe.css';
//import { useFetch } from '../../components/Hooks/useFetch';
import { useTheme } from '../../components/Hooks/useTheme';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';

export default function Recipe() {
    const { id } = useParams();
    // const url = "http://localhost:3000/recipes/" + id;
    // const { data: recipe, isPending, error} = useFetch(url);
    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        setIsPending(true);
        const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot( (doc) => {
            if(doc.exists){
                setIsPending(false);
                setRecipe(doc.data());
            } else {
                setIsPending(false);
                setError('Could not find that recipe');
            }
        });

        return () => unsub()
    },[id]);

    const {mode} = useTheme();

    const updateHandler = () => {
        projectFirestore.collection("recipes").doc(id).update({
            title: 'Something completely different!'
        });
    };
    return (
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (<>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p className='cook'>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p class="method">{recipe.method}</p>
            </>)}
            <button onClick={updateHandler}>Update Me!</button>
        </div>
    );
};