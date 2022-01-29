import { default as React } from 'react';
import type { PropEx } from '@cssfn/css-types';
import { StyleCollection } from '@cssfn/cssfn';
import { Result as ValResult, ValidationProps } from '@nodestrap/validations';
import { ThemeName } from '@nodestrap/basic';
import { ControlProps } from '@nodestrap/control';
export interface ValidInvalidVars {
    animValid: any;
    animInvalid: any;
    foregStart: any;
    backgStart: any;
}
export declare const isValided: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isValidating: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isUnvalidating: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isUnvalided: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isValid: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isUnvalid: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isInvalided: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isInvalidating: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isUninvalidating: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isUninvalided: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isInvalid: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isUninvalid: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isNoValidation: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
/**
 * Uses valid & invalid states.
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents valid & invalid state definitions.
 */
export declare const usesValidInvalidState: () => readonly [() => import("@cssfn/cssfn").Rule, import("@cssfn/css-var").ReadonlyRefs<ValidInvalidVars>, import("@cssfn/css-var").ReadonlyDecls<ValidInvalidVars>];
export declare const markValid: () => import("@cssfn/cssfn").Rule;
/**
 * Creates a conditional color definitions at valid state.
 * @param themeName The name of valid theme.
 * @returns A `Rule` represents the conditional color definitions at valid state.
 */
export declare const usesThemeValid: (themeName?: ThemeName) => import("@cssfn/cssfn").Rule;
export declare const markInvalid: () => import("@cssfn/cssfn").Rule;
/**
 * Creates a conditional color definitions at invalid state.
 * @param themeName The name of invalid theme.
 * @returns A `Rule` represents the conditional color definitions at invalid state.
 */
export declare const usesThemeInvalid: (themeName?: ThemeName) => import("@cssfn/cssfn").Rule;
export declare type EditableControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export declare type ValidatorHandler = () => ValResult;
export declare type CustomValidatorHandler = (state: ValidityState, value: string) => ValResult;
export declare const useInputValidator: (customValidator?: CustomValidatorHandler | undefined) => {
    /**
     * Handles the validation result.
     * @returns
     * `null`  = uncheck.
     * `true`  = valid.
     * `false` = invalid.
     */
    validator: ValidatorHandler;
    handleInit: (target: EditableControlElement) => void;
    handleChange: (target: EditableControlElement) => void;
};
export declare const useValidInvalidState: (props: ValidationProps, validator?: ValidatorHandler | undefined) => {
    /**
     * `true`  : validating/valided
     * `false` : invalidating/invalided
     * `null`  : uncheck/unvalidating/uninvalidating
    */
    valid: ValResult;
    noValidation: boolean;
    class: string | undefined;
    handleAnimationEnd: (e: React.AnimationEvent<HTMLElement>) => void;
};
export declare const usesEditableControlLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesEditableControlVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesEditableControlStates: () => import("@cssfn/cssfn").Rule;
export declare const useEditableControlSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    '@keyframes valid': PropEx.Keyframes;
    '@keyframes unvalid': PropEx.Keyframes;
    '@keyframes invalid': PropEx.Keyframes;
    '@keyframes uninvalid': PropEx.Keyframes;
    animValid: (string | PropEx.Keyframes)[][];
    animUnvalid: (string | PropEx.Keyframes)[][];
    animInvalid: (string | PropEx.Keyframes)[][];
    animUninvalid: (string | PropEx.Keyframes)[][];
}>, cssDecls: import("@cssfn/css-config").Decls<{
    '@keyframes valid': PropEx.Keyframes;
    '@keyframes unvalid': PropEx.Keyframes;
    '@keyframes invalid': PropEx.Keyframes;
    '@keyframes uninvalid': PropEx.Keyframes;
    animValid: (string | PropEx.Keyframes)[][];
    animUnvalid: (string | PropEx.Keyframes)[][];
    animInvalid: (string | PropEx.Keyframes)[][];
    animUninvalid: (string | PropEx.Keyframes)[][];
}>, cssVals: import("@cssfn/css-config").Vals<{
    '@keyframes valid': PropEx.Keyframes;
    '@keyframes unvalid': PropEx.Keyframes;
    '@keyframes invalid': PropEx.Keyframes;
    '@keyframes uninvalid': PropEx.Keyframes;
    animValid: (string | PropEx.Keyframes)[][];
    animUnvalid: (string | PropEx.Keyframes)[][];
    animInvalid: (string | PropEx.Keyframes)[][];
    animUninvalid: (string | PropEx.Keyframes)[][];
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface EditableControlProps<TElement extends EditableControlElement = EditableControlElement> extends ControlProps<TElement>, ValidationProps {
    autoFocus?: boolean;
    name?: string;
    form?: string;
    defaultValue?: string | number | ReadonlyArray<string>;
    value?: string | number | ReadonlyArray<string>;
    onChange?: React.ChangeEventHandler<TElement>;
    customValidator?: CustomValidatorHandler;
    required?: boolean;
}
export declare function EditableControl<TElement extends EditableControlElement = EditableControlElement>(props: EditableControlProps<TElement>): JSX.Element;
export { EditableControl as default };
