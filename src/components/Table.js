import satData from "./components/satData";

const Table = ({ sat }) => {
  let status
  if (data.operational === true) {
    status = "active"
  } else {
    status = "inactive"
  }

  function iterateSat(props) {
    const satMapped = props.map(id, data);
    return satMapped;
  }

  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {satMapped}
        <tr key={id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{status}</td>
        </tr>
        </tbody>
      </table>
  );
};

export default Table;