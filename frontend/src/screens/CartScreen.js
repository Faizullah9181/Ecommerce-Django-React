import React, { useEffect } from "react";
import { Link ,useSearchParams,useLocation,useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Message } from "../components/Message";
import { addToCart } from "../actions/cartactions";

function CartScreen({ histrory }) {
  const match = useParams()
    const location = useLocation();
    const productId  = match.id
    const qty = location.search ? Number(location.search.split("=")[1]): 1

   

  const dispatch = useDispatch();


  const  cart = useSelector(state => state.cart)
  const {cartItems} =cart

  console.log('cartItems',cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  
  return <div>Cart</div>;
}

export default CartScreen;
