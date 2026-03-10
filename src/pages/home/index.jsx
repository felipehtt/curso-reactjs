import './index.scss';
import { Link } from 'react-router-dom';




export default function Home() {

  return (

    <div className="pagina-home pagina">

      <header className='cabecalho'>

        <h1 className='title'>
          Estudos de ReactJS
          <i className='fa fa-heart'></i>
        </h1>

      </header>

      <section className='secao'>

        <ul>

          <li>
            <Link to='/contato'>Ir para Contato</Link>
          </li>

          <li>
            <Link to='/eventos'>Ir para Eventos</Link>
          </li>

          <li>
            <Link to='/varEstado'>Ir para Variável de Estado</Link>
          </li>

        </ul>

      </section>




    </div>

  );

}
