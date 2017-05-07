/* eslint-disable arrow-parens, max-len, import/no-extraneous-dependencies*/
import ava from 'ava';
import sinon from 'sinon';
import _isEqual from 'lodash/isEqual';
import _keys from 'lodash/keys';
import _map from 'lodash/map';

import StandardRouteModel from '../../../src/assets/scripts/client/navigationLibrary/StandardRoute/StandardRouteModel';
import RouteSegmentCollection from '../../../src/assets/scripts/client/navigationLibrary/StandardRoute/RouteSegmentCollection';
import RouteSegmentModel from '../../../src/assets/scripts/client/navigationLibrary/StandardRoute/RouteSegmentModel';
import StandardRouteWaypointModel from '../../../src/assets/scripts/client/navigationLibrary/StandardRoute/StandardRouteWaypointModel';

import FixCollection from '../../../src/assets/scripts/client/navigationLibrary/Fix/FixCollection';
import { airportPositionFixtureKSFO } from '../../fixtures/airportFixtures';
import { FIX_LIST_MOCK } from '../Fix/_mocks/fixMocks';

import {
    STAR_LIST_MOCK,
    STAR_WITH_SUFFIX,
    SID_LIST_MOCK,
    SID_WITHOUT_BODY_MOCK,
    SID_WITHOUT_EXIT_MOCK,
    STAR_WITHOUT_RWY
} from './_mocks/standardRouteMocks';

const SID_MOCK = SID_LIST_MOCK.SHEAD9;
const STAR_MOCK = STAR_LIST_MOCK.TYSSN4;
const RUNWAY_NAME_MOCK = '25L';
const ENTRY_FIXNAME_MOCK = 'DRK';

ava.before(() => FixCollection.addItems(FIX_LIST_MOCK, airportPositionFixtureKSFO));
ava.after(() => FixCollection.removeItems());

ava('throws when instantiated with invaild parameters', t => {
    t.throws(() => new StandardRouteModel());
    t.throws(() => new StandardRouteModel([]));
});

ava('does not throw when instantiated with vaild parameters', t => {
    const result = new StandardRouteModel(SID_MOCK);

    t.notThrows(() => new StandardRouteModel(STAR_MOCK));
    t.notThrows(() => new StandardRouteModel(SID_MOCK));
    t.notThrows(() => new StandardRouteModel(SID_WITHOUT_BODY_MOCK));
    t.notThrows(() => new StandardRouteModel(STAR_WITHOUT_RWY));
    t.true(result.name === SID_MOCK.name);
    t.true(result.icao === SID_MOCK.icao);
    t.true(result._entryCollection instanceof RouteSegmentCollection);
    t.true(result._bodySegmentModel instanceof RouteSegmentModel);
    t.true(result._exitCollection instanceof RouteSegmentCollection);
});

ava('.findStandardRouteWaypointModelsForEntryAndExit() returns a list of `StandardRouteWaypointModel`s for a given STAR', t => {
    const expectedArguments = ['MLF', '19R'];
    const model = new StandardRouteModel(STAR_LIST_MOCK.GRNPA1);
    const spy = sinon.spy(model, '_findStandardWaypointModelsForRoute');

    const result = model.findStandardRouteWaypointModelsForEntryAndExit('MLF', '19R');
    const actualArguments = spy.getCall(0).args;

    t.true(_isEqual(actualArguments, expectedArguments));
    t.true(result.length === 8);
    t.true(result[0] instanceof StandardRouteWaypointModel);
    t.true(result[0].position !== null);
});

ava('creates a dictionary #_icaoWithSuffix madeup of icao + suffix with the runway name as a value', (t) => {
    const expectedResult = {
        GRNPA11A: '01L',
        GRNPA11B: '01R',
        GRNPA12A: '07L',
        GRNPA12B: '07R',
        GRNPA13A: '19L',
        GRNPA13B: '19R',
        GRNPA14A: '25L',
        GRNPA14B: '25R'
    };
    const model = new StandardRouteModel(STAR_WITH_SUFFIX);

    t.deepEqual(model._icaoWithSuffixDictionary, expectedResult);
});

ava('.findStandardRouteWaypointModelsForEntryAndExit() does call ._updateWaypointsWithPreviousWaypointData() if isPreSpawn is true', t => {
    const model = new StandardRouteModel(STAR_LIST_MOCK.GRNPA1);
    const spy = sinon.spy(model, '_updateWaypointsWithPreviousWaypointData');
    const isPreSpawn = true;

    model.findStandardRouteWaypointModelsForEntryAndExit('MLF', '19R', isPreSpawn);

    t.true(spy.callCount === 1);
});

ava('.findStandardRouteWaypointModelsForEntryAndExit() does not call ._updateWaypointsWithPreviousWaypointData() if isPreSpawn is false', t => {
    const model = new StandardRouteModel(STAR_LIST_MOCK.GRNPA1);
    const spy = sinon.spy(model, '_updateWaypointsWithPreviousWaypointData');
    const isPreSpawn = false;

    model.findStandardRouteWaypointModelsForEntryAndExit('MLF', '19R', isPreSpawn);

    t.true(spy.callCount === 0);
});

ava('.calculateDistanceBetweenWaypoints() calculates the distance between two `StandardRouteWaypointModel` positions', t => {
    const expectedResult = 118.63498218153818;
    const model = new StandardRouteModel(STAR_LIST_MOCK.GRNPA1);
    const waypointList = model.findStandardRouteWaypointModelsForEntryAndExit('MLF', '19R');
    const result = model.calculateDistanceBetweenWaypoints(waypointList[0].relativePosition, waypointList[1].relativePosition);

    t.true(result === expectedResult);
});

ava('.gatherExitPointNames() retuns a list of the exitPoint fix names', t => {
    const expectedResult = ['KENNO', 'OAL'];
    const model = new StandardRouteModel(SID_MOCK);
    const result = model.gatherExitPointNames();

    t.true(_isEqual(result, expectedResult));
});

ava('.getSegmentNameForIcaoWithSuffix() throws if called with invalid parameters', (t) => {
    const model = new StandardRouteModel(STAR_WITH_SUFFIX);

    t.throws(() => model.getSegmentNameForIcaoWithSuffix('GRNPA1'));
    t.notThrows(() => model.getSegmentNameForIcaoWithSuffix('GRNPA11A'));
});

ava('.hasExitPoints() returns a boolean', t => {
    let model;

    model = new StandardRouteModel(SID_MOCK);
    t.true(model.hasExitPoints());

    model = new StandardRouteModel(SID_WITHOUT_EXIT_MOCK.TRALR6);
    t.false(model.hasExitPoints());
});

ava('._buildSegmentCollection() returns null if segment is undefined', t => {
    const model = new StandardRouteModel(STAR_MOCK);
    const result = model._buildSegmentCollection();

    t.true(result === null);
});

ava('._buildSegmentCollection() returns null if segment is an empty object', t => {
    const model = new StandardRouteModel(STAR_MOCK);
    const result = model._buildSegmentCollection({});

    t.true(result === null);
});

ava('._buildEntryAndExitCollections() maps rwy fixes to _exitCollection when entryPoints is present', t => {
    const model = new StandardRouteModel(STAR_MOCK);
    model._buildEntryAndExitCollections(STAR_MOCK);

    const segmentModelNames = _map(model._exitCollection._items, (segmentModel) => segmentModel.name);

    t.true(_isEqual(segmentModelNames, _keys(STAR_MOCK.rwy)));
});

ava('._buildEntryAndExitCollections() maps rwy fixes to _entryCollection when exitPoints is present', t => {
    const model = new StandardRouteModel(SID_MOCK);
    model._buildEntryAndExitCollections(SID_MOCK);

    const segmentModelNames = _map(model._entryCollection._items, (segmentModel) => segmentModel.name);

    t.true(_isEqual(segmentModelNames, _keys(SID_MOCK.rwy)));
});

ava('._buildEntryAndExitCollections() maps rwy fixes to _entryCollection when exitPoints is not present and rwy is present', t => {
    const model = new StandardRouteModel(SID_WITHOUT_EXIT_MOCK.TRALR6);
    model._buildEntryAndExitCollections(SID_WITHOUT_EXIT_MOCK.TRALR6);

    const segmentModelNames = _map(model._entryCollection._items, (segmentModel) => segmentModel.name);

    t.true(_isEqual(segmentModelNames, _keys(SID_WITHOUT_EXIT_MOCK.TRALR6.rwy)));
});

ava.skip('._findStandardWaypointModelsForRoute() throws if entry does not exist within the collection', t => {
    const model = new StandardRouteModel(STAR_MOCK);

    t.throws(() => model._findStandardWaypointModelsForRoute('threeve', '25R'));
});

ava.skip('._findStandardWaypointModelsForRoute() throws if exit does not exist within the collection', t => {
    const model = new StandardRouteModel(STAR_MOCK);

    t.throws(() => model._findStandardWaypointModelsForRoute('DRK', 'threeve'));
});

ava('._findStandardWaypointModelsForRoute() returns a list of StandardRouteWaypointModels when _entryCollection and _exitCollection exist', t => {
    const model = new StandardRouteModel(STAR_MOCK);
    const result = model._findStandardWaypointModelsForRoute(ENTRY_FIXNAME_MOCK, RUNWAY_NAME_MOCK);

    t.true(result.length === 7);
});

ava('._findStandardWaypointModelsForRoute() returns a list of StandardRouteWaypointModels when _bodySegmentModel does not exist', t => {
    const model = new StandardRouteModel(SID_WITHOUT_BODY_MOCK);
    const result = model._findStandardWaypointModelsForRoute(RUNWAY_NAME_MOCK, 'MLF');

    t.true(result.length === 6);
});

ava('._findStandardWaypointModelsForRoute() returns a list of StandardRouteWaypointModels when _exitCollection does not exist', t => {
    const model = new StandardRouteModel(STAR_WITHOUT_RWY);
    const result = model._findStandardWaypointModelsForRoute('BETHL', '');

    t.true(result.length === 9);
});

ava('.hasSuffix() returns true only when it receives an icao + suffix', (t) => {
    const model = new StandardRouteModel(STAR_WITH_SUFFIX);

    t.false(model.hasSuffix('GRNPA'));
    t.true(model.hasSuffix('GRNPA11A'));
});

ava('._getSegmentNameFromIcaoWithSuffix() returns a runwayName for an icao + suffix', (t) => {
    const expectedResult = '01L';
    const model = new StandardRouteModel(STAR_WITH_SUFFIX);
    const result = model._getSegmentNameFromIcaoWithSuffix('GRNPA11A');

    t.true(result === expectedResult);
});
