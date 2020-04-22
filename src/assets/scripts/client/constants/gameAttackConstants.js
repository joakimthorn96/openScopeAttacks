import { EVENT } from './eventNames';
import { MEASURE_TOOL_STYLE } from './inputConstants';

/* eslint-disable max-len, import/prefer-default-export */
/**
 * Name enumeration of available game attacks
 *
 * @property GAME_ATTACK_NAMES
 * @type {Object}
 * @final
 */
export const GAME_ATTACK_NAMES = {
    CONTROL_METHOD: 'controlMethod'
};

/**
 * User attacks
 *
 * These attacks are presented in a modal and are stored in localStorage
 *
 * @property GAME_ATTACK_VALUES
 * @type {array<object>}
 * @final
 */
export const GAME_ATTACK_VALUES = [
    {
        name: 'Testing',
        defaultValue: 'Gustav',
        description: 'I am snail',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: 'Gustav',
                value: 'Gustav'
            },
            {
                displayLabel: 'Anton',
                value: 'Anton'
            }
        ]
    },
    {
        name: 'Testing2',
        defaultValue: 'Cake',
        description: 'Are you a Cake or Cookie or Tarte man?',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: 'Cake',
                value: 'Cake'
            },
            {
                displayLabel: 'Cookie',
                value: 'Cookie'
            },
            {
                displayLabel: 'Tarte',
                value: 'Tarte'
            }
        ]
    }
];
