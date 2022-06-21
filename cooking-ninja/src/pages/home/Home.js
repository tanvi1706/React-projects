
import { useEffect, useState } from 'react';


import './Home.css';
// import { useFetch } from '../../components/Hooks/useFetch';
import { projectFirestore } from '../../firebase/config';
import RecipeList from '../../components/RecipeList';

export default function Home() {
    // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        setIsPending(true);
        // const unsub = 
        projectFirestore.collection("recipes").onSnapshot((snapshots) => {
            if(snapshots.empty){
                setError('No recipes to load');
                setIsPending(false);
            } else {
                let results = [];
                snapshots.docs.forEach(doc => {
                    results.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setData(results);
                setIsPending(false);
            }
        }, (err) => {
            setError(err.message);
            setIsPending(false);
        });

        // return () => unsub();
    }, []);
    
    return ( 
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data}/> }
        </div>
    );
}