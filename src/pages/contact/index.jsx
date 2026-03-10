import './index.scss';

import { Link } from 'react-router-dom';

export default function Contact() {

    return (

        <div className='pagina-contato'>

            <Link to='/'>
                <i className='fa fa-arrow-left voltar'></i>
            </Link>

            <h1 className='title'>Contato</h1>

            <img className='icone' src="/assets/images/icone-contato.png" alt=''/>

        </div>

    )


}