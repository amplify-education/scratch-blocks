// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2016 Google Inc.  Apache License 2.0
Blockly.constants={};Blockly.DRAG_RADIUS=3;Blockly.SNAP_RADIUS=48;Blockly.CONNECTING_SNAP_RADIUS=96;Blockly.CURRENT_CONNECTION_PREFERENCE=20;Blockly.BUMP_DELAY=0;Blockly.COLLAPSE_CHARS=30;Blockly.LONGPRESS=750;Blockly.SOUND_LIMIT=100;Blockly.HSV_SATURATION=.45;Blockly.HSV_VALUE=.65;Blockly.SPRITE={width:96,height:124,url:"sprites.png"};Blockly.SVG_NS="http://www.w3.org/2000/svg";Blockly.HTML_NS="http://www.w3.org/1999/xhtml";Blockly.INPUT_VALUE=1;Blockly.OUTPUT_VALUE=2;Blockly.NEXT_STATEMENT=3;
Blockly.PREVIOUS_STATEMENT=4;Blockly.DUMMY_INPUT=5;Blockly.ALIGN_LEFT=-1;Blockly.ALIGN_CENTRE=0;Blockly.ALIGN_RIGHT=1;Blockly.DRAG_NONE=0;Blockly.DRAG_STICKY=1;Blockly.DRAG_BEGIN=1;Blockly.DRAG_FREE=2;Blockly.OPPOSITE_TYPE=[];Blockly.OPPOSITE_TYPE[Blockly.INPUT_VALUE]=Blockly.OUTPUT_VALUE;Blockly.OPPOSITE_TYPE[Blockly.OUTPUT_VALUE]=Blockly.INPUT_VALUE;Blockly.OPPOSITE_TYPE[Blockly.NEXT_STATEMENT]=Blockly.PREVIOUS_STATEMENT;Blockly.OPPOSITE_TYPE[Blockly.PREVIOUS_STATEMENT]=Blockly.NEXT_STATEMENT;
Blockly.TOOLBOX_AT_TOP=0;Blockly.TOOLBOX_AT_BOTTOM=1;Blockly.TOOLBOX_AT_LEFT=2;Blockly.TOOLBOX_AT_RIGHT=3;Blockly.OUTPUT_SHAPE_HEXAGONAL=1;Blockly.OUTPUT_SHAPE_ROUND=2;Blockly.OUTPUT_SHAPE_SQUARE=3;Blockly.STACK_GLOW_RADIUS=1.3;Blockly.REPLACEMENT_GLOW_RADIUS=2;Blockly.Categories={motion:"motion",looks:"looks",sound:"sounds",pen:"pen",data:"data",event:"events",control:"control",sensing:"sensing",operators:"operators",more:"more"};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Blocks.colour={};function randomColour(){return"#"+("00000"+Math.floor(Math.random()*Math.pow(2,24)).toString(16)).substr(-6)}Blockly.Blocks.colour_picker={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_colour",name:"COLOUR",colour:randomColour()}],outputShape:Blockly.OUTPUT_SHAPE_ROUND,output:"Colour"})}};/*

 Visual Blocks Editor

 Copyright 2016 Massachusetts Institute of Technology
 All rights reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Blockly.Colours={execute_color:"#000000",motion:{primary:"#4C97FF",secondary:"#4280D7",tertiary:"#3373CC"},looks:{primary:"#9966FF",secondary:"#855CD6",tertiary:"#774DCB"},sounds:{primary:"#CF63CF",secondary:"#C94FC9",tertiary:"#BD42BD"},control:{primary:"#FFAB19",secondary:"#EC9C13",tertiary:"#CF8B17"},event:{primary:"#FFBF00",secondary:"#E6AC00",tertiary:"#CC9900"},sensing:{primary:"#5CB1D6",secondary:"#47A8D1",tertiary:"#2E8EB8"},pen:{primary:"#0fBD8C",secondary:"#0DA57A",tertiary:"#0B8E69"},operators:{primary:"#59C059",
secondary:"#46B946",tertiary:"#389438"},data:{primary:"#FF8C1A",secondary:"#FF8000",tertiary:"#DB6E00"},more:{primary:"#FF6680",secondary:"#FF4D6A",tertiary:"#FF3355"},text:"#575E75",workspace:"#F5F8FF",toolboxHover:"#4C97FF",toolboxSelected:"#e9eef2",toolboxText:"#575E75",toolbox:"#FFFFFF",flyout:"#DDDDDD",scrollbar:"#CCCCCC",scrollbarHover:"#BBBBBB",textField:"#FFFFFF",insertionMarker:"#949494",insertionMarkerOpacity:.6,dragShadowOpacity:.3,stackGlow:"#FFF200",stackGlowOpacity:1,replacementGlow:"#FFFFFF",
replacementGlowOpacity:1,colourPickerStroke:"#FFFFFF",fieldShadow:"rgba(0,0,0,0.1)",dropDownShadow:"rgba(0, 0, 0, .3)",numPadBackground:"#547AB2",numPadBorder:"#435F91",numPadActiveBackground:"#435F91",numPadText:"#FFFFFF",valueReportBackground:"#FFFFFF",valueReportBorder:"#AAAAAA"};Blockly.Blocks.math={};Blockly.Blocks.math_number={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_number",name:"NUM",value:"0"}],output:"Number",outputShape:Blockly.OUTPUT_SHAPE_ROUND,colour:Blockly.Colours.textField})}};Blockly.Blocks.math_integer={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_number",name:"NUM",precision:1}],output:"Number",outputShape:Blockly.OUTPUT_SHAPE_ROUND,colour:Blockly.Colours.textField})}};
Blockly.Blocks.math_whole_number={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_number",name:"NUM",min:0,precision:1}],output:"Number",outputShape:Blockly.OUTPUT_SHAPE_ROUND,colour:Blockly.Colours.textField})}};Blockly.Blocks.math_positive_number={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_number",name:"NUM",min:0}],output:"Number",outputShape:Blockly.OUTPUT_SHAPE_ROUND,colour:Blockly.Colours.textField})}};
Blockly.Blocks.math_angle={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_angle",name:"NUM",value:90}],output:"Number",outputShape:Blockly.OUTPUT_SHAPE_ROUND,colour:Blockly.Colours.textField})}};Blockly.Blocks.texts={};Blockly.Blocks.text={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_input",name:"TEXT"}],output:"String",outputShape:Blockly.OUTPUT_SHAPE_ROUND,colour:Blockly.Colours.textField})}};