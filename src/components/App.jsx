import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Loading from "./Loading";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
const Article = React.lazy(() => import("./Article"));
const Articles = React.lazy(() => import("./Articles"));
const Home = React.lazy(() => import("./Home"));
const Player = React.lazy(() => import("./Player"));
const Players = React.lazy(() => import("./Players"));
const Team = React.lazy(() => import("./Team"));
const TeamPage = React.lazy(() => import("./TeamPage"));
const Teams = React.lazy(() => import("./Teams"));

const App = () => {
  function Routes() {
    const routes = useRoutes([
      { path: "*", element: <NotFound /> },
      { path: "/", element: <Home /> },
      {
        path: "/players",
        element: <Players />,
        children: [
          { path: ":name", element: <Player /> },
          {
            path: "",
            element: <div className="sidebar-instruction">select a player</div>,
          },
        ],
      },
      {
        path: "/teams",
        element: <Teams />,
        children: [
          {
            path: ":teamId",
            element: <Team />,
          },
          {
            path: "",
            element: <div className="sidebar-instruction">select a team</div>,
          },
        ],
      },
      {
        path: ":teamId",
        element: <TeamPage />,
      },
      {
        path: ":teamId/articles",
        element: <Articles />,
        children: [
          {
            path: ":articleId",
            element: <Article />,
          },
          {
            path: "",
            element: (
              <div className="sidebar-instruction">select an article</div>
            ),
          },
        ],
      },
    ]);
    return routes;
  }

  return (
    <>
      {/* <h1>Basketball League</h1> */}
      <Router>
        <div>
          <Navbar />
          <React.Suspense fallback={<Loading />}>
            <Routes />
          </React.Suspense>
        </div>
      </Router>
    </>
  );
};

export default App;
