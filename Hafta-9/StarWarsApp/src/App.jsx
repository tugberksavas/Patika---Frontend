import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStarships, searchStarships } from '../API';

function Starship() {
    const [starships, setStarships] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // searchQuery state'ini tanımla

    useEffect(() => {
        const fetchStarships = async () => {
            try {
                const data = await getStarships();
                setStarships(data.results); // datanın result arrayini oku.
            } catch (error) {
                console.error('Error', error);
            }
        };

        fetchStarships();
    }, []);
    // Arama sorgusunu güncelleyen fonksiyon
    const handleSearchChange = (event) => {
        event.preventDefault();
        const fetchSearchStarships = async () => {
            try {
                const data = await searchStarships(searchQuery);
                setStarships(data.results); // datanın result arrayini oku.
            } catch (error) {
                console.error('Error', error);
            }
        };

        fetchSearchStarships();
    };

    const handleChange = (e1) => {
        setSearchQuery(e1.target.value);
    };

    return (
        <div>
            <h2>Starships</h2>
            {/* Arama kutusu */}
            <input style={{ color: 'black' }}
                type="text"
                placeholder=""
                value={searchQuery}
                onChange={handleChange}
            />
            <button onClick={handleSearchChange}> Search </button>
            <div className='starships'>
                {starships.map((starship, index) => (
                    <div key={index} className="card">
                        {/* hepsinin farklı bir url'i olsun. */}
                        <Link to={`/starships/${index + 1}`} className="card-link">{starship.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Starship;