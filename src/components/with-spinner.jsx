import React from "react";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className="flex items-center justify-center ">
            <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner;