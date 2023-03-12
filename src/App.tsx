import "./App.css";
import ReactQuery from "./components/ReactQuery";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQuery />
      </QueryClientProvider>
    </div>
  );
}

export default App;
