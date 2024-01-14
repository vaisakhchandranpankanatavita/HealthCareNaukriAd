
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
