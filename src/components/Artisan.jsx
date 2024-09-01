import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import data from '../datas/datas.json';
import Profil from "../img/profil.png";

const Artisan = () => {
    const { state } = useLocation();
    const searchIndex = state.setIndex;

    const filteredData = data.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchIndex.toLowerCase()));
      });

    return(
        <div className="container">
            <div className="row gap-4 margin-bottom-5-desktop margin-top-2">

            {filteredData.map((item, index) => (

                <div key={index} className="col-sm-12 col-md background-lblue border-radius-5 border text-white padding-top-1">
                    <div className="row">
                        <div className="col"><img src={Profil} alt="Photo de profil" className="width-60 background-white" /></div>
                        <div className="col">
                            <h3 className="text-right">{item.name}</h3>
                        </div>
                    </div>
                    <div className="text-right">
                        <Rating initialValue={item.note} readonly="true" size="25" fillColor="#82B864" />
                    </div>
                    <p className="text-right">{item.location}</p>
                </div>
            ))}

                <div className="col-sm-12 col-md margin-bottom-2">
                    <form>
                        <input type="text" placeholder="Nom" className="col-12 margin-bottom-2" />
                        <input type="text" placeholder="Prénom" className="col-12 margin-bottom-2" />
                        <textarea placeholder="Message" className="col-12" rows="5" />
                        <div className="d-grid gap-2 d-flex justify-content-end">
                            <button className="background-green border-radius-5 padding-1 width-50">
                                Contacter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Artisan;