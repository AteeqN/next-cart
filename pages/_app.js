// import '../styles/globals.css'
import Layout from "../components/Layout/Layout"
// import "../public/css/bootstrap.css"
// import "../public/js/bootstrap.js"
import { Provider } from 'react-redux';
import store from '../redux/store';


function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp