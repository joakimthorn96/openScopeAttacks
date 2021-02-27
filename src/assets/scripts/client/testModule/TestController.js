import GameController from '../game/GameController';
import { TIME } from '../constants/globalConstants';
import TimeKeeper from '../engine/TimeKeeper';




class TestController{

    constructor(){
        this.testData = require('./AttackTest.json');
        
        console.log(this.testData);

        this.testIsActive = false;
        
        this.timeOut = 0;

        this.numbOfUpdates = Object.keys(this.testData.test.updateSchema).length;
        this.nextUpdateIndex = 0;

        console.log(this.numbOfUpdates);
        this.testCompletionTime = 0;
        this.timeAtTestStart = 0;
        
        this.TEST_LOG = {
            GAME_EVENT_LOG: []
        };

    }
    

    _initTest(){
        this.loadInitParams();
        this.testIsActive = true;

        this.timeAtTestStart = TimeKeeper.accumulatedDeltaTime;
        console.log("Start test at time: ");
        console.log(this.timeAtTestStart.toFixed(0));

        this.timeOut = this.timeAtTestStart + this.testData.test.updateSchema[this.nextUpdateIndex].timestamp;
        this.testCompletionTime = this.timeAtTestStart+this.testData.test.initparams.duration;
        
        console.log(this.timeOut.toFixed(0));
        console.log(this.testCompletionTime.toFixed(0));
    }

    update(){
        const currentTime = TimeKeeper.accumulatedDeltaTime;
        const timeOut = this.timeOut;
        const updateIndex = this.nextUpdateIndex;

        //console.log(currentTime);

        if(currentTime > timeOut){

            if(currentTime > this.testCompletionTime){
                this.testDone();
                return;
            }
        
            console.log(currentTime.toFixed(0));
            this.changeAttackSettings(updateIndex);
            
            this.updateIndexAndTimeout();

            console.log(currentTime.toFixed(0));
        }

    }

    updateIndexAndTimeout(){
        this.nextUpdateIndex++;
        if(this.nextUpdateIndex < this.numbOfUpdates){
            this.timeOut = this.timeAtTestStart + this.testData.test.updateSchema[this.nextUpdateIndex].timestamp;
        } else {
          this.timeOut = this.testCompletionTime;
        }
    }

    testDone(){
        this.testIsActive = false;
        console.log("Test Done!!!!! At :");
        console.log(this.testCompletionTime.toFixed(0));

        this.nextUpdateIndex = 0;
        
        // Does not work implement alternative log file download option
        /*
        var fs = require('fs');
        fs.writeFile("JSON_Log.json", JSON.stringify(this.LOG_New_Game, null, 1), function(err){
            if (err) throw err;
            console.log('complete');
        });
        */

    }

    isTestActive(){
        return this.testIsActive;
    }

    
    loadInitParams(){
        GameController._setARarity(this.testData.test.initparams.aRarity);
        GameController._setRRarity(this.testData.test.initparams.RRarity);
        GameController._setjRarity(this.testData.test.initparams.jRarity);
        GameController._setERarity(this.testData.test.initparams.eRarity);
        GameController._setSRarity(this.testData.test.initparams.sRarity);
        GameController._setFlooding(this.testData.test.initparams.numberOfFlooding);
        GameController._setJProb(this.testData.test.initparams.jProb);
        GameController._setjRadius(this.testData.test.initparams.jRadius);
        GameController._setAttackVisibility(this.testData.test.initparams.showAttackAircraftVisibility);
        console.log(GameController.aRarity);
        console.log(GameController.RRarity);
        console.log(GameController.jRarity);
        console.log(GameController.eRarity);
        console.log(GameController.numberOfFlooding);
        console.log(GameController.jProb);
        console.log(GameController.jRadius);
        console.log(GameController.showAttackAircraftVisibility);
    }

    changeAttackSettings(updateIndex){
        const settings = this.testData.test.updateSchema[updateIndex];
        
        if(settings.aRarity != null){
            GameController._setARarity(settings.aRarity);
        }

        if(settings.RRarity != null){
            GameController._setRRarity(settings.RRarity);
        }

        if(settings.jRarity != null){
            GameController._setjRarity(settings.jRarity);
        }

        if(settings.eRarity != null){
            GameController._setERarity(settings.eRarity);
        }

        if(settings.sRarity != null){
            GameController._setSRarity(settings.sRarity);    
        }

        if(settings.numberOfFlooding != null){
            GameController._setFlooding(settings.numberOfFlooding);
        }

        if(settings.jProb != null){
            GameController._setJProb(settings.jProb);
        }

        if(settings.jRadius != null){
            GameController._setjRadius(settings.jRadius);
        }

        if(settings.showAttackAircraftVisibility != null){
            GameController._setAttackVisibility(settings.showAttackAircraftVisibility)
        }
    }
    
    LOG_New_Game(event){
        const eventTime = TimeKeeper.accumulatedDeltaTime.toFixed(1);
        
        this.TEST_LOG.GAME_EVENT_LOG.push([eventTime, event]);
        console.log(`TimeStamp: ${eventTime}, ${event}`);
    }

    downloadTestLog(){
        alert('Download Test log not yet implemented :)');
    }
}

export default new TestController();