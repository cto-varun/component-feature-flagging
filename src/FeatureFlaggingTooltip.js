import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

export default function FeatureFlaggingTooltip({
    feature,
    featureFlag,
    children,
    placement,
    title,
    disabled,
    ...props
}) {
    return !disabled && (!featureFlag || featureFlag?.enabled) ? (
        <>{children}</>
    ) : (
        <Tooltip
            placement={placement}
            title={
                title ||
                `${feature} is disabled ${
                    featureFlag?.reasons?.length > 0
                        ? `due to ${featureFlag?.reasons.toString()}`
                        : ''
                }`
            }
            {...props}
        >
            {children}
        </Tooltip>
    );
}
FeatureFlaggingTooltip.propTypes = {
    /** Feature Flag computed*/
    featurFlag: PropTypes.object,
    /** Name of the feature*/
    feature: PropTypes.string,
    /** Context specific data*/
    context: PropTypes.object,
};
