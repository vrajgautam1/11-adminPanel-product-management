import React from "react";

function Form() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Form Elements</div>
            </div>

            <form action="">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      placeholder="Enter product name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      placeholder="Enter quantity"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="sku">SKU</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sku"
                      placeholder="Enter SKU"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      rows={5}
                      placeholder="Enter product description"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>Available At (Warehouses)</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="surat"
                      />
                      <label className="form-check-label" htmlFor="surat">
                        Surat
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="vadodara"
                      />
                      <label className="form-check-label" htmlFor="vadodara">
                        Vadodara
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="ahmedabad"
                      />
                      <label className="form-check-label" htmlFor="ahmedabad">
                        Ahmedabad
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rajkot"
                      />
                      <label className="form-check-label" htmlFor="rajkot">
                        Rajkot
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-action">
              <button className="btn btn-success">Submit</button>
              <button className="btn btn-danger">Cancel</button>
            </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
