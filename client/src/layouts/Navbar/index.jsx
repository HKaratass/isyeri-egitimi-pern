import MainLogo from '/LogoMain.png'
import SubLogo from '/LogoSub.png'
import { useState } from 'react'
import { AdminNavButton, Header, Logo, LogoLeftNameContainer, LogoNameContainer, LogoNameSub, Nav, NavButton, NavButtonContainer, NavList, TC_Container } from './style/index.styled';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';
import AnimOpenNavButton from './components/AnimOpenNavButton';
import useToken from '../../hooks/useToken';


//: string
const ERROR_LOG = (ERR) => {
  console.log(
    "%cERR_CODE: %c" + ERR,
    "color: blue; background-color: black; padding: 3px;",
    "color: red; background-color: black; padding: 3px;"
  );
}

const Navbar = () => {
  const navigate = useNavigate();
  const [token] = useToken();

  function open(e, url) {
    if (e.ctrlKey) {
      window.open(url, '_blank');
    } else {
      navigate(url);
      setMobilOpen(false);
    }
  }

  const size = useWindowSize();
  const [mobilOpen, setMobilOpen] = useState(false);

  return (
    <>
      <Header>
        {size.w <= 500 && <AnimOpenNavButton setMobilOpen={setMobilOpen} OPEN={mobilOpen} />}
        <Nav>
          <NavList>
            {
              size.w <= 500 &&
              <LogoLeftNameContainer>
                <TC_Container>
                  Gazi Üniversitesi
                  <label style={{ display: "block", fontWeight: "500" }}>İşyeri Eğitimi</label>
                </TC_Container>
              </LogoLeftNameContainer>
            }
            <li style={{
              padding: "0",
              margin: "0"
            }}>
              <Logo
                onClick={(e) => {
                  const url = "https://www.isyeriegitimi.com";
                  if (e.ctrlKey)
                    window.open(url, '_blank');
                  else
                    window.location.href = url;
                }}
                src={MainLogo} />
            </li>


            <LogoNameContainer>
              {
                size.w > 500 &&
                <TC_Container>
                  Gazi Üniversitesi
                  <label style={{ display: "block", fontWeight: "500" }}>İşyeri Eğitimi</label>
                </TC_Container>
              }
              <LogoNameSub
                onClick={(e) => {
                  const url = "https://subdomain.isyeriegitimi.com";
                  if (e.ctrlKey)
                    window.open(url, '_blank');
                  else
                    window.location.href = url;
                }}
              >PERN Proje</LogoNameSub>
            </LogoNameContainer>

            < NavButtonContainer $OPEN={mobilOpen}>
              {
                size.w <= 500 &&
                <li style={{
                  padding: "0",
                  margin: "0 auto 0 auto"
                }}>
                  <Logo
                    onClick={(e) => {
                      const url = "https://subdomain.isyeriegitimi.com";
                      if (e.ctrlKey)
                        window.open(url, '_blank');
                      else
                        window.location.href = url;
                    }}
                    src={SubLogo} />
                </li>
              }
              <NavButton onClick={(e) => open(e, "/")}>Anasayfa</NavButton>
              <NavButton onClick={(e) => open(e, "/events")}>Tüm Etkinlikler</NavButton>
              <NavButton onClick={(e) => open(e, "/about")}>Hakkında</NavButton>
              <NavButton onClick={(e) => open(e, "/contact")}>İletişim</NavButton>
              {
                token &&
                <AdminNavButton onClick={(e) => open(e, "/admin/dashboard")}>Yönetim</AdminNavButton>
              }

            </NavButtonContainer>
            {size.w > 500 &&
              <li style={{
                padding: "0",
                margin: "0"
              }}>
                <Logo
                  onClick={(e) => {
                    const url = "https://subdomain.isyeriegitimi.com";
                    if (e.ctrlKey)
                      window.open(url, '_blank');
                    else
                      window.location.href = url;
                  }}
                  src={SubLogo} />
              </li>
            }
          </NavList>
        </Nav>
      </Header >
    </>
  )
}

export default Navbar