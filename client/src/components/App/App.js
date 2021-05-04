import "./App.css";
import todoContext from "../../utils/todoContext/todoContext";
import reducer from "../../utils/reducer/reducer";
import { useReducer } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Registration from "../Registration/Registration";
import Todo from "../Todo/Todo";

function App() {
  const [state, dispatch] = useReducer(reducer, { list: [] });

  return (
    <todoContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Registration />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </todoContext.Provider>
  );
}

export default App;
