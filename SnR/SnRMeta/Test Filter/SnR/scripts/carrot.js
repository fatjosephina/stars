/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Meta Spark Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// Meta Spark Studio extension for VS Code - https://fb.me/spark-vscode-plugin
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');
const Tap = require("TouchGestures");
const Blocks = require("Blocks");

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

;(async function () {
    const [Dummy, Parent, Rabbit] = await Promise.all([
        Scene.root.findFirst("Dummy"),
        Scene.root.findFirst("Parent"),
        Scene.root.findFirst("Rabbit"),
    ]);

    Tap.onTap().subscribe(async () => {
        Parent.worldTransform.position = Dummy.worldTransform.position;
        let Block = await Blocks.instantiate("block0", { "name": "Carrot" });
        Block.worldTransform.position = Parent.worldTransform.position;
        Parent.addChild(Block);
    });
})();
