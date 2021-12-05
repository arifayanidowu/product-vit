import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Provider } from 'react-redux';
// Separate local imports from library imports-----
import './App.css';
import Layout from "./components/Layout";
import { store } from "./state/store";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
