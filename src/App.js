import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Collection from "layouts/AlnSphereCreatures/Collection/Collection";
import Gallery from "layouts/Marketplace/Gallery/Gallery";
import Dashboard from "layouts/Marketplace/Dashboard/Dashboard";
// import questionMark from "assets/images/question-mark.png";
// import CardComponent from "components/CardComponent";
import DataContextProvider from "context/DataContextProvider";
import WalletAddress from "pages/WalletAddress/WalletAddress";
import MintPage from "pages/MintPage/MintPage";

const RandomPage = React.lazy(() => import("pages/RandomPage/RandomPage"));
const RiddlePage = React.lazy(() => import("pages/RiddlePage/RiddlePage"));
const GamePage = React.lazy(() => import("pages/GamePage/GamePage"));
const Home = React.lazy(() => import("pages/Home/Home"));

const AlnSphereCreatures = React.lazy(() =>
  import("pages/AlnSphereCreatures/AlnSphereCreatures")
);

function App() {
  return (
    <DataContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/mint"
            element={
              <Suspense fallback={<div />}>
                <MintPage />
              </Suspense>
            }
          />
          <Route
            path="/game"
            element={
              <Suspense fallback={<div />}>
                <GamePage />
              </Suspense>
            }
          />
          <Route
            path="/walletaddress"
            element={
              <Suspense fallback={<div />}>
                <WalletAddress />
              </Suspense>
            }
          />
          <Route
            path="/marketplace"
            element={
              <Suspense fallback={<div />}>
                <AlnSphereCreatures />
              </Suspense>
            }
          >
            <Route path="collection" element={<Collection />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="inventory"
              element={
                <div className="centered-comming-soon">
                  No Alns in your inventory.
                </div>
              }
            />
            <Route
              path="staking"
              element={
                <div className="centered-comming-soon">
                  No Alns available for staking.
                </div>
              }
            />
            <Route
              path="favorite"
              element={
                <div className="centered-comming-soon">
                  No Alns in your Favourites.
                </div>
              }
            />
          </Route>

          <Route
            path="/riddle52zc"
            element={
              <Suspense fallback={<div />}>
                <RiddlePage />
              </Suspense>
            }
          />

          <Route
            path="/random"
            element={
              <Suspense fallback={<div />}>
                <RandomPage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </DataContextProvider>
  );
}

export default App;
