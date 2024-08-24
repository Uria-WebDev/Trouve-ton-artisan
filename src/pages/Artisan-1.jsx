import Profil from "../img/profil.png";

const Artisan1 = () => {
    return(
        <div className="container">
            <div className="row gap-4 margin-bottom-5-desktop margin-top-2">

                <div className="col-sm-12 col-md background-lblue border-radius-5 border text-white">
                    <div className="col-6"><img src={Profil} alt="Photo de profil" className="width-50 background-white" /></div>
                    <div className="col-6">
                        <h3 className="text-right">John Doe - Menuisier</h3>
                        <p className="text-right">273 Bd Carnot, 72000 Le Mans</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md">
                    <form>
                        <input type="text" placeholder="Nom" className="col-12 margin-bottom-2" />
                        <input type="text" placeholder="Prénom" className="col-12 margin-bottom-2" />
                        <textarea placeholder="Message" className="col-12" />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="background-green border-radius-5 width-50">
                                Contacter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Artisan1;