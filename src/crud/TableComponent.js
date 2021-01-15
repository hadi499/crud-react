import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = ({ makanans, editData, hapusData }) => {
  return (
    <div>
      <h2>Daftar Menu</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Makanan</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp.{makanan.harga}</td>
              <td>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => editData(makanan.id)}
                >
                  edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => hapusData(makanan.id)}
                >
                  hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
