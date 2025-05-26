import React from 'react'

function Form() {
  return (
    <div>
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <div className="card-title">Form Elements</div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="email2">Email Address</label>
                <input type="email" className="form-control" id="email2" placeholder="Enter Email" />
                <small id="emailHelp2" className="form-text text-muted">We'll never share your email with anyone
                  else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
             
              
              
              
              
             
              
              
             
              <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea className="form-control" id="comment" rows={5} defaultValue={"                          "} />
              </div>

              <div className="form-check">

                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Agree with terms and conditions
                </label>


              </div>
            </div>
            
          </div>
        </div>
        <div className="card-action">
          <button className="btn btn-success">Submit</button>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Form
