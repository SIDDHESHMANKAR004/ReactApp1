import React, { useState, useEffect } from "react";

export default function AdminProductForm(props) {
  const { adminView, selectedProduct, onProductListClick, onProductAddFormSubmit, onProductEditFormSubmit } = props;

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    unit: "",
    mrp: "",
    discount: "",
  });

  useEffect(() => {
    if (adminView === "edit" && selectedProduct) {
      setFormData({
        name: selectedProduct.name || "",
        image: selectedProduct.image || "",
        unit: selectedProduct.unit || "",
        mrp: selectedProduct.mrp ?? "",
        discount: selectedProduct.discount ?? "",
      });
    } else {
      setFormData({
        name: "",
        image: "",
        unit: "",
        mrp: "",
        discount: "",
      });
    }
  }, [adminView, selectedProduct]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const product = {
      id: selectedProduct?.id || Date.now(),
      name: formData.name,
      image: formData.image,
      unit: formData.unit,
      mrp: Number(formData.mrp),
      discount: Number(formData.discount),
      qty: selectedProduct?.qty || 0,
    };

    if (adminView === "edit") {
      onProductEditFormSubmit(product);
    } else {
      onProductAddFormSubmit(product);
    }
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h4 className="fw-bold mb-1">{adminView === "edit" ? "Edit product" : "Add product"}</h4>
                <p className="text-muted mb-0">Keep your catalog up to date.</p>
              </div>
              <button className="btn btn-outline-dark rounded-pill" onClick={() => onProductListClick("list")}>
                Back to list
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-lg-6">
                  <label className="form-label">Product name</label>
                  <input className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-12 col-lg-6">
                  <label className="form-label">Image path</label>
                  <input className="form-control" name="image" value={formData.image} onChange={handleChange} required />
                </div>
                <div className="col-12 col-lg-4">
                  <label className="form-label">Unit</label>
                  <input className="form-control" name="unit" value={formData.unit} onChange={handleChange} required />
                </div>
                <div className="col-12 col-lg-4">
                  <label className="form-label">MRP</label>
                  <input className="form-control" type="number" name="mrp" value={formData.mrp} onChange={handleChange} required />
                </div>
                <div className="col-12 col-lg-4">
                  <label className="form-label">Discount (%)</label>
                  <input className="form-control" type="number" name="discount" value={formData.discount} onChange={handleChange} required />
                </div>
              </div>

              <div className="mt-4 d-flex gap-2">
                <button className="btn btn-dark" type="submit">{adminView === "edit" ? "Save changes" : "Create product"}</button>
                <button className="btn btn-outline-dark" type="button" onClick={() => onProductListClick("list")}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
