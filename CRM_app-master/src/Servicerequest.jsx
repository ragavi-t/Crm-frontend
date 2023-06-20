import React, { useEffect, useState } from 'react';
import Servicerequestcreated from '../src/Service Requests/Servicerequestcreated';
import Servicerequestcompleted from '../src/Service Requests/Servicerequestcompleted';
import Servicerequestopen from '../src/Service Requests/Servicerequestopen';
import Servicerequestinprocess from '../src/Service Requests/Servicerequestinprocess';
import Servicerequestreleased from '../src/Service Requests/Servicerequestreleased';
import Sevicerequestcancelled from '../src/Service Requests/Sevicerequestcancelled';
import api from "./global"

function Servicerequest() {
  const [serviceRequest, setServiceRequest] = useState([]);
  const get_serviceRequest_data = async () => {
    const getData = await fetch(
      `${api}/CRM/showServiceRequests`,
      {
        headers: {
          "x-auth-managerToken": localStorage.getItem("managerToken"),
        },
      }
    );
    const jsonData = await getData.json();
    setServiceRequest(jsonData);
  };
  useEffect(() => {
    get_serviceRequest_data();
  }, []);

  return (
    <div className="mainContent">
      <div className='requestTable'>
      <Servicerequestcreated customerData={serviceRequest}></Servicerequestcreated>
      <Servicerequestcompleted customerData={serviceRequest}></Servicerequestcompleted>
      <Servicerequestopen customerData={serviceRequest}></Servicerequestopen>
      <Servicerequestinprocess customerData={serviceRequest}></Servicerequestinprocess>
      <Servicerequestreleased customerData={serviceRequest}></Servicerequestreleased>
      <Sevicerequestcancelled  customerData={serviceRequest}></Sevicerequestcancelled>
    </div>
    </div>
  );
}

export default Servicerequest;
