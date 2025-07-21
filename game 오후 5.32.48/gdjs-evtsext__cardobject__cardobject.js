
gdjs.evtsExt__cardObject__cardObject = gdjs.evtsExt__cardObject__cardObject || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__cardObject__cardObject.cardObject = class cardObject extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:

gdjs.evtsExt__cardObject__cardObject.cardObject.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("cardObject::cardObject", gdjs.evtsExt__cardObject__cardObject.cardObject);
