import styles from "./Header.module.css";
import headerImg from "../../assets/header_table.jpg";
import { IoIosCart } from "react-icons/io";
const Header = () => {
  return (
    <>
      <header
        className={`p-3 border-bottom ${styles["header"]}`}
        style={{ marginBottom: "0rem! important" }}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 link-secondary">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  Inventory
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  Products
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                data-listener-added_7224880e="true"
              />
            </form>
            <button
              type="button"
              className={`btn btn-danger position-relative ${styles.cart}`}
            >
              <IoIosCart />
              <span> Your Cart </span>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </button>
          </div>
        </div>
      </header>
      <div>
        <img
          style={{ width: "100%", height: "15rem", marginTop: "0px" }}
          src={headerImg}
          alt="a table full of dishes"
        />
      </div>
    </>
  );
};
export default Header;
