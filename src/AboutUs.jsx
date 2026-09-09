import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container" style={{
      padding: '40px',
      maxWidth: '900px',
      margin: '80px auto 40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#2e7d32', textAlign: 'center', marginBottom: '20px' }}>
        About Paradise Nursery
      </h1>
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', textAlign: 'center' }}>
        Welcome to <strong>Paradise Nursery</strong>, your one-stop destination for beautiful, 
        high-quality houseplants! Founded with a passion for greenery and sustainable living, 
        we bring nature closer to your home.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginTop: '15px' }}>
        At Paradise Nursery, we believe that every space deserves a touch of green. Our curated 
        collection includes air-purifying plants, aromatic herbs, medicinal plants, low-maintenance 
        succulents, and much more. Whether you are a seasoned plant parent or just starting your 
        green journey, we have the perfect plant for you.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginTop: '15px' }}>
        Our mission is to make plant shopping easy, affordable, and enjoyable. We source our plants 
        from trusted local nurseries and ensure that each plant is healthy and ready to thrive in 
        your home. We are committed to promoting a greener, healthier lifestyle — one plant at a time.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginTop: '15px' }}>
        <strong>Why Choose Us?</strong>
      </p>
      <ul style={{ fontSize: '16px', lineHeight: '2', color: '#666', paddingLeft: '20px' }}>
        <li>Wide variety of indoor and outdoor plants</li>
        <li>Affordable prices with free shipping on orders over $50</li>
        <li>Expert care guides included with every purchase</li>
        <li>100% satisfaction guarantee</li>
        <li>Eco-friendly packaging</li>
      </ul>
      <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginTop: '15px', textAlign: 'center' }}>
        🌿 <em>Paradise Nursery — Bringing Nature Home</em> 🌿
      </p>
    </div>
  );
}

export default AboutUs;
