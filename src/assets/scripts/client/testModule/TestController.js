import GameController from '../game/GameController';

class TestController{

    constructor(){

    }
    
    _parseTestJSON(){

    }

    _initTest(){
        GameController._setRRarity(5);
        GameController._setARarity('High');
    }

    

}

export default new TestController();