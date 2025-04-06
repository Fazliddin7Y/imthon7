import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import AddTeacher from "./pages/AddTeacher";
import SingleTeacher from "./pages/SingleTeacher";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teacher/add" element={<AddTeacher />} />
          <Route path="/teachers/:id" element={<SingleTeacher />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
