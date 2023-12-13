import ModuleList from "./ModuleList";
function Modules() {
  return (
    <div className="container">
      <div className="header-bar">
        <div className="float-end">
          <button className="btn-secondary">Collapse All</button>
          <button className="btn-secondary">View Progress</button>
          <div className="dropdown float-end">
            <button className="btn btn-secondary dropdown-toggle" type="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Publish All
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Publish All Modules and items</a></li>
              <li><a className="dropdown-item" href="#">Publish modules only</a></li>
              <li><a className="dropdown-item" href="#">Unpublish All</a></li>
            </ul>
          </div>
          <button className="btn-danger">
            <i className="fas fa-plus fa-md" style={{ color: "white", marginRight: "9px" }}></i>Module
          </button>
        </div>
      </div>
      <hr />
      <ModuleList />
    </div>
  );
}

export default Modules;