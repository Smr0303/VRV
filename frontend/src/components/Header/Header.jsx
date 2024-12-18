import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const secureStatus = useSelector((state) => state.auth.secureStatus);

  const navigate = useNavigate();


  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Register",
      slug: "/signup",
      active: true,
    },
  ];


  return (
    <header className="py-3 shadow bg-gray-300">
      <Container>
        <nav className="flex">
          <div className="mr-4 flex justify-center items-center">
            <Link to="/">
              <Logo width="150px" />
            </Link>
          </div>
          <ul className="flex ml-auto">

            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {

                      if (item.name === "Register" && secureStatus) {

                        if (!secureStatus || userData.user_role == 5) navigate(item.slug);

                        else alert("You do not have the required privileges to access this resource");
                      }

                      else navigate(item.slug)
                    }}

                    className="inline-bock px-6 py-2 duration-200 hover:bg-gray-200 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
