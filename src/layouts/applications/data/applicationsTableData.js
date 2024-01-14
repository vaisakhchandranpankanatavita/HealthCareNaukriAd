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
import { Application } from '../../../models';

  const fetchData = async () => {
    try {
      const models = await DataStore.query(Application);
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
        user: obj.job_id,
        phone: obj.status,
        state:obj.updatedAt,
        nursingcouncil: obj.user_id,
        dob: obj.user_id

});
}
 );

const appplicationsTableData = {
  columns: [
    { name: "user", align: "left" },
    { name: "phone", align: "left" },
    { name: "state", align: "left" },
    { name: "nursingcouncil", align: "left" },
    { name: "dob", align: "left" },
  ],
  rows: rawData,
};

export default appplicationsTableData;
