import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import { ContextProvider } from "./context/context";

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Form />
        <EmployeeTable />
      </div>
    </ContextProvider>
  );
};

export default App;
