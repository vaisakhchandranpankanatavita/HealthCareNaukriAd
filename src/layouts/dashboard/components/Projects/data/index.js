// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Data
import { DataStore } from 'aws-amplify/datastore';
import { UserProfile } from '../../../../../../src/models';

  const fetchData = async () => {
    try {
      const models = await DataStore.query(UserProfile);
      console.log(models); // Use the fetched models here
      return models;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // Call the async function
 const modelData = await fetchData();


 
export default function data() {
    const rowsData = modelData.map((obj) => {
      return {
        name: obj.name,
        email: obj.email,
        phone:obj.phone,
        place: obj.state,
      };
    });

  return {
    columns: [
      { name: "name", align: "center" },
      { name: "email", align: "center" },
      { name: "phone", align: "center" },
      { name: "place", align: "center" },
    ],
    rows: rowsData
  };
}
