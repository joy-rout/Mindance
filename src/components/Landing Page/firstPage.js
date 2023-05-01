/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./firstPage.css";
import Image2 from "../Images/Mental Health 1-01 1.png";
import Image3 from "../Images/image3.png";



const buttonStyle =  {
  fontFamily: 'cursive',
  boxShadow: '0 4px 8px 0 rgb(56, 110, 129), 0 6px 20px 0 rgb(56, 110, 129)',
  backgroundColor: '#D7BFFE',
  color: '#8931CC'
}

const buttonStyle1 =  {
  fontFamily: 'cursive',
  boxShadow: '0 4px 8px 0 rgb(56, 110, 129), 0 6px 20px 0 rgb(56, 110, 129)',
  backgroundColor: '#5F30DF',
  color: '#E5FF9B'
}


const FirstPage = () => {
 
  return (
    
    <div className="maincontainer">
        <div className="flex-parent-element ">
          {/* first child  */}
          <div className="flex-child-element firstpage container4 ">
            <div className="quote1">Mental Wellbeing Done Right</div>

            <div className="quote2">
              Congratulations on your first brave step , you are almost there .
            </div>

            <Stack className="button1" spacing={6} direction="row">
            <Button style={buttonStyle} variant="outlined">
                <span>Login</span>
              </Button>
              <Button style={buttonStyle1} variant="contained">
                Get Started
              </Button>
            </Stack>
          </div>

          {/* Second Child */}
          <div className="flex-child-element">
            <div className="container3">
              <div className="container">
                <div class="lefttop dot"></div>
                <div class="leftbottom dot"></div>
                <img className="image2" src={Image2} />
                <p style={{ color: "#B6FC95" }}>you are loved</p>
                <div class="righttop dot"></div>
                <div class="rightbottom dot"></div>
              </div>
              <div className="container2">
                <div class="lefttop dot"></div>
                <div class="leftbottom dot"></div>
                <img className="image3" src={Image3} />
                <p style={{ color: "#7A50EF" }}>
                  you don't have to struggle in silence
                </p>
                <div class="righttop dot"></div>
                <div class="rightbottom dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FirstPage;






// <div className="maincontainer">

// <div className="flex-parent-element">
//   {/* first child  */}
//   <div className="flex-child-element firstpage ">
//     <div className="container">
//       <div class="lefttop dot"></div>
//       <div class="leftbottom dot"></div>
//       <img className="image2" src={Image2} />
//       <p style={{color: '#B6FC95'}}>you are loved</p>
//       <div class="righttop dot"></div>
//       <div class="rightbottom dot"></div>
//     </div>
//     <div className="container2">
//       <div class="lefttop dot"></div>
//       <div class="leftbottom dot"></div>
//       <img className="image3" src={Image3} />
//       <p style={{color: '#7A50EF'}}>you don't have to struggle in silence</p>
//       <div class="righttop dot"></div>
//       <div class="rightbottom dot"></div>
//     </div>
//   </div>

//   {/* Second Child */}
//   <div className="flex-child-element">
//     <div className="container3">
//       <img className="image4" src={Image4} />
//       <p style={{color: '#7A50EF'}}>congratulations on your first brave step ,</p>
//       <p style={{color: '#7A50EF'}}> we are so proud of you .</p>
//       <Stack className="button1" spacing={6} direction="row">
//         <Button style={buttonStyle} variant="outlined"><span>Login</span></Button>
//         <Button style={buttonStyle1} variant="contained">Get Started</Button>
//       </Stack>
//     </div>

//     <div className="container4">
//         <div className="typo"><p>We Help With  :</p></div>
//         <div className="items">
//           <p><i class="fa-solid fa-star fa-spin"></i> Anxiety </p>
//           <p><i class="fa-solid fa-star fa-spin"></i> Depression </p>
//           <p><i class="fa-solid fa-star fa-spin"></i> Work Related Issue </p>
//           <p><i class="fa-solid fa-star fa-spin"></i> Eating Disorders </p>
//           <p><i class="fa-solid fa-star fa-spin"></i> PTSD </p>
//           <p><i class="fa-solid fa-star fa-spin"></i> Relation Problems </p>
//           <p><i class="fa-solid fa-star fa-spin"></i> and more...... </p>
//         </div>
//     </div>
//   </div>
// </div>


// </div>