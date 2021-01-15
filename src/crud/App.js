import React, { Component } from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import TableComponent from "./TableComponent";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const tidakPilihMakanan = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });
      this.setState({
        makanans: [
          ...tidakPilihMakanan,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: "",
      id: "",
    });
  };
  editData = (id) => {
    const pilihMakanan = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });
    this.setState({
      nama: pilihMakanan[0].nama,
      deskripsi: pilihMakanan[0].deskripsi,
      harga: pilihMakanan[0].harga,
      id: pilihMakanan[0].id,
    });
  };
  hapusData = (id) => {
    const hapusMakanan = this.state.makanans
      .filter((makanan) => makanan.id !== id)
      .map((filterMakanan) => {
        return filterMakanan;
      });
    this.setState({
      makanans: hapusMakanan,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <TableComponent
            makanans={this.state.makanans}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
