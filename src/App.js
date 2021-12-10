import { useState } from "react";
import "./App.css";
import Display from "./Display";

function App() {
  const [dataProduct, setDataProduct] = useState([]);
  const [state, setstate] = useState({
    phone: "",
    name: "",
    price: "",
    product: "",
    qty: "",
    number: "",
  });

  const changeHandeler = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    setDataProduct([...dataProduct, state]);

    setstate({
      phone: "",
      name: "",
      price: "",
      product: "",
      qty: "",
      number: "",
    });
  };
  return (
    <div className="App">
      <div className="container">
        <h2>فاکتور فروش</h2>
        <form className="form" onSubmit={submitHandeler}>
          <header className="header">
            <input
              type="number"
              value={state.phone}
              name="phone"
              onChange={changeHandeler}
              placeholder="شماره تماس"
            />
            <input
              type="text"
              value={state.name}
              name="name"
              onChange={changeHandeler}
              placeholder="نام ونام خانوادگی"
            />
          </header>
          <table className="table">
            <thead>
              <tr>
                <td>قیمت واحد</td>
                <td>شرح کالا</td>
                <td>تعداد</td>
                <td>شماره</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    value={state.price}
                    name="price"
                    onChange={changeHandeler}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={state.product}
                    name="product"
                    onChange={changeHandeler}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={state.qty}
                    name="qty"
                    onChange={changeHandeler}
                    className="qty"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={state.number}
                    name="number"
                    onChange={changeHandeler}
                    className="qty"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">ثبت فاکتور</button>
        </form>
        {dataProduct.length ? <Display data={dataProduct} /> : ""}
      </div>
    </div>
  );
}

export default App;
