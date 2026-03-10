import './index.scss';
import { Link } from 'react-router-dom';



export default function Contact() {

    return (

        <div className='pagina-contato pagina'>

            <header className='cabecalho'>

                <Link to='/'>
                    <i className='fa fa-arrow-left voltar'></i>
                </Link>

                <h1 className='title'>Contato</h1>

            </header>

            <section className='secao'>

                <h1>Entre em contato conosco!</h1>

                <img className='icone' src="/assets/images/icone-contato.png" alt='' />

            </section>


        </div>

    )


}