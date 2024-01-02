/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Recruiter } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecruiterUpdateFormInputValues = {
    hospital_name?: string;
    contact_name?: string;
    email?: string;
    land_line?: string;
    mobile?: string;
    password?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    photo?: string;
    website?: string;
    facebook?: string;
    twitter?: string;
    recruiter_details?: string;
    approved?: boolean;
    is_super_admin?: boolean;
};
export declare type RecruiterUpdateFormValidationValues = {
    hospital_name?: ValidationFunction<string>;
    contact_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    land_line?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    facebook?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
    recruiter_details?: ValidationFunction<string>;
    approved?: ValidationFunction<boolean>;
    is_super_admin?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecruiterUpdateFormOverridesProps = {
    RecruiterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hospital_name?: PrimitiveOverrideProps<TextFieldProps>;
    contact_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    land_line?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    facebook?: PrimitiveOverrideProps<TextFieldProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
    recruiter_details?: PrimitiveOverrideProps<TextFieldProps>;
    approved?: PrimitiveOverrideProps<SwitchFieldProps>;
    is_super_admin?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type RecruiterUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecruiterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recruiter?: Recruiter;
    onSubmit?: (fields: RecruiterUpdateFormInputValues) => RecruiterUpdateFormInputValues;
    onSuccess?: (fields: RecruiterUpdateFormInputValues) => void;
    onError?: (fields: RecruiterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecruiterUpdateFormInputValues) => RecruiterUpdateFormInputValues;
    onValidate?: RecruiterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecruiterUpdateForm(props: RecruiterUpdateFormProps): React.ReactElement;
