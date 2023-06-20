export default function AllTable({ data }) {
  const tableheaders = ['Name', 'Start Date', 'End Date', 'Amount', 'Interest'];
  return (
    <div>
      <table className="table table-fixed">
        <thead>
          <tr scope="row">
            {tableheaders.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data &&
              data.length > 0 &&
              data.map((item) => {
                return <td>{item}</td>;
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
