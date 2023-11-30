import imgContato from '../img/contato.jpg';
import styles from './Contato.module.css';
import Head from './Head';

const Contato = () => {
  return (
    <article className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Página de contato" />
      <section className={styles.contatoPerfil}>
        <div>
          <img src={imgContato} alt="Gustavo Gularte Arend" />
        </div>
        <h2>Gustavo Gularte Arend</h2>
        <p>Programador front end</p>
      </section>
      <section className={styles.contatoLista}>
        <h1>Entre em contato.</h1>
        <ul>
          <li>gustavorgularte@gmail.com</li>
          <li>@gustavoGulArend</li>
        </ul>
      </section>
    </article>
  );
};

export default Contato;
