import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo-kabum.png';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>

      <Link to="/">
        <img src={logo} alt="Kabum" />
      </Link>


      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}


