import {Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { publicPath } from './routes';
import { DefaultLayout } from './Layout';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
        <Routes>
          {publicPath.map((route, index) => {
            const Layout = route.layout ===null ? Fragment : DefaultLayout;
            const Page = route.component
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />;
          })}
        </Routes>
    </Router>

  );
}
export default App;