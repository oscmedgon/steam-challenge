import {getUserInfo, getSteamId} from '../services/steamApi'


function dataType (userInput){
	console.log(userInput)
	if(userInput.match(/(\b\d{17}\b)/)){
		return getUserInfo(userInput)
	}
	else {
		return getSteamId(userInput)
	}
}

export {dataType}