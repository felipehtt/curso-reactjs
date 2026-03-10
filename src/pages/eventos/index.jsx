import './index.scss';

export default function Eventos() {


    function clicou() {

        alert('Usuário clicou');

    }

    function movimentouMouse() {

        alert('Mouse passou aqui');

    }

    function alterouValor(e) {

        let novoValor = e.target.value; //string

        alert('Usuário alterou (input/select) para: ' + novoValor);

    }

    function alterouCheck(e) {

        let novoValor = e.target.checked; //boolean

        alert('Usuário alterou (input[checked/radio]) para: ' + novoValor);

    }


    return (

        <div className='pagina-eventos pagina'>

            <header className='cabecalho'>

                <h1>ReactJS | Eventos</h1>

            </header>

            <section className='secao'>

                <h1></h1>

                <p onClick={clicou} onMouseMove={movimentouMouse}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro illum eveniet illo sequi veniam fugit, optio modi aliquid voluptatibus dicta consequatur alias sit inventore, eius quo at nisi libero hic.</p>

                <input onChange={alterouValor} type="text" placeholder='Digite aqui alguma coisa' />

                <textarea onChange={alterouValor} placeholder='Digite aqui'></textarea>

                <select onChange={alterouValor}>

                    <option>Selecione</option>
                    <option>Item 1</option>
                    <option>Item 2</option>

                </select>

                <div className='grupo'>

                    <input type="checkbox" onChange={alterouCheck}/> Opção 1
                    <input type="checkbox" onChange={alterouCheck}/> Opção 1

                </div>

                <div className='grupo'>

                    <div>
                        <input type="radio" name='gpo' onChange={alterouCheck}/> Opção 1
                    </div>

                    <div>
                        <input type="radio" name='gpo'/> Opção 1
                    </div>

                </div>

                <button onClick={clicou}> Clique aqui </button>

            </section>

        </div>

    )

}