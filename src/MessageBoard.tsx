import { Link, Outlet } from "react-router-dom";

const MessageBoard = () => {
  return (
    <div className=" border-white max-w-5xl">
      <Link to="/1">
        <h2 className="text-5xl mx-auto text-center">Message Board</h2>
      </Link>
      <Outlet />
    </div>
  );
};

export default MessageBoard;
