import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <button type="submit" className="btn btn-primary btn-block">
        Current Location
      </button>
      <hr />
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-info btn-block">
          Change city
        </button>
      </form>
    </div>
  );
}
