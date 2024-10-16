import { useState } from 'react';
import "../ModuleCss/Profit.css"

function Profit() {
    const [eventType, setEventType] = useState('ALL');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit logic here
      console.log('Form Submitted:', { eventType, startDate, endDate });
    };

  return (
    <main>
       <section className="section accounts">
      <div className="row">
        <div className="col-xl-12">
          <h2 className="userscreen-title bg-dark">
            Profit Loss
            <span className="total-pl">
              Total P/L : IR <b className="profit">0</b>
            </span>
          </h2>
          <div className="form_search">
            <form onSubmit={handleSubmit} className="ng-pristine ng-valid ng-touched">
              <div className="row d-flex align-items-center mb-2 profit-row">
                <div className="col-md-2 col-6">
                  <label className="small">Sports Type :</label>
                  <select
                    className="form-control"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    <option value="ALL">All Sports</option>
                    <option value="4">Cricket</option>
                    <option value="2">Tennis</option>
                    <option value="1">Football</option>
                    <option value="2378961">Politics</option>
                    <option value="7">Horse Racing</option>
                    <option value="4339">Greyhound Racing</option>
                    <option value="99994">Kabaddi</option>
                    <option value="99999">Casino</option>
                    <option value="99991">Sports book</option>
                    <option value="99998">Int Casino</option>
                    <option value="99990">Binary</option>
                    <option value="26420387">Mixed Martial Arts</option>
                    <option value="998917">Volleyball</option>
                    <option value="7524">Ice Hockey</option>
                    <option value="7522">Basketball</option>
                    <option value="7511">Baseball</option>
                    <option value="3503">Darts</option>
                    <option value="29">Futsal</option>
                    <option value="20">Table Tennis</option>
                    <option value="5">Rugby</option>
                  </select>
                </div>
                <div className="col-md-2 col-6">
                  <label className="small">From Date :</label>
                  <input
                    type="date"
                    placeholder="From"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="col-md-2 col-6">
                  <label className="small">To Date :</label>
                  <input
                    type="date"
                    placeholder="To"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <div className="col-md-2 col-6 mt-3 pt-1">
                  <button type="submit" className="btn btn-fs bg-black text-white">Submit</button>
                </div>
                <div className="col-md-4 text-md-end text-center">
                  <div className="document_button"></div>
                </div>
              </div>
            </form>
          </div>
          <div className="table-responsive">
            <table className="datatable table table-striped table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Date</th>
                  <th>Event</th>
                  <th>Comm In</th>
                  <th>Comm Out</th>
                  <th>Amount</th>
                  <th>Total</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="noData">No Data Found</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Profit;
