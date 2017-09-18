/**
 * Enum containing all triggerable events triggered via the `EventBus`
 *
 * Before adding an event, every effort should be made to communicate
 * accross classes with direct imports. Events are available but can
 * be harder to debug and follow. Use with caution.
 *
 * @property EVENT
 * @type {Object}
 * @final
 */
export const EVENT = {
    /**
     * @memberof EVENT
     * @property AIRPORT_CHANGE
     * @type {string}
     */
    AIRPORT_CHANGE: 'airport-change',

    /**
     * A click was registered outside of a specific `StripViewModel`
     * and the active strip, if any, should have the `active`
     * css classname removed
     *
     * @memberof EVENT
     * @property DESELECT_ACTIVE_STRIP_VIEW
     * @type {string}
     */
    DESELECT_ACTIVE_STRIP_VIEW: 'deselect-active-strip-view',

    /**
     * Event used to notify the `CanvasController` when a re-draw
     * should happen outside of the usual game loop.
     *
     * This should only occur as a result of a user action
     *
     * @memberof EVENT
     * @property MARK_CANVAS_DIRTY
     * @type {string}
     */
    MARK_CANVAS_DIRTY: 'mark-dirty-canvas',

    /**
     * Pause/unpause the app
     *
     * @memberof EVENT
     * @property PAUSE_TOGGLE
     * @type {string}
     */
    PAUSE_TOGGLE: 'pause-toggle',

    /**
     * A pan event has been detected necessitating an entire redraw of each canvas
     *
     * This may constitute a pan-in-progress and not the completion of a panning action
     *
     * @memberof EVENT
     * @property PAN_VIEWPORT
     * @type {string}
     */
    PAN_VIEWPORT: 'pan-viewport',

    /**
     * An aircraft data block was clicked and the corresponding
     * `StripViewModel` must also be selected
     *
     * @memberof EVENT
     * @property SELECT_STRIP_VIEW_FROM_DATA_BLOCK
     * @type {string}
     */
    SELECT_STRIP_VIEW_FROM_DATA_BLOCK: 'select-strip-view-from-data-block',

    /**
     * An aircraft progress strip was clicked
     *
     * @memberof EVENT
     * @property STRIP_CLICK
     * @type {string}
     */
    STRIP_CLICK: 'strip-click',

    /**
     * An aircraft progress strip was double clicked
     *
     * @memberof EVENT
     * @property STRIP_DOUBLE_CLICK
     * @type {string}
     */
    STRIP_DOUBLE_CLICK: 'strip-double-click',

    /**
     * Remove an aircraft from the sim
     *
     * Usually as a result of the `del` user command
     *
     * @memberof EVENT
     * @property REMOVE_AIRCRAFT
     * @type {string}
     */
    REMOVE_AIRCRAFT: 'remove-aircraft',

    /**
     * Remove an `AircraftConflict` for an aircraft
     *
     * @memberof EVENT
     * @property REMOVE_AIRCRAFT_CONFLICT
     * @type {string}
     */
    REMOVE_AIRCRAFT_CONFLICT: 'remove-aircraft-conflict',

    /**
     * An aircraft has been located and needs to be centered in the view
     *
     * @memberof EVENT
     * @property REQUEST_TO_CENTER_POINT_IN_VIEW
     * @type {string}
     */
    REQUEST_TO_CENTER_POINT_IN_VIEW: 'request-to-center-point-in-view',

    /**
     * Fired when the update loop should be either paused or resumed.
     *
     * Usually called when airport data is changing (ie, when a new airport
     * is being loaded).
     *
     * @memberof EVENT
     * @property SHOULD_PAUSE_UPDATE_LOOP
     * @type {string}
     */
    SHOULD_PAUSE_UPDATE_LOOP: 'should-pause-update-loop',

    /**
     * @memberof EVENT
     * @property SHOULD_TOGGLE_LABELS
     * @type {string}
     */
    SHOULD_TOGGLE_LABELS: 'should-toggle-labels',

    /**
     * @memberof EVENT
     * @property SHOULD_TOGGLE_RESTRICTED_AREAS
     * @type {string}
     */
    SHOULD_TOGGLE_RESTRICTED_AREAS: 'should-toggle-restricted-areas',

    /**
     * @memberof EVENT
     * @property SHOULD_TOGGLE_SID_MAP
     * @type {string}
     */
    SHOULD_TOGGLE_SID_MAP: 'should-toggle-sid-map',

    /**
     * @memberof EVENT
     * @property SHOULD_TOGGLE_TERRAIN
     * @type {string}
     */
    SHOULD_TOGGLE_TERRAIN: 'should-toggle-terrain',

    /**
     * Change the active theme to the specified theme name
     *
     * @memberof EVENT
     * @property SET_THEME
     * @type {string}
     */
    SET_THEME: 'set-theme',

    /**
     * Step through pre-defined timewarp speeds
     *
     * @memberof EVENT
     * @property TIMEWARP_TOGGLE
     * @type {string}
     */
    TIMEWARP_TOGGLE: 'timewarp-toggle',

    /**
     * Open/close the tutorial modal
     *
     * @memberof EVENT
     * @property TOGGLE_TUTORIAL
     * @type {string}
     */
    TOGGLE_TUTORIAL: 'toggle-tutorial',

    /**
     * A click has been registered in the unpause button shown within the
     * screen overlay whil the app is paused
     *
     * @memberof EVENT
     * @property UNPAUSE
     * @type {string}
     */
    UNPAUSE: 'unpause',

    /**
     * The zoom level has changed necessitating an entire redraw of each canvas
     *
     * @memberof EVENT
     * @property ZOOM_VIEWPORT
     * @type {string}
     */
    ZOOM_VIEWPORT: 'zoom-viewport'
};
