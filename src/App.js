import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header";
import Checkout from "./pages/checkout";
import Homepage from "./pages/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(props) {
    return (
      <div className="container mx-auto font-OpenSansCondensed">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="react-shop/" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:collectionName" element={<Shop />} />
            {this.props.currentUser ? (
              <Route path="/sign-in" element={<Homepage />} />
            ) : (
              <Route path="/sign-in" element={<SignInAndSignUp />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
