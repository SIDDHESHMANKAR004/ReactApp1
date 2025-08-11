import React, { useEffect, useState } from "react";
import ProductPage from "./ProductPage";
import NavBar from "./Navbar";
import SignUpPage from "./SignUpPage";
import Login from "./Login";
import axios from "axios";
import CartPageItems from "./CartPageItems";
// import AdminProductForm from "./AdminProductForm";
import AdminProductPage from "./AdminProductPage";
import Bill from "./Bill";
import { RingLoader } from "react-spinners";
// import { DotLottieReact } from "";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import {
  deleteBackendProduct,
  getProductsFromBackend,
} from "./FirebaseProductServices";
import { addUserToBackend, getUserFromBackend } from "./FirebaseUserServices";

import Billpage from "./Billpage";
import { importBackendDataToBill } from "./FirebaseBillNumberServices";

export default function Ecommerce() {
  // useEffect(() => {
  //   getDataFromServer();
  // }, []);

  let [view, setView] = useState("productPage");
  let [cnt, setCnt] = useState(0);
  let [CartItems, setCartItems] = useState([]);
  let [totalprice, setTotalPrice] = useState(0);
  // let [successmessage, setSuccessMessage] = useState(false);

  // let [FilteredList, setFilteredList] = useState([]);
  let [productList, setProductList] = useState([]);
  let [signupstatus, setSignupStatus] = useState("no");
  let [loginStatus, setLoginStatus] = useState("no");
  let [message, setMessage] = useState("");
  // let [target, setTarget] = useState("");
  let [user, setUser] = useState("");
  // let [name, setName] = useState("");
  let [text, setText] = useState([]);
  let [flagLoader, setFlagLoader] = useState(false);
  let [bill, setbill] = useState("");
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  // useEffect(() => {
  //   getData();
  //    let storedUser = localStorage.getItem("user");
  //   // let storedCart = localStorage.getItem("CartItems");
  //   // let storedTotalPrice = localStorage.getItem("CartItems");
  //   let storedLoginStatus = localStorage.getItem("cartItems");

  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //     setLoginStatus(storedLoginStatus || "no");
  //   }

  // if (storedCart) {
  //   setCartItems(JSON.parse(storedCart));
  //   setCnt(JSON.parse(storedCart).length);
  // }

  // if (storedTotalPrice) {
  //   setTotalPrice(parseFloat(storedTotalPrice));
  // }
  // }, []);

  useEffect(() => {
    if (window.location.search == "") {
      getDataFromServer();
    } else {
      let param = new URLSearchParams(window.location.search);
      let billId = param.get("id");
      if (billId == null) {
        // invali link
        setbill(null);
        setTimeout(() => {
          setMessage("Invalid Link");
        }, 3000);

        return;
      } else {
        console.log("got it");

        getBill(billId);
      }
      // setView("FinalBillPage")
      // handleBackendData();
    }
  }, []);
  //code... get data from backend
  // let storedUser = localStorage.getItem("user");
  // let storedCart = localStorage.getItem("CartItems");
  // let storedTotalPrice = localStorage.getItem("CartItems");
  // let storedLoginStatus = localStorage.getItem("cartItems");

  // if (storedUser) {
  //   setUser(JSON.parse(storedUser));
  //   setLoginStatus(storedLoginStatus || "no");
  // }

  // if (storedCart) {
  //   setCartItems(JSON.parse(storedCart));
  //   setCnt(JSON.parse(storedCart).length);
  // }

  // if (storedTotalPrice) {
  //   setTotalPrice(parseFloat(storedTotalPrice));
  // }

  // async function handleBackendData() {
  //   setFlagLoader(true)
  //   let data = await importBackendDataToBill();
  //   setFlagLoader(false)
  //   console.log(data);

  //    billdata=data
  // }
  async function getBill(billId) {
    setFlagLoader(true);
    let b = await importBackendDataToBill(billId);
    console.log("Here is the bill");
    console.log(b);
    if (b == null) {
      setbill(b);
      setFlagLoader(false);
      setView("FinalBillPage");
      return;
    }
    // b.date = new Date(b.date.toDate());
    console.log("coming datas");

    // setCartItems(b)
    setbill(b);
    setView("FinalBillPage");
    // handleBackendData()
    setFlagLoader(false);
    // console.log(b);
  }

  // function handleSignUpFormSubmit(event) {
  //   let formData = new FormData(event.target);
  //   let user = {};
  //   for (let data of formData) {
  //     user[data[0]] = data[1];
  //   }
  //   user["role"] = "user";
  //   console.log(user);
  //   checkUserExists(user);
  //   // setView("productPage");
  //   // if ((user["role"] = "admin")) {
  //   //   setView("adminPage");

  //   // }
  // }
  async function getDataFromServer() {
    // let information = await axios.get("http://localhost:3000/plist");
    // setProductList(information.data);
    setFlagLoader(true);
    let list = await getProductsFromBackend();
    setFlagLoader(false);
    list = list.map((e, index) => {
      e.qty = 0;
      return e;
    });

    let usr;
    let cItems = [];
    await onAuthStateChanged(auth, (user) => {
      // console.log(user);
      usr = {};
      if (user) {
        usr.name = user.displayName;
        usr.email == user.email;
        if (usr.email == "mankarsiddhesh732@gmail.com") {
          usr.role = "admin";
        } else {
          usr.role = "user";
        }
      } else {
        usr = null;
      }
    });
    setUser(usr);
    // if(!usr|| usr.role=="user"){
    //   cItems=window.localStorage.getItem("cartItems")
    //   if(cItems==null){
    //     setCartItems([])
    //     window.localStorage.setItem("cartItems",JSON.stringify([]))

    //   }
    //   else{
    //     cItems=JSON.parse(cItems)
    //     setCartItems(cItems)
    //   }

    // }
    setProductList(list);
    setView("productPage");
  }
  // async function getData() {
  //   let usr;
  //   let cItems;
  //   await onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //     usr = {};
  //     if (user) {
  //       usr.name = user.displayName;
  //       usr.emailid == user.email;
  //       if (usr.emailid == "mankarsiddhesh732@gmail.com") {
  //         usr.role = "admin";
  //       } else {
  //         usr.role = "user";
  //       }
  //     } else {
  //       usr = null;
  //     }
  //   });
  //   setUser(usr);
  //   if(!usr|| usr.role=="user"){
  //     cItems=window.localStorage.getItem("cartItems")
  //     if(cItems==null){
  //       setCartItems([])
  //       window.localStorage.setItem("cartItems",JSON.stringify([0]))

  //     }
  //     else{
  //       cItems=null
  //     }

  //   }
  // }

  // async function checkUserExists(user) {
  //   // let response = await axios("http://localhost:3000/users");
  //   let userlist= await getUserFromBackend()
  //   let data =  userlist
  //   let filteredData = data.filter((e, index) => e.email == user.email);
  //   if (filteredData.length >= 1) {
  //     console.log("Already Exists");
  //     setTimeout(() => {
  //       setSignupStatus("");
  //       setView("productPage");
  //     }, 1000);
  //     setSignupStatus("failed");

  //     // setMessage("Sorry... This email-id is already registered.");
  //   } else {
  //     console.log("new user");
  //     addUser(user);
  //     // addDataToServer(user)
  //   }
  // }
  // async function addUser(user) {
  //   // let response = await axios.post("http://localhost:3000/users", user);
  //   let response=await addUserToBackend(user)
  //   setUser(response)
  //   setSignupStatus("success");
  // }

  //Login Operation
  // function handleLoginFormSubmit(event) {
  //   let formData = new FormData(event.target);
  //   let userData = {};
  //   for (let data of formData) {
  //     userData[data[0]] = data[1];
  //   }
  //   console.log("ok... logged in");
  //   console.log(userData);
  //   checkUser(userData);
  // }

  // async function checkUser(userData) {
  //   setFlagLoader(true);
  //   // let response = await axios("http://localhost:3000/users");
  //   let userdata= await getUserFromBackend()
  //   let data =  userdata;
  //   let filteredData = data.filter(
  //     (e, index) => e.email == userData.email && e.password == userData.password
  //   );
  //   setFlagLoader(false);
  //   if (filteredData.length == 1) {
  //     setUser(filteredData[0]);
  //     let u = filteredData[0];
  //     localStorage.setItem("user", JSON.stringify(filteredData[0]));
  //     localStorage.setItem("loginStatus", "success");
  //     if (u.role == "user") {
  //       setLoginStatus("success");
  //       setTimeout(() => {
  //         // name = u.name;
  //         setName(u.name);
  //         setView("productPage");
  //       }, 2000);
  //     } else if (u.role == "admin") {
  //       setLoginStatus("success");
  //       setTimeout(() => {
  //         // name=u.name
  //         setName(u.name);
  //         setView("admin");
  //       }, 2000);
  //     }
  //     // addDataToServer(user)
  //     // setSuccessMessage(true);

  //     // setTimeout(() => {
  //     //   setSuccessMessage(false);
  //     //   console.log("Login Successful");
  //     //   setTimeout(() => {
  //     //     setView("productPage");
  //     //   }, 1000);
  //     // }, 1000);
  //   } else {
  //     setLoginStatus("failed");
  //     setView("Login");
  //     setTimeout(() => {
  //       setLoginStatus("");
  //     }, 1000);
  //   }
  // }
  // function handleLoginButtonClickUsingGoogle(){
  //   signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  //   console.log(user);

  // });
  // }

  function handleCartItems() {
    if (cnt <= 0 && totalprice <= 0) {
      setView("noelement");
    } else if (!user) {
      // setMessage("You need to login first!");
      console.log("you need to login first");

      setTimeout(() => {
        // setMessage("");
        window.alert("you need to login first");
        // setView("Login");
      }, 1000); // Clear message after 2 seconds
    } else {
      setView("cart");
    }
  }
  // } else {
  //   // setMessage("");
  //   setTimeout(() => {
  //     setMessage("To Process the order you need to Login first!");

  //     setView("Login")

  //   }, );
  //   clearMessage()
  //   // setView("Login");

  //   //  setView("cart")
  //   if (cartentry == "LoginSuccessful") {
  //     setView("cart")
  //   }
  //    setTimeout(() => {
  //      setMessage(""); // Clear message from React state
  //    }, 3000);
  // }

  // console.log("Cart button clicked");
  // setView("cart");
  // console.log(CartItems.length);
  //  handleCartButtonClick()

  //Handle Add to cart operation
  function handleAddToCart(product) {
    console.log(CartItems);

    let temp = [...productList];
    let index = temp.indexOf(product);
    let newProduct = { ...temp[index] };

    if (newProduct.qty == 0) {
      newProduct.qty = 1;
      setCnt(cnt + 1);
      temp[index] = newProduct;
      setProductList([...temp]);

      setCartItems([...CartItems, newProduct]);

      // totalprice + newProduct.mrp * (1 - newProduct.discount / 100).toFixed(1)
      // totalprice + product.mrp * (1 - product.discount / 100).toFixed(2)
      // totalprice =
      //   totalprice + product.mrp - product.mrp * (product.discount / 100);

      // totalprice = parseFloat(totalprice.toFixed(2));
      // setTotalPrice(totalprice);
      setTotalPrice(
        // totalprice + newProduct.mrp * (1 - newProduct.discount / 100).toFixed(1)
        totalprice + product.mrp * (1 - product.discount / 100).toFixed(2)
      );
    }
    let updatedCart;
    if (CartItems && CartItems.length > 0) {
      updatedCart = [...CartItems];
    } else {
      updatedCart = [];
    }
    updatedCart.push(newProduct);
    setCartItems(updatedCart);
  }

  //Handle "+"
  // function handleIncrement(product) {
  //   let temp = [...productList];
  //   let index = temp.indexOf(product);
  //   let newProduct = { ...temp[index] };
  //   newProduct.qty++;
  //   temp[index] = newProduct;
  //   setProductList([...temp]);

  //   //Update Cart Items and total price
  //   let updatedCart = CartItems.map((item) =>
  //     item.id === product.id ? { ...item, qty: item.qty + 1 } : item
  //   );
  //   setCartItems(updatedCart);

  //   setTotalPrice(
  //     totalprice + product.mrp * (1 - product.discount / 100).toFixed(2)
  //   );
  //   // const discountedPrice = product.mrp * (1 - product.discount / 100);
  //   // const newTotal = totalprice + discountedPrice;
  //   // setTotalPrice(parseFloat(newTotal.toFixed(2)));
  //   // totalprice=totalprice + product.mrp * (1 - product.discount / 100)
  //   // totalprice=parseFloat(totalprice.toFixed(2))
  //   // setTotalPrice(totalprice)

  //   console.log(updatedCart);
  // }
  function handleIncrement(product) {
    // Create a copy of the product list to avoid direct state mutation
    const updatedProductList = productList.map(item => 
      item.id === product.id 
        ? { ...item, qty: item.qty + 1 }
        : item
    );
    
    setProductList(updatedProductList);
  
    // Update cart items
    let productInCart = CartItems.some(item => item.id === product.id);
    let updatedCart;
  
    if (productInCart) {
      // If product exists in cart, increment quantity
      updatedCart = CartItems.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      // If product not in cart, add it with quantity 1
      updatedCart = [...CartItems, { ...product, qty: 1 }];
      setCnt(prevCnt => prevCnt + 1); // Increment cart count for new item
    }
  
    setCartItems(updatedCart);
  
    // Calculate price addition
    const discountFactor = 1 - product.discount / 100;
    const priceAddition = product.mrp * discountFactor;
  
    // Update total price using functional update
    setTotalPrice(totalprice => {
      const newTotal = totalprice + priceAddition;
      return parseFloat(newTotal.toFixed(2)); // Ensure proper rounding
    });
  }

  //handlecart "+"

  //Handle "-"
  // function handleDecrement(product) {
  //   // Calculate discounted price

  //   let temp = [...productList];
  //   let index = temp.indexOf(product);
  //   let newProduct = { ...temp[index] };
  //   newProduct.qty--;
  //   temp[index] = newProduct;
  //   setProductList([...temp]);

  //   let updatedCart;
  //   console.log(updatedCart);

  //   if (newProduct.qty === 0) {
  //     setCnt(cnt - 1); // Reduce cart count
  //     updatedCart = CartItems.filter((item) => item.id !== product.id); // Remove item from cart
  //   } else {
  //     updatedCart = CartItems.map((item) =>
  //       item.id === product.id ? { ...item, qty: item.qty - 1 } : item
  //     );
  //   }

  //   setCartItems(updatedCart);

  //   // If cart is empty, reset total price to 0
  //   if (updatedCart.length === 0) {
  //     setTotalPrice(0);
  //   } else {
  //     setTotalPrice(
  //       totalprice - product.mrp * (1 - product.discount / 100).toFixed(2)
  //     );
  //     // totalprice=totalprice - product.mrp * (1 - product.discount / 100)
  //     // totalprice=parseFloat(totalprice.toFixed(2))
  //     // setTotalPrice(totalprice)
  //     //         const discountFactor = 1 - product.discount / 100;
  //     // const priceReduction = product.mrp * discountFactor;
  //     // const newTotal = totalprice - priceReduction;

  //     // setTotalPrice(Math.round(newTotal * 100) / 100);
  //   }
  //   console.log(updatedCart);
  // }
  function handleDecrement(product) {
    // Create a copy of the product list to avoid direct state mutation
    const updatedProductList = [...productList];
    const productIndex = updatedProductList.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex === -1) return; // Product not found

    // Create a new product object with updated quantity
    const updatedProduct = {
      ...updatedProductList[productIndex],
      qty: updatedProductList[productIndex].qty - 1,
    };

    // Update the product in the list
    updatedProductList[productIndex] = updatedProduct;
    setProductList(updatedProductList);

    // Update the cart items
    let updatedCart;
    if (updatedProduct.qty === 0) {
      // Remove item from cart if quantity reaches 0
      setCnt((prevCnt) => prevCnt - 1);
      updatedCart = CartItems.filter((item) => item.id !== product.id);
    } else {
      // Update quantity in cart
      updatedCart = CartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      );
    }

    setCartItems(updatedCart);

    // Calculate price reduction
    const discountFactor = 1 - product.discount / 100;
    const priceReduction = product.mrp * discountFactor;

    // Update total price
    if (updatedCart.length === 0) {
      setTotalPrice(0);
    } else {
      setTotalPrice((totalprice) => {
        const newTotal = totalprice - priceReduction;
        return parseFloat(newTotal.toFixed(2)); // Ensure proper rounding
      });
    }
  }
  

  //Sign_UP & Login Button Handle
  function handleFormButtonClick(view) {
    console.log(view);
    setView(view);
    // setCnt("")
    // setTotalPrice("")
    // setCartItems("")
  }

  //handle logout button clicked
  function handleLogoutClick() {
    // setUser(null);
    let Usr;
    if (Usr == null) setUser(""); // Clear user data
    setView("productPage");
    setLoginStatus("no"); // Reset login status
    setSignupStatus("no"); // Reset signup status (if needed)
    setMessage(); // Clear any messages
    localStorage.removeItem("user");
    localStorage.removeItem("loginStatus");

    //  setView("Login");
  }

  // login click button after signup form
  function handleLoginClick(event) {
    setView(event);
    // setView("product");
    console.log(view);
  }
  function handleDeleteCartAdmin(product, flag) {
    if (flag) {
      deleteProductFromServer(product);
    } else {
      setMessage("Delete operation cancelled");
      clearMessage();
    }
  }

  async function deleteProductFromServer(product) {
    setFlagLoader(true);
    // let response = await axios.delete(
    //   "http://localhost:3000/plist/" + product.id
    // );

    let list = await deleteBackendProduct(product);
    console.log("list in delete ecom");
    console.log(list);

    setProductList(list);
    setFlagLoader(false);
    setMessage(`Product - ${product.name} deleted successfully`);
    // clearMessage();
  }
  function clearMessage() {
    setTimeout(() => {
      setMessage(""); // Clear message from React state
    }, 1000);
  }

  function handleProductAddEditFormSubmit(list) {
    setProductList(list);
  }
  // function calculateTotal(f) {
  //   let total = 0;
  //   f.forEach((e, index) => {
  //     total += e.totalprice * e.qty;
  //   });
  //   setTotalPrice(total);
  // }
  // function handleChangeButtonClick(op, e) {
  //   //console.log(op);
  //   let p = [...productList];
  //   let cItems = [...CartItems];
  //   let index = p.indexOf(e);

  //   if (op == "+") {
  //     p[index].qty = p[index].qty + 1;
  //     cItems = cItems.map((f) => {
  //       if (f.id == e.id) return e;
  //       else return e;
  //     });
  //     setCartItems(cItems);
  //   } else if (op == "-") {
  //     p[index].qty = p[index].qty - 1;
  //     if (p[index].qty == 0) {
  //       setCnt(cnt - 1);
  //       cItems = cItems.filter((f) => f.id != e.id);
  //       setCartItems(cItems);
  //     }
  //   } else if (op == "addtocart") {
  //     p[index].qty = 1;
  //     setCnt(cnt + 1);
  //     cItems.push(e);
  //     //setCartItems(product);
  //     setCartItems(cItems);
  //   }
  //   calculateTotal(p);
  //   setProductList(p);
  // }

  // function handleCartButtonClick() {
  //   //setView("CartList");
  //   if (cnt <= 0 && totalprice <= 0) {
  //     setView("noelement");
  //   } else {
  //     setMessage("To Process the order you need to Login first!");
  //     setView("Login");
  //     setTimeout(() => {
  //       setMessage(""); // Clear message from React state
  //     }, 3000);
  //     if (cartentry == "LoginSuccessful") {
  //       setView("cart");
  //     }
  //   }
  // }
  function handleBackButtonClick() {
    setView("productPage");
  }
  function handleStartButtonClick() {
    setView("productPage");
  }
  function handleBuyButtonClick() {
    setView("bill");
  }
  function handleChangeKeyUp(event) {
    let t = event.target.value;
    let list = [...productList];
    if(event.target.value){
     list = productList.filter((e, index) =>
      e.name.toLowerCase().startsWith(t.toLowerCase())
    );
    console.log(list);

    setProductList(list);
  }

    // return list;

    else {
      setProductList(productList);
      setView("productPage");
      return productList
    }

    console.log(text);
  }
  if (flagLoader) {
    return (
      <div className="  text-center my-5 d-flex justify-content-center">
        <RingLoader size={50} color={"green"} className="" />
      </div>
    );
  }
  function handleLoginButtonClickUsingGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        // console.log(user);
        let usr = { user };
        usr.name = user.displayName;
        usr.emailid = user.email;
        if (usr.emailid == "mankarsiddhesh732@gmail.com") {
          usr.role = "admin";
          setView("admin");
          setLoginStatus("success");
        } else {
          usr.role = "user";
          setView("productPage");
          setLoginStatus("success");
        }
        setUser(usr);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  //list button check
  // function handleProductListClick(view){
  //   setView(view)
  // }
  function handleButtonLogout() {
    // setMessage("Thank you for Logging in!");
    // setTimeout(() => {
    //   setMessage("");
    // }, 3000);
    auth.signOut();
    setView("productPage");
    setUser("");
    if (cnt <= 0 && totalprice <= 0) {
      setView("productPage");
    } else if (!user) {
      // setMessage("You need to login first!");
      // console.log("you need to login first");
      setCartItems("");
      setTimeout(() => {
        // setMessage("");
        window.alert("you need to login first");
        // setView("Login");
      }, 1000); // Clear message after 2 seconds
    }
    // setCartItems("")

    // setView("logout");
    // setTimeout(() => {
    //   setView("");
    // }, 3000);
  }
  return (
    <>
      <div className="">
        <NavBar
          cnt={cnt}
          totalprice={totalprice}
          CartItems={CartItems}
          user={user}
          loginStatus={loginStatus}
          view={view}
          onFormButtonClick={handleFormButtonClick}
          onButtonLogout={handleButtonLogout}
          onCartItems={handleCartItems}
          onChangeKeyUp={handleChangeKeyUp}
          onLoginButtonClickUsingGoogle={handleLoginButtonClickUsingGoogle}
          productList={productList}
        ></NavBar>
      </div>
      <div className="  productbg ">
        {view == "productPage" && (
          <div className="">
            <ProductPage
              productList={productList}
              text={text}
              onFormButtonClick={handleFormButtonClick}
              onAddToCart={handleAddToCart}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            ></ProductPage>
          </div>
        )}
      </div>

      {view == "Login" && (
        <div className=" text-white productbg">
          <Login
            user={user}
            view={view}
            loginStatus={loginStatus}
            onClick={handleFormButtonClick}
            onLoginFormSubmit={handleLoginFormSubmit}
            onLoginClick={handleLoginClick}
          />
        </div>
      )}
      {view == "SignUp" && (
        <div className="productbg">
          <SignUpPage
            view={view}
            signupstatus={signupstatus}
            onFormButtonClick={handleFormButtonClick}
            onSignUpFormSubmit={handleSignUpFormSubmit}
            onLoginClick={handleLoginClick}
          />
        </div>
      )}
      {view == "cart" && (
        <div className="productbg vh-100  v">
          <CartPageItems
            CartItems={CartItems}
            totalprice={totalprice}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            // onChangeButtonClick={handleChangeButtonClick}
            onBackButtonClick={handleBackButtonClick}
            onBuyButtonClick={handleBuyButtonClick}
          />
        </div>
      )}
      {view == "bill" && (
        <div className="  vh-100    text-black  productbg">
          <Bill
            // onChangeButtonClick={handleChangeButtonClick}
            totalprice={totalprice}
            user={user}
            CartItems={CartItems}
          />
        </div>
      )}
      {view == "noelement" && (
        <div className="my-4 p-5 vh-100  productbg col-lg-12 col-sm-12 col-md-6">
          <div className=" p-3    text-black text-center my-5 h4 ">
            Cart is Empty.{" "}
            <a href="#" onClick={handleStartButtonClick}>
              Start
            </a>{" "}
            Shopping.
          </div>
        </div>
      )}
      {/* {view == "admin" && <AdminProductForm adminView={adminView} />} */}
      {view == "admin" && (
        <div className=" col-lg-12   col-sm-12  productbg col-md-6">
          <AdminProductPage
            productList={productList}
            view={view}
            onDeleteCartAdmin={handleDeleteCartAdmin}
            onProductEditFormSubmit={handleProductAddEditFormSubmit}
            onProductAddFormSubmit={handleProductAddEditFormSubmit}
            // onProductListClick={handleProductListClick}
          />
        </div>
      )}
      <div className="productbg vh-100">
        {view == "FinalBillPage" && <Billpage bill={bill} />}
      </div>
    </>
  );
}
// CartItems={CartItems}
