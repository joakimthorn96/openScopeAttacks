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
        name: 'stopRarity',
        defaultValue: 'None',
        description: 'Aircraft not responding to commands',
        help: 'Simulates spoofed ADS-B data. These aircraft will not respond to any commands.',
        type: 'select',
        onChangeEventHandler: EVENT.SET_STOP_RARITY,
        optionList: [
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
        defaultValue: 'None',
        description: 'Aircraft changing postion',
        help: 'Changes the positional values of ADS-B data of aircraft',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_RARITY,
        optionList: [
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
        defaultValue: 'None',
        description: 'Aircraft showing false data',
        help: 'Changes the alitude and velocity values of ADS-B data of aircraft',
        type: 'select',
        onChangeEventHandler: EVENT.SET_ERROR_RARITY,
        optionList: [
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
        name: 'jumpRadius',
        defaultValue: 'Normal',
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
              value: 'Normal'
          },
          {
              displayLabel: 'Large radius',
              value: 'Large'
          }
        ]
    }

];
