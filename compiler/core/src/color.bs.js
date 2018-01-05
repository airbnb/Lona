// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Fs                      = require("fs");
var List                    = require("bs-platform/lib/js/list.js");
var Block                   = require("bs-platform/lib/js/block.js");
var Json_decode             = require("bs-json/src/Json_decode.js");
var Css$LonaCompilerCore    = require("./css.bs.js");
var Render$LonaCompilerCore = require("./render.bs.js");

function parseFile(filename) {
  var content = Fs.readFileSync(filename, "utf8");
  var parsed = JSON.parse(content);
  var parseColor = function (json) {
    return /* record */[
            /* id */Json_decode.field("id", Json_decode.string, json),
            /* name */Json_decode.field("name", Json_decode.string, json),
            /* value */Json_decode.field("value", Json_decode.string, json)
          ];
  };
  return Json_decode.field("colors", (function (param) {
                return Json_decode.list(parseColor, param);
              }), parsed);
}

function render(target, colors) {
  if (target !== 0) {
    var colorLiteralDoc = function (value) {
      var rgba = Css$LonaCompilerCore.parseColorDefault("black", value);
      return /* FunctionCallExpression */Block.__(6, [{
                  name: /* SwiftIdentifier */Block.__(2, ["#colorLiteral"]),
                  arguments: /* :: */[
                    /* FunctionCallArgument */Block.__(5, [{
                          name: /* Some */[/* SwiftIdentifier */Block.__(2, ["red"])],
                          value: /* LiteralExpression */Block.__(0, [/* FloatingPoint */Block.__(2, [rgba[/* r */0] / 255.0])])
                        }]),
                    /* :: */[
                      /* FunctionCallArgument */Block.__(5, [{
                            name: /* Some */[/* SwiftIdentifier */Block.__(2, ["green"])],
                            value: /* LiteralExpression */Block.__(0, [/* FloatingPoint */Block.__(2, [rgba[/* g */1] / 255.0])])
                          }]),
                      /* :: */[
                        /* FunctionCallArgument */Block.__(5, [{
                              name: /* Some */[/* SwiftIdentifier */Block.__(2, ["blue"])],
                              value: /* LiteralExpression */Block.__(0, [/* FloatingPoint */Block.__(2, [rgba[/* b */2] / 255.0])])
                            }]),
                        /* :: */[
                          /* FunctionCallArgument */Block.__(5, [{
                                name: /* Some */[/* SwiftIdentifier */Block.__(2, ["alpha"])],
                                value: /* LiteralExpression */Block.__(0, [/* FloatingPoint */Block.__(2, [rgba[/* a */3]])])
                              }]),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                }]);
    };
    var colorConstantDoc = function (color) {
      return /* ConstantDeclaration */Block.__(3, [{
                  modifiers: /* :: */[
                    /* AccessLevelModifier */Block.__(0, [/* PublicModifier */3]),
                    /* :: */[
                      /* StaticModifier */11,
                      /* [] */0
                    ]
                  ],
                  pattern: /* IdentifierPattern */Block.__(0, [color[/* id */0]]),
                  init: /* Some */[/* FunctionCallExpression */Block.__(6, [{
                          name: /* SwiftIdentifier */Block.__(2, ["color"]),
                          arguments: /* :: */[
                            /* FunctionCallArgument */Block.__(5, [{
                                  name: /* Some */[/* SwiftIdentifier */Block.__(2, ["hex"])],
                                  value: /* LiteralExpression */Block.__(0, [/* String */Block.__(3, [color[/* value */2]])])
                                }]),
                            /* :: */[
                              /* FunctionCallArgument */Block.__(5, [{
                                    name: /* Some */[/* SwiftIdentifier */Block.__(2, ["preview"])],
                                    value: colorLiteralDoc(color[/* value */2])
                                  }]),
                              /* [] */0
                            ]
                          ]
                        }])]
                }]);
    };
    return Render$LonaCompilerCore.Swift[/* toString */8](/* TopLevelDeclaration */Block.__(7, [{
                    statements: /* :: */[
                      /* ImportDeclaration */Block.__(4, ["UIKit"]),
                      /* :: */[
                        /* ClassDeclaration */Block.__(1, [{
                              name: "Colors",
                              body: List.map(colorConstantDoc, colors)
                            }]),
                        /* [] */0
                      ]
                    ]
                  }]));
  } else {
    console.log("Color generation not supported for target", target);
    return "error";
  }
}

exports.parseFile = parseFile;
exports.render    = render;
/* fs Not a pure module */
