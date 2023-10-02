import React from "react";

function Needs() {
  return (
    <>
      <h2 className="card-title ms-2">Services' needs</h2>
      <div className="card-body">
        <div className="row g-3">
          <label htmlFor="service">Service</label>
          <select id="service" className="form-select w-50" required>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Finance">Finance</option>
            <option value="Information Technology">Information Technology</option>
          </select>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="criteria">
              <label htmlFor="post-title">Post title</label>
              <input
                type="text"
                className="form-control"
                name=""
                id="post-title"
                required
              />
            </div>
            <div className="criteria mt-3">
              <label htmlFor="aptitude">Aptitude</label>
              <input
                type="text"
                className="form-control"
                name=""
                id="aptitude"
                required
              />
            </div>
            <div className="criteria mt-3">
              <label htmlFor="location">Location</label>
              <select id="service" className="form-select" required>
                <option value="">Diego</option>
                <option value="">Majunga</option>
                <option value="">Tamatave</option>
                <option value="">Tana</option>
                <option value="">Tulear</option>
                <option value="">Fianarantsoa</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mt-sm-4">
            <textarea
              className="form-control"
              id="object"
              rows={2}
              placeholder="Description..."
              required
            />
            <input
              type="text"
              className="form-control mt-3"
              name=""
              id=""
              placeholder="Contract type"
            />
            <input
              type="text"
              className="form-control mt-3"
              name=""
              id=""
              placeholder="Capacity"
            />
            <div className="mt-5 d-flex justify-content-end">
              <button className="btn btn-secondary">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Needs;
