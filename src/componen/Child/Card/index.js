import React from 'react';
import "./style.css"
const Index = ({e}) => {
  return (

    <div className="card col-6 col-md-2 font" style={{width:"18rem"}} > 
        <img src={e.hasil.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="cara card-title"> {e.hasil.namabarang} </h5>
          <p className="cara card-text"> {`Harganya Rp. ${e.hasil.hargabarang} `} </p>
          <p className="cara card-text"> {`Stok tersedia ${e.hasil.stok} `} </p>
          <button className="btn btn-primary">Beli</button>
        </div>
  </div>
  );
};

export default Index;
