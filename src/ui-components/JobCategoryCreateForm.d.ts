/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type JobCategoryCreateFormInputValues = {
    category_name?: string;
    status?: boolean;
};
export declare type JobCategoryCreateFormValidationValues = {
    category_name?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobCategoryCreateFormOverridesProps = {
    JobCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    category_name?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type JobCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: JobCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JobCategoryCreateFormInputValues) => JobCategoryCreateFormInputValues;
    onSuccess?: (fields: JobCategoryCreateFormInputValues) => void;
    onError?: (fields: JobCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobCategoryCreateFormInputValues) => JobCategoryCreateFormInputValues;
    onValidate?: JobCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function JobCategoryCreateForm(props: JobCategoryCreateFormProps): React.ReactElement;
