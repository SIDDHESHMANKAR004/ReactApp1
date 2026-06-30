import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../client/src/firebase";
async function addUserToBackend(user) {
    const userRef = await addDoc(collection(db, "users"),user);
    console.log("Document written with ID: ", userRef.id);
  }
  async function getUserFromBackend() {
    const response = await getDocs(collection(db, "users"));
    let list = [];
    response.forEach((doc) => {
      let obj = { ...doc.data() };
      obj.id = doc.id;
      list.push(obj);
    });
    return list;
  }
  export{addUserToBackend,getUserFromBackend}