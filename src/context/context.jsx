import { useState, createContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNwbl9txtoLtr5DXSy38_Bspbo6GMTcCI",
  authDomain: "employee-crud-de75e.firebaseapp.com",
  projectId: "employee-crud-de75e",
  storageBucket: "employee-crud-de75e.appspot.com",
  messagingSenderId: "332517388988",
  appId: "1:332517388988:web:c19f9074aadaabf5fad6b9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const colRef = collection(db, "employees");

export const Context = createContext();

let editFlag = false;
let editId = "";

export const ContextProvider = ({ children }) => {
  const initialState = { name: "", salary: 0, date: "" };

  const [form, setForm] = useState(initialState);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      const dbEmployees = [];
      snapshot.forEach((doc) =>
        dbEmployees.push({ ...doc.data(), id: doc.id })
      );

      setEmployees(dbEmployees);
    });
  }, [employees]);

  const addEmployee = (employee) => {
    if (!editFlag) {
      addDoc(colRef, {
        name: employee.name,
        salary: employee.salary,
        birth: employee.date,
      });
    } else {
      updateDoc(doc(db, "employees", editId), { ...employee });
      editFlag = false;
    }
  };

  const removeEmployee = (id) => {
    deleteDoc(doc(db, "employees", id));
  };

  const editEmployee = async (id) => {
    const employee = await getDoc(doc(db, "employees", id));
    setForm({
      name: employee.data().name,
      salary: employee.data().salary,
      date: employee.data().birth,
    });
    editId = id;
    editFlag = true;
  };

  return (
    <Context.Provider
      value={{
        initialState,
        form,
        setForm,
        employees,
        addEmployee,
        removeEmployee,
        editEmployee,
        editFlag,
      }}
    >
      {children}
    </Context.Provider>
  );
};
