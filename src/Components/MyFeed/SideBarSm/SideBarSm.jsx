import FirstSideBar from "./FirstSideBar"
import SecondSideBar from "./SecondSideBar"


const SideBarSm = ({ user }) => {
  return (
    <>
      {/*-------First SideBarSm Section------*/}
      <FirstSideBar user={user}/>
      {/*-------Second SideBarSm Section------*/}
      <SecondSideBar />
    </>
  );
};

export default SideBarSm;
