import styled from "styled-components";

const WrapperNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  color: #eee;
  text-shadow: 1px 3px 4px rgba(0, 0, 0, 0.51);
`;

const NavComponents = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled.a`
  color: #eee;
  text-decoration: none;
  &:hover {
    color: #dc9700;
    border-bottom: 1px solid #dc9700;
  }
`;

const Navbar = () => {
  return (
    <WrapperNav>
      <h3>
        <NavLink>AnjayResto</NavLink>
      </h3>
      <NavComponents>
        <NavLink href="#">Beranda</NavLink>
        <NavLink href="#">Reservasi</NavLink>
        <NavLink href="#">Galeri</NavLink>
        <NavLink href="#">Kontak</NavLink>
      </NavComponents>
    </WrapperNav>
  );
};

export default Navbar;
