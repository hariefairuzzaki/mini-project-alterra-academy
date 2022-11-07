import "./App.css";
import { ApolloProvider } from "@apollo/client";

import client from "./configs/apolloClient";
import SetupRouter from "./router/SetupRouter";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <SetupRouter />
      </ApolloProvider>
    </div>
  );
}

export default App;
