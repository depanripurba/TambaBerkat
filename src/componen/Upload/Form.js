import React from 'react';
import firebase from "../../Config/Firebase"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Index = (props) => {

	const realtimedatabase = ()=>{
		const database = firebase.database()

		 database.ref('barang/').push({
          username: "nama",
          email: "email",
          teman:[
            "Depanri Purba",
            "Antoni Purba",
            "Minalda Purba",
            "Feriandoni Purba"
          ],
          profile_picture : 'imageUrl'
          });
	}
  return (
    <Form>
      <FormGroup>
        <Label for="namabarang">Nama Barang</Label>
        <Input type="text" name="text" id="namabarang" placeholder="Masukkan Nama barang" />
      </FormGroup>
       <FormGroup>
        <Label for="hargabarang">Harga Barang</Label>
        <Input type="text" name="text" id="hargabarang" placeholder="Masukkan Harga barang" />
       </FormGroup>
       <FormGroup>
        <Label for="stok">Jumlah Stok</Label>
        <Input type="number" name="text" id="stok" placeholder="Masukkan jumlah stok barang"  />
       </FormGroup>
      <Button onClick = {realtimedatabase} >Submit</Button>
    </Form>
  );
}

export default Index;