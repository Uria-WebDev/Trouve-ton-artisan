import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <div className="container">
                <h2 className="underline padding-top-3">
                    Comment trouver mon artisan ?
                </h2>

                <div className="padding-top-3">
                    <h3>1) Choisir la catégorie d’artisanat dans le menu.</h3>
                    <p>Pour commencer, veuillez sélectionner la catégorie recherchée dans le menu ci dessus.</p>
                </div>

                <div className="padding-top-3">
                    <h3>2) Choisir un artisan.</h3>
                    <p>Sélectionnez l’artisan que vous souhaitez.</p>
                </div>

                <div className="padding-top-3">
                    <h3>3) Le contacter via le formulaire de contact.</h3>
                    <p>Vous pouvez contacter directement votre artisan via notre site.</p>
                </div>

                <div className="padding-top-3">
                    <h3>4) Une réponse sera apportée sous 48h.</h3>
                    <p>En cas de problème, veuillez contacter l’assistance du site.</p>
                </div>
            </div>

            <div className="container padding-top-3">
                <h2 className="underline text-center">
                    Artisans du mois
                </h2>

                <div className="row gap-4 margin-bottom-5-desktop margin-top-2">
                    <Link to='/artisan-1' className="col-sm-12 col-md background-lblue border-radius-5 border text-white padding-top-2 padding-bottom-1 decoration-none background-dblue-hov">
                        <h3>John Doe - Menuisier</h3>
                        <div className="text-right">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <p className="text-right">273 Bd Carnot, 72000 Le Mans</p>
                    </Link>

                    <Link to='/artisan-2' className="col-sm-12 col-md background-lblue border-radius-5 border text-white padding-top-2 padding-bottom-1 decoration-none background-dblue-hov">
                        <h3>Richard Dupond - Peintre</h3>
                        <div className="text-right">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <p className="text-right">52 Av. de Stalingrad, 21000 Dijon</p>
                    </Link>

                    <Link to='/artisan-3' className="col-sm-12 col-md background-lblue border-radius-5 border text-white margin-bottom-5-mobile padding-top-2 padding-bottom-1 decoration-none background-dblue-hov">
                        <h3>Phi&Co - Batiment</h3>
                        <div className="text-right">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <p className="text-right">Sq. Hopkinson, 13004 Marseille</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;