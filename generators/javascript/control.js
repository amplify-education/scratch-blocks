/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for math blocks.
 * @author ascii@media.mit.edu (Andrew Sliwinski)
 */
'use strict';

goog.provide('Blockly.JavaScript.control');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['control_forever'] = function(block)
{
  // Get substack
  var branch = Blockly.JavaScript.statementToCode(block, 'SUBSTACK');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);

  // Make the code
  var code = '';
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
  
  code += 'while (true) {\n' + branch + '}\n';

  return code;
};

Blockly.JavaScript['control_repeat'] = function(block)
{
  //// Repeat n times.
  var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

  // Get substack
  var branch = Blockly.JavaScript.statementToCode(block, 'SUBSTACK');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);

  // Make the code
  var code = '';
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
  
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + repeats + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  
  return code;
};

Blockly.JavaScript['control_repeat_until'] = function(block)
{
  // Repeat n times.
  //var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var argument = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';

  // Get substack
  var branch = Blockly.JavaScript.statementToCode(block, 'SUBSTACK');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);

  // Make the code
  var code = code = 'while ( (' + argument + ') == false) {\n' + branch + '}\n';
  
  return code;
};

Blockly.JavaScript['control_if'] = function(block)
{
  // If condition.
  var argument = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
  var branch = Blockly.JavaScript.statementToCode(block, 'SUBSTACK');
  
  var code = 'if (' + argument + ') {\n' + branch + '}';
  return code + '\n';
};

Blockly.JavaScript['control_if_else'] = function(block)
{
  // If condition.
  var argument = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
  var branchIf = Blockly.JavaScript.statementToCode(block, 'SUBSTACK');
  var branchElse = Blockly.JavaScript.statementToCode(block, 'SUBSTACK2');
  
  var code = 'if (' + argument + ') {\n' + branchIf + '} else {\n' + branchElse + '}';
  return code + '\n';
};