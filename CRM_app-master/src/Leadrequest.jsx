import React, { useEffect, useState } from 'react'
import Canceledleads from './Leads/Canceledleads';
import Confirmedleads from './Leads/Confirmedleads';
import Confirmed from './Leads/Confirmedleads';
import Contactedleads from './Leads/Contactedleads';
import Lostleads from './Leads/Lostleads';
import Newleads from './Leads/Newleads';
import Qualifedleads from './Leads/Qualifedleads';
import api from "./global"

function Leadrequest() {
    const [leadRequest, setLeadRequest] = useState([]);
    const get_leadRequest_data = async () => {
        const getData = await fetch(
                `${api}/CRM/showLeads`,
            {
                headers: {
                    "x-auth-managerToken": localStorage.getItem("managerToken"),
                  },
            }
        );
        const jsonData = await getData.json();
        setLeadRequest(jsonData);
    };
    useEffect(() => {
        get_leadRequest_data();
    }, []);

    return (
        <div className="mainContent">
            <div className='requestTable'>
                <Newleads customerData={leadRequest}></Newleads>
                <Contactedleads customerData={leadRequest}></Contactedleads>
                <Qualifedleads customerData={leadRequest}> </Qualifedleads>
                <Lostleads customerData={leadRequest}>  </Lostleads>
                <Canceledleads customerData={leadRequest}></Canceledleads>
                <Confirmedleads customerData={leadRequest}></Confirmedleads>
            </div>
        </div>
    )
}

export default Leadrequest