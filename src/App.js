import {Routes,Route} from 'react-router-dom';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import Authetication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';
import {useDispatch} from 'react-redux'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';


const App = () => {
  const dispatch = useDispatch();


  //useEffect to create cart - returns order-id
  //store the order id in local storage
  //check an id is already present in local storage
  // if not available , then create cart

  useEffect(() => {

  }, [])


  useEffect(() => {
  const unsubscribe = onAuthStateChangedListener((user) => {
    if (user) {
      createUserDocumentFromAuth(user);
    }
    dispatch(setCurrentUser(user));
  });

  return unsubscribe;
  }, []);
  
  return(
    <Routes >
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authetication/>}/>
        <Route path = 'checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}


export default App;
