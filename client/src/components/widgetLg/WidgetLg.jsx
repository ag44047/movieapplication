import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button class={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pngarea.com/pngs/472/7297758_transparent-woman-head-silhouette-png-profile-picture-placeholder.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName"> Aferdita Dreshaj</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$244.0</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pngarea.com/pngs/472/7297758_transparent-woman-head-silhouette-png-profile-picture-placeholder.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Trena Halili</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$132.0</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pngarea.com/pngs/472/7297758_transparent-woman-head-silhouette-png-profile-picture-placeholder.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Harea Sadiku</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$422.0</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pngarea.com/pngs/472/7297758_transparent-woman-head-silhouette-png-profile-picture-placeholder.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carole</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
