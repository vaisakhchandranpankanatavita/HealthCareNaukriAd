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
import { Job } from '../../../models';

  const fetchData = async () => {
    try {
      const models = await DataStore.query(Job);
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
        user: obj.recruiter_name,
        phone: obj.description,
        state:obj.location,
        nursingcouncil: obj.city,
        dob: obj.category

});
}
 );

function Author() {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "user", align: "left" },
    { name: "phone", align: "left" },
    { name: "state", align: "center" },
    { name: "nursingcouncil", align: "center" },
    { name: "dob", align: "center" },
  ],

  rows: rawData,
};

export default authorsTableData;
