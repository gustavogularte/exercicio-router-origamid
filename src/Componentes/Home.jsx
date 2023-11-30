import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Head from './Head';
import useFetch from '../Hooks/useFetch';
import Loading from './Loading';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Home = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto');
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <Loading />;
  if (data)
    return (
      <main className={styles.home}>
        <Head title="Ranek" description="Página da Home" />
        {data.map((produto) => (
          <Link key={produto.id} to={'produto/' + produto.id}>
            <section>
              <img src={produto.fotos[0].src} alt="" />
              <h2>{produto.nome}</h2>
            </section>
          </Link>
        ))}
      </main>
    );
};

export default Home;
