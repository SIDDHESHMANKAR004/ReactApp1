// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BeatLoader } from "react-spinners";
// import FieldValidate from "./FieldValidate.js";

// export default function AdminProductForm(props) {
//   let emptyProduct = {
//     name: "",
//     mrp: "",
//     discount: "",
//     image:"",
//     unit: "kg",
//     inStock: "yes",
//   };
//   let [product, setProduct] = useState(emptyProduct);
//   let [flagLoader, setFlagLoader] = useState(false);
//   let [flagFormInvalid, setFlagFormInvalid] = useState(false);
//   let { adminView } = props;
//   let { selectedProduct } = props;
//   let { sampleProduct } = props;
//   let [errorProduct, setErrorProduct] = useState({
//     name: { message: "", mxLen: 80, mnLen: 3, onlyDigits: false },
//     image: { message: "", mxLen: 80, mnLen: 5, onlyDigits: false },
//     mrp: { message: "", mxLen: 6, mnLen: 1, onlyDigits: true },
//     discount: { message: "", mxLen: 6, mnLen: 1, onlyDigits: true },
//   });
//   useEffect(() => {
//     if (adminView == "edit") {
//       setProduct(props.selectedProduct);
//       console.log(props.selectedProduct);
//     } else if (adminView == "add") {
//       let p = emptyProduct;
//       console.log(p);
//       setProduct(p);
//     }
//   }, [adminView, props.selectedProduct]);
//   function handleProductListClick() {
//     props.onProductListClick("list");
//   }
//   function handleTextChange(event) {
//     let name = event.target.name;
//     setProduct({ ...product, [name]: event.target.value });

//     let message = FieldValidate(event, errorProduct);
//     let errProduct = { ...errorProduct };
//     errProduct[name].message = message;
//     setErrorProduct(errProduct);
//     checkAllErrors(errProduct);
//   }
//   function handleBlur(event) {
//     let name = event.target.name;
//     let message = FieldValidate(event, errorProduct);
//     let errProduct = { ...errorProduct };
//     errProduct[name].message = message;
//     setErrorProduct(errProduct);
//     checkAllErrors(errProduct);
//   }
//   function handleFocus(event) {
//     checkAllErrors();
//   }
//   function checkAllErrors(errProduct) {
//     for (let field in errProduct) {
//       if (errProduct[field].message !== "") {
//         setFlagFormInvalid(true);
//         return;
//       } //if
//     } //for
//     setFlagFormInvalid(false);
//   }
//   function handleProductAddEditFormSubmit(event) {
//     event.preventDefault();
//     console.log(product);
//     if (adminView == "edit") {
//       updateBackendProduct(product);
//     } else if (adminView == "add") {
//       addToBackendProduct(product);
//     }
//   }
//   async function updateBackendProduct(product) {
//     setFlagLoader(true);
//     let response = await axios.put(
//       "http://localhost:3000/plist/" + product.id,
//       product
//     );
//     // const docRef = await addDoc(collection(db, "products"), product);
//     // console.log("Document written with ID: ", docRef.id);
//     props.onProductEditFormSubmit(product);

//     setFlagLoader(false);
//   }
//   async function addToBackendProduct(product) {
//     setFlagLoader(true);
//     let response = await axios.post("http://localhost:3000/plist", product);
//     let data = await response.data;
//     console.log("Added");
//     console.log(data);

//     props.onProductAddFormSubmit(data); // this has id
//     setFlagLoader(false);
//   }
//   if (flagLoader) {
//     return <BeatLoader size={24} color={"red"} className="text-center" />;
//   }

//   return (
//     <>
//       <div className="text-center text-danger">
//         <a href="#" onClick={handleProductListClick}>
//           LIST
//         </a>
//       </div>
//       {adminView == "edit" && (
//         <div className="text-center text-danger my-3">
//           Edit Product ({product.name})
//         </div>
//       )}

//       <div className="row justify-content-center">
//         <div className="col-sm-12 col-md-6  border border-3 border-danger">
//           <form
//             className="product-form"
//             onSubmit={(event) => {
//               handleProductAddEditFormSubmit(event);
//             }}
//           >
//             <div className="row">
//               <div className="col-sm-4 col-5 my-2 text-end">Name</div>
//               <div className="col-6 my-2  ">
//                 <input
//                   type="text"
//                   name="name"
//                   id=""
//                   required
//                   value={product.name}
//                   onChange={handleTextChange}
//                   onBlur={handleBlur}
//                   onFocus={handleFocus}
//                 />
//               </div>
//               <div className="offset-sm-4 offset-6 text-start text-danger">
//                 {errorProduct.name.message && errorProduct.name.message}
//               </div>
//               <div className="col-sm-4 col-5 my-2 text-end">MRP</div>
//               <div className="col-6 my-2">
//                 <input
//                   type="text"
//                   name="mrp"
//                   id=""
//                   value={product.mrp}
//                   required
//                   onChange={handleTextChange}
//                   onBlur={handleBlur}
//                   onFocus={handleFocus}
//                 />
//               </div>
//               <div className="offset-sm-4 offset-6 text-start text-danger">
//                 {errorProduct.mrp.message && errorProduct.mrp.message}
//               </div>
//               <div className="col-sm-4 col-5  my-2 text-end">Discount</div>
//               <div className="col-6 my-2">
//                 <input
//                   type="text"
//                   name="discount"
//                   id=""
//                   value={product.discount}
//                   onChange={handleTextChange}
//                   onBlur={handleBlur}
//                   onFocus={handleFocus}
//                   required
//                 />
//               </div>

//               <div className="offset-sm-4 offset-6 text-start text-danger">
//                 {errorProduct.discount.message && errorProduct.discount.message}
//               </div>

//               <div className="col-sm-4 col-3  my-2 text-end"></div>
//               <div className="col-6 my-2">
//                 <input
//                   className="btn btn-danger"
//                   type="submit"
//                   value="Submit"
//                   disabled={flagFormInvalid}
//                 />{" "}
//                 <button
//                   className="btn btn-danger"
//                   onClick={handleProductListClick}
//                 >
//                   Cancel{" "}
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* row ends */}
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import fieldValidate from "./FieldValidate.js";
// import { addDoc, collection } from "./Firebase.js";
import {
  addProductToBackend,
  updateBackendProduct,
} from "./FirebaseProductServices.js";
// import { addDoc, collection } from "firebase/firestore";
// {
//   "id": "1",
//   "name": "grapes",
//   "image": "grapes.jpg",
//   "unit": "kg",
//   "mrp": "180",
//   "discount": "30",
//   "inStock": false,
//   "qty": 0,
//   "type": "Organic"
// }

export default function AdminProductForm(props) {
  let emptyProduct = {
    name: "",
    image: "",
    mrp: "",
    discount: "",
    // unit: "",
    inStock: "",
    qty:0,
  };
  let [product, setProduct] = useState("");
  let [flagLoader, setFlagLoader] = useState(false);
  let [flagFormInvalid, setFlagFormInvalid] = useState(false);
  let { adminView } = props;
  let { selectedProduct } = props;
  let [errorProduct, setErrorProduct] = useState({
    name: { message: "", mxLen: 80, mnLen: 3, onlyDigits: false },
    image: { message: "", mxLen: 80, mnLen: 5, onlyDigits: false },
    mrp: { message: "", mxLen: 6, mnLen: 1, onlyDigits: true },
    discount: { message: "", mxLen: 6, mnLen: 1, onlyDigits: true },
  });
  useEffect(() => {
    if (adminView == "edit") {
      setProduct(props.selectedProduct);
    } else if (adminView == "add") {
      let p = emptyProduct;
      console.log(p);
      setProduct(p);
    }
  }, [adminView, props.selectedProduct]);
  function handleProductListClick() {
    props.onProductListClick("list");
  }
  function handleTextChange(event) {
    let name = event.target.name;
    setProduct({ ...product, [name]: event.target.value });

    let message = fieldValidate(event, errorProduct);
    let errProduct = { ...errorProduct };
    errProduct[name].message = message;
    setErrorProduct(errProduct);
    checkAllErrors(errProduct);
  }
  function handleBlur(event) {
    let name = event.target.name;
    let message = fieldValidate(event, errorProduct);
    let errProduct = { ...errorProduct };
    errProduct[name].message = message;
    setErrorProduct(errProduct);
    checkAllErrors(errProduct);
  }
  function handleFocus(event) {
    //checkAllErrors();
  }
  function checkAllErrors(errProduct) {
    for (let field in errProduct) {
      if (errProduct[field].message !== "") {
        setFlagFormInvalid(true);
        return;
      } //if
    } //for
    setFlagFormInvalid(false);
  }
  function handleInStockChange(event) {
    if(event.id=="+")
    {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    })
    }
    else 
    {
      setProduct("")
    }
  }
   
  
  function handleProductAddEditFormSubmit(event) {
    event.preventDefault();
    console.log(product);
    if (adminView == "edit") {
      updateProduct(product);
    } else if (adminView == "add") {
      addProduct(product);
    }
  }
  async function updateProduct(product) {
    setFlagLoader(true);
    // let response = await axios.put(
    //   "http://localhost:3000/plist/" + product.id,
    //   product
    // );

    await updateBackendProduct(product);
    props.onProductEditFormSubmit(product);
    setFlagLoader(false);
  }
  async function addProduct(product) {
    setFlagLoader(true);
    // // let response = await axios.post("http://localhost:3000/fruits", product);
    // // let product = await response.data;
    // const docRef = await addDoc(collection(db, "products"), product);
    // console.log("Document written with ID: ", docRef.id);

    // // console.log("Added");
    // console.log(docRef);
    // product.id = docRef.id;
    product = await addProductToBackend(product);
    props.onProductAddFormSubmit(product); // this has id
    setFlagLoader(false);
  }
  if (flagLoader) {
    return <BeatLoader size={24} color={"red"} />;
  }
  function handleSelectUnitChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    setProduct({ ...product, [event.target.name]: event.target.value });
  }
  // let unitTypes = ["kg", "doz", "piece", "packet"];
  // let optionsUnit = unitTypes.map((e, index) => (
  //   <option value={e} key={index}>
  //     {e}
  //   </option>
  // ));
  return (
    <>
      <div className="text-center text-danger">
        <a href="#" onClick={handleProductListClick}>
          LIST
        </a>
      </div>
      {adminView == "edit" && (
        <div className="text-center  text-black h6 my-3">
          Edit Product ({product.name})
        </div>
      )}
      {adminView == "add" && (
        <div className="text-center text-black h6 my-3">Add the new product</div>
      )}
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6  border border-3  border-black">
          <form
            className="product-form"
            onSubmit={(event) => {
              handleProductAddEditFormSubmit(event);
            }}
          >
            <div className="row">
              <div className="col-4 col-sm-6 my-2 text-end">Name</div>
              <div className="col-6 my-2  text-start">
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  value={product.name}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </div>
              <div className="offset-4 offset-sm-6 text-start text-danger">
                {errorProduct.name.message && errorProduct.name.message}
              </div>
              <div className="col-4 col-sm-6   my-2 text-end">Image:</div>
              <div className="col-6 my-2  text-start">
                <input
                  type="text"
                  name="image"
                  id=""
                  required
                  value={product.image}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                   onFocus={handleFocus}
                />
              </div>
              <div className="offset-4 offset-sm-6  text-start text-danger">
                {errorProduct.image.message && errorProduct.image.message}
              </div>
              <div className="col-4 col-sm-6 my-2 text-end">MRP</div>
              <div className="col-6 my-2  text-start">
                <input
                  type="text"
                  name="mrp"
                  id=""
                  value={product.mrp}
                  required
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                   onFocus={handleFocus}
                />
              </div>
              <div className="offset-4 offset-sm-6  text-start text-danger">
                {errorProduct.mrp.message && errorProduct.mrp.message}
              </div>
              <div className="col-4 col-sm-6 my-2 text-end ">Discount</div>
              <div className="col-6 my-2  text-start">
                <input
                  type="text"
                  name="discount"
                  id=""
                  value={product.discount}
                  onChange={handleTextChange}
                  onBlur={handleBlur}
                   onFocus={handleFocus}
                  required
                />
              </div>
              <div className="offset-4 offset-sm-6  text-start text-danger">
                {errorProduct.discount.message && errorProduct.discount.message}
              </div>
              {/* <div className="col-4 col-sm-6 my-2 text-end">Unit</div>
              <div className="col-6 my-2 text-start">
                <select
                  name="unit"
                  value={product.unit}
                  id=""
                  onChange={handleSelectUnitChange}
                >
                  {optionsUnit}
                </select>
              </div> */}
              <div className="col-4 col-sm-6 my-2 text-end">In Stock</div>
              <div className="col-6 my-2 text-start">
                <input
                  type="radio"
                  name="inStock"
                  id="+"
                  value="yes"
                  onClick={handleInStockChange}
                  onChange={handleInStockChange}
                  // onBlur={handleBlur}
                  // onFocus={handleFocus}
                  // required
                  checked={product.inStock == "yes"}
                />{" "}
                Yes &nbsp;
                <input
                  type="radio"
                  name="inStock"
                  id="-"
                  value="no"
                  onClick={handleInStockChange}
                  onChange={handleInStockChange}
                  // onBlur={handleBlur}
                  // onFocus={handleFocus}
                  // required
                  checked={product.inStock == "no"}
                />{" "}
                No
              </div>
              <div className="col-sm-4 col-6  my-2 text-end"></div>
              <div className="col-6 my-2">
                <input
                  className=" button1"
                  type="submit"
                  value="Submit"
                  disabled={flagFormInvalid}
                />{" "}
                <button
                  className=" button1"
                  onClick={handleProductListClick}
                >
                  Cancel{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* row ends */}
    </>
  );
}
