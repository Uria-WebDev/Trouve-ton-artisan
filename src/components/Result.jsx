import { Link, useLocation } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';
import data from "../datas/datas.json";

const Result = () => {
    const { state } = useLocation();
    const searchResult = state.searchTerm;

    const filteredData = data.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchResult.toLowerCase()));
      });

      const [setIndex, getIndex] = useState("");

      return(
        // Cartes d'artisans //
        <div className="container padding-top-3">
            <div className="row gap-4 margin-bottom-5-desktop margin-top-2">

                {filteredData.map((item, index) => (

                <div className="col-sm-12 col-md-5 col-lg-3 background-lblue border-radius-5 border background-dblue-hov">
                    <Link onClick={e => getIndex(e.target.value)} key={index} state={{ setIndex }} to='/artisan' className='text-white decoration-none padding-top-2 padding-bottom-1'>
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