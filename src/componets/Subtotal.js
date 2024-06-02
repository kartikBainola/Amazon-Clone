import React from "react";
import "../shared/css/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../state/StateProvider";
import { getBasketTotal } from "../state/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

<button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;