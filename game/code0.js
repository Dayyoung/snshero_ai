gdjs.Card_32scenesCode = {};
gdjs.Card_32scenesCode.localVariables = [];
gdjs.Card_32scenesCode.GDNewSprite3Objects1= [];
gdjs.Card_32scenesCode.GDNewSprite3Objects2= [];
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1= [];
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects2= [];
gdjs.Card_32scenesCode.GDcardObjectObjects1= [];
gdjs.Card_32scenesCode.GDcardObjectObjects2= [];


gdjs.Card_32scenesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("cardObject"), gdjs.Card_32scenesCode.GDcardObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Card_32scenesCode.GDcardObjectObjects1.length;i<l;++i) {
    if ( gdjs.Card_32scenesCode.GDcardObjectObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Card_32scenesCode.GDcardObjectObjects1[k] = gdjs.Card_32scenesCode.GDcardObjectObjects1[i];
        ++k;
    }
}
gdjs.Card_32scenesCode.GDcardObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Card_32scenesCode.GDcardObjectObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.Card_32scenesCode.GDcardObjectObjects1.length === 0 ) ? 0 :gdjs.Card_32scenesCode.GDcardObjectObjects1[0].getX()));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.Card_32scenesCode.GDcardObjectObjects1.length === 0 ) ? 0 :gdjs.Card_32scenesCode.GDcardObjectObjects1[0].getY()));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}{gdjs.evtTools.debuggerTools.log("clickX" + gdjs.evtTools.common.toString((( gdjs.Card_32scenesCode.GDcardObjectObjects1.length === 0 ) ? 0 :gdjs.Card_32scenesCode.GDcardObjectObjects1[0].getX())), "info", "");
}{gdjs.evtTools.debuggerTools.log("clickY" + gdjs.evtTools.common.toString((( gdjs.Card_32scenesCode.GDcardObjectObjects1.length === 0 ) ? 0 :gdjs.Card_32scenesCode.GDcardObjectObjects1[0].getY())), "info", "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cardObject"), gdjs.Card_32scenesCode.GDcardObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Card_32scenesCode.GDcardObjectObjects1.length;i<l;++i) {
    if ( gdjs.Card_32scenesCode.GDcardObjectObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Card_32scenesCode.GDcardObjectObjects1[k] = gdjs.Card_32scenesCode.GDcardObjectObjects1[i];
        ++k;
    }
}
gdjs.Card_32scenesCode.GDcardObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Card_32scenesCode.GDcardObjectObjects1 */
{for(var i = 0, len = gdjs.Card_32scenesCode.GDcardObjectObjects1.length ;i < len;++i) {
    gdjs.Card_32scenesCode.GDcardObjectObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Card_32scenesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Card_32scenesCode.GDNewSprite3Objects1.length = 0;
gdjs.Card_32scenesCode.GDNewSprite3Objects2.length = 0;
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Card_32scenesCode.GDcardObjectObjects1.length = 0;
gdjs.Card_32scenesCode.GDcardObjectObjects2.length = 0;

gdjs.Card_32scenesCode.eventsList0(runtimeScene);
gdjs.Card_32scenesCode.GDNewSprite3Objects1.length = 0;
gdjs.Card_32scenesCode.GDNewSprite3Objects2.length = 0;
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Card_32scenesCode.GDcardObjectObjects1.length = 0;
gdjs.Card_32scenesCode.GDcardObjectObjects2.length = 0;


return;

}

gdjs['Card_32scenesCode'] = gdjs.Card_32scenesCode;
