import React, { useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { publicPath } from "./routes";
import { Fragment } from "react";
import "bootstrap/scss/bootstrap.scss";
import { useCookies } from "react-cookie";
import { authentication } from "./services/getAPI";

function App() {
  const [cookies, setCookie] = useCookies([]);
  const [hasSetCookie, setHasSetCookie] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setHasSetCookie(false);
      var ath = await authentication(cookies.accessToken, cookies.refreshToken);
      if (!hasSetCookie) {
        setCookie('accessToken', ath.accessToken, { path: "/" });
        setHasSetCookie(true);
      }
    };
    fetchData();
  },[cookies.accessToken, cookies.refreshToken, hasSetCookie, setCookie]);
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicPath.map((route, index) => {
            const Layout = route.layout === null ? Fragment : route.layout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
