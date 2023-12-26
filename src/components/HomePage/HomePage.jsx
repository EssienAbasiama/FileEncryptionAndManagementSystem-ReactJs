import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Icon.css";
import "./HomePage.css";
import { Link } from "react-router-dom";
export default function HomePage() {
  useEffect(() => {
    const fetchUserFiles = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8002/api/files/user/${userId}`
        );
        setUserFiles(response.data);
      } catch (error) {
        console.error("Error fetching user files:", error);
      }
    };

    fetchUserFiles();
  }, [userId]);
  return (
    <>
      {/* <div className="preloader">
        <div className="preloader-icon"></div>
      </div> */}

      <div className="sidebar" id="notifications">
        <div className="sidebar-header d-block align-items-end">
          <div className="align-items-center d-flex justify-content-between py-4">
            Notifications
            <button data-sidebar-close className="ltr">
              <i className="bi bi-arrow-right"></i>
            </button>
            <button data-sidebar-close className="rtl">
              <i className="bi bi-arrow-left"></i>
            </button>
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                className="nav-link active nav-link-notify"
                data-bs-toggle="tab"
                href="#activities"
              >
                Activities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#alerts">
                Alerts
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-content">
          <div className="tab-content">
            <div className="tab-pane active" id="activities">
              <div className="tab-pane-body">
                <ul className="list-group list-group-flush">
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-info me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-person"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-bold d-flex justify-content-between">
                          You joined a group
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> Today
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-warning me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-hdd"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-bold d-flex justify-content-between">
                          Storage is running low!
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> Today
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-secondary me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-file-text"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 d-flex justify-content-between">
                          1 person sent a file
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> Yesterday
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-success me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-download"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 d-flex justify-content-between">
                          Reports ready to download
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> Yesterday
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-info me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-lock"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 d-flex justify-content-between">
                          2 steps verification
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> 20 min ago
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-pane-footer">
                <a href="#" className="btn btn-success">
                  <i className="bi bi-check2 me-2"></i> Make All Read
                </a>
                <a href="#" className="btn btn-danger ms-2">
                  <i className="bi bi-trash me-2"></i> Delete all
                </a>
              </div>
            </div>
            <div className="tab-pane" id="alerts">
              <div className="tab-pane-body">
                <ul className="list-group list-group-flush">
                  <li className="px-0 list-group-item d-flex">
                    <div className="flex-shrink-0">
                      <figure className="avatar avatar-warning me-3">
                        <span className="avatar-text rounded-circle">
                          <i className="bi bi-lock"></i>
                        </span>
                      </figure>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 fw-bold d-flex justify-content-between">
                        Signed in with a different device.
                      </p>
                      <span className="text-muted small">
                        <i className="bi bi-clock me-1"></i> Yesterday
                      </span>
                    </div>
                  </li>
                  <li className="px-0 list-group-item d-flex">
                    <div className="flex-shrink-0">
                      <figure className="avatar avatar-warning me-3">
                        <span className="avatar-text fw-bold rounded-circle">
                          <i className="bi bi-file-text"></i>
                        </span>
                      </figure>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 fw-bold d-flex justify-content-between">
                        Your billing information is not active.
                      </p>
                      <span className="text-muted small">
                        <i className="bi bi-clock me-1"></i> Yesterday
                      </span>
                    </div>
                  </li>
                  <li className="px-0 list-group-item d-flex">
                    <div className="flex-shrink-0">
                      <figure className="avatar avatar-warning me-3">
                        <span className="avatar-text rounded-circle">
                          <i className="bi bi-person"></i>
                        </span>
                      </figure>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 d-flex justify-content-between">
                        Your subscription has expired.
                      </p>
                      <span className="text-muted small">
                        <i className="bi bi-clock me-1"></i> Today
                      </span>
                    </div>
                  </li>
                  <li className="px-0 list-group-item d-flex">
                    <div className="flex-shrink-0">
                      <figure className="avatar avatar-warning me-3">
                        <span className="avatar-text rounded-circle">
                          <i className="bi bi-hdd"></i>
                        </span>
                      </figure>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 d-flex justify-content-between">
                        Your storage space is running low
                      </p>
                      <span className="text-muted small">
                        <i className="bi bi-clock me-1"></i> Today
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-pane-footer">
                <a href="#" className="btn btn-success">
                  <i className="bi bi-check2 me-2"></i> Make All Read
                </a>
                <a href="#" className="btn btn-danger ms-2">
                  <i className="bi bi-trash me-2"></i> Delete all
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="menu-header">
          <a href="index.html" className="menu-header-logo">
            <img src="../../public/assets/images/logo.svg" alt="logo" />
          </a>
          <a href="index.html" className="btn btn-sm menu-close-btn">
            <i className="bi bi-x"></i>
          </a>
        </div>
        <div className="menu-body">
          <ul>
            <li>
              <a className="active" href="index.html">
                <span className="nav-link-icon">
                  <i className="bi bi-pie-chart"></i>
                </span>
                <span>Dashboard</span>
                <span className="badge bg-success ms-auto">New</span>
              </a>
            </li>
            <li>
              <a href="./files.html">
                <span className="nav-link-icon">
                  <i className="bi bi-folder"></i>
                </span>
                <span>Files</span>
              </a>
            </li>
            <li>
              <Link to="/fileUpload">
                <span className="nav-link-icon">
                  <i className="bi bi-cloud-arrow-up"></i>
                </span>
                <span>File Upload</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-footer border-top d-flex flex-column gap-2">
          <div>You are using 29 GB</div>
          <h5>Total 100 GB of storage</h5>
          <div className="progress" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              aria-valuenow="0"
              style={{ width: "30%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div className="layout-wrapper">
        <div className="header">
          <div className="menu-toggle-btn">
            <a href="#">
              <i className="bi bi-list"></i>
            </a>
          </div>
          <a href="index.html" className="logo">
            <img
              width="130"
              src="../../public/assets/images/logo.svg"
              alt="logo"
            />
          </a>
          <div className="page-title">Dashboard</div>
          <form className="search-form">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <a
                href="#"
                className="btn btn-outline-light close-header-search-bar"
              >
                <i className="bi bi-x"></i>
              </a>
            </div>
          </form>
          <div className="header-bar ms-auto">
            <ul className="navbar-nav justify-content-end gap-3">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link nav-link-notify"
                  data-count="2"
                  data-sidebar-target="#notifications"
                >
                  <i className="bi bi-bell icon-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-white py-1 px-2 dropdown-toggle custom-shadow"
                >
                  <span className="avatar avatar-sm me-2">
                    <img
                      src="../../public/assets/images/user/man_avatar5.jpg"
                      className="rounded-circle"
                      alt="avatar"
                    />
                  </span>
                  <span className="d-none d-md-inline">Timotheus Bendan</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/fileUpload" className="btn btn-primary btn-icon">
                  <i className="bi bi-cloud-arrow-up"></i> File Upload
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-mobile-buttons">
            <a href="#" className="search-bar-btn">
              <i className="bi bi-search"></i>
            </a>
            <a href="#" className="actions-btn">
              <i className="bi bi-three-dots"></i>
            </a>
          </div>
        </div>
        <div className="content ">
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card overflow-hidden h-100">
                <div className="card-body">
                  <div className="d-md-flex justify-content-between align-items-center">
                    <h6 className="card-title">File Transfer Chart</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="nav nav-tabs mt-3 mt-lg-0">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            href="#"
                          >
                            <i className="bi bi-arrow-down-short me-1"></i>{" "}
                            Download
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            href="#"
                          >
                            <i className="bi bi-arrow-up-short me-1"></i> Upload
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                  >
                    <div id="download-chart"></div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel">
                    <div id="upload-chart"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card widget h-100">
                <div className="card-header d-flex align-items-center">
                  <h6 className="card-title">Folders</h6>
                  <div className="d-flex gap-2 ms-auto">
                    <a
                      href="#"
                      className="btn btn-white btn-sm btn-primary rounded-pill slick-folder-lists-prev-arrow ltr"
                    >
                      <i className="bi bi-chevron-left"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-white btn-sm btn-primary rounded-pill slick-folder-lists-prev-arrow rtl"
                    >
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-white btn-sm btn-primary rounded-pill slick-folder-lists-next-arrow ltr"
                    >
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-white btn-sm btn-primary rounded-pill slick-folder-lists-next-arrow rtl"
                    >
                      <i className="bi bi-chevron-left"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="slick-folder-lists">
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-3">
                          <span className="avatar-text bg-primary text-white-90 rounded-pill">
                            <i className="bi bi-image-alt"></i>
                          </span>
                        </div>
                        <span className="lead fw-bold">Images</span>
                        <div className="dropdown ms-auto">
                          <a
                            href="#"
                            className="btn btn-white btn-sm"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bi bi-three-dots"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-eye me-2"></i> Open
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-download me-2"></i> Download
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-trash me-2"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex align-items-start px-1">
                        <div className="flex-fill me-3">
                          <div className="text-muted mb-3">
                            25 GB of 50 GB used
                          </div>
                          <div className="progress mb-3">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              style={{ width: "30%" }}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div className="text-muted">
                            There are 251 files in total in this folder
                          </div>
                        </div>
                        <button className="btn btn-outline-primary mt-4">
                          View Folder <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-3">
                          <span className="avatar-text bg-warning text-white-90 rounded-pill">
                            <i className="bi bi-play-circle"></i>
                          </span>
                        </div>
                        <span className="lead fw-bold">Videos</span>
                        <div className="dropdown ms-auto">
                          <a
                            href="#"
                            className="btn btn-white btn-sm"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bi bi-three-dots"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-eye me-2"></i> Open
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-download me-2"></i> Download
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-trash me-2"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex align-items-start px-1">
                        <div className="flex-fill me-3">
                          <div className="text-muted mb-3">
                            2 GB of 50 GB used
                          </div>
                          <div className="progress mb-3">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              aria-valuenow="0"
                              style={{ width: "25%" }}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div className="text-muted">
                            There are 39 files in total in this folder
                          </div>
                        </div>
                        <button className="btn btn-outline-warning mt-4">
                          View Folder <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-3">
                          <span className="avatar-text bg-success text-white-90 rounded-pill">
                            <i className="bi bi-music-note-beamed"></i>
                          </span>
                        </div>
                        <span className="lead fw-bold">Music</span>
                        <div className="dropdown ms-auto">
                          <a
                            href="#"
                            className="btn btn-white btn-sm"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bi bi-three-dots"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-eye me-2"></i> Open
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-download me-2"></i> Download
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-trash me-2"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex align-items-start px-1">
                        <div className="flex-fill me-3">
                          <div className="text-muted mb-3">
                            8 GB of 50 GB used
                          </div>
                          <div className="progress mb-3">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-valuenow="0"
                              style={{ width: "10%" }}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div className="text-muted">
                            There are 1.240 files in total in this folder
                          </div>
                        </div>
                        <button className="btn btn-outline-success mt-4">
                          View Folder <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-3">
                          <span className="avatar-text bg-secondary text-white-90 rounded-pill">
                            <i className="bi bi-file-earmark"></i>
                          </span>
                        </div>
                        <span className="lead fw-bold">Documents</span>
                        <div className="dropdown ms-auto">
                          <a
                            href="#"
                            className="btn btn-white btn-sm"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bi bi-three-dots"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-eye me-2"></i> Open
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-download me-2"></i> Download
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="bi bi-trash me-2"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex align-items-start px-1">
                        <div className="flex-fill me-3">
                          <div className="text-muted mb-3">
                            1.5 GB of 50 GB used
                          </div>
                          <div className="progress mb-3">
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              aria-valuenow="0"
                              style={{ width: "50%" }}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div className="text-muted">
                            There are 180 files in total in this folder
                          </div>
                        </div>
                        <button className="btn btn-outline-secondary mt-4">
                          View Folder <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-md-flex align-items-center">
                    <div id="storage" className="me-4 mb-3 mb-lg-0"></div>
                    <div>
                      <p className="text-muted">Total 100 GB of storage</p>
                      <div className="display-8 fw-bold mb-4">
                        You are using 29 GB
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress flex-fill me-3">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="0"
                            style={{ width: "30%" }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <a href="#" className="small">
                          Upgrade
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="card-title mb-4">Recently Shared</h6>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div className="avatar-group">
                              <div className="avatar avatar-sm">
                                <span className="avatar-text bg-primary text-white rounded-circle">
                                  E
                                </span>
                              </div>
                              <div className="avatar avatar-sm">
                                <img
                                  src="../../public/assets/images/user/man_avatar1.jpg"
                                  className="rounded-circle"
                                  alt="avatar"
                                />
                              </div>
                              <div className="avatar avatar-sm">
                                <span className="avatar-text bg-warning rounded-circle">
                                  S
                                </span>
                              </div>
                            </div>
                            <div className="dropdown ms-auto">
                              <a
                                href="#"
                                className="btn btn-white btn-sm"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bi bi-three-dots"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Separated link
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lead fw-bold mb-2">My Playlist</div>
                          <div className="text-muted small d-flex align-items-center">
                            <i className="bi bi-clock me-2"></i> 15 April, 2021
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div className="avatar-group">
                              <div className="avatar avatar-sm">
                                <img
                                  src="../../public/assets/images/user/man_avatar3.jpg"
                                  className="rounded-circle"
                                  alt="avatar"
                                />
                              </div>
                              <div className="avatar avatar-sm">
                                <img
                                  src="../../public/assets/images/user/women_avatar2.jpg"
                                  className="rounded-circle"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div className="dropdown ms-auto">
                              <a
                                href="#"
                                className="btn btn-white btn-sm"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bi bi-three-dots"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Separated link
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lead fw-bold mb-2">Website Files</div>
                          <div className="text-muted small d-flex align-items-center">
                            <i className="bi bi-clock me-2"></i> 27 July, 2021
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-7">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title mb-4">Recent Files</h5>
                    <a href="#">View All</a>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="invoices"
                      className="table table-custom table-lg"
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Size</th>
                          <th>Date</th>
                          <th colspan="2">Members</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userFiles.map((file) => (
                          <tr key={file.fileName}>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-sm me-3">
                                  <span className="avatar-text rounded-circle">
                                    <i className="bi bi-file-earmark-music"></i>
                                  </span>
                                </div>
                                <span>{file.fileName}</span>
                              </div>
                            </td>
                            <td>900 KB</td>
                            <td>
                              <i className="bi bi-clock me-1"></i> 10 May, 2021
                            </td>
                            <td className="text-end">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-white btn-sm"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a href="#" className="dropdown-item">
                                    Details
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Share
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Copy
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Move
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Download
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Rename
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-3">
                                <img
                                  src="../../public/assets/images/photo10.jpg"
                                  className="rounded-pill"
                                  alt="..."
                                />
                              </div>
                              <span>Natural-Picture.jpg</span>
                            </div>
                          </td>
                          <td>95 KB</td>
                          <td>
                            <i className="bi bi-clock me-1"></i> 25 Apr, 2021
                          </td>
                          <td>
                            <div className="avatar-group">
                              {/* <div
                                className="avatar avatar-sm"
                                title="Dollie Bullock"
                              >
                                <img
                                  src="../../public/assets/images/user/women_avatar2.jpg"
                                  className="rounded-circle"
                                  alt="avatar"
                                />
                              </div> */}
                            </div>
                          </td>
                          <td className="text-end">
                            <div className="dropdown">
                              <a
                                href="#"
                                data-bs-toggle="dropdown"
                                className="btn btn-white btn-sm"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots"></i>
                              </a>
                              <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">
                                  Details
                                </a>
                                <a href="#" className="dropdown-item">
                                  Share
                                </a>
                                <a href="#" className="dropdown-item">
                                  Copy
                                </a>
                                <a href="#" className="dropdown-item">
                                  Move
                                </a>
                                <a href="#" className="dropdown-item">
                                  Download
                                </a>
                                <a href="#" className="dropdown-item">
                                  Rename
                                </a>
                                <a href="#" className="dropdown-item">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-5">
              <h4 className="mb-4 fw-bold">Recent Activities</h4>
              <div className="card">
                <div className="card-body">
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="avatar me-3">
                        <img
                          src="../../public/assets/images/user/man_avatar3.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div>
                        <h6>
                          <a href="#">Serena Glover</a> uploaded new files.{" "}
                          <a href="#">View Files</a>.
                        </h6>
                        <div className="small text-muted mt-3">
                          <i className="bi bi-clock me-1"></i> Yesterday
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="avatar avatar-success me-3">
                        <span className="avatar-text rounded-circle">
                          <i className="bi bi-music-note-beamed"></i>
                        </span>
                      </div>
                      <div>
                        <h6>
                          Shared folder named <a href="#">Musics</a>.
                        </h6>
                        <div className="avatar-group">
                          <div className="avatar avatar-sm">
                            <span className="avatar-text bg-info rounded-circle">
                              S
                            </span>
                          </div>
                          <div className="avatar avatar-sm">
                            <img
                              src="../../public/assets/images/user/man_avatar1.jpg"
                              className="rounded-circle"
                              alt="avatar"
                            />
                          </div>
                          <div className="avatar avatar-sm">
                            <img
                              src="../../public/assets/images/user/man_avatar3.jpg"
                              className="rounded-circle"
                              alt="avatar"
                            />
                          </div>
                          <div className="avatar avatar-sm">
                            <img
                              src="../../public/assets/images/user/women_avatar2.jpg"
                              className="rounded-circle"
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div className="small text-muted mt-3">
                          <i className="bi bi-clock me-1"></i> 20.10.2021 PM
                          09:00
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="avatar avatar-danger me-3">
                        <span className="avatar-text rounded-circle">
                          <i className="bi bi-trash"></i>
                        </span>
                      </div>
                      <div>
                        <h6>
                          The file named{" "}
                          <span className="text-primary">report2022.pdf</span>{" "}
                          has been deleted
                        </h6>
                        <div className="small text-muted mt-3">
                          <i className="bi bi-clock me-1"></i> Today, 07:40
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="avatar avatar-primary me-3">
                        <span className="avatar-text rounded-circle">
                          <i className="bi bi-image-alt"></i>
                        </span>
                      </div>
                      <div>
                        <h6>
                          <a href="#">Dollie Bullock</a> uploaded an image.
                        </h6>
                        <img
                          className="w-25 img-fluid rounded"
                          src="../../public/assets/images/photo2.jpg"
                          alt="..."
                        />
                        <div className="small text-muted mt-3">
                          <i className="bi bi-clock me-1"></i> Today, 07:40
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div
            className="position-fixed bottom-0 end-0 p-3"
            style={{ Zindex: "11" }}
          >
            <div
              className="toast bg-primary"
              role="alert"
              id="upgrade-toast"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-body text-center">
                <img
                  className="w-75 mb-3"
                  src="../../public/assets/images/upgrade.svg"
                  alt="..."
                />
                <h5 className="fw-bold">
                  Unlock your Plan{" "}
                  <i className="bi bi-emoji-heart-eyes ms-1"></i>
                </h5>
                <p className="opacity-50">
                  Expanded storage, access to more feature on Filezone.
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <a href="./pricing-table.html" className="btn btn-warning">
                    Upgrade
                  </a>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="toast"
                  >
                    Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="content-footer">
          <div>
            <a href="#" target="_blank">
              UploadMyFile
            </a>
          </div>
          <div>
            <nav className="nav gap-4">
              <a href="#" className="nav-link">
                Licenses
              </a>
              <a href="#" className="nav-link">
                Change Log
              </a>
              <a href="#" className="nav-link">
                Get Help
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
