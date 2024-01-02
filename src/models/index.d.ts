import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerExperience = {
  readonly hospital_name?: string | null;
  readonly designation?: string | null;
  readonly no_of_years?: number | null;
}

type LazyExperience = {
  readonly hospital_name?: string | null;
  readonly designation?: string | null;
  readonly no_of_years?: number | null;
}

export declare type Experience = LazyLoading extends LazyLoadingDisabled ? EagerExperience : LazyExperience

export declare const Experience: (new (init: ModelInit<Experience>) => Experience)

type EagerJobCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category_name: string;
  readonly status: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category_name: string;
  readonly status: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobCategory = LazyLoading extends LazyLoadingDisabled ? EagerJobCategory : LazyJobCategory

export declare const JobCategory: (new (init: ModelInit<JobCategory>) => JobCategory) & {
  copyOf(source: JobCategory, mutator: (draft: MutableModel<JobCategory>) => MutableModel<JobCategory> | void): JobCategory;
}

type EagerApplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Application, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly job_id: string;
  readonly status: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyApplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Application, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly job_id: string;
  readonly status: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Application = LazyLoading extends LazyLoadingDisabled ? EagerApplication : LazyApplication

export declare const Application: (new (init: ModelInit<Application>) => Application) & {
  copyOf(source: Application, mutator: (draft: MutableModel<Application>) => MutableModel<Application> | void): Application;
}

type EagerJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recruiter_name?: string | null;
  readonly phone?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly location?: string | null;
  readonly email?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly qualification?: string | null;
  readonly experience_required?: number | null;
  readonly skills_required?: (string | null)[] | null;
  readonly category?: string | null;
  readonly status?: string | null;
  readonly approved: boolean;
  readonly recruiterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recruiter_name?: string | null;
  readonly phone?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly location?: string | null;
  readonly email?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly qualification?: string | null;
  readonly experience_required?: number | null;
  readonly skills_required?: (string | null)[] | null;
  readonly category?: string | null;
  readonly status?: string | null;
  readonly approved: boolean;
  readonly recruiterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Job = LazyLoading extends LazyLoadingDisabled ? EagerJob : LazyJob

export declare const Job: (new (init: ModelInit<Job>) => Job) & {
  copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

type EagerRecruiter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recruiter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hospital_name: string;
  readonly contact_name: string;
  readonly email: string;
  readonly land_line?: string | null;
  readonly mobile: string;
  readonly password: string;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly photo?: string | null;
  readonly website?: string | null;
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly recruiter_details?: string | null;
  readonly approved: boolean;
  readonly Jobs?: (Job | null)[] | null;
  readonly is_super_admin: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecruiter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recruiter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hospital_name: string;
  readonly contact_name: string;
  readonly email: string;
  readonly land_line?: string | null;
  readonly mobile: string;
  readonly password: string;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly photo?: string | null;
  readonly website?: string | null;
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly recruiter_details?: string | null;
  readonly approved: boolean;
  readonly Jobs: AsyncCollection<Job>;
  readonly is_super_admin: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recruiter = LazyLoading extends LazyLoadingDisabled ? EagerRecruiter : LazyRecruiter

export declare const Recruiter: (new (init: ModelInit<Recruiter>) => Recruiter) & {
  copyOf(source: Recruiter, mutator: (draft: MutableModel<Recruiter>) => MutableModel<Recruiter> | void): Recruiter;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly country: string;
  readonly state: string;
  readonly dob: string;
  readonly nursing_council?: string | null;
  readonly additional_qualification?: string | null;
  readonly experience?: (Experience | null)[] | null;
  readonly resume?: string | null;
  readonly photo?: string | null;
  readonly applied_jobs?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly country: string;
  readonly state: string;
  readonly dob: string;
  readonly nursing_council?: string | null;
  readonly additional_qualification?: string | null;
  readonly experience?: (Experience | null)[] | null;
  readonly resume?: string | null;
  readonly photo?: string | null;
  readonly applied_jobs?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}