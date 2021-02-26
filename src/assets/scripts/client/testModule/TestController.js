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
        GameController._setRRarity(this.testData.test.initparams.RRarity);
        GameController._setARarity(this.testData.test.initparams.ARarity);
        this.testIsActive = true;

        this.timeAtTestStart = TimeKeeper.accumulatedDeltaTime;
        console.log("Start test at time: ");
        console.log(this.timeAtTestStart.toFixed(0));

        this.timeOut = this.timeAtTestStart + this.testData.test.updateSchema[this.nextUpdateIndex].timestamp;
        this.testCompletionTime = this.timeAtTestStart+this.testData.test.initparams.duration;

        console.log(this.timeOut.toFixed(0));
        console.log(this.testCompletionTime.toFixed(0));
    }

    _partOne(){

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
        
            console.log(currentTime.toFixed(0));
            
            this.nextUpdateIndex++;
            if(this.nextUpdateIndex < this.numbOfUpdates){
                this.timeOut = this.timeAtTestStart + this.testData.test.updateSchema[this.nextUpdateIndex].timestamp;
            } else {
              this.timeOut = this.testCompletionTime;
            }


        }

        /*
        if(this.testData.testExecutableSchema[0].timestamp == currentTime){
            GameController._setRRarity(this.testData.test.initparams.RRarity);
            GameController._setARarity(this.testData.test.initparams.ARarity);
        }*/
    }

    testDone(){
        this.testIsActive = false;
        console.log("Test Done!!!!! At :");
        console.log(this.testCompletionTime.toFixed(0));
    }

    isTestActive(){
        return this.testIsActive;
    }


    

}

export default new TestController();