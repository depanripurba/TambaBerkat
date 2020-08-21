import React from 'react';
const Index = ({e}) => {
  return (

    <div className="card col-sm-4" style={{width:"18rem"}} > 
        <img src={e.hasil.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {e.hasil.namabarang} </h5>
          <p className="card-text"> {`Harganya Rp. ${e.hasil.hargabarang} `} </p>
          <p className="card-text"> {`Stok tersedia ${e.hasil.stok} `} </p>
          <button className="btn btn-primary">Beli</button>
        </div>
  </div>
  );
};

export default Index;
