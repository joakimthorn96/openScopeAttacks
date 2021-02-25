import GameController from '../game/GameController';

class TestController{

    constructor(){
        this.testData = require('./AttackTest.json');
        console.log(this.testData);
        this.testIsActive = false;
    }
    
    _parseTestJSON(){

    }

    _initTest(){
        GameController._setRRarity(this.testData.test.initparams.RRarity);
        GameController._setARarity(this.testData.test.initparams.ARarity);
        this.testIsActive = true;

    }

    _partOne(){

    }

    _executeTestSchema(){
        
    }


    

}

export default new TestController();