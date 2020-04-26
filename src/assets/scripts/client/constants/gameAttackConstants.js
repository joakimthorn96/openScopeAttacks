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
        defaultValue: 'Normal',
        description: 'How often will aircrafts jump',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_TIME,
        optionList: [
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
        name: 'jumpProb',
        defaultValue: 'Normal',
        description: 'How many aircrafts will jump',
        type: 'select',
        onChangeEventHandler: EVENT.SET_JUMP_PROBABILTY,
        optionList: [
          {
              displayLabel: 'A few',
              value: 'Rare'
          },
          {
              displayLabel: 'Normal',
              value: 'Normal'
          },
          {
              displayLabel: 'Many',
              value: 'Many'
          },
          {
              displayLabel: 'All of them',
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
    }
];
