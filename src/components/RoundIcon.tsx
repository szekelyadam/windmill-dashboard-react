import React from "react";
import classNames from "classnames";

interface RoundIconProps {
    iconColorClass: string;
    bgColorClass: string;
    className: string;
}

const RoundIcon: React.FunctionComponent<RoundIconProps> = ({
    children,
    iconColorClass = "text-purple-600 dark:text-purple-100",
    bgColorClass = "bg-purple-100 dark:bg-purple-600",
    className,
}) => {
    const baseStyle = "p-3 rounded-full";

    const cls = classNames(baseStyle, iconColorClass, bgColorClass, className);

    return <div className={cls}>{children}</div>;
};

export default RoundIcon;
