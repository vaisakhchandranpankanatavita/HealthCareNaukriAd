// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { JobCategory, Application, Job, Recruiter, UserProfile, Experience } = initSchema(schema);

export {
  JobCategory,
  Application,
  Job,
  Recruiter,
  UserProfile,
  Experience
};