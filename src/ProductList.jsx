import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night, perfect for bedrooms.', cost: '$15' },
        { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from the air.', cost: '$12' },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/06/19/33/peace-lily-4256831_1280.jpg', description: 'Removes mold spores and purifies air.', cost: '$18' },
        { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114339_1280.jpg', description: 'Acts as a natural air humidifier.', cost: '$20' },
        { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/01/05/17/rubber-plant-4809957_1280.jpg', description: 'Excellent at removing toxins from the air.', cost: '$17' },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283006_1280.jpg', description: 'Purifies air and has medicinal benefits.', cost: '$14' },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        { name: 'Lavender', image: 'https://cdn.pixabay.com/photo/2019/10/01/17/06/lavender-4518820_1280.jpg', description: 'Calming scent that helps reduce anxiety.', cost: '$20' },
        { name: 'Jasmine', image: 'https://cdn.pixabay.com/photo/2016/09/26/14/30/jasmine-1695920_1280.jpg', description: 'Sweet fragrance that blooms at night.', cost: '$18' },
        { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541248_1280.jpg', description: 'Aromatic herb great for cooking and fragrance.', cost: '$15' },
        { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/mint-2496773_1280.jpg', description: 'Refreshing scent, perfect for teas.', cost: '$12' },
        { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/lemon-balm-4480464_1280.jpg', description: 'Citrus-scented leaves that repel mosquitoes.', cost: '$14' },
        { name: 'Hyacinth', image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg', description: 'Intensely fragrant spring-blooming flower.', cost: '$22' },
      ],
    },
    {
      category: 'Insect Repellent Plants',
      plants: [
        { name: 'Citronella', image: 'https://cdn.pixabay.com/photo/2015/08/04/14/40/citronella-874981_1280.jpg', description: 'Natural mosquito repellent.', cost: '$16' },
        { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2016/01/19/18/59/basil-1149811_1280.jpg', description: 'Repels flies and mosquitoes naturally.', cost: '$10' },
        { name: 'Marigold', image: 'https://cdn.pixabay.com/photo/2022/02/28/15/28/marigold-7039547_1280.jpg', description: 'Deters aphids and mosquitoes.', cost: '$8' },
        { name: 'Catnip', image: 'https://cdn.pixabay.com/photo/2015/07/05/13/05/catmint-832401_1280.jpg', description: 'Ten times more effective than DEET against mosquitoes.', cost: '$13' },
        { name: 'Chrysanthemum', image: 'https://cdn.pixabay.com/photo/2019/10/10/18/05/chrysanthemum-4540093_1280.jpg', description: 'Contains pyrethrin, a natural insecticide.', cost: '$18' },
        { name: 'Petunias', image: 'https://cdn.pixabay.com/photo/2016/07/22/05/07/petunias-1534035_1280.jpg', description: 'Natural pest repellent with beautiful blooms.', cost: '$11' },
      ],
    },
  ];

  const isItemInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      name: plant.name,
      image: plant.image,
      cost: plant.cost,
    }));
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h3 onClick={() => onNavigate('landing')} style={{ cursor: 'pointer' }}>
          🌿 Paradise Nursery
        </h3>
        <div className="navbar-links">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Plants</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }} className="cart-icon">
            🛒
            {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>}
          </a>
        </div>
      </div>

      {/* Product Listing */}
      <div className="product-listing-page">
        <h1>🌱 Our Plants Collection</h1>

        {plantsArray.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-section">
            <h2>{category.category}</h2>
            <div className="product-grid">
              {category.plants.map((plant, plantIndex) => (
                <div key={plantIndex} className="product-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>{plant.cost}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isItemInCart(plant.name)}
                  >
                    {isItemInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
