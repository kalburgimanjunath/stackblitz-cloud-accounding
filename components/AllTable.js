export default function AllTable({ data }) {
  const tableheaders = ['Name', 'Start Date', 'End Date', 'Amount', 'Interest'];
  return (
    <div>
      <table className="table table-fixed hover:table-fixed border-collapse border border-slate-400">
        <thead>
          <tr scope="row">
            {tableheaders.map((item) => {
              return <th className="border border-slate-300 p-4">{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data &&
              data.length > 0 &&
              data.map((item) => {
                return <td className="border border-slate-300 p-4">{item}</td>;
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
