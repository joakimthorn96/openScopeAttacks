import { EVENT } from './eventNames';

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
        name: 'jumpFrequence',
        defaultValue: 'None',
        description: 'What is the rarity that an aircraft will jump',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_TIME,
        optionList: [
            {
                displayLabel: 'None',
                value: 'None'
            },
            {
                displayLabel: 'Rare',
                value: 'Rare'
            },
            {
                displayLabel: 'Normal',
                value: 'Normal'
            },
            {
                displayLabel: 'Often',
                value: 'Often'
            },
            {
                displayLabel: 'All the time',
                value: 'Always'
            }
        ]
    },
    {
        name: 'jumpRadius',
        defaultValue: 'Normal',
        description: 'In how big area will aircrafts jump',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_RADIUS,
        optionList: [
          {
              displayLabel: 'Small',
              value: 'Small'
          },
          {
              displayLabel: 'Normal',
              value: 'Normal'
          },
          {
              displayLabel: 'Large',
              value: 'Large'
          }
        ]
    },
    {
        name: 'stopRate',
        defaultValue: 'None',
        description: 'Rate of non-responsive aircraft',
        type: 'select',
        onChangeEventHandler: EVENT.SET_STOP_RATE,
        optionList: [
          {
              displayLabel: 'None',
              value: 'None'
          },
          {
              displayLabel: 'Low',
              value: 'Low'
          },
          {
              displayLabel: 'Normal',
              value: 'Normal'
          },
          {
              displayLabel: 'High',
              value: 'High'
          }
        ]
    }
];
