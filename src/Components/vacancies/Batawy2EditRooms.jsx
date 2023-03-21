import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../../customApi";
function Batawy2EditRooms() {
  function Loading() {
    return (
      <div className="spinner" style={{ padding: "0px", margin: "0px" }} />
    );
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [capacity, setCapacity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchResults = async (event) => {
    event.preventDefault();
    setSearchLoading(true);
    axios
      .get(`${api}/searchvacant/batawy2?q=${query}`)
      .then(async (res) => {
        setData(res.data);
        setQuery("");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      })
      .finally(() => setSearchLoading(false));
  };
  const item = {
    room: data[0]?.room,
    capacity: capacity,
  };
  const updateResults = async (e) => {
    e.preventDefault();
    const id = data[0].id;
    setIsLoading(true);
    await axios
      .put(`${api}/batawy2vacant/update/` + id, item)
      .then((response) => {
        setShow(false);
        Swal.fire({
          position: "center",
          icon: "success",
          customClass: "swal-wide",
          title: `تم تحديث ${data[0].room} بنجاح`,
          showConfirmButton: false,
          timer: 1700,
        });
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            position: "center",
            icon: "error",
            customClass: "swal-wide",
            title: "حدثت مشكلة ما",
            showConfirmButton: true,
          });
          console.log(error.response.data);
          console.log(error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        className="btn btn-danger"
        style={{ fontSize: "13px", backgroundColor: "teal" }}
      >
        تعديل الغرف
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>تعديل إستيعاب الغرف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div className="control">
              <form onSubmit={fetchSearchResults}>
                <div className="searchInput">
                  <input
                    className="input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="رقم الغرفة"
                    style={{
                      width: "250px",
                      height: "32px",
                      fontSize: "16px",
                      marginBottom: "1rem",
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div>
            {searchLoading ? (
              Loading()
            ) : data && data.length > 0 ? (
              <>
                <div
                  className="form-group"
                  style={{ display: "flex", gap: "20px" }}
                >
                  <div className="input-group mb-3">
                    <div>
                      <label className="control-label" htmlFor="room">
                        رقم الغرفة :
                      </label>
                      <input
                        autoComplete="off"
                        className="form-control form-control-sm"
                        type="text"
                        id="room"
                        name="room"
                        placeholder=""
                        defaultValue={data[0].room}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div>
                      <label className="control-label" htmlFor="capacity">
                        إستيعاب الغرفة :
                      </label>
                      <input
                        className="form-control form-control-sm"
                        autoComplete="off"
                        type="number"
                        id="capacity"
                        name="capacity"
                        placeholder=""
                        defaultValue={data[0].capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-md"
                  onClick={updateResults}
                >
                  تحديث
                </button>
              </>
            ) : null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {isLoading ? Loading() : "خروج"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Batawy2EditRooms;
