import React from "react";

const PageTitle: React.FunctionComponent = ({ children }) => {
    return (
        <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            {children}
        </h1>
    );
};

export default PageTitle;
