
import $ from 'jquery';
import _forEach from 'lodash/forEach';
import _isNaN from 'lodash/isNaN';
import GameController from '../game/GameController';
import { SELECTORS } from '../constants/selectors';
import TestController from './TestController';

/**
 * @property UI_SETTINGS_MODAL_TEMPLATE
 * @type {string}
 * @final
 */
const UI_SETTINGS_MODAL_TEMPLATE = `
    <div class="option-dialog dialog">
        <p class="dialog-title">Tests</p>
        <div class="dialog-body nice-scrollbar"></div>
        <p class="dialog-text"> To run a test use the command: tests
        </p>
    </div>`;

/**
 * @property UI_DIALOG_FOOTER_TEMPLATE
 * @type {string}
 * @final
 */
const UI_DIALOG_FOOTER_TEMPLATE = '<div class="dialog-footer">Tests</div>';

/**
 * @property UI_OPTION_CONTAINER_TEMPLATE
 * @type {string}
 * @final
 */
const UI_OPTION_CONTAINER_TEMPLATE = '<div class="form-element"></div>';

/**
 * @property UI_OPTION_LABEL_TEMPLATE
 * @type {string}
 * @final
 */
const UI_OPTION_LABEL_TEMPLATE = '<span class="form-label"></span>';

/**
 * @property UI_OPTION_SELECTOR_TEMPLATE
 * @type {string}
 * @final
 */
const UI_OPTION_SELECTOR_TEMPLATE = '<span class="form-type-select"></span>';

// TODO: This class has no corresponding styles
/**
 * @property UI_STATIC_TEXT_TEMPLATE
 * @type {string}
 * @final
 */
const UI_STATIC_TEXT_TEMPLATE = '<span class="option-static-text"></span>';



export default class TestUIController{
    
    constructor($element){

        /**
         * Root DOM element
         *
         * @property $element
         * @type {jquery|HTML Element}
         * @default $element
         */
        this.$element = $element;

        /**
         * Dialog DOM element
         *
         * @property $dialog
         * @type {jquery|HTML Element}
         * @default null
         */
        this.$dialog = null;

        /**
         * Dialog's body DOM element
         *
         * @property $dialogBody
         * @type {jquery|HTML Element}
         * @default null
         */
        this.$dialogBody = null;

        this.init();

    }


    init(){
        this.$dialog = $(UI_SETTINGS_MODAL_TEMPLATE);
        this.$dialogBody = this.$dialog.find(SELECTORS.DOM_SELECTORS.DIALOG_BODY);

        const newH1 = $('<h1>Test dialog box for test UI</h1>');
        const newP = $('<p>Ut diam Integer vel justo neque. Nullam eget elit sit amet nibh ornare gravida. Proin odio arcu, hendrerit hendrerit turpis vel, venenatis pretium urna. Etiam sollicitudin posuere dapibus. Curabitur elementum sapien at nisi lobortis pulvinar. Aliquam tincidunt velit ac purus tincidunt, in ornare nisl fermentum. Sed sodales viverra pretium. Maecenas eu ex nunc. Aenean egestas sapien ac lacus euismod, ac aliquet sapien pellentesque.</p>');

        this.$dialogBody.append(newH1);
        this.$dialogBody.append(newP);

        this.$element.append(this.$dialog);

    }


     /**
     * Returns whether the airport selection dialog is open
     *
     * @for TestUIController
     * @method isDialogOpen
     * @return {boolean}
     */
    isDialogOpen() {
        return this.$dialog.hasClass(SELECTORS.CLASSNAMES.OPEN);
    }


    /**
    * @for TestUIController
    * @method toggleDialog
    */
   toggleDialog() {
    this.$dialog.toggleClass(SELECTORS.CLASSNAMES.OPEN);
    }

}