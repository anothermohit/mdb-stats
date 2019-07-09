import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { Line } from "react-chartjs-2";

class Home extends Component {
    state = {
      activeItem: "1",
       dataLine: {
         labels: ["January", "February", "March", "April", "May", "June", "July"],
         datasets: [
           {
             label: "You",
             fill: true,
             lineTension: 0.3,
             backgroundColor: "rgba(225, 204,230, .3)",
             borderColor: "rgb(205, 130, 158)",
             borderCapStyle: "butt",
             borderDash: [],
             borderDashOffset: 0.0,
             borderJoinStyle: "miter",
             pointBorderColor: "rgb(205, 130,1 58)",
             pointBackgroundColor: "rgb(255, 255, 255)",
             pointBorderWidth: 10,
             pointHoverRadius: 5,
             pointHoverBackgroundColor: "rgb(0, 0, 0)",
             pointHoverBorderColor: "rgba(220, 220, 220,1)",
             pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,
             data: [65, 59, 80, 81, 56, 55, 40]
           },
           {
             label: "Benchmark (All Customers)",
             fill: true,
             lineTension: 0.3,
             backgroundColor: "rgba(184, 185, 210, .3)",
             borderColor: "rgb(35, 26, 136)",
             borderCapStyle: "butt",
             borderDash: [],
             borderDashOffset: 0.0,
             borderJoinStyle: "miter",
             pointBorderColor: "rgb(35, 26, 136)",
             pointBackgroundColor: "rgb(255, 255, 255)",
             pointBorderWidth: 10,
             pointHoverRadius: 5,
             pointHoverBackgroundColor: "rgb(0, 0, 0)",
             pointHoverBorderColor: "rgba(220, 220, 220, 1)",
             pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,
             data: [28, 48, 40, 19, 86, 27, 90]
           }
         ]
       },
       dataLine2: {
         labels: ["January", "February", "March", "April", "May", "June", "July"],
         datasets: [
           {
             label: "You",
             fill: true,
             lineTension: 0.3,
             backgroundColor: "rgba(225, 204,230, .3)",
             borderColor: "rgb(205, 130, 158)",
             borderCapStyle: "butt",
             borderDash: [],
             borderDashOffset: 0.0,
             borderJoinStyle: "miter",
             pointBorderColor: "rgb(205, 130,1 58)",
             pointBackgroundColor: "rgb(255, 255, 255)",
             pointBorderWidth: 10,
             pointHoverRadius: 5,
             pointHoverBackgroundColor: "rgb(0, 0, 0)",
             pointHoverBorderColor: "rgba(220, 220, 220,1)",
             pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,
             data: [65, 59, 80, 81, 56, 55, 40]
           },
           {
             label: "Benchmark (All Customers)",
             fill: true,
             lineTension: 0.3,
             backgroundColor: "rgba(184, 185, 210, .3)",
             borderColor: "rgb(35, 26, 136)",
             borderCapStyle: "butt",
             borderDash: [],
             borderDashOffset: 0.0,
             borderJoinStyle: "miter",
             pointBorderColor: "rgb(35, 26, 136)",
             pointBackgroundColor: "rgb(255, 255, 255)",
             pointBorderWidth: 10,
             pointHoverRadius: 5,
             pointHoverBackgroundColor: "rgb(0, 0, 0)",
             pointHoverBorderColor: "rgba(220, 220, 220, 1)",
             pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,
             data: [28, 48, 40, 19, 86, 27, 90]
           }
         ]
       }
     };

     toggle = tab => e => {
       if (this.state.activeItem !== tab) {
         this.setState({
           activeItem: tab
         });
       }
     };

    render() {
      return (
        <MDBContainer>
          <MDBRow>
            {/*
            <MDBCol>
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </MDBCardText>
                  <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            */}
            <MDBCol>
            <MDBNav className="nav-tabs mt-5">
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItem === "1" ? "active" : ""} onClick={this.toggle("1")} role="tab" >
                  <h3>Monthly Injections</h3>
                  <h4>| 2145 +169</h4>
                  <p>56,553 since Jan 01 2018</p>
                  <p>17 mins average per injection</p>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItem === "2" ? "active" : ""} onClick={this.toggle("2")} role="tab" >
                  <h3>Contrast Use</h3>
                  <h4>| 532,847ml +1738</h4>
                  <p>6,394,167 since Jan 01 2018</p>
                  <p>$575k ($0.09 per ml)</p>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItem === "3" ? "active" : ""} onClick={this.toggle("3")} role="tab" >
                  <h3>Indicator Performance</h3>
                  <h4>9 total metrics</h4>
                  <p>3 1 </p>
                  <p>5</p>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItem} >
              <MDBTabPane tabId="1" role="tabpanel">
                <Line data={this.state.dataLine} options={{ responsive: true }} />
              </MDBTabPane>
              <MDBTabPane tabId="2" role="tabpanel">
                <Line data={this.state.dataLine2} options={{ responsive: true }} />
              </MDBTabPane>
              <MDBTabPane tabId="3" role="tabpanel">
                <p className="mt-2">
                  Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                  voluptate odit minima. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Nihil odit magnam minima,
                  soluta doloribus reiciendis molestiae placeat unde eos
                  molestias.
                </p>
              </MDBTabPane>
            </MDBTabContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Home;
