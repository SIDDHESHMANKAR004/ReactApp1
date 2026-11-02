import React, { useState } from "react";
import AdminProduct from "./AdminProduct";
import AdminProductForm from "./AdminProductForm";

export default function AdminProductPage(props) {
  const { productList, onDeleteCartAdmin, onProductEditFormSubmit, onProductAddFormSubmit } = props;
  const [adminView, setAdminView] = useState("list");
  const [selectedProduct, setSelectedProduct] = useState("");

  function handleListFormClick() {
    setAdminView("add");
  }

  function handleProductListClick(nextView) {
    setAdminView(nextView);
  }

  function handleAddToCartAdmin(product) {
    setAdminView("edit");
    setSelectedProduct(product);
  }

  function handleDeleteCartAdmin(product, flag) {
    onDeleteCartAdmin(product, flag);
  }

  function handleProductAddEditFormSubmit(product) {
    const list =
      adminView === "edit"
        ? productList.map((item) => (item.id === product.id ? product : item))
        : [...productList, product];

    if (adminView === "edit") {
      onProductEditFormSubmit(list);
    } else {
      onProductAddFormSubmit(list);
    }
    setAdminView("list");
  }

  return (
    <>
      
      {adminView == "list" && (
        <div className=" text-center  productbg    myb   p-1 p-lg-2   mt-4 mt-lg-0  text-black  ">
          <a href="#" className="h5" onClick={handleListFormClick}>
            {" "}
            Add the new product
          </a>
        </div>
      )}
      {adminView == "list" && (
        <div className="row  productbg  p-5   text-center ">
          {productList.map((e, index) => (
            <AdminProduct
              product={e}
              key={index}
              onAddToCartAdmin={handleAddToCartAdmin}
              onDeleteCartAdmin={handleDeleteCartAdmin}
            />
          ))}
        </div>
      )}

      {(adminView == "add" || adminView == "edit") && (
        <div className="  productbg  p-5   text-center ">
          <AdminProductForm
            adminView={adminView}
            productList={productList}
            selectedProduct={selectedProduct}
            onProductListClick={handleProductListClick}
            onProductAddFormSubmit={handleProductAddEditFormSubmit}
            onProductEditFormSubmit={handleProductAddEditFormSubmit}
            
          />
        </div>
      )}
    </>
  );
}
