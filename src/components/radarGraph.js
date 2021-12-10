import React from "react";
import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class RadarGraphic extends React.Component {
  state = {
    dataRadar: {

      labels: ["LP2-Assambly", "Sawing Line", "G26-Assambly", " LP1-Assambly", "Adapter Vat Welding", "Adapter Vat CNC", "Bending Line"],
      datasets: [
        {
          label: "Nivel por habilidad",
          labelFontSize: "20rem",
          backgroundColor: "rgba(71, 225, 167, 0.5)",
          borderColor: "rgb(71, 225, 167)",
          data: [5, 3, 1, 0, 5, 2, 3]
        }
      ]
    }

  }
  render() {
    return (

      <Radar data={this.state.dataRadar} options={{ responsive: true }} />

    );
  }
}

// const RadarGraphic = ({LP2Assambly,Sawing,G26Assambly,LP1Assambly,AdapterVatAssa,AdapterVatCNC,BendingLine}) => {
//   state = {
//     dataRadar: {

//       labels: ["LP2-Assambly", "Sawing Line", "G26-Assambly", " LP1-Assambly", "Adapter Vat Welding", "Adapter Vat CNC", "Bending Line"],
//       datasets: [
//         {
//           label: "Nivel por habilidad",
//           labelFontSize: "20rem",
//           backgroundColor: "rgba(71, 225, 167, 0.5)",
//           borderColor: "rgb(71, 225, 167)",
//           data: [5, 3, 1, 0, 5, 2, 3]
//         }
//       ]
//     }
//   }
//     return (
//       <Radar data={this.state.dataRadar} options={{ responsive: true }} />
//     )

// }


export default RadarGraphic;