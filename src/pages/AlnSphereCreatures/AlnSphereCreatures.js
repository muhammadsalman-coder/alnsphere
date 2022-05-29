import React, { memo } from "react";
import "./AlnSphereCreatures.css";

const Tabs = React.lazy(() => import("components/Tabs/Tabs"));
const MarketPlace = React.lazy(() =>
  import("layouts/AlnSphereCreatures/MarketPlace/MarketPlace")
);
const Navbar = React.lazy(() =>
  import("layouts/AlnSphereCreatures/Navbar/Navbar")
);
const AlnSphereCreaturesContext = React.lazy(() =>
  import("./AlnSphereCreaturesContext")
);

function AlnSphereCreatures() {
  return (
    <div>
      <AlnSphereCreaturesContext>
        <Tabs defaultTab="Marketplace">
          <Navbar />
          <MarketPlace />
        </Tabs>
      </AlnSphereCreaturesContext>
    </div>
  );
}

export default memo(AlnSphereCreatures);
