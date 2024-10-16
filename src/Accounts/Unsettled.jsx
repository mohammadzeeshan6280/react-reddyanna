import { useState } from "react";

export default function Unsettled() {
    const [page, setPage] = useState(1);

  // Pagination handling functions
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };


  return (
    <main>
      <section className="section accounts">
      <div className="row">
        <div className="col-xl-12">
          <h2 className="userscreen-title bg-dark">Unsettled Bets</h2>
          <div className="table-responsive">
            <table id="btDataTable" className="datatable table table-striped table-bordered" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Event Name</th>
                  <th>Nation</th>
                  <th>Event Type</th>
                  <th>Market Name</th>
                  <th>Side</th>
                  <th>Rate</th>
                  <th>Amount</th>
                  <th>Place Date</th>
                  <th>Match Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="10" className="noData">No Data Found</td>
                </tr>
              </tbody>
            </table>
            <div className="pagination">
              <nav aria-label="pagination example" className="Pager1">
                <ul className="pagination pagination-circle justify-content-center">
                  <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <button onClick={handlePrevious} className="page-link">« Previous</button>
                  </li>
                  <li className="page-item active">
                    <button className="page-link">{page}</button>
                  </li>
                  <li className="page-item">
                    <button onClick={handleNext} className="page-link">Next »</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}
