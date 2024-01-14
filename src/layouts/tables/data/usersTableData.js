
// Data
import { DataStore } from 'aws-amplify/datastore';
import { UserProfile } from '../../../models';

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


 const rawData = modelData.map(
(obj) =>{ return({
        user: obj.name,
        phone: obj.phone,
        state:obj.state,
        nursing_council: obj.nursing_council,
        date_of_birth: obj.dob

});
}
 );

const usersTableData = {
  columns: [
    { name: "user", align: "left" },
    { name: "phone", align: "left" },
    { name: "state", align: "center" },
    { name: "nursing_council", align: "center" },
    { name: "date_of_birth", align: "center" },
  ],

  rows: rawData,
};

export default usersTableData;
