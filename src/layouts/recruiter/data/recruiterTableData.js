/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Data
import { DataStore } from 'aws-amplify/datastore';
import { Recruiter } from '../../../models';

  const fetchData = async () => {
    try {
      const models = await DataStore.query(Recruiter);
      console.log(models); // Use the fetched models here
      return models;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // Call the async function
 const modelData = await fetchData();


 const rawData = modelData.map(
(obj) =>{ return({
        user: obj.hospital_name,
        phone: obj.contact_name,
        state:obj.address,
        nursingcouncil: obj.email,
        dob: obj.mobile

});
}
 );

const recruiterTableData = {
  columns: [
    { name: "user", align: "left" },
    { name: "phone", align: "left" },
    { name: "state", align: "center" },
    { name: "nursingcouncil", align: "center" },
    { name: "dob", align: "center" },
  ],

  rows: rawData,
};

export default recruiterTableData;
