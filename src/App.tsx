import { Provider as ReduxProvider } from "react-redux"
import { persitedStore, store } from "./store/store"
import { PersistGate } from "redux-persist/integration/react"
import { router } from "./routes/Router"
import { RouterProvider } from "react-router-dom"
import { Header } from "./components/Header"
import { CssBaseline } from "@mui/material"
import { LoadingModal } from "./components/ModalLoading"


export function App() {

  return (
    <ReduxProvider store={store}>
      <CssBaseline />
      <LoadingModal />
      <Header />
      <PersistGate loading={null} persistor={persitedStore} />
      <RouterProvider router={router} />
    </ReduxProvider>
  )
}

