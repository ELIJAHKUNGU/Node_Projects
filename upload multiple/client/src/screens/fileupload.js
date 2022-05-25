import React from "react";

const fileupload = () => {
  return (
    <div className="row mt-3">
      <div className="col-6">
        <div className="form-group">
          <label htmlFor="">Select a single File</label>
          <input type="file" className="form-control" name="" id="" />
        </div>
        <div className="row">
          <div className="col-10">
            <button type="button btn-success  mt-2">Upload</button>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Title</label>
            <input type="text" name="" className="form-control" id="" />
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="">Select a single File</label>
              <input type="file" className="form-control" name="" id="" />
            </div>
            <div className="row">
              <div className="col-10">
                <button type="button btn btn-success mt-2">Upload</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fileupload;
