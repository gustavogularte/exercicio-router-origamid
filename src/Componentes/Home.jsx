import React from 'react';
import styles from './Home.module.css'

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Home = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto'
      );
      const json = await response.json();
      setProdutos(json);
    }
    fetchProdutos();
  }, []);

  return (
    <main className={styles.home}>
      {produtos &&
        produtos.map((produto) => (
          <section key={produto.id}>
            <img src={produto.fotos[0].src} alt="" />
            <h2>{produto.nome}</h2>
          </section>
        ))}
    </main>
  );
};

export default Home;
