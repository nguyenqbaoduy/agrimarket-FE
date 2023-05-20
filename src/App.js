import {Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { publicPath } from './routes';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicPath.map((route, index) => {
            const Layout = route.layout ===null ? Fragment : route.layout;
            const Page = route.component
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />;
          })}
        </Routes>
      </div>
    </Router>

  );
}
export default App;