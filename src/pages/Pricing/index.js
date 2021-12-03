import React from "react";
import "./Pricing.css";
import { Card, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "../../globalStyles";
import Routes from "../../Routes";

function Pricing() {
  return (
    <Routes>
      <div className="pricing-Wrap">
        <div className="princing-top">
          <h4 className="no-hidden-charges">No hidden charges</h4>
          <h2 className="low-cost">Low cost pricing for all</h2>
          <h2 className="businesses">businesses</h2>
        </div>
        <Container>
          <div className="pricing-bottom">
            <Card className="card" style={{ width: "60rem" }}>
              <span className="Price-model">Pricing model</span>
              <Dropdown.Divider />
              <br />
              <div className="first-row">
                <Card className="first-card" style={{ width: "50rem" }}>
                  <span className="Below-price">Below NGN 250</span>
                  <span className="first-amount">NGN 0.50k</span>
                </Card>
              </div>
              <div className="first-row">
                <Card className="second-card" style={{ width: "50rem" }}>
                  <span className="Below-price">NGN 250 - 999.99</span>
                  <span className="first-amount">NGN 1.00k</span>
                </Card>
              </div>
              <div className="first-row">
                <Card className="first-card" style={{ width: "50rem" }}>
                  <span className="Below-price">NGN 1,000 - 4,999.99</span>
                  <span className="first-amount">NGN 5.00k</span>
                </Card>
              </div>
              <div className="first-row">
                <Card className="second-card" style={{ width: "50rem" }}>
                  <span className="Below-price">NGN 5000 and above</span>
                  <span className="first-amount">NGN 25.00k</span>
                </Card>
              </div>
              <br />
              <br />
            </Card>
          </div>
        </Container>
        <br />
        <br />
        <br />
      </div>
    </Routes>
  );
}

export default Pricing;

// import React from "react";
// import { Container } from "../../globalStyles";
// import {
//   InfoSec,
//   InfoSec2,
//   Headline,
//   SubHead,
//   SubHead2,
//   Bottom,
//   FirstCard,
//   SecondCard,
//   Amount,
//   Charge,
//   PricingCard,
//   Model,
//   Divider,
//   FirstRow,

// } from "./PricingElements";
// import './Pricing.css'

// function Pricing() {

//   return (
//     <>
//         <InfoSec>
//         <Container>
//           <Headline>No hidden charges</Headline>
//           <SubHead>Low cost pricing for all</SubHead>
//           <SubHead2>business</SubHead2>

//         </Container>
//       </InfoSec>
//       <InfoSec2>
//          <Container>
//         <Bottom>
//         <PricingCard className="card">
//           <Model>Pricing model</Model>
//           <Divider />
//           <br />
//           <FirstRow>
//             <FirstCard>
//               <Amount>Below NGN 250</Amount>
//               <Charge>NGN 0.50k</Charge>
//             </FirstCard>
//           </FirstRow>
//           <FirstRow>
//             <SecondCard>
//               <Amount>NGN 250 - 999.99</Amount>
//               <Charge>NGN 1.00k</Charge>
//             </SecondCard>
//           </FirstRow>
//           <FirstRow>
//             <FirstCard>
//               <Amount>NGN 1,000 - 4,999.99</Amount>
//               <Charge>NGN 5.00k</Charge>
//             </FirstCard>
//           </FirstRow>
//           <FirstRow>
//             <SecondCard>
//               <Amount>NGN 5000 and above</Amount>
//               <Charge>NGN 25.00k</Charge>
//             </SecondCard>
//           </FirstRow>
//           <br />
//           <br />
//         </PricingCard>
//       </Bottom>
//       </Container>
//         </InfoSec2>
//       <br />
//       <br />
//       <br />

//     </>
//   )
// }

// export default Pricing
