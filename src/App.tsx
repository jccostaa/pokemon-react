import {Provider as ReduxProvider} from "react-redux"
import { persitedStore, store } from "./store/store"
import { PersistGate } from "redux-persist/integration/react"
import { router } from "./routes/Router"
import { RouterProvider } from "react-router-dom"
import { Header } from "./components/Header"
import { CssBaseline } from "@mui/material"


export function App() {

  return (
    <ReduxProvider store={store}>
      <CssBaseline/>
      <Header/>
      <PersistGate loading={null} persistor={persitedStore} />
      <RouterProvider router={router} />
    </ReduxProvider>
  )
}

