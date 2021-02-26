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
        
    }
    
    _parseTestJSON(){

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
            }
        
            //this.changeAttackSettings(updateIndex);
            console.log(currentTime.toFixed(0));
            
            this.nextUpdateIndex++;
            if(this.nextUpdateIndex < this.numbOfUpdates){
                this.timeOut = this.timeAtTestStart + this.testData.test.updateSchema[this.nextUpdateIndex].timestamp;
            } else {
              this.timeOut = this.testCompletionTime;
            }


        }

    }

    testDone(){
        this.testIsActive = false;
        console.log("Test Done!!!!! At :");
        console.log(this.testCompletionTime.toFixed(0));

        this.nextUpdateIndex = 0;
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
        if(this.testData.test.updateSchema[updateIndex].aRarity != null){

        }

        if(this.testData.test.updateSchema[updateIndex].RRarity != null){
            
        }

        if(this.testData.test.updateSchema[updateIndex].jRarity != null){
            
        }


        if(this.testData.test.updateSchema[updateIndex].eRarity != null){
            
        }


        if(this.testData.test.updateSchema[updateIndex].sRarity != null){
            
        }

        if(this.testData.test.updateSchema[updateIndex].numberOfFlooding != null){
            
        }

        if(this.testData.test.updateSchema[updateIndex].jProb != null){
            
        }

        if(this.testData.test.updateSchema[updateIndex].jRadius != null){
            
        }

        if(this.testData.test.updateSchema[updateIndex].showAttackAircraftVisibility != null){
            
        }
    }
    

}

export default new TestController();