import React from 'react'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
function NormalRoute(props) {
    const { layout: Layout, component: Component, layoutProps, ...rest } = props;

    return (
        <Route
            {...rest}
            render={ matchProps => (
                <Layout {...layoutProps}>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    )
}
NormalRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};
export default NormalRoute
