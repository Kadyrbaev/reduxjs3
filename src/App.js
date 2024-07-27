import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { Provider } from "react-redux"
import { store } from "./store"

const App = () => {
 
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <Main/>
        <Footer/>
      </Provider>
    </div>
  )
}

export default App

