import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import Head from './Head';
import useFetch from '../Hooks/useFetch';
import Loading from './Loading';

const Produto = () => {
  const params = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [params, request]);

  if (error) return <p>{error}</p>;
  if (loading) return <Loading />;
  if (data)
    return (
      <article className={styles.produto}>
        <Head title={`Ranek | ${data.nome}`} description="Página de produto" />
        <section>
          {data.fotos.map((foto, index) => (
            <img src={foto.src} alt={foto.titulo} key={index} />
          ))}
        </section>
        <section className={styles.produtoInfos}>
          <h1>{data.nome}</h1>
          <p className={styles.produtoPreco}>R$ {data.preco}</p>
          <p>{data.descricao}</p>
        </section>
      </article>
    );
};

export default Produto;
