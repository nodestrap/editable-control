// react:
import { default as React, useState, useLayoutEffect, useRef, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, vars, 
// rules:
variants, states, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssVar, } from '@cssfn/css-var'; // Declares & retrieves *css variables* (css custom properties).
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import { 
// utilities:
setRef, } from '@nodestrap/utilities';
import { 
// hooks:
usePropEnabled, usePropReadOnly, } from '@nodestrap/accessibilities';
import { usePropValidation, } from '@nodestrap/validations';
// nodestrap components:
import { 
// hooks:
usesSizeVariant, usesThemeImpt, isOutlined, isMild, usesMildVariant, usesForeg, usesBackg, usesAnim, } from '@nodestrap/basic';
import { 
// hooks:
isActive, } from '@nodestrap/indicator';
import { 
// styles:
usesControlLayout, usesControlVariants, usesControlStates, Control, } from '@nodestrap/control';
const [validInvalidRefs, validInvalidDecls] = createCssVar();
{
    const [, , , propsManager] = usesAnim();
    propsManager.registerAnim(validInvalidRefs.animValid);
    propsManager.registerAnim(validInvalidRefs.animInvalid);
}
// .vald will be added after validating-animation done:
const selectorIsValided = '.vald';
// .val = programatically valid, :valid = user valid:
const selectorIsValidating = ['.val',
    ':valid:not(.vald):not(.unval):not(.noval):not(.invd):not(.inv)'];
// .unval will be added after loosing valid and will be removed after unvalidating-animation done:
const selectorIsUnvalidating = '.unval';
// if all above are not set => unvalided
// optionally use .noval to kill pseudo :valid:
const selectorIsUnvalided = [':not(.vald):not(.val):not(:valid):not(.unval)',
    '.noval'];
// .invd will be added after invalidating-animation done:
const selectorIsInvalided = '.invd';
// .inv = programatically invalid, :invalid = user invalid:
const selectorIsInvalidating = ['.inv',
    ':invalid:not(.invd):not(.uninv):not(.noval):not(.vald):not(.val)'];
// .uninv will be added after loosing invalid and will be removed after uninvalidating-animation done:
const selectorIsUninvalidating = '.uninv';
// if all above are not set => uninvalided
// optionally use .noval to kill pseudo :invalid:
const selectorIsUninvalided = [':not(.invd):not(.inv):not(:invalid):not(.uninv)',
    '.noval'];
// if all above are not set => noValidation
// optionally use .noval to kill pseudo :valid & :invalid:
const selectorIsNoValidation = [':not(.vald):not(.val):not(:valid):not(.unval)' +
        ':not(.invd):not(.inv):not(:invalid):not(.uninv)',
    '.noval'];
export const isValided = (styles) => rule(selectorIsValided, styles);
export const isValidating = (styles) => rule(selectorIsValidating, styles);
export const isUnvalidating = (styles) => rule(selectorIsUnvalidating, styles);
export const isUnvalided = (styles) => rule(selectorIsUnvalided, styles);
export const isValid = (styles) => rule([selectorIsValidating, selectorIsValided], styles);
export const isUnvalid = (styles) => rule([selectorIsUnvalidating, selectorIsUnvalided], styles);
export const isInvalided = (styles) => rule(selectorIsInvalided, styles);
export const isInvalidating = (styles) => rule(selectorIsInvalidating, styles);
export const isUninvalidating = (styles) => rule(selectorIsUninvalidating, styles);
export const isUninvalided = (styles) => rule(selectorIsUninvalided, styles);
export const isInvalid = (styles) => rule([selectorIsInvalidating, selectorIsInvalided], styles);
export const isUninvalid = (styles) => rule([selectorIsUninvalidating, selectorIsUninvalided], styles);
export const isNoValidation = (styles) => rule(selectorIsNoValidation, styles);
/**
 * Uses valid & invalid states.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents valid & invalid state definitions.
 */
export const usesValidInvalidState = () => {
    // dependencies:
    const [, mildRefs] = usesMildVariant();
    const [, foregRefs] = usesForeg();
    const [, backgRefs] = usesBackg();
    return [
        () => composition([
            states([
                isValidating([
                    vars({
                        [validInvalidDecls.animValid]: cssProps.animValid,
                    }),
                ]),
                isUnvalidating([
                    vars({
                        [validInvalidDecls.animValid]: cssProps.animUnvalid,
                    }),
                ]),
                isInvalidating([
                    vars({
                        [validInvalidDecls.animInvalid]: cssProps.animInvalid,
                    }),
                ]),
                isUninvalidating([
                    vars({
                        [validInvalidDecls.animInvalid]: cssProps.animUninvalid,
                    }),
                ]),
            ]),
            vars({
                [validInvalidDecls.foregStart]: mildRefs.foregFn,
                [validInvalidDecls.backgStart]: mildRefs.backgFn,
            }),
            variants([
                isOutlined([
                    vars({
                        [validInvalidDecls.foregStart]: foregRefs.foregFn,
                        [validInvalidDecls.backgStart]: backgRefs.backgFn,
                    }),
                ]),
                isMild([
                    vars({
                        [validInvalidDecls.foregStart]: foregRefs.foregFn,
                        [validInvalidDecls.backgStart]: backgRefs.backgFn,
                    }),
                ]),
            ]),
            states([
                isActive([
                    vars({
                        [validInvalidDecls.foregStart]: mildRefs.foregFn,
                        [validInvalidDecls.backgStart]: mildRefs.backgFn,
                    }),
                ]),
            ]),
        ]),
        validInvalidRefs,
        validInvalidDecls,
    ];
};
export const markValid = () => composition([
    imports([
        usesThemeValid(), // switch to valid theme
    ]),
]);
/**
 * Creates a conditional color definitions at valid state.
 * @param themeName The name of valid theme.
 * @returns A `StyleCollection` represents the conditional color definitions at valid state.
 */
export const usesThemeValid = (themeName = 'success') => usesThemeImpt(themeName);
export const markInvalid = () => composition([
    imports([
        usesThemeInvalid(), // switch to invalid theme
    ]),
]);
/**
 * Creates a conditional color definitions at invalid state.
 * @param themeName The name of invalid theme.
 * @returns A `StyleCollection` represents the conditional color definitions at invalid state.
 */
export const usesThemeInvalid = (themeName = 'danger') => usesThemeImpt(themeName);
export const useInputValidator = (customValidator) => {
    // states:
    let [isValid, setIsValid] = useState(null);
    const handleValidation = (target, immediately = false) => {
        const update = (validity, valuePrev) => {
            const valueNow = target.value;
            if ((valuePrev !== undefined) && (valuePrev !== valueNow))
                return; // the value has been modified during waiting => abort further validating
            // instantly update variable `isValid` without waiting state to refresh (re-render)
            // because the value is needed immediately by `useValidInvalidState` at startup
            isValid = (customValidator ? customValidator(validity, valueNow) : validity.valid);
            setIsValid(isValid);
        };
        if (immediately) {
            // instant validate:
            update(target.validity);
        }
        else {
            const validity = target.validity;
            const valuePrev = target.value;
            // delay a while for the further validating, to avoid unpleasant splash effect
            setTimeout(() => update(validity, valuePrev), (validity.valid !== false) ? 300 : 600);
        } // if
    };
    const handleInit = (target) => {
        handleValidation(target, /*immediately =*/ true);
    };
    const handleChange = (target) => {
        handleValidation(target);
    };
    return {
        /**
         * Handles the validation result.
         * @returns
         * `null`  = uncheck.
         * `true`  = valid.
         * `false` = invalid.
         */
        validator: (() => isValid),
        handleInit: handleInit,
        handleChange: handleChange,
    };
};
export const useValidInvalidState = (props, validator) => {
    // fn props:
    const propValidation = usePropValidation(props);
    const propEnabled = usePropEnabled(props);
    const propReadOnly = usePropReadOnly(props);
    // defaults:
    const defaultValided = null; // if [isValid] was not specified => the default value is [isValid=null] (neither valid nor invalid)
    // states:
    const [valided, setValided] = useState(() => {
        // if disabled or readOnly => no validation
        if (!propEnabled || propReadOnly)
            return null;
        // use prop as the primary validator:
        if (propValidation.isValid !== undefined)
            return propValidation.isValid; // validity is set => set state to uncheck/valid/invalid
        // use input validator as secondary:
        if (validator)
            return undefined; // undefined means => evaluate the validator *at startup*
        // use default value as fallback:
        return defaultValided;
    });
    const [succAnimating, setSuccAnimating] = useState(null); // null => no-succ-animation, true => succ-animation, false => unsucc-animation
    const [errAnimating, setErrAnimating] = useState(null); // null => no-err-animation,  true => err-animation,  false => unerr-animation
    /*
     * state is set as [context and / or controllable] if [            validation is enabled] && [validity is set]
     * state is set as validator                       if [validator's validation is enabled] && [validator has loaded]
     * otherwise return undefined (represents no change needed)
     */
    const validFn = (() => {
        // if disabled or readOnly => no validation
        if (!propEnabled || propReadOnly)
            return null;
        // use prop as the primary validator:
        if (propValidation.isValid !== undefined)
            return propValidation.isValid; // validity is set => set state to uncheck/valid/invalid
        // use input validator as secondary:
        if ((valided !== undefined))
            return (validator ? validator() : defaultValided); // if validator has loaded => evaluate the validator *now*
        // no change needed:
        return undefined;
    })();
    if ((validFn !== undefined) && (valided !== validFn)) { // change detected => apply the change & start animating
        setValided(validFn); // remember the last change
        switch (validFn) {
            case true: // success
                // if was error => un-error:
                if (valided === false)
                    setErrAnimating(false); // start unerr-animation
                setSuccAnimating(true); // start succ-animation
                break;
            case false: // error
                // if was success => un-success:
                if (valided === true)
                    setSuccAnimating(false); // start unsucc-animation
                setErrAnimating(true); // start err-animation
                break;
            case null: // uncheck
                // if was success => un-success:
                if (valided === true)
                    setSuccAnimating(false); // start unsucc-animation
                // if was error => un-error:
                if (valided === false)
                    setErrAnimating(false); // start unerr-animation
                break;
        } // switch
    }
    // watch the changes once (only at startup):
    useLayoutEffect(() => {
        if (valided !== undefined)
            return; // the effect should only run once
        // now validator has been loaded => re-*set the initial* state of `valided` with any values other than `undefined`
        // once set, this effect will never be executed again
        setValided(validator ? validator() : defaultValided);
    }, [valided, validator]); // the effect should only run once
    const handleIdleSucc = () => {
        // clean up finished animation
        setSuccAnimating(null); // stop succ-animation/unsucc-animation
    };
    const handleIdleErr = () => {
        // clean up finished animation
        setErrAnimating(null); // stop err-animation/unerr-animation
    };
    const noValidation = // causing the validFn *always* `null`:
     (!propEnabled || propReadOnly)
        ||
            (propValidation.isValid === null)
        ||
            (!validator);
    return {
        /**
         * `true`  : validating/valided
         * `false` : invalidating/invalided
         * `null`  : uncheck/unvalidating/uninvalidating
        */
        valid: (valided ?? null),
        noValidation: noValidation,
        class: [
            // valid classes:
            (() => {
                if (succAnimating === true)
                    return 'val';
                if (succAnimating === false)
                    return 'unval';
                if (valided === true)
                    return 'vald';
                return null;
            })(),
            // invalid classes:
            (() => {
                if (errAnimating === true)
                    return 'inv';
                if (errAnimating === false)
                    return 'uninv';
                if (valided === false)
                    return 'invd';
                return null;
            })(),
            // neutral classes:
            (() => {
                if (valided === null) {
                    // if (noValidation) {
                    //     return 'noval'; // validation_disabled by controllable prop => use class .noval to kill [:valid || :invalid]
                    // }
                    // else {
                    //     return null; // discard all classes above
                    // } // if
                    return 'noval';
                } // if
                return null;
            })(),
        ].filter((c) => !!c).join(' ') || undefined,
        handleAnimationEnd: (e) => {
            if (e.target !== e.currentTarget)
                return; // no bubbling
            if (/((?<![a-z])(valid|unvalid)|(?<=[a-z])(Valid|Unvalid))(?![a-z])/.test(e.animationName)) {
                handleIdleSucc();
            }
            else if (/((?<![a-z])(invalid|uninvalid)|(?<=[a-z])(Invalid|Uninvalid))(?![a-z])/.test(e.animationName)) {
                handleIdleErr();
            }
        },
    };
};
//#endregion validInvalid
// styles:
export const usesEditableControlLayout = () => {
    return composition([
        imports([
            // layouts:
            usesControlLayout(),
        ]),
        layout({
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    ]);
};
export const usesEditableControlVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        imports([
            // variants:
            usesControlVariants(),
            // layouts:
            sizes(),
        ]),
    ]);
};
export const usesEditableControlStates = () => {
    // dependencies:
    // states:
    const [validInvalid] = usesValidInvalidState();
    return composition([
        imports([
            // states:
            usesControlStates(),
            validInvalid(),
        ]),
        states([
            isValid([
                imports([
                    markValid(),
                ]),
            ]),
            isInvalid([
                imports([
                    markInvalid(),
                ]),
            ]),
        ]),
    ]);
};
export const useEditableControlSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesEditableControlLayout(),
            // variants:
            usesEditableControlVariants(),
            // states:
            usesEditableControlStates(),
        ]),
    ]),
]);
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    // dependencies:
    const [, { foreg }] = usesForeg();
    const [, { backg }] = usesBackg();
    const [, { foregStart: foregValidInvalidStart, backgStart: backgValidInvalidStart }] = usesValidInvalidState();
    //#region keyframes
    const keyframesValid = {
        from: {
            foreg: foregValidInvalidStart,
            backg: backgValidInvalidStart,
        },
        to: {
            foreg: foreg,
            backg: backg,
        },
    };
    const keyframesUnvalid = {};
    const keyframesInvalid = { ...keyframesValid }; // copy but keeps different by reference
    const keyframesUninvalid = {};
    //#endregion keyframes
    return {
        //#region animations
        '@keyframes valid': keyframesValid,
        '@keyframes unvalid': keyframesUnvalid,
        '@keyframes invalid': keyframesInvalid,
        '@keyframes uninvalid': keyframesUninvalid,
        animValid: [['1000ms', 'ease-out', 'both', keyframesValid]],
        animUnvalid: [['100ms', 'ease-out', 'both', keyframesUnvalid]],
        animInvalid: [['1000ms', 'ease-out', 'both', keyframesInvalid]],
        animUninvalid: [['100ms', 'ease-out', 'both', keyframesUninvalid]],
        //#endregion animations
    };
}, { prefix: 'edit' });
export function EditableControl(props) {
    // styles:
    const sheet = useEditableControlSheet();
    // states:
    const inputValidator = useInputValidator(props.customValidator);
    const validInvalidState = useValidInvalidState(props, inputValidator.validator);
    // jsx:
    const inputRef = useRef(null);
    return (<Control 
    // other props:
    {...props} 
    // classes:
    mainClass={props.mainClass ?? sheet.main} stateClasses={[...(props.stateClasses ?? []),
            validInvalidState.class,
        ]} 
    // validations:
    elmRef={(elm) => {
            setRef(props.elmRef, elm);
            if (elm) {
                if (elm.validity) {
                    setRef(inputRef, elm);
                }
                else {
                    const firstInput = elm.querySelector('input,select,textarea');
                    if (firstInput)
                        setRef(inputRef, firstInput);
                } // if
                if (inputRef.current)
                    inputValidator.handleInit(inputRef.current);
            } // if
        }} onChange={(e) => {
            props.onChange?.(e);
            // validations:
            if (inputRef.current)
                inputValidator.handleChange(inputRef.current);
        }} 
    // events:
    onAnimationEnd={(e) => {
            props.onAnimationEnd?.(e);
            // validations:
            validInvalidState.handleAnimationEnd(e);
        }}/>);
}
export { EditableControl as default };
