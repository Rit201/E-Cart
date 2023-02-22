import React, { useEffect } from "react";

const Cart = (props) => {
  let Total = 0;
  let Discount = 10;
  let FinalTotal = 0;
  let TotalDiscount = 0;
  let CouponCode = "H10";

  const Decrease = props.Decrease;
  const Increase = props.Increase;
  const RemoveFromCart = props.RemoveFromCart;
  const Carts = props.CartItems;
  const CouponFlag = props.CouponFlag;
  const setCouponFlag = props.SetFlag;
  const Value = props.Value;
  const setValue = props.setValue;

  useEffect(() => {
    if (Carts.length === 0) {
      setCouponFlag(false);
    }
  }, [Carts.length]);

  const Coupon = () => {
    if (Value.trim() === CouponCode && Carts.length !== 0) {
      setCouponFlag(true);
      document.getElementById("wrongCode").classList.remove("Show");
      document.getElementById("emptyCart").classList.remove("Show");
      document.getElementById("Coupon").classList.remove("CouponWrong");
      document.getElementById("Coupon").classList.add("CouponInput");
    } else if (Carts.length === 0) {
      document.getElementById("emptyCart").classList.add("Show");
      document.getElementById("wrongCode").classList.remove("Show");
      document.getElementById("Coupon").classList.remove("CouponInput");
      document.getElementById("Coupon").classList.add("CouponWrong");
    } else if (Value.trim() !== CouponCode && Carts.length !== 0) {
      document.getElementById("wrongCode").classList.add("Show");
      document.getElementById("emptyCart").classList.remove("Show");
      document.getElementById("Coupon").classList.remove("CouponInput");
      document.getElementById("Coupon").classList.add("CouponWrong");
    }
  };
  const CouponRemove = () => {
    if (Carts.length !== 0) {
      setCouponFlag(false);
      setValue("");
    }
  };

  const cartMap = Carts.map((Cart) => {
    let Price = Cart.price * Cart.quantity;
    let ItemDiscount = (Price * Discount) / 100;
    Total += Price;
    TotalDiscount = (Total * Discount) / 100;
    FinalTotal = Total - TotalDiscount;

    return (
      <div className="Carts" key={Cart.id}>
        <div className="C-Image">
          <img src={Cart.image} alt={Cart.title} />
        </div>
        <div className="C-Title">
          {Cart.title}
          {CouponFlag && (
            <div className="C-Dis">
              <span>
                -
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="1"
                  stroke="#34a36b"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-currency-rupee"
                  viewBox="0 -2.2 18 15"
                >
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg>
                {ItemDiscount.toLocaleString()}
              </span>
            </div>
          )}
        </div>

        <span className="C-Quantity">
          <svg
            onClick={() => Increase(Cart)}
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="0.8"
            stroke="#f5bd6e"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 -0.3 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>

          {Cart.quantity}

          <svg
            onClick={() => Decrease(Cart)}
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="0.8"
            stroke="#f5bd6e"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-dash-circle"
            viewBox="0 -0.3 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </span>
        <span className="C-Price">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="1"
            stroke="#34a36b"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-currency-rupee"
            viewBox="0 -2.2 18 15"
          >
            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
          </svg>
          {Price.toLocaleString()}
        </span>
        <span
          className="C-Remove"
          title="remove product"
          onClick={() => RemoveFromCart(Cart)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="0.4"
            stroke="#f54242"
            width="23"
            height="23"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 -0.5 16 15"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </span>
      </div>
    );
  });

  return (
    <div className="Main-2">
      <div className="CartMain">
        <h1>CART</h1>
        {Carts.length === 0 && <span className="Empty">CART IS EMPTY</span>}
        {cartMap}
        <div className="Total" id="Total">
          {CouponFlag === false ? (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "0.6rem",
              }}
            >
              <div id="Coupon" className="CouponInput">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
                <button type="button" onClick={Coupon}>
                  Apply
                </button>
              </div>
              <section style={{ paddingLeft: "0.7rem" }}>
                <span id="emptyCart" className="Hide">
                  Please add some product
                </span>
                <span id="wrongCode" className="Hide">
                  You enter wrong or expired code
                </span>
              </section>
            </section>
          ) : (
            <section style={{ textAlign: "center" }}>
              <span style={{ color: "#225ac2", marginRight: "1rem" }}>
                Coupon Applied
              </span>
              <span
                onClick={CouponRemove}
                title="remove coupon"
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="1.2"
                  stroke="#f54242"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            </section>
          )}

          <div>
            Total :&nbsp; &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="1.2"
              stroke="#34a36b"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-currency-rupee"
              viewBox="0 -2.2 18 15"
            >
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>
            <span style={{ color: "#34a36b" }}>{Total.toLocaleString()}</span>
          </div>
          {CouponFlag && (
            <div>
              Total Dis. :&nbsp; &nbsp;
              <span style={{ color: "#34a36b" }}>-</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1.2"
                stroke="#34a36b"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-currency-rupee"
                viewBox="0 -2.2 18 15"
              >
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
              </svg>
              <span style={{ color: "#34a36b" }}>
                {TotalDiscount.toLocaleString()}
              </span>
            </div>
          )}
          {CouponFlag && (
            <div>
              Final Total :&nbsp; &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1.2"
                stroke="#34a36b"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-currency-rupee"
                viewBox="0 -2.2 18 15"
              >
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
              </svg>
              <span style={{ color: "#34a36b" }}>
                {FinalTotal.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
