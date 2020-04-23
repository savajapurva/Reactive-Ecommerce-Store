import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

//Higher Order Component... A WithSpinner Component returning WrappedComponent 
const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    }

    return Spinner;
}

export default WithSpinner;