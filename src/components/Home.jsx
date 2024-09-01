import ArtisanCard from "./ArtisanCard.jsx";

const Home = () => {
    return(
        // Tutoriel //
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
                <ArtisanCard />
            </div>
        </div>
    )
}

export default Home;