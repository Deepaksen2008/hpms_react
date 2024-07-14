import React from 'react';
import './profile.scss';
import '../Assets/style/empProfile.scss';
import {Row,Col} from 'react-bootstrap';
import neeraj from '../Assets/images/neeraj.jpg';
import hp_lg from '../Assets/images/hp_lg.png';
import {  CardHeader, CardBody, CardFooter,Image,Stack,Button,ButtonGroup,Divider,Text,Heading } from '@chakra-ui/react';
import Card from 'react-bootstrap/Card';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { SiPrivateinternetaccess } from "react-icons/si";
import { TbPasswordFingerprint } from "react-icons/tb";
import { TbEditCircle } from "react-icons/tb";
import Personal_info from './component/Personal_info';
import Dr_patient from './component/Dr_patient';
import Dr_appoinment from './component/Dr_appoinment';
import Ch_pass from './component/Ch_pass';



const Emp_profile = () => {
  return (
     <div className='profile-wrap'>
    <div className="doctor-profile">
    <header className="header">
    <div className="logo">
      <h2>Profile</h2>
    </div>
    <div className="profile">
      <img src={hp_lg} alt="Profile" className="profile-pic" />
     
    </div>
  </header>
  <Row className='d-flex'>
  <Col className='md-4 w-30' >
     
     

    <Card style={{ width: '25rem' }}>
    <Card.Body>
      <Card.Title style={{display:"flex",justifyContent:"center"}}>
      <div style={{padding:"3.3%",borderRadius:"50%",width:"8rem",height:"8rem",borderStyle:"dashed"}}>
      <Image
      src={neeraj}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      style={{width:"100px",height:"100px",borderRadius:"50%"}}
    />
    <label htmlFor="upload-photo">
    <TbEditCircle style={{marginTop:"-45px",marginLeft:"4rem",borderRadius:"50%",backgroundColor:"white",cursor: "pointer"}} type='file'/>
    </label>
    <input
    type="file"
    id="upload-photo"
    name="photo"
    style={{ display: "none"}}
    
/>
    </div>
    </Card.Title>
    <Card.Title className='font-weight-700 mb-2' style={{fontWeight:"bold",fontFamily:'italic'}}>Dr.Messy</Card.Title>
      <Card.Subtitle className="mb-2 text-muted mt-2" style={{fontWeight:"bold",fontFamily:'italic',color:"GrayText"}}><MdOutlineAlternateEmail /> :&nbsp;testmessy4321@gmail.com</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted mt-2"><FaPhoneAlt size={13}/> <span style={{fontSize:"20px"}}>:</span>&nbsp;+21-&nbsp;9848548512</Card.Subtitle>

      <hr/>
      <Card.Text className='p-2'>
      <div className='pi' style={{textAlign:"left"}}>
        <Row className='side-lbl mt-1 rounded-2 d-flex'><Col style={{cursor: "pointer"}}><GoPerson /> &nbsp;
        Personal Info</Col></Row>
        </div>
        <div className='pi' style={{textAlign:"left"}}>
        <Row className='side-lbl mt-2 rounded-2' style={{cursor: "pointer"}}><Col style={{cursor: "pointer"}}><BsFillPersonPlusFill /> &nbsp;Patient</Col></Row>
        </div>
        <div className='pi' style={{textAlign:"left"}}>
        <Row className='side-lbl mt-2 rounded-2' style={{cursor: "pointer"}}><Col style={{cursor: "pointer"}}><MdOutlineDateRange /> &nbsp;Appoinments</Col></Row>
        </div>
        <div className='pi' style={{textAlign:"left"}}>
        <Row className='side-lbl mt-2 rounded-2' style={{cursor: "pointer"}}><Col style={{cursor: "pointer"}}><FaRegMoneyBill1 /> &nbsp;Payments</Col></Row>
        </div>
        <div className='pi' style={{textAlign:"left"}}>
        <Row className='side-lbl mt-2 rounded-2' style={{cursor: "pointer"}}><Col style={{cursor: "pointer"}}><SiPrivateinternetaccess /> &nbsp;Access Controll</Col></Row>
        </div>
        <div className='pi' style={{textAlign:"left"}}> 
        <Row className='side-lbl mt-2 rounded-2' ><Col style={{cursor: "pointer"}}><TbPasswordFingerprint /> &nbsp;Change Password</Col></Row>
        </div>
      </Card.Text>
    
    </Card.Body>
  </Card>
      
      </Col>
      <Col className='md-8 w-70'>

     {/* <Personal_info/>*/}
     {/*<Dr_patient/>*/}
     {/*<Dr_appoinment/>*/}
     <Ch_pass/>
      </Col>

      </Row>
    </div>
    </div>
  );
};

export default Emp_profile;