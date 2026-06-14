import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { useState } from "react";

export default function NavBar(props) {
  let { cnt } = props;
  let { product } = props;
  let { totalprice } = props;
  let { view } = props;
  let { user } = props;
  let { name } = props;
  let { loginStatus } = props;
  let {productList}=props
  let [userInput,setUserInput]=useState("")
  // let [btnview, setBtnView] = useState("");
  // const provider = new GoogleAuthProvider();
  //   const auth = getAuth();

  let { cItems } = props;
  // let { Qty } = props;

  // function handleLoginButtonClick() {
  //   console.log("login clicked");

  //   props.onLoginButtonClick();
  // }
  // let filteredData=productList.filter((item,index)=>{
  //   item.tolo
  // })
  function handleFormButtonClick(view) {
    props.onFormButtonClick(view);
  }
  function handleCartItems() {
    props.onCartItems(view);
  }
  function handleLogoutClick() {
    props.onLogoutClick();
  }
  function handleChangeKeyUp(event) {
    // event.preventDefault()
    props.onChangeKeyUp(event);
  }
  function handleLoginButtonClickUsingGoogle() {
    props.onLoginButtonClickUsingGoogle();
  }
  function handleButtonLogout() {
    props.onButtonLogout();
  }
  //
  //
  //
  // function handleCartButtonClick(v) {
  //   props.onCartButtonClick(v);
  // }
  // function handleQtyClick(displayprice){
  //   console.log(displayprice);

  //   props.onChangeClick(displayprice)
  // }

  return (
    <>
  
  <div className="my-4 p-4"></div>
  <div className="row fixed-top justify-content-lg-evenly border-bottom border-4 border-black border-opacity-75 bg">

    {/* Logo */}
    <div className="col-3 col-lg-1 my-3" id="logo" onClick={() => handleFormButtonClick("productPage")}>
      <img className="img-fluid" src="shoeslogo-removebg-preview.png" alt="" />
    </div>

    {/* Center: Auth + Search */}
    <div className="col-5 ps-5 p-1 text-center my-1 col-sm-6 col-md-12 col-lg-9">
      {!user && (
        <div className="col-12 pt-lg-1 col-sm-6 col-md-12 col-lg-12">
          <button className="button1 h6 loginbtn" onClick={handleLoginButtonClickUsingGoogle}>
            Login using Google
          </button>
        </div>
      )}

      {loginStatus == "success" && user && (
        <div className="col-12 my mx-lg-0 mx-2 text-dark h6">
          Welcome {user.name}
        </div>
      )}

      {(view == "productPage" || view == "admin" || view == "bill" ||
        (view == "cart" && loginStatus == "success")) && (
        <div className="col-12 h5 col-sm-6 col-md-12 col-lg-12">
          <button className="button1" onClick={handleButtonLogout}>Logout</button>
        </div>
      )}

      {/* ✅ Search bar added here */}
      {/* {view == "productPage" && (
        <div className="col-12 col-lg-8 mx-auto mt-2">
          <div className="input-group rounded-pill overflow-hidden border border-2 border-dark">
            <span className="input-group-text bg-white border-0 ps-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.242 1.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
              </svg>
            </span>
            <input
              type="search"
              className="form-control border-0 bg-white"
              placeholder="Search for shoes..."
              onKeyUp={handleChangeKeyUp}
              style={{ boxShadow: "none" }}
            />
          </div>
        </div>
      )} */}
    </div>

    {/* Cart */}
    <div className="col-sm-12 col-lg-1 text-end pt-3 pt-lg-3 col-4">
      <div className="radius loginbtn myb" onClick={handleCartItems}>
        <i className="bi-cart3 fs-5 text-black">
          {cnt}
          <div className="text-center h6 text-black">Rs. {totalprice}</div>
        </i>
      </div>
    </div>

  </div>
    </>
  );
}
