import React from 'react';
export interface IApplicationContainer {
    children: React.ReactNode;
    graphqlUri: string;
}
export declare const ApplicationContainer: React.FunctionComponent<IApplicationContainer>;
