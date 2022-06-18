import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Searchbar.module.css';

export default function Searchbar() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate(`/search?q=${term}`);
    };
    return (
        <div className={classes.searchbar}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    )
};