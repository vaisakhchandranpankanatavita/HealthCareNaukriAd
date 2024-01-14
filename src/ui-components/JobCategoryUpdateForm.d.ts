/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { JobCategory } from "../models";
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
export declare type JobCategoryUpdateFormInputValues = {
    category_name?: string;
    status?: boolean;
};
export declare type JobCategoryUpdateFormValidationValues = {
    category_name?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobCategoryUpdateFormOverridesProps = {
    JobCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    category_name?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type JobCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobCategory?: JobCategory;
    onSubmit?: (fields: JobCategoryUpdateFormInputValues) => JobCategoryUpdateFormInputValues;
    onSuccess?: (fields: JobCategoryUpdateFormInputValues) => void;
    onError?: (fields: JobCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobCategoryUpdateFormInputValues) => JobCategoryUpdateFormInputValues;
    onValidate?: JobCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobCategoryUpdateForm(props: JobCategoryUpdateFormProps): React.ReactElement;
