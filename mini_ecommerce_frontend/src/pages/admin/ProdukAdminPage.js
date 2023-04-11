import React, { useEffect, useState } from "react";
import MainPage from "../../components/MainPage";
import { findAllProduk } from "../../services/ProdukService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

const ProdukAdminPage = () => {
  const [produks, setProduks] = useState([]);

  const load = async () => {
    try {
      const response = await findAllProduk();
      setProduks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const namaBpdyTemplate = (row) => {
    return (
      <Link to={`/admin/produk/detail/${row.id}`} className="cell-link">
        {row.nama}
      </Link>
    );
  };

  return (
    <MainPage>
      <div className="main-content">
        <div className="content">
          <div className="content-inner">
            <div className="content-header">
              <h2>Produk</h2>
              <Link
                to="/admin/produk/create"
                style={{ textDecoration: "none" }}
              >
                <Button label="Tambah" icon="pi pi-plus" />
              </Link>
            </div>
            <div className="content-body">
              <div className="content-data shadow-1">
                <DataTable
                  value={produks}
                  size="small"
                  stripedRows
                  className="table-view"
                >
                  <Column
                    field="nama"
                    header="Nama Produk"
                    body={namaBpdyTemplate}
                  />
                  <Column field="kategori.name" header="Kategori" />
                  <Column
                    field="harga"
                    header="Harga"
                    style={{ width: "100px" }}
                  />
                  <Column
                    field="stok"
                    header="Stok"
                    style={{ width: "100px" }}
                  />
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainPage>
  );
};

export default ProdukAdminPage;
