import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

interface InfoCardProps {
    title: string;
    value: string;
}

const InfoCard: React.FunctionComponent<InfoCardProps> = ({
    title,
    value,
    children: icon,
}) => {
    return (
        <Card>
            <CardBody className="flex items-center">
                {icon}
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        {title}
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        {value}
                    </p>
                </div>
            </CardBody>
        </Card>
    );
};

export default InfoCard;
