"use client";

import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import data from "../datas/datas.json";
import Profil from "../img/profil.png";

const Artisan = () => {

    {/* Récupération de la valeur de l'id de Result.jsx */}
    const { state } = useLocation();
    const searchId = state.setId;

    {/* Trie des résultats par rapport à la valeur récupérée */}
    const filteredData = data.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchId.toLowerCase()));
      });

    const [setName, getName] = useState("");
    const [setSurname, getSurname] = useState("");
    const [setMessage, getMessage] = useState("");

    return(
        <div className="container margin-bottom-20">

            {filteredData.map((item, index) => item.id === searchId && (
            
            <div>
                <div className="row gap-4 margin-top-2">

                    <div key={index} className="col-sm-12 col-md background-lblue border-radius-5 border text-white padding-top-1">
                        <div className="row">
                            <div className="col"><img src={Profil} alt="Photo de profil" className="width-60 background-white" /></div>
                            <div className="col">
                                <h3 className="text-right">{item.name} -<br />{item.specialty}</h3>
                            </div>
                        </div>
                        <div className="text-right">
                            <Rating initialValue={item.note} readonly="true" size="25" fillColor="#82B864" />
                        </div>
                        <p className="text-right">{item.location}</p>
                        <a href={item.website} className='text-white decoration-none underline-hov'>
                            {item.website}
                        </a>
                    </div>

                    <div className="col-sm-12 col-md margin-bottom-2">
                        <form>
                            <input type="text" placeholder="Nom" className="col-12 margin-bottom-2"
                            value={setName} onChange={e => getName(e.target.value)} />

                            <input type="text" placeholder="Prénom" className="col-12 margin-bottom-2"
                            value={setSurname} onChange={e => getSurname(e.target.value)} />

                            <textarea placeholder="Message" className="col-12" rows="5"
                            value={setMessage} onChange={e => getMessage(e.target.value)} />

                            <div className="d-grid gap-2 d-flex justify-content-end">
                                <button onClick={async (e) => {
                                    e.preventDefault();
                                    await fetch('../api/emails', { 
                                        method: "POST",
                                        body: JSON.stringify({
                                            name: setName,
                                            surname: setSurname,
                                            message: setMessage,
                                        })
                                    });
                                    alert('Email envoyer à ' + item.email);
                                }} 
                                state={{ setName, setSurname, setMessage }} className="background-green border-radius-5 padding-1 width-50">
                                    Contacter
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                <div>
                    <h2 className="underline padding-top-3">
                        A propos
                    </h2>
                    <p>{item.about}</p>
                </div>
            </div>

            ))}
        </div>
    )
}

export default Artisan;