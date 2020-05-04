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
        name: 'attackRarity',
        defaultValue: 'None',
        description: 'PERCENTAGE OF AIRCRAFT EFFECTED',
        type: 'select',
        onChangeEventHandler: EVENT.SET_ATTACK_RARITY,
        optionList: [
          {
              displayLabel: '0% of aircraft effected',
              value: 'None'
          },
          {
              displayLabel: '5% of aircraft effected',
              value: 'Low'
          },
          {
              displayLabel: '20% of aircraft effected',
              value: 'Normal'
          },
          {
              displayLabel: '50% of aircraft effected',
              value: 'High'
          },
          {
              displayLabel: '90% of aircraft effected',
              value: 'VeryHigh'
          }
        ]
    },
    {
        name: 'jumpRadius',
        defaultValue: 'Normal',
        description: 'Distance of jumps',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_RADIUS,
        optionList: [
          {
              displayLabel: 'Small radius',
              value: 'Small'
          },
          {
              displayLabel: 'Moderate radius',
              value: 'Normal'
          },
          {
              displayLabel: 'Large radius',
              value: 'Large'
          }
        ]
    },
    {
        name: 'jumpFrequence',
        defaultValue: 'None',
        description: 'Aircraft changing postion',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_RARITY,
        optionList: [
            {
                displayLabel: 'Zero probability',
                value: 'None'
            },
            {
                displayLabel: 'Rare probability',
                value: 'Rare'
            },
            {
                displayLabel: 'Moderate probability',
                value: 'Normal'
            },
            {
                displayLabel: 'High probability',
                value: 'Often'
            },
            {
                displayLabel: 'Very high probability',
                value: 'Always'
            }
        ]
    },
    {
        name: 'stopRarity',
        defaultValue: 'None',
        description: 'Aircraft not responding to commands',
        type: 'select',
        onChangeEventHandler: EVENT.SET_STOP_RARITY,
        optionList: [
          {
              displayLabel: 'Zero probability',
              value: 'None'
          },
          {
              displayLabel: 'Low probability',
              value: 'Low'
          },
          {
              displayLabel: 'Moderate probability',
              value: 'Normal'
          },
          {
              displayLabel: 'High probability',
              value: 'High'
          }
        ]
    },
    {
        name: 'errorRarity',
        defaultValue: 'None',
        description: 'Aircraft showing false data',
        type: 'select',
        onChangeEventHandler: EVENT.SET_ERROR_RARITY,
        optionList: [
          {
              displayLabel: 'Zero probability',
              value: 'None'
          },
          {
              displayLabel: 'Low probability',
              value: 'Low'
          },
          {
              displayLabel: 'Normal probability',
              value: 'Normal'
          },
          {
              displayLabel: 'High probability',
              value: 'High'
          }
        ]
    }

];
