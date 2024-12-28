import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/ProductTable.css";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2026/api/barang/getAll')
      .then(response => {
        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          console.error('Data fetched is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className="product-table">
      <h2>Daftar Buku</h2>
      <table>
        <thead>
          <tr>
            <th>ID Buku</th>
            <th>Nama Buku</th>
            <th>Deskripsi Buku</th>
            <th>Stok Buku</th>
            <th>Harga Buku</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.namaBarang}</td>
                <td>{product.deskripsiBarang}</td>
                <td>{product.stokBarang}</td>
                <td>{product.hargaBarang}</td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Tidak ada data barang</td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to="/AdminPage" className="admin-login-button">Tambah Barang</Link>
    </div>
  );
};

export default ProductTable;
