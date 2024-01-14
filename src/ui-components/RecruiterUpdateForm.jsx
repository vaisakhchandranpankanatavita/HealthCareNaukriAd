/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Recruiter } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function RecruiterUpdateForm(props) {
  const {
    id: idProp,
    recruiter: recruiterModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    hospital_name: "",
    contact_name: "",
    email: "",
    land_line: "",
    mobile: "",
    password: "",
    address: "",
    city: "",
    state: "",
    country: "",
    photo: "",
    website: "",
    facebook: "",
    twitter: "",
    recruiter_details: "",
    approved: false,
    is_super_admin: false,
  };
  const [hospital_name, setHospital_name] = React.useState(
    initialValues.hospital_name
  );
  const [contact_name, setContact_name] = React.useState(
    initialValues.contact_name
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [land_line, setLand_line] = React.useState(initialValues.land_line);
  const [mobile, setMobile] = React.useState(initialValues.mobile);
  const [password, setPassword] = React.useState(initialValues.password);
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [country, setCountry] = React.useState(initialValues.country);
  const [photo, setPhoto] = React.useState(initialValues.photo);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [facebook, setFacebook] = React.useState(initialValues.facebook);
  const [twitter, setTwitter] = React.useState(initialValues.twitter);
  const [recruiter_details, setRecruiter_details] = React.useState(
    initialValues.recruiter_details
  );
  const [approved, setApproved] = React.useState(initialValues.approved);
  const [is_super_admin, setIs_super_admin] = React.useState(
    initialValues.is_super_admin
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = recruiterRecord
      ? { ...initialValues, ...recruiterRecord }
      : initialValues;
    setHospital_name(cleanValues.hospital_name);
    setContact_name(cleanValues.contact_name);
    setEmail(cleanValues.email);
    setLand_line(cleanValues.land_line);
    setMobile(cleanValues.mobile);
    setPassword(cleanValues.password);
    setAddress(cleanValues.address);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setCountry(cleanValues.country);
    setPhoto(cleanValues.photo);
    setWebsite(cleanValues.website);
    setFacebook(cleanValues.facebook);
    setTwitter(cleanValues.twitter);
    setRecruiter_details(cleanValues.recruiter_details);
    setApproved(cleanValues.approved);
    setIs_super_admin(cleanValues.is_super_admin);
    setErrors({});
  };
  const [recruiterRecord, setRecruiterRecord] =
    React.useState(recruiterModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Recruiter, idProp)
        : recruiterModelProp;
      setRecruiterRecord(record);
    };
    queryData();
  }, [idProp, recruiterModelProp]);
  React.useEffect(resetStateValues, [recruiterRecord]);
  const validations = {
    hospital_name: [{ type: "Required" }],
    contact_name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    land_line: [],
    mobile: [{ type: "Required" }, { type: "Phone" }],
    password: [{ type: "Required" }],
    address: [],
    city: [],
    state: [],
    country: [],
    photo: [{ type: "URL" }],
    website: [{ type: "URL" }],
    facebook: [{ type: "URL" }],
    twitter: [{ type: "URL" }],
    recruiter_details: [],
    approved: [{ type: "Required" }],
    is_super_admin: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.large.value}
      columnGap="15px"
      padding={tokens.space.xl.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          hospital_name,
          contact_name,
          email,
          land_line,
          mobile,
          password,
          address,
          city,
          state,
          country,
          photo,
          website,
          facebook,
          twitter,
          recruiter_details,
          approved,
          is_super_admin,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Recruiter.copyOf(recruiterRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RecruiterUpdateForm")}
      {...rest}
    >
      <TextField
        label="Hospital name"
        isRequired={true}
        isReadOnly={false}
        value={hospital_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name: value,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.hospital_name ?? value;
          }
          if (errors.hospital_name?.hasError) {
            runValidationTasks("hospital_name", value);
          }
          setHospital_name(value);
        }}
        onBlur={() => runValidationTasks("hospital_name", hospital_name)}
        errorMessage={errors.hospital_name?.errorMessage}
        hasError={errors.hospital_name?.hasError}
        {...getOverrideProps(overrides, "hospital_name")}
      ></TextField>
      <TextField
        label="Contact name"
        isRequired={true}
        isReadOnly={false}
        value={contact_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name: value,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.contact_name ?? value;
          }
          if (errors.contact_name?.hasError) {
            runValidationTasks("contact_name", value);
          }
          setContact_name(value);
        }}
        onBlur={() => runValidationTasks("contact_name", contact_name)}
        errorMessage={errors.contact_name?.errorMessage}
        hasError={errors.contact_name?.hasError}
        {...getOverrideProps(overrides, "contact_name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email: value,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Land line"
        isRequired={false}
        isReadOnly={false}
        value={land_line}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line: value,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.land_line ?? value;
          }
          if (errors.land_line?.hasError) {
            runValidationTasks("land_line", value);
          }
          setLand_line(value);
        }}
        onBlur={() => runValidationTasks("land_line", land_line)}
        errorMessage={errors.land_line?.errorMessage}
        hasError={errors.land_line?.hasError}
        {...getOverrideProps(overrides, "land_line")}
      ></TextField>
      <TextField
        label="Mobile"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={mobile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile: value,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.mobile ?? value;
          }
          if (errors.mobile?.hasError) {
            runValidationTasks("mobile", value);
          }
          setMobile(value);
        }}
        onBlur={() => runValidationTasks("mobile", mobile)}
        errorMessage={errors.mobile?.errorMessage}
        hasError={errors.mobile?.hasError}
        {...getOverrideProps(overrides, "mobile")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password: value,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address: value,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city: value,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state: value,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country: value,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Photo"
        isRequired={false}
        isReadOnly={false}
        value={photo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo: value,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.photo ?? value;
          }
          if (errors.photo?.hasError) {
            runValidationTasks("photo", value);
          }
          setPhoto(value);
        }}
        onBlur={() => runValidationTasks("photo", photo)}
        errorMessage={errors.photo?.errorMessage}
        hasError={errors.photo?.hasError}
        {...getOverrideProps(overrides, "photo")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website: value,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook: value,
              twitter,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.facebook ?? value;
          }
          if (errors.facebook?.hasError) {
            runValidationTasks("facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("facebook", facebook)}
        errorMessage={errors.facebook?.errorMessage}
        hasError={errors.facebook?.hasError}
        {...getOverrideProps(overrides, "facebook")}
      ></TextField>
      <TextField
        label="Twitter"
        isRequired={false}
        isReadOnly={false}
        value={twitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter: value,
              recruiter_details,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.twitter ?? value;
          }
          if (errors.twitter?.hasError) {
            runValidationTasks("twitter", value);
          }
          setTwitter(value);
        }}
        onBlur={() => runValidationTasks("twitter", twitter)}
        errorMessage={errors.twitter?.errorMessage}
        hasError={errors.twitter?.hasError}
        {...getOverrideProps(overrides, "twitter")}
      ></TextField>
      <TextField
        label="Recruiter details"
        isRequired={false}
        isReadOnly={false}
        value={recruiter_details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details: value,
              approved,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.recruiter_details ?? value;
          }
          if (errors.recruiter_details?.hasError) {
            runValidationTasks("recruiter_details", value);
          }
          setRecruiter_details(value);
        }}
        onBlur={() =>
          runValidationTasks("recruiter_details", recruiter_details)
        }
        errorMessage={errors.recruiter_details?.errorMessage}
        hasError={errors.recruiter_details?.hasError}
        {...getOverrideProps(overrides, "recruiter_details")}
      ></TextField>
      <SwitchField
        label="Approved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={approved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved: value,
              is_super_admin,
            };
            const result = onChange(modelFields);
            value = result?.approved ?? value;
          }
          if (errors.approved?.hasError) {
            runValidationTasks("approved", value);
          }
          setApproved(value);
        }}
        onBlur={() => runValidationTasks("approved", approved)}
        errorMessage={errors.approved?.errorMessage}
        hasError={errors.approved?.hasError}
        {...getOverrideProps(overrides, "approved")}
      ></SwitchField>
      <SwitchField
        label="Is super admin"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_super_admin}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              hospital_name,
              contact_name,
              email,
              land_line,
              mobile,
              password,
              address,
              city,
              state,
              country,
              photo,
              website,
              facebook,
              twitter,
              recruiter_details,
              approved,
              is_super_admin: value,
            };
            const result = onChange(modelFields);
            value = result?.is_super_admin ?? value;
          }
          if (errors.is_super_admin?.hasError) {
            runValidationTasks("is_super_admin", value);
          }
          setIs_super_admin(value);
        }}
        onBlur={() => runValidationTasks("is_super_admin", is_super_admin)}
        errorMessage={errors.is_super_admin?.errorMessage}
        hasError={errors.is_super_admin?.hasError}
        {...getOverrideProps(overrides, "is_super_admin")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || recruiterModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || recruiterModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
