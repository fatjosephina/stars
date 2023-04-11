// -----JS CODE-----
// @input bool twoSided = true

var imageComponent = script.getSceneObject().getComponent("Component.Image");
imageComponent.mainPass.twoSided = script.twoSided;