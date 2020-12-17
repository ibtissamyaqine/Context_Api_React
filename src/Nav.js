import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () =>{
    const [movies, setMovies] = useContext(MovieContext);
    return(
        //how many Movies i have in my list
        <div>
            <nav>
                <h3>Btissam YAQINE</h3>
                <h3>List of The Movie: {movies.length}</h3>
            </nav>
            
        </div>
    );
}


export default Nav;