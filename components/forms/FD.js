import AllTable from '../AllTable';

export default function FD() {
  const tablebody = ['Name', 'Start Date', 'End Date', 'Amount', 'Interest'];
  return (
    <div className="grid grid-cols-1 w-full">
      <div>
        <div className="form-group">
          <div className="form-label">Bank Name</div>
          <div className="form-control">
            <input type="text" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-label">Start Date</div>
          <div className="form-control">
            <input type="text" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-label">End Date</div>
          <div className="form-control">
            <input type="text" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-label">Amount</div>
          <div className="form-control">
            <input type="text" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-label">Interest</div>
          <div className="form-control">
            <input type="text" />
          </div>
        </div>
      </div>
      <div>
        <AllTable data={tablebody} />
      </div>
    </div>
  );
}
