"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FeatureFlaggingTooltip;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function FeatureFlaggingTooltip(_ref) {
  let {
    feature,
    featureFlag,
    children,
    placement,
    title,
    disabled,
    ...props
  } = _ref;
  return !disabled && (!featureFlag || featureFlag?.enabled) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children) : /*#__PURE__*/_react.default.createElement(_antd.Tooltip, _extends({
    placement: placement,
    title: title || `${feature} is disabled ${featureFlag?.reasons?.length > 0 ? `due to ${featureFlag?.reasons.toString()}` : ''}`
  }, props), children);
}
FeatureFlaggingTooltip.propTypes = {
  /** Feature Flag computed*/
  featurFlag: _propTypes.default.object,
  /** Name of the feature*/
  feature: _propTypes.default.string,
  /** Context specific data*/
  context: _propTypes.default.object
};
module.exports = exports.default;