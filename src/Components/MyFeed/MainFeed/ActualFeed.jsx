import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import POSTPic from "./POSTPic";
import { useEffect, useState } from "react";
import PUTModal from "./PUTModal";

import { deletePost, me } from "../../../lib";

const ActualFeed = ({ reversedFeed, fetchFeed, token }) => {
  const [smShow, setSmShow] = useState(false);
  const [pic, setPic] = useState(false);

  return (
    <>
      {!reversedFeed ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        reversedFeed.map((elem) => (
          <div key={elem._id}>
            <div className="section-container pt-2 pb-0 mb-2 list-group list-group-flush">
              <div className=" d-flex justify-content-between list-pad1 ">
                <h4 className="text-right">...</h4>
                <Col className="text-right">
                  {elem.user._id == me && (
                    <>
                      <Button
                        variant="light"
                        className="rounded-pill mr-1"
                        style={{ width: "40px", height: "42px" }}
                        onClick={() => deletePost(elem._id, fetchFeed)}
                      >
                        <i class="bi bi-trash"></i>
                      </Button>
                      <Button
                        variant="light"
                        className="rounded-pill mr-1"
                        style={{ width: "40px" }}
                        onClick={() => {
                          setSmShow(true);
                        }}
                      >
                        <i class="bi bi-pencil"></i>
                      </Button>
                      <Button

                        variant="light"
                        className="rounded-pill"
                        style={{ width: "40px" }}

                        onClick={() => {
                          setPic(true);
                        }}
                      >

                        <i class="bi bi-image"></i>

                      </Button>
                      <PUTModal
                        fetchFeed={fetchFeed}
                        smShow={smShow}
                        setSmShow={setSmShow}
                        id={elem._id}
                        token={token}
                      />
                      <POSTPic
                        fetchFeed={fetchFeed}
                        pic={pic}
                        setPic={setPic}
                        id={elem._id}
                        token={token}
                      />
                    </>
                  )}
                </Col>{" "}
              </div>
              <hr className="actuall-feed-hr mt-0" />
              <div className=" d-flex list-pad2 ">
                <div>
                  <img
                    className="mr-2 rounded-pill"
                    src={elem.user.image}
                    width="50"
                    height="50"
                    //   style={{ borderRadius: "50%" }}
                  />{" "}
                </div>
                <div>
                  <b className="text-left">
                    {elem.user.name} {elem.user.surname}
                  </b>

                  <p className="text-left">{elem.user.title}</p>
                </div>
              </div>
              <img className="img-fluid" src={elem.image} alt="" />
              <div>
                <p>{elem.text}</p>
              </div>

              <hr className="actuall-feed-hr mt-0" />
              <Row>
                <Col className="px-0 actuall-feed-interact">
                  <b>
                    <button className="btn btn-primary actuall-feed-h5">
                      <i className="bi text-muted bi-hand-thumbs-up"></i>&nbsp;{" "}
                      <span className="text-muted">Like</span>
                    </button>{" "}
                  </b>
                </Col>
                <Col className="px-0 actuall-feed-interact">
                  <b>
                    <button className="btn btn-primary actuall-feed-h5">
                      <i className="bi text-muted bi-chat-right-text"></i>&nbsp;{" "}
                      <span className="text-muted">Comment</span>
                    </button>{" "}
                  </b>
                </Col>
                <Col className="px-0 actuall-feed-interact">
                  <b>
                    <button className="btn btn-primary actuall-feed-h5">
                      <i className="bi text-muted bi-arrow-90deg-right"></i>
                      &nbsp; <span className="text-muted">Share</span>
                    </button>{" "}
                  </b>
                </Col>
                <Col className="px-0  actuall-feed-interact">
                  <b>
                    <button className="btn btn-primary actuall-feed-h5">
                      <img
                        src="https://img.icons8.com/ios-filled/50/000000/paper-plane.png"
                        width="22"
                      />
                      &nbsp; <span className="text-muted">Send</span>
                    </button>{" "}
                  </b>
                </Col>
              </Row>
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default ActualFeed;
