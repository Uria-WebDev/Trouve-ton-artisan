import ErreurMsg from '../img/erreur-404.png';

const NotFound = () => {
    return(
        <div className='contaner'>
            <h2 className='text-center margin-bottom-2 margin-top-1'>Oups ! une erreur est survenue.</h2>
            <img src={ErreurMsg} alt='Erreur 404' className='mx-auto d-block width-50 margin-bottom-2' />
            <h3 className='text-center text-red margin-bottom-2'>Erreur 404 - Page introuvable.</h3>
        </div>
    )
}

export default NotFound;