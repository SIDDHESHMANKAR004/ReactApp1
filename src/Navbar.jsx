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
      <div className=" row    fixed-top   justify-content-lg-evenly border-bottom border-4 border-black border-opacity-75  bg    ">
        <div
          className="col-3 col-lg-1    my-3     "
          id=" logo"
          onClick={() => handleFormButtonClick("productPage")}
        >
          <img
            className="  img-fluid  "
            src="shoeslogo-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="col-5   ps-5 p-1  text-center    my-1  col-sm-6 col-md-12  col-lg-9  ">
          {/* if user is filled its information successfully then show them logout button for exit */}

          {!user && (
            <div className="    col-12    pt-lg-1    col-sm-6 col-md-12  col-lg-12">
              <button
                className=" button1 h6 loginbtn"
                onClick={handleLoginButtonClickUsingGoogle}
              >
                Login using Google
              </button>
            </div>
          )}
          {loginStatus == "success" && user && (
            <div className="col-12 my  mx-lg-0 mx-2  text-dark h6 ">
              Welcome {user.name}{" "}
            </div>
          )}
          
          {(view == "productPage" ||
            view == "admin" ||
            view == "bill" ||
            (view == "cart" && loginStatus == "success")) && (
            <div className="col-12    h5  col-sm-6 col-md-12  col-lg-12">
              {/* {" "}
            Welcome {} !
            </div> */}

              <button className="button1 " onClick={handleButtonLogout}>
                {" "}
                Logout{" "}
              </button>
            </div>
          )}
          {/* {(view == "productPage" && view == "admin") || (
            <div class="search-box  ">
              <button class="btn-search">
                <i class="bi bi-search"></i>
              </button>
              <input
                type="search"
                name="text"
                className="input-search"
                value={userInput}
                onChange={(e)=>setUserInput(e.target.value)}
                placeholder="Type to Search..."
              />
            </div>
          )} */}

          {/* {user ? (
            <>
              <div className="h4 col-2   justify-content-between  ps-4 col-lg-9 ">
                <button
                  className="btn btn-primary  "
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                className="btn btn-primary log  mx-2 "
                onClick={() => {
                  handleFormButtonClick("SignUp");
                }}
              >
                SignUp
              </button>

              <button
                className="btn btn-primary log  mx-2"
                onClick={() => {
                  handleFormButtonClick("Login");
                }}
              >
                Login
              </button> 
            </>
          )} */}
        </div>
        <div className="  col-sm-12 col-lg-1    text-end  pt-3   pt-lg-3 col-4    ">
          {/* <div className="cartbtn "> */}
          <div className=" radius loginbtn myb" onClick={handleCartItems}>
            <i className=" bi-cart3     fs-5   text-black  ">
              {cnt}{" "}
              <div className="text-center h6 text-black">Rs. {totalprice}</div>
            </i>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
