import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SideBarSm from "./SideBarSm/SideBarSm";
import SideBarRight from "./RightSideBar/SideBarRight";
import MainFeedSection from "./MainFeed/MainFeedSection";
import { useState, useEffect } from "react";
import { fetchInfo, me } from "../../lib";
// import { useParams } from "react-router-dom";


const Home = () => {
  // const params = useParams();

  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUser = async (id) => {
      const url = `https://striveschool-api.herokuapp.com/api/profile/${me}`;
      const data = await fetchInfo(url);
      console.log({ data });
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
{/*----------------------- SideBarSm Section -----------------------*/}
          <Col md={3} >
              <SideBarSm user={user} />
          </Col>
{/*----------------------- Main Feed Section -----------------------*/}
          <Col md={6}>
            <MainFeedSection user={user} />
          </Col>
{/*----------------------- Sidebar-Right Section -------------------*/}
          <Col className="p-0" md={3}>  
            <SideBarRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Home);
