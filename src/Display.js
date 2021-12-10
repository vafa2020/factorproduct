import React from "react";

const Display = ({ data }) => {
  return (
    <div className="display">
      <table className="table">
        <thead>
          <tr>
            <td>قیمت کل</td>
            <td>قیمت واحد</td>
            <td>شرح کالا</td>
            <td>تعداد</td>
            <td>شماره</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.price * item.qty}</td>
              <td>{item.price}</td>
              <td>{item.product}</td>
              <td>{item.qty < 1 ? 1 : item.qty}</td>
              <td>{item.number < 1 ? 1 : item.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Display;
