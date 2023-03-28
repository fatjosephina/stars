// RunTweenSeriesHelper.js
// Version: 0.1.0
// Event: Lens Initialized
// Description: Run a series of tweens with the same name on several objects with an order and a delay
//@input string playTweenTrigger {"label":"Behavior Trigger"}
//@input float delayInterval
//@ui {"widget":"separator"}
//@input string tweenName
//@input SceneObject[] tweenObjects



var startPlayingTween = false;
var playTime = 0;
var tweenIndex = 0;

global.behaviorSystem.addCustomTriggerResponse(script.playTweenTrigger, playTweenSeries);

function playTweenSeries() {
    for (var i=0; i < script.tweenObjects.length; i ++) {
        global.tweenManager.resetTween(script.tweenObjects[i], script.tweenName);
    }
    startPlayingTween = true;
    playTime = 0;
    tweenIndex = 0;
}

function playIndividualTween(index, name) {
    if (script.tweenObjects[index]) {
        global.tweenManager.startTween(script.tweenObjects[index], name);
    }
}

function onUpdate() {
    if (startPlayingTween) {
        
        playTime += getDeltaTime();
        if (playTime > script.delayInterval) {
            playIndividualTween(tweenIndex, script.tweenName);
            playTime = 0;
            tweenIndex ++;
            if (tweenIndex >= script.tweenObjects.length) {
                tweenIndex = 0;
                startPlayingTween = false;
            }
        }

    }
}

script.createEvent("UpdateEvent").bind(onUpdate);