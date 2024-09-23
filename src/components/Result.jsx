import { Link, useLocation } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';
import data from "../datas/datas.json";

const Result = () => {

    {/* Récupération de la valeur de la barre de recherche de App.js */}
    const { state } = useLocation();
    const searchResult = state.searchTerm;

    {/* Trie des résultats par rapport à la valeur récupérée */}
    const filteredData = data.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchResult.toLowerCase()));
      });

      const [setId, getId] = useState("");

      return(
        <div className="container margin-bottom-20">
            <h2 className="underline padding-top-3">
                Résultat de votre recherche
            </h2>
            <div className="row gap-4 margin-bottom-5-desktop margin-top-2">

                {filteredData.map((item, index) => (

                <div className="col-sm-12 col-md-5 col-lg-3 background-lblue border-radius-5 border background-dblue-hov">

                    {/* Récupération de la valeur de l'id */}
                    <Link className='text-white decoration-none padding-top-2 padding-bottom-1' 
                    value={setId} onClick={e => getId(e.target.value)} key={index} state={{ setId : item.id }} to='/artisan'>
                        <h3>{item.name} -<br /> {item.specialty}</h3>
                        <div className="text-right">
                            <Rating initialValue={item.note} readonly="true" size="25" fillColor="#82B864" />
                        </div>
                        <p className="text-right">{item.location}</p>
                    </Link>
                </div>
                ))}
            </div>
        </div>
      )
}

export default Result;