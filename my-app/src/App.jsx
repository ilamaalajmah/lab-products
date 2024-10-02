import { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div style={styles.container}>
      {items.map(product => (
        <div key={product.id} style={styles.productCard}>
          <img src={product.image} alt={product.title} style={styles.image} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    backgroundColor: '#9694ca',
  },
  productCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    background: 'white',  
  },
  image: {
    borderRadius: '4px',
    width:200,
  },
};




















const responsiveStyles = {
  '@media (max-width: 600px)': {
    container: {
      gridTemplateColumns: '1fr', 
    },
  },
};


Object.assign(styles.container, responsiveStyles['@media (max-width: 600px)'].container);

export default App;
