import React, { Component } from "react";
import { MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { Line } from "react-chartjs-2";
import './index.css';

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
           },
           {
             label: "INJECTION TOTALS",
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
           },
           {
             label: "INJECTION TOTALS",
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
       dataLine3: {
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
           },
           {
             label: "Injection Totals",
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
        <div>
        <h1 style={{color: 'white', paddingTop: 50, marginLeft: 50}}><strong>SUMMARY</strong></h1>
        <MDBCol>
          <MDBCard style={{ width: "22rem", marginLeft: 35, marginTop: 20}}>
            <MDBCardBody>
              <h3 style={{color: '#08377a'}}>
                <strong>11 Injectors</strong> has been selected for this report
              </h3>
              <br />
              <p style={{color: '#08377a'}}><strong>7 of 11 injectors</strong> have a workstation</p>
              <div style={{backgroundColor: '#e6e6e6', width: 300, height: 20}}>
                <div style={{backgroundColor: '#46a4c5', width: 200, height: 20}}>
                </div>
              </div>
              <br />
              <p style={{color: '#08377a'}}><strong>5 of 11 injectors</strong> have a VirtualCare</p>
              <div style={{backgroundColor: '#e6e6e6', width: 100, height: 20}}>
                <div style={{backgroundColor: '#46a4c5', width: 150, height: 20}}>
                </div>
              </div>
              <br />
              <p style={{color: '#08377a'}}><strong>5 of 11 injectors</strong> have a Bayer Service</p>
              <div style={{backgroundColor: '#e6e6e6', width: 300, height: 20}}>
                <div style={{backgroundColor: '#46a4c5', width: 150, height: 20}}>
                </div>
              </div>
              <br />
              <p>Want to adjust your dataset ?</p>
              <p style={{color: '#08377a'}}><i><strong>/PRODUCTS AND DATA</strong></i></p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBContainer style={{marginRight: 40, marginTop: -470}}>
          <MDBRow>
            <MDBCol>
            <MDBNav className="nav-tabs mt-5" style={{float: 'right'}}>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItem === "1" ? "active" : ""} onClick={this.toggle("1")} role="tab" >
                  <h3>Monthly Injections</h3>
                  <h4 style={{color: '#08377a'}}> <MDBIcon icon="arrow-up" /><strong> 2145 <span style={{backgroundColor: '#b4d4fd'}}>+169</span></strong></h4>
                  <p><span style={{color: '#08377a'}}><strong>56,553</strong></span> since Jan 01 2018</p>
                   <MDBIcon far icon="clock" />
                  <p><span style={{color: '#08377a'}}><strong>17 mins</strong></span> average per injection</p>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItem === "2" ? "active" : ""} onClick={this.toggle("2")} role="tab" >
                  <h3>Contrast Use</h3>
                  <h4 style={{color: '#08377a'}}> <MDBIcon icon="arrow-up" /> <strong><span style={{color: '#08377a'}}>532,847ml</span> <span style={{backgroundColor: '#b4d4fd'}}>+1738 </span></strong></h4>
                  <p><span style={{color: '#08377a'}}><strong>6,394,167ml</strong></span> since Jan 01 2018</p>
                  <p><span style={{color: '#08377a'}}><strong>$575k ($0.09 per ml)</strong></span><MDBIcon icon="pencil-alt" />EDIT</p>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItem === "3" ? "active" : ""} onClick={this.toggle("3")} role="tab" >
                  <h3>Indicator Performance</h3>
                  <h4 style={{color: '#08377a'}}>9 total metrics</h4>
                  <p style={{paddingLeft: 10}}>3   <span style={{paddingLeft: 10}}>1</span> </p><p>5</p>

                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItem} >
              <MDBTabPane style={{width: 900, marginLeft: 250, backgroundColor: 'white'}} tabId="1" role="tabpanel">
                <Line data={this.state.dataLine} options={{ responsive: true }} />
              </MDBTabPane>
              <MDBTabPane style={{width: 900, marginLeft: 250, backgroundColor: 'white'}} tabId="2" role="tabpanel">
                <Line data={this.state.dataLine2} options={{ responsive: true }} />
              </MDBTabPane>
              <MDBTabPane tabId="3" role="tabpanel" style={{backgroundColor: 'white', marginLeft: 250, height: 630, width: 900}}>
                <h3 style={{color: '#08377a', paddingTop: 250, paddingLeft: 30}}>Clinical Indicator <span style={{paddingLeft: 275}}>Operational Indicator</span></h3>
                <div className="row" style={{paddingLeft: 35, color: '#a1a1a1', marginLeft: 0}}>
                    <img src="http://www.clker.com/cliparts/w/7/s/w/H/h/orange-arrow-up-no-outline-hi.png" alt="up" style={{height: 60, marginLeft: 0}}/>
                    <p style={{paddingLeft: 10}}>Repeat <br /> Injections</p>
                    <img src="http://www.clker.com/cliparts/w/7/s/w/H/h/orange-arrow-up-no-outline-hi.png" alt="up" style={{height: 60, marginLeft: 0}}/>
                      <p style={{paddingLeft: 30}}>IV <br /> Issues</p>
                      <img src="http://www.clker.com/cliparts/w/7/s/w/H/h/orange-arrow-up-no-outline-hi.png" alt="up" style={{height: 60, marginLeft: 0}}/>
                      <p style={{paddingLeft: 30}}>Protocol <br /> Adherence</p>
                      <p style={{paddingLeft: 30}}>Critical Equip. <br /> Service Alerts</p>
                      <p style={{paddingLeft: 30}}>Atypical <br /> Injctions</p>
                      <p style={{paddingLeft: 30}}>Lost <br /> Time</p>
                      <p style={{paddingLeft: 30}}>Contrast <br /> Waste</p>
                      <p style={{paddingLeft: 30}}>Equipment <br /> Uptime</p>
                      <p style={{paddingLeft: 30}}>Data <br /> Quality</p>
                </div>
              </MDBTabPane>
            </MDBTabContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}
export default Home;
