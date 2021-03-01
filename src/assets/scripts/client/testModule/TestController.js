import GameController from '../game/GameController';
import { TIME } from '../constants/globalConstants';
import TimeKeeper from '../engine/TimeKeeper';
import TestUIController from './TestUIController';
import UiController from '../ui/UiController';


const ATTACK_SETTINGS_SET_FUNCTIONS = {
    aRarity:`_setARarity`,
    RRarity: `_setARarity`,
    jRarity: `_setjRarity`,
    eRarity: `_setERarity`,
    sRarity: `_setSRarity`,
    numberOfFlooding: `_setFlooding`,
    jProb: `_setJProb`,
    jRadius: `_setjRadius`,
    showAttackAircraftVisibility: `_setAttackVisibility`
};

const ATTACK_SETTING_NAMES = [
    'aRarity',
    'RRarity',
    'jRarity',
    'eRarity',
    'sRarity',
    'numberOfFlooding',
    'jProb',
    'jRadius',
    'showAttackAircraftVisibility'
];



class TestController{

    constructor(){

        this.testData = require('./AttackTest.json');   
        console.log(this.testData);

        this.test = null;
        this.testIsActive = false;
        this.numbOfUpdates = null;
        this.nextUpdateIndex = 0;        
        this.timeAtTestStart = 0;
        this.testCompletionTime = 0;

        this.timeOut = 0;

        this.TEST_LOG = {
            GAME_EVENT_LOG: [],
            COMUNICATION_LOG: [],
            ENTERED_COMMANDS: [],
        
        };

        this.option = null;
    }
    

    _initTest(){
        this.option = GameController.getGameOptions();
        
        this.test = this.testData.test;
        this.numbOfUpdates = Object.keys(this.test.updateSchema).length;

        this.timeAtTestStart = TimeKeeper.accumulatedDeltaTime;
        this.timeOut = this.timeAtTestStart + this.test.updateSchema[this.nextUpdateIndex].timestamp;
        this.testCompletionTime = this.timeAtTestStart+this.test.initparams.duration;

        this.loadInitParams();
        this.testIsActive = true;

        console.log("Start test at time: ");
        console.log(this.timeAtTestStart.toFixed(0));
        
        console.log(this.timeOut.toFixed(0));
        console.log(this.testCompletionTime.toFixed(0));
    }

    updateSettings(){
        const currentTime = TimeKeeper.accumulatedDeltaTime;
        const timeOut = this.timeOut;
        const updateIndex = this.nextUpdateIndex;

        //console.log(currentTime);

        if(currentTime > timeOut){

            if(currentTime > this.testCompletionTime){
                this.testDone();
                return;
            }
        
            this.changeAttackSettings(updateIndex);    
            this.updateIndexAndTimeout();

            console.log(currentTime.toFixed(0));
        }

    }

    updateIndexAndTimeout(){
        this.nextUpdateIndex++;
        if(this.nextUpdateIndex < this.numbOfUpdates){
            this.timeOut = this.timeAtTestStart + this.test.updateSchema[this.nextUpdateIndex].timestamp;
        } else {
          this.timeOut = this.testCompletionTime;
        }
    }

    testDone(){
        this.testIsActive = false;
        console.log("Test Done!!!!! At :");
        console.log(this.testCompletionTime.toFixed(0));
        this.nextUpdateIndex = 0;
        
        this.resetSettings();
        UiController.onToggleTestUI();

    }

    isTestActive(){
        return this.testIsActive;
    }

    
    loadInitParams(){
        const initialSettings = this.test.initparams;

        console.log('Test initial settings: ');
        for(const setting of ATTACK_SETTING_NAMES){
            GameController[ATTACK_SETTINGS_SET_FUNCTIONS[setting]](initialSettings[setting]);
            console.log(`${setting} = ${GameController[setting]}`);
        }
    }

    changeAttackSettings(updateIndex){
        const settings = this.test.updateSchema[updateIndex];

        for(const setting of ATTACK_SETTING_NAMES){
            if(settings[setting] != null){
                GameController[ATTACK_SETTINGS_SET_FUNCTIONS[setting]](settings[setting]);
            }
        }
    }

    resetSettings(){

    }
    
    LOG_New_Game(event){
        const timeStamp = TimeKeeper.accumulatedDeltaTime.toFixed(1);
        const score = GameController.game_get_Accumulated_Score();      
        this.TEST_LOG.GAME_EVENT_LOG.push([timeStamp, event, score]);
        console.log(`TimeStamp: ${timeStamp}, ${event}`);
    }

    LOG_New_UI_LOG_ENTRY(message){
        const timeStamp = TimeKeeper.accumulatedDeltaTime.toFixed(1);
        this.TEST_LOG.COMUNICATION_LOG.push([timeStamp, message]);
        //console.log(`TimeStamp: ${timeStamp}, ${message}`);
    }

    LOG_New_Command(callsign, command, data){
        const timeStamp = TimeKeeper.accumulatedDeltaTime.toFixed(1);
        this.TEST_LOG.ENTERED_COMMANDS.push(timeStamp, callsign, command, data);
    }

    downloadTestLog(){
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.TEST_LOG, null, 1)));
      element.setAttribute('download', "log.json");

      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }


}

export default new TestController();