import styled from "styled-components";

const WrapperNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  color: #eee;
`;

const NavComponents = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled.a`
  color: #eee;
  font-style: normal;
`;

const Navbar = () => {
  return (
    <WrapperNav>
      <h3>AnjayResto</h3>
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
