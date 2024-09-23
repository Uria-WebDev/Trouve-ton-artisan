import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import data from "../datas/datas.json";

const ArtisanCard = () => {
    const items = data;

    return(
        <div className='container'>
            {/* Cartes d'artisans */}
            <div className="row gap-4 margin-bottom-5-desktop margin-top-2">

                {items.map((item, index) => item.top === true && (

                <div className="col-sm-12 col-md-5 col-lg background-lblue border-radius-5 border background-dblue-hov">
                    <Link key={index} to='/artisan' className='text-white decoration-none padding-top-2 padding-bottom-1'>
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

export default ArtisanCard;