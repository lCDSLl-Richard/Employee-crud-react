import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <EmployeeTable />
    </div>
  );
};

export default App;
