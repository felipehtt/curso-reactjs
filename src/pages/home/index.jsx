import './index.scss';
import { Link } from 'react-router-dom';

export default function Home() {

  return (

    <div className="pagina-home">

      <h1 className='title'>
        Estudos de ReactJS
        <i className='fa fa-heart'></i>
      </h1>

      <br />

      <h2>Estudando JSX</h2>

      <ul>

        <li>
          <Link to='/contato'>Ir para Contato</Link>
        </li>

      </ul>

    </div>

  );

}
