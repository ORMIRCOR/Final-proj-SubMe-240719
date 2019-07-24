import React from "react";
import { Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


export const RouteButton = (props) => {

    return (
        <Route  render={({ history }) => (
            <Button fluid color="blue" onClick={() => {
                history.push({
                    pathname: props.pathname,
                    data: props.data,
                    state: props.state,
                });
            }}>
                {props.value}
            </Button>
        )}
        />
    )
}

export const RouteButtonNotFulied = (props) => {

    return (
        <Route  render={({ history }) => (
            <Button color="blue" onClick={() => {
                history.push({
                    pathname: props.pathname,
                    data: props.data,
                    state: props.state,
                    subletId: props.Id
                });
             
            }}>
                {props.value}
            </Button>
        )}
        />
    )
}

export default RouteButton; 