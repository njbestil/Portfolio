import React, { useState } from 'react';

export default function Tooltip({ content, children, position = 'bottom' }) {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const showTooltip = () => setTooltipVisible(true);
    const hideTooltip = () => setTooltipVisible(false);

    return (
        <div className={`tooltip-container tooltip-container-${position}`} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {isTooltipVisible && (
                <div className={`tooltip tooltip-${position}`}>
                <div className={`tooltip-arrow tooltip-arrow-${position}`} />
                    {content}
                </div>
            )}
        </div>
    );
}