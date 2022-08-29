import React from "react";
import sc from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <Logo>
        <img src="./logo/travel.png" alt="" />
      </Logo>
      <hr />
      <Wrapper>
        <div>
          <p>Products</p>
          <Link to="/">Product</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Subscription</Link>
          <Link to="/">Customer</Link>
        </div>
        <div>
          <p>Company</p>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Blogs</Link>
          <Link to="/">Gallery</Link>
        </div>
        <div>
          <p>Products</p>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms and Conditions</Link>
          <Link to="/">Get Support</Link>
          <Link to="/">Make a suggestion</Link>
        </div>
        <div>
          <p>Contact us</p>
          <Link to="/">
            Tower #3, 5th Floor, Block X, Industrial Area,
            <br />
            Sector XX, Noida, Uttar Pradesh 201XXX
          </Link>
          <Link to="/">travelpeace@gmail.com</Link>
          <Link to="/">921XXXXXXX</Link>
        </div>
      </Wrapper>
      <Social>
        <p>Social Media</p>
        <div>
          <a href="/">
            <img src="./icons/facebook.png" alt="" />
          </a>
          <a href="/">
            <img src="./icons/instagram.png" alt="" />
          </a>
          <a href="/">
            <img src="./icons/twitter.png" alt="" />
          </a>
          <a href="/">
            <img src="./icons/youtube.png" alt="" />
          </a>
        </div>
      </Social>
    </Container>
  );
}

export default Footer;

const Container = sc.footer`
max-width:100vw;
display:flex;
flex-direction:column;
align-items:center;
padding:3rem  0 0;
hr{
  background-color:#000;
  height:1px;
  width:90%;
  margin:1rem 0;
}
`;
const Logo = sc.div`
width:200px;
img{
  width:100%;
}
`;

const Wrapper = sc.div`
margin:2rem 0 3rem;
width:90%;
display:grid;
grid-template-columns: repeat(4, 1fr);
align-items:center;
justify-content:space-around;
div{
  display:flex;
  flex-direction:column;
  font-weight: bold;
  margin:1rem 0;
  p{
    margin:1rem 0 1.5rem;
    font-size:1.25rem;
  }
  a{
    color:rgb(54, 54, 54);
    text-decoration:none;
    margin:0.35rem 0;
  }
}
@media screen and (max-width:1024px) and (min-width:0px){
  grid-template-columns: repeat(2, 1fr);
}
`;

const Social = sc.div`
display:flex;
align-items:center;
flex-direction:column;
padding:2rem 0;
background-color:${(p) => p.theme.color.gray};
width:100%;
p{
  margin:1.5rem 0;
  font-weight: bold;
  font-size:1.5rem;
  color:#fff;
}
div{
  width:300px;
  display:flex;
  align-items:center;
  justify-content:space-between;

  img{
    width:50px;
  }
}
  
`;
