import { EVENT } from './eventNames';
import TrafficRateController from '../ui/TrafficRateController';

/* eslint-disable max-len, import/prefer-default-export */
/**
 * Name enumeration of available game attacks
 *
 * @property GAME_ATTACK_NAMES
 * @type {Object}
 * @final
 */
export const GAME_ATTACK_NAMES = {
    0: 'Regular',
    1: 'Non listen',
    2: 'Jumping',
    3: 'False information',
    4: 'Standing still'
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
        name: 'attackRarity',
        defaultValue: 'None',
        description: 'Percentage of aircraft affected',
        type: 'select',
        onChangeEventHandler: EVENT.SET_ATTACK_RARITY,
        optionList: [
            {
                displayLabel: '0% of aircraft affected',
                value: 'None'
            },
            {
                displayLabel: '5% of aircraft affected',
                value: 'Low'
            },
            {
                displayLabel: '20% of aircraft affected',
                value: 'Normal'
            },
            {
                displayLabel: '50% of aircraft affected',
                value: 'High'
            },
            {
                displayLabel: '90% of aircraft affected',
                value: 'VeryHigh'
            }
        ]
    },
    {
        name: 'stopRarity',
        defaultValue: '0',
        description: 'Aircraft not responding to commands',
        help: 'Simulates spoofed ADS-B data. These aircraft will not respond to any commands.',
        type: 'select',
        onChangeEventHandler: EVENT.SET_STOP_RARITY,
        optionList: [
            {
                displayLabel: '0',
                value: '0'
            },
            {
                displayLabel: '1',
                value: '1'
            },
            {
                displayLabel: '2',
                value: '2'
            },
            {
                displayLabel: '3',
                value: '3'
            },
            {
                displayLabel: '4',
                value: '4'
            },
            {
                displayLabel: '5',
                value: '5'
            }
        ]
    },
    {
        name: 'jumpFrequence',
        defaultValue: '0',
        description: 'Aircraft changing postion',
        help: 'Changes the positional values of ADS-B data of aircraft',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_RARITY,
        optionList: [
            {
                displayLabel: '0',
                value: '0'
            },
            {
                displayLabel: '1',
                value: '1'
            },
            {
                displayLabel: '2',
                value: '2'
            },
            {
                displayLabel: '3',
                value: '3'
            },
            {
                displayLabel: '4',
                value: '4'
            },
            {
                displayLabel: '5',
                value: '5'
            }
        ]
    },

    {
        name: 'errorRarity',
        defaultValue: '0',
        description: 'Aircraft showing false data',
        help: 'Changes the alitude and velocity values of ADS-B data of aircraft',
        type: 'select',
        onChangeEventHandler: EVENT.SET_ERROR_RARITY,
        optionList: [
            {
                displayLabel: '0',
                value: '0'
            },
            {
                displayLabel: '1',
                value: '1'
            },
            {
                displayLabel: '2',
                value: '2'
            },
            {
                displayLabel: '3',
                value: '3'
            },
            {
                displayLabel: '4',
                value: '4'
            },
            {
                displayLabel: '5',
                value: '5'
            }
        ]
    },

    {
        name: 'standStillRarity',
        defaultValue: '0',
        description: 'Aircraft will stand still',
        help: 'Make aircraft stand still with velocity zero',
        type: 'select',
        onChangeEventHandler: EVENT.SET_STANDSTILL_RARITY,
        optionList: [
            {
                displayLabel: '0',
                value: '0'
            },
            {
                displayLabel: '1',
                value: '1'
            },
            {
                displayLabel: '2',
                value: '2'
            },
            {
                displayLabel: '3',
                value: '3'
            },
            {
                displayLabel: '4',
                value: '4'
            },
            {
                displayLabel: '5',
                value: '5'
            }
        ]
    },
    {
        name: 'jumpProbability',
        defaultValue: '250',
        description: 'Probability of jumps',
        help: 'Probability of jumping aircraft to jump',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_PROB,
        optionList: [
            {
                displayLabel: 'Very Low',
                value: '5000'
            },
            {
                displayLabel: 'Low',
                value: '1250'
            },
            {
                displayLabel: 'Medium',
                value: '250'
            },
            {
                displayLabel: 'High',
                value: '50'
            },
            {
                displayLabel: 'Very high',
                value: '10'
            }
        ]
    },
    {
        name: 'jumpRadius',
        defaultValue: 'Moderate',
        description: 'Distance of jumps',
        help: 'The distance of a positional ADS-B data jump, when it occurs. ',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_RADIUS,
        optionList: [
            {
                displayLabel: 'Small radius',
                value: 'Small'
            },
            {
                displayLabel: 'Moderate radius',
                value: 'Moderate'
            },
            {
                displayLabel: 'Large radius',
                value: 'Large'
            }
        ]
    },

    {
        name: 'showAttackAircraftVisibility',
        defaultValue: 'false',
        description: 'Distinguish attack aircraft',
        help: 'Toggles the visibility of the attacking aircraft.',
        type: 'select',
        onChangeEventHandler: EVENT.SET_ATTACK_AIRCRAFT_VISIBILITY,
        optionList: [
            {
                displayLabel: 'Yes',
                value: 'true'
            },
            {
                displayLabel: 'No',
                value: 'false'
            }
        ]
    }

];
