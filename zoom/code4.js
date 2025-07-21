gdjs.cardSceneCode = {};
gdjs.cardSceneCode.localVariables = [];
gdjs.cardSceneCode.GDNewSprite3Objects1= [];
gdjs.cardSceneCode.GDNewSprite3Objects2= [];
gdjs.cardSceneCode.GDNewTiledSpriteObjects1= [];
gdjs.cardSceneCode.GDNewTiledSpriteObjects2= [];
gdjs.cardSceneCode.GDNewTiledSprite2Objects1= [];
gdjs.cardSceneCode.GDNewTiledSprite2Objects2= [];
gdjs.cardSceneCode.GDredLayoutObjects1= [];
gdjs.cardSceneCode.GDredLayoutObjects2= [];
gdjs.cardSceneCode.GDblueLayoutObjects1= [];
gdjs.cardSceneCode.GDblueLayoutObjects2= [];
gdjs.cardSceneCode.GDNewSprite2Objects1= [];
gdjs.cardSceneCode.GDNewSprite2Objects2= [];
gdjs.cardSceneCode.GDNewPanelSpriteObjects1= [];
gdjs.cardSceneCode.GDNewPanelSpriteObjects2= [];
gdjs.cardSceneCode.GDlevelTextObjects1= [];
gdjs.cardSceneCode.GDlevelTextObjects2= [];
gdjs.cardSceneCode.GDcardObjectObjects1= [];
gdjs.cardSceneCode.GDcardObjectObjects2= [];
gdjs.cardSceneCode.GDDownloadObjects1= [];
gdjs.cardSceneCode.GDDownloadObjects2= [];
gdjs.cardSceneCode.GDBuyObjects1= [];
gdjs.cardSceneCode.GDBuyObjects2= [];
gdjs.cardSceneCode.GDConfigObjects1= [];
gdjs.cardSceneCode.GDConfigObjects2= [];
gdjs.cardSceneCode.GDApplyObjects1= [];
gdjs.cardSceneCode.GDApplyObjects2= [];
gdjs.cardSceneCode.GDBackObjects1= [];
gdjs.cardSceneCode.GDBackObjects2= [];
gdjs.cardSceneCode.GDLarge_9595Buy_9595ButtonObjects1= [];
gdjs.cardSceneCode.GDLarge_9595Buy_9595ButtonObjects2= [];
gdjs.cardSceneCode.GDLarge_9595Play_9595ButtonObjects1= [];
gdjs.cardSceneCode.GDLarge_9595Play_9595ButtonObjects2= [];
gdjs.cardSceneCode.GDLarge_9595Exit_9595ButtonObjects1= [];
gdjs.cardSceneCode.GDLarge_9595Exit_9595ButtonObjects2= [];
gdjs.cardSceneCode.GDHeartObjects1= [];
gdjs.cardSceneCode.GDHeartObjects2= [];
gdjs.cardSceneCode.GDHelpObjects1= [];
gdjs.cardSceneCode.GDHelpObjects2= [];
gdjs.cardSceneCode.GDLeft_9595arrowObjects1= [];
gdjs.cardSceneCode.GDLeft_9595arrowObjects2= [];
gdjs.cardSceneCode.GDMenuObjects1= [];
gdjs.cardSceneCode.GDMenuObjects2= [];
gdjs.cardSceneCode.GDPauseObjects1= [];
gdjs.cardSceneCode.GDPauseObjects2= [];
gdjs.cardSceneCode.GDPlayObjects1= [];
gdjs.cardSceneCode.GDPlayObjects2= [];
gdjs.cardSceneCode.GDPlusObjects1= [];
gdjs.cardSceneCode.GDPlusObjects2= [];
gdjs.cardSceneCode.GDNextObjects1= [];
gdjs.cardSceneCode.GDNextObjects2= [];
gdjs.cardSceneCode.GDRight_9595arrowObjects1= [];
gdjs.cardSceneCode.GDRight_9595arrowObjects2= [];
gdjs.cardSceneCode.GDShareObjects1= [];
gdjs.cardSceneCode.GDShareObjects2= [];
gdjs.cardSceneCode.GDRetryObjects1= [];
gdjs.cardSceneCode.GDRetryObjects2= [];
gdjs.cardSceneCode.GDWorldObjects1= [];
gdjs.cardSceneCode.GDWorldObjects2= [];
gdjs.cardSceneCode.GDStarObjects1= [];
gdjs.cardSceneCode.GDStarObjects2= [];
gdjs.cardSceneCode.GDAdsObjects1= [];
gdjs.cardSceneCode.GDAdsObjects2= [];
gdjs.cardSceneCode.GDcardObject2Objects1= [];
gdjs.cardSceneCode.GDcardObject2Objects2= [];
gdjs.cardSceneCode.GDcardForEnemyObjects1= [];
gdjs.cardSceneCode.GDcardForEnemyObjects2= [];
gdjs.cardSceneCode.GDcolorLayoutObjects1= [];
gdjs.cardSceneCode.GDcolorLayoutObjects2= [];
gdjs.cardSceneCode.GDaiDialogObjects1= [];
gdjs.cardSceneCode.GDaiDialogObjects2= [];
gdjs.cardSceneCode.GDbottomMenuObjects1= [];
gdjs.cardSceneCode.GDbottomMenuObjects2= [];
gdjs.cardSceneCode.GDlistViewObjects1= [];
gdjs.cardSceneCode.GDlistViewObjects2= [];
gdjs.cardSceneCode.GDguideLineObjects1= [];
gdjs.cardSceneCode.GDguideLineObjects2= [];
gdjs.cardSceneCode.GDSkeleton_9595MageObjects1= [];
gdjs.cardSceneCode.GDSkeleton_9595MageObjects2= [];


gdjs.cardSceneCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("listView"), gdjs.cardSceneCode.GDlistViewObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.cardSceneCode.GDlistViewObjects1.length !== 0 ? gdjs.cardSceneCode.GDlistViewObjects1[0] : null), true, "", 0);
}{gdjs.evtsExt__PinchGesture__EnableCameraPinch.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__PinchGesture__SetCameraPinchConstraint.func(runtimeScene, "Zoom only", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "both", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 720, 1280, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PinchGesture__IsPinching.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) < 1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(43).setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber() + 0.3);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(43).setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber() - 0.3);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber() < 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(43).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber(), "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.cardSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cardSceneCode.GDNewSprite3Objects1.length = 0;
gdjs.cardSceneCode.GDNewSprite3Objects2.length = 0;
gdjs.cardSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.cardSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.cardSceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.cardSceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.cardSceneCode.GDredLayoutObjects1.length = 0;
gdjs.cardSceneCode.GDredLayoutObjects2.length = 0;
gdjs.cardSceneCode.GDblueLayoutObjects1.length = 0;
gdjs.cardSceneCode.GDblueLayoutObjects2.length = 0;
gdjs.cardSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.cardSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.cardSceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.cardSceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.cardSceneCode.GDlevelTextObjects1.length = 0;
gdjs.cardSceneCode.GDlevelTextObjects2.length = 0;
gdjs.cardSceneCode.GDcardObjectObjects1.length = 0;
gdjs.cardSceneCode.GDcardObjectObjects2.length = 0;
gdjs.cardSceneCode.GDDownloadObjects1.length = 0;
gdjs.cardSceneCode.GDDownloadObjects2.length = 0;
gdjs.cardSceneCode.GDBuyObjects1.length = 0;
gdjs.cardSceneCode.GDBuyObjects2.length = 0;
gdjs.cardSceneCode.GDConfigObjects1.length = 0;
gdjs.cardSceneCode.GDConfigObjects2.length = 0;
gdjs.cardSceneCode.GDApplyObjects1.length = 0;
gdjs.cardSceneCode.GDApplyObjects2.length = 0;
gdjs.cardSceneCode.GDBackObjects1.length = 0;
gdjs.cardSceneCode.GDBackObjects2.length = 0;
gdjs.cardSceneCode.GDLarge_9595Buy_9595ButtonObjects1.length = 0;
gdjs.cardSceneCode.GDLarge_9595Buy_9595ButtonObjects2.length = 0;
gdjs.cardSceneCode.GDLarge_9595Play_9595ButtonObjects1.length = 0;
gdjs.cardSceneCode.GDLarge_9595Play_9595ButtonObjects2.length = 0;
gdjs.cardSceneCode.GDLarge_9595Exit_9595ButtonObjects1.length = 0;
gdjs.cardSceneCode.GDLarge_9595Exit_9595ButtonObjects2.length = 0;
gdjs.cardSceneCode.GDHeartObjects1.length = 0;
gdjs.cardSceneCode.GDHeartObjects2.length = 0;
gdjs.cardSceneCode.GDHelpObjects1.length = 0;
gdjs.cardSceneCode.GDHelpObjects2.length = 0;
gdjs.cardSceneCode.GDLeft_9595arrowObjects1.length = 0;
gdjs.cardSceneCode.GDLeft_9595arrowObjects2.length = 0;
gdjs.cardSceneCode.GDMenuObjects1.length = 0;
gdjs.cardSceneCode.GDMenuObjects2.length = 0;
gdjs.cardSceneCode.GDPauseObjects1.length = 0;
gdjs.cardSceneCode.GDPauseObjects2.length = 0;
gdjs.cardSceneCode.GDPlayObjects1.length = 0;
gdjs.cardSceneCode.GDPlayObjects2.length = 0;
gdjs.cardSceneCode.GDPlusObjects1.length = 0;
gdjs.cardSceneCode.GDPlusObjects2.length = 0;
gdjs.cardSceneCode.GDNextObjects1.length = 0;
gdjs.cardSceneCode.GDNextObjects2.length = 0;
gdjs.cardSceneCode.GDRight_9595arrowObjects1.length = 0;
gdjs.cardSceneCode.GDRight_9595arrowObjects2.length = 0;
gdjs.cardSceneCode.GDShareObjects1.length = 0;
gdjs.cardSceneCode.GDShareObjects2.length = 0;
gdjs.cardSceneCode.GDRetryObjects1.length = 0;
gdjs.cardSceneCode.GDRetryObjects2.length = 0;
gdjs.cardSceneCode.GDWorldObjects1.length = 0;
gdjs.cardSceneCode.GDWorldObjects2.length = 0;
gdjs.cardSceneCode.GDStarObjects1.length = 0;
gdjs.cardSceneCode.GDStarObjects2.length = 0;
gdjs.cardSceneCode.GDAdsObjects1.length = 0;
gdjs.cardSceneCode.GDAdsObjects2.length = 0;
gdjs.cardSceneCode.GDcardObject2Objects1.length = 0;
gdjs.cardSceneCode.GDcardObject2Objects2.length = 0;
gdjs.cardSceneCode.GDcardForEnemyObjects1.length = 0;
gdjs.cardSceneCode.GDcardForEnemyObjects2.length = 0;
gdjs.cardSceneCode.GDcolorLayoutObjects1.length = 0;
gdjs.cardSceneCode.GDcolorLayoutObjects2.length = 0;
gdjs.cardSceneCode.GDaiDialogObjects1.length = 0;
gdjs.cardSceneCode.GDaiDialogObjects2.length = 0;
gdjs.cardSceneCode.GDbottomMenuObjects1.length = 0;
gdjs.cardSceneCode.GDbottomMenuObjects2.length = 0;
gdjs.cardSceneCode.GDlistViewObjects1.length = 0;
gdjs.cardSceneCode.GDlistViewObjects2.length = 0;
gdjs.cardSceneCode.GDguideLineObjects1.length = 0;
gdjs.cardSceneCode.GDguideLineObjects2.length = 0;
gdjs.cardSceneCode.GDSkeleton_9595MageObjects1.length = 0;
gdjs.cardSceneCode.GDSkeleton_9595MageObjects2.length = 0;

gdjs.cardSceneCode.eventsList0(runtimeScene);
gdjs.cardSceneCode.GDNewSprite3Objects1.length = 0;
gdjs.cardSceneCode.GDNewSprite3Objects2.length = 0;
gdjs.cardSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.cardSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.cardSceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.cardSceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.cardSceneCode.GDredLayoutObjects1.length = 0;
gdjs.cardSceneCode.GDredLayoutObjects2.length = 0;
gdjs.cardSceneCode.GDblueLayoutObjects1.length = 0;
gdjs.cardSceneCode.GDblueLayoutObjects2.length = 0;
gdjs.cardSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.cardSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.cardSceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.cardSceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.cardSceneCode.GDlevelTextObjects1.length = 0;
gdjs.cardSceneCode.GDlevelTextObjects2.length = 0;
gdjs.cardSceneCode.GDcardObjectObjects1.length = 0;
gdjs.cardSceneCode.GDcardObjectObjects2.length = 0;
gdjs.cardSceneCode.GDDownloadObjects1.length = 0;
gdjs.cardSceneCode.GDDownloadObjects2.length = 0;
gdjs.cardSceneCode.GDBuyObjects1.length = 0;
gdjs.cardSceneCode.GDBuyObjects2.length = 0;
gdjs.cardSceneCode.GDConfigObjects1.length = 0;
gdjs.cardSceneCode.GDConfigObjects2.length = 0;
gdjs.cardSceneCode.GDApplyObjects1.length = 0;
gdjs.cardSceneCode.GDApplyObjects2.length = 0;
gdjs.cardSceneCode.GDBackObjects1.length = 0;
gdjs.cardSceneCode.GDBackObjects2.length = 0;
gdjs.cardSceneCode.GDLarge_9595Buy_9595ButtonObjects1.length = 0;
gdjs.cardSceneCode.GDLarge_9595Buy_9595ButtonObjects2.length = 0;
gdjs.cardSceneCode.GDLarge_9595Play_9595ButtonObjects1.length = 0;
gdjs.cardSceneCode.GDLarge_9595Play_9595ButtonObjects2.length = 0;
gdjs.cardSceneCode.GDLarge_9595Exit_9595ButtonObjects1.length = 0;
gdjs.cardSceneCode.GDLarge_9595Exit_9595ButtonObjects2.length = 0;
gdjs.cardSceneCode.GDHeartObjects1.length = 0;
gdjs.cardSceneCode.GDHeartObjects2.length = 0;
gdjs.cardSceneCode.GDHelpObjects1.length = 0;
gdjs.cardSceneCode.GDHelpObjects2.length = 0;
gdjs.cardSceneCode.GDLeft_9595arrowObjects1.length = 0;
gdjs.cardSceneCode.GDLeft_9595arrowObjects2.length = 0;
gdjs.cardSceneCode.GDMenuObjects1.length = 0;
gdjs.cardSceneCode.GDMenuObjects2.length = 0;
gdjs.cardSceneCode.GDPauseObjects1.length = 0;
gdjs.cardSceneCode.GDPauseObjects2.length = 0;
gdjs.cardSceneCode.GDPlayObjects1.length = 0;
gdjs.cardSceneCode.GDPlayObjects2.length = 0;
gdjs.cardSceneCode.GDPlusObjects1.length = 0;
gdjs.cardSceneCode.GDPlusObjects2.length = 0;
gdjs.cardSceneCode.GDNextObjects1.length = 0;
gdjs.cardSceneCode.GDNextObjects2.length = 0;
gdjs.cardSceneCode.GDRight_9595arrowObjects1.length = 0;
gdjs.cardSceneCode.GDRight_9595arrowObjects2.length = 0;
gdjs.cardSceneCode.GDShareObjects1.length = 0;
gdjs.cardSceneCode.GDShareObjects2.length = 0;
gdjs.cardSceneCode.GDRetryObjects1.length = 0;
gdjs.cardSceneCode.GDRetryObjects2.length = 0;
gdjs.cardSceneCode.GDWorldObjects1.length = 0;
gdjs.cardSceneCode.GDWorldObjects2.length = 0;
gdjs.cardSceneCode.GDStarObjects1.length = 0;
gdjs.cardSceneCode.GDStarObjects2.length = 0;
gdjs.cardSceneCode.GDAdsObjects1.length = 0;
gdjs.cardSceneCode.GDAdsObjects2.length = 0;
gdjs.cardSceneCode.GDcardObject2Objects1.length = 0;
gdjs.cardSceneCode.GDcardObject2Objects2.length = 0;
gdjs.cardSceneCode.GDcardForEnemyObjects1.length = 0;
gdjs.cardSceneCode.GDcardForEnemyObjects2.length = 0;
gdjs.cardSceneCode.GDcolorLayoutObjects1.length = 0;
gdjs.cardSceneCode.GDcolorLayoutObjects2.length = 0;
gdjs.cardSceneCode.GDaiDialogObjects1.length = 0;
gdjs.cardSceneCode.GDaiDialogObjects2.length = 0;
gdjs.cardSceneCode.GDbottomMenuObjects1.length = 0;
gdjs.cardSceneCode.GDbottomMenuObjects2.length = 0;
gdjs.cardSceneCode.GDlistViewObjects1.length = 0;
gdjs.cardSceneCode.GDlistViewObjects2.length = 0;
gdjs.cardSceneCode.GDguideLineObjects1.length = 0;
gdjs.cardSceneCode.GDguideLineObjects2.length = 0;
gdjs.cardSceneCode.GDSkeleton_9595MageObjects1.length = 0;
gdjs.cardSceneCode.GDSkeleton_9595MageObjects2.length = 0;


return;

}

gdjs['cardSceneCode'] = gdjs.cardSceneCode;
