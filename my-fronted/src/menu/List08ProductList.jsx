import React from 'react';
import { useNavigate } from 'react-router-dom';
import './List08ProductList.css';

const List08ProductList = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back
  };

  const products = [
    {
      id: 1,
      name: 'Salad',
      description: 'A mix of fresh lettuce, cucumber, tomatoes, carrots, and a light vinaigrette dressing.',
      price: '₹664',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
    },
    {
        id: 1,
        name: 'Special Salad',
        description: 'Includes exotic greens, avocado, feta cheese, cherry tomatoes, nuts, and a tangy balsamic glaze.',
        price: '₹1162',
        image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'
      },
      {
        id: 1,
        name: 'Nagpuri Salad',
        description: 'Finely chopped onions, tomatoes, cucumber, coriander, peanuts, green chilies, and a spicy lemon dressing.',
        price: '₹789',
        image:'https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2177&q=80'
      },
      {
        id: 1,
        name: 'Poha',
        description: 'Flattened rice cooked with mustard seeds, turmeric, curry leaves, green chilies, peas, and garnished with coriander and lemon.',
        price: '₹623',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 1,
        name: 'Burger',
        description: 'Soft buns filled with a grilled patty (veg or meat), lettuce, tomato, cheese, pickles, and special sauces.',
        price: '₹996',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 1,
        name: 'Hakka Noodle',
        description: 'Stir-fried noodles tossed with mixed vegetables, soy sauce, garlic, ginger, and a dash of vinegar.',
        price: '₹996',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 1,
        name: 'Roasted Salmon and Farro Bowls',
        description: 'Smoked it twice. Not only did we stuff fresh fillets with packaged smoked salmon and horseradish cream, but we popped them on the grill with hickory wood chips for a second layer of smoky flavor.',
        price: '₹1494',
        image: 'https://www.bhg.com/thmb/JFHm8cDWuMW9Z0TI2Apwv4sm-fs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RU314375-269b76005a7a4a25bcdfb1f253d55a2f.jpg',
      },
      {
        id: 1,
        name: 'Chicken and Roasted Red Pepper Roll-Ups',
        description: 'Rolling it with garlic-herb goat cheese, baby arugula, and roasted red peppers. Dried-tomato pesto gives the gourmet recipe an added layer of Mediterranean flavor.',
        price: '₹1328',
        image: 'https://www.bhg.com/thmb/tsQKVCxY1h9Q2Cb1PlxuNJkcB_M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-red-pepper-rollups-RU217557-faec8a6d769848109dcbd032e994c0c4.jpg',
      },
      {
        id: 1,
        name: 'Classic Roast Chicken',
        description: 'Classic roast chicken gets some international flair thanks to a zesty Japanese seven-spice rub. Complete the show-stopping fancy dinner recipe with baby carrots and bok choy simmered in sesame oil.',
        price: '₹1328',
        image: 'https://www.bhg.com/thmb/Do-Js8RzWX1K52TAcNFamQ5SR5Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RU207314-920f52daee77455db5d5f7ea655f537e.jpg',
      },

    // Add other products here...
  ];

  return (
    <div className="container">
      <div className="appBar">
        <button onClick={handleBack} className="backButton">
          ←
        </button>
        <h1 className="title">Menu </h1>
      </div>
      <div className="body">
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <img src={product.image} alt={product.name} className="productImage" />
            <div className="productInfo">
              <h2 className="productName">{product.name}</h2>
              <p className="productDescription">{product.description}</p>
            </div>
            <div className="productPrice">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List08ProductList;