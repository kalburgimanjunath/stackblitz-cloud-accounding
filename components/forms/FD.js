import AllTable from '../AllTable';

export default function FD() {
  const tablebody = ['Name', 'Start Date', 'End Date', 'Amount', 'Interest'];
  return (
    <div className="flex cols-span-2 justify-around">
      <div className="cols-span-1">
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
      <div className="cols-span-1">
        <AllTable data={tablebody} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 text-right bg-white ">
        <footer>
          <button type="button" className="primary">
            Save
          </button>
          <button type="button" className="default">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}
