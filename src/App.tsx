import "./App.css";
import Stwapi from "./components/ReactQueryReduxRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Stwapi />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
