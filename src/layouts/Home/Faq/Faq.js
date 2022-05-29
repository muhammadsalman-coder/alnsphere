import React, { memo } from "react";
import "./Faq.css";
const Accordion = React.lazy(() => import("components/Accordion/Accordion"));
const Title = React.lazy(() => import("components/Title/Title"));

function Faq() {
  return (
    <div className="faq-container">
    <div className="faq-wrapper py-100px ">
      <div className="container-wrapper">
        <Title
          title="FAQ"
          className={"text-center  fs-46px weight-7 uppercase mb-40px"}
        />

        <div className="faq-accordion-wrapper">
          <Accordion
            title="What are Alns?"
            content={
              <p className="fs-16px weight-4 light-white lh-30px">
                Alns are Aliens from planet Spheron located deep in the
                Spheroxy. They are a brave nation, willing to challenge anyone
                in order to conquer lands.
              </p>
            }
          />
          <Accordion
            title="What is a $Sphererock?"
            content={
              <p className="fs-16px weight-4 light-white lh-30px">
                $Sphererock is an in-game “utility-token” (ERC-20) and the main
                currency of the Alns. It is meant only to enhance the gameplay
                experience and in no way used as a security. They are used for
                buying items, mounts, upgrading, and more.
              </p>
            }
          />
          <Accordion
            title="Where can I buy an NFT?"
            content={
              <p className="fs-16px weight-4 light-white lh-30px">
                Upon release our NFT collection will be available for minting on
                our website. After that the NFTs can be bought on secondary
                markets like OpenSea.
              </p>
            }
          />
          <Accordion
            title="Is there going to be a Whitelist?"
            content={
              <p className="fs-16px weight-4 light-white lh-30px">
                Yes, the Whitelist will be given out to active, and engaging
                community members. Also, there will be contests and other ways
                to get in, which will be announced soon.
              </p>
            }
          />
          <Accordion
            title="Are there benefits for holding the NFTs?"
            content={
              <p className="fs-16px weight-4 light-white lh-30px">
                There will be item, mount, and 3D model airdrops, which holders
                can take part in. Furthermore, there will be a 100 ETH giveaway
                for our community. This, and much more will follow.
              </p>
            }
          />
          <Accordion
            title="What are the royalty fees? "
            content={
              <p className="fs-16px weight-4 light-white lh-30px">
                Royalty fees for secondary sales of 5% will be split between our
                rewards pool for our community, and development pool, to ensure
                longevity and quality.
              </p>
            }
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default memo(Faq);
