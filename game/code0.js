gdjs.Card_32scenesCode = {};
gdjs.Card_32scenesCode.localVariables = [];
gdjs.Card_32scenesCode.GDNewSprite3Objects1= [];
gdjs.Card_32scenesCode.GDNewSprite3Objects2= [];
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1= [];
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects2= [];
gdjs.Card_32scenesCode.GDcardObjectObjects1= [];
gdjs.Card_32scenesCode.GDcardObjectObjects2= [];
gdjs.Card_32scenesCode.GDNewTiledSprite2Objects1= [];
gdjs.Card_32scenesCode.GDNewTiledSprite2Objects2= [];


gdjs.Card_32scenesCode.mapOfGDgdjs_9546Card_959532scenesCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1});
gdjs.Card_32scenesCode.eventsList0 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("vectorX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("vectorY", variable);
}
gdjs.Card_32scenesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Card_32scenesCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("cardObject"), gdjs.Card_32scenesCode.GDcardObjectObjects1);
{gdjs.Card_32scenesCode.localVariables[0].getFromIndex(0).setNumber((( gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1.length === 0 ) ? 0 :gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1[0].getX()));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.Card_32scenesCode.mapOfGDgdjs_9546Card_959532scenesCode_9546GDNewTiledSpriteObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.Card_32scenesCode.localVariables[0].getFromIndex(0).setNumber((( gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1.length === 0 ) ? 0 :gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1[0].getX()));
}{for(var i = 0, len = gdjs.Card_32scenesCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Card_32scenesCode.GDNewSprite3Objects1[i].setX(gdjs.Card_32scenesCode.localVariables[0].getFromIndex(0).getAsNumber() + (gdjs.Card_32scenesCode.GDNewSprite3Objects1[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.Card_32scenesCode.GDcardObjectObjects1.length ;i < len;++i) {
    gdjs.Card_32scenesCode.GDcardObjectObjects1[i].setX(gdjs.Card_32scenesCode.localVariables[0].getFromIndex(0).getAsNumber() + (gdjs.Card_32scenesCode.GDcardObjectObjects1[i].getX()));
}
}}
gdjs.Card_32scenesCode.localVariables.pop();

}


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
gdjs.Card_32scenesCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Card_32scenesCode.GDNewTiledSprite2Objects2.length = 0;

gdjs.Card_32scenesCode.eventsList0(runtimeScene);
gdjs.Card_32scenesCode.GDNewSprite3Objects1.length = 0;
gdjs.Card_32scenesCode.GDNewSprite3Objects2.length = 0;
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Card_32scenesCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Card_32scenesCode.GDcardObjectObjects1.length = 0;
gdjs.Card_32scenesCode.GDcardObjectObjects2.length = 0;
gdjs.Card_32scenesCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Card_32scenesCode.GDNewTiledSprite2Objects2.length = 0;


return;

}

gdjs['Card_32scenesCode'] = gdjs.Card_32scenesCode;
