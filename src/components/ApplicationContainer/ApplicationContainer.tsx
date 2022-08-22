import React from 'react';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { theme } from '../../theme';

export interface IApplicationContainer {
  children: React.ReactNode;
  graphqlUri: string;
}

export const ApplicationContainer: React.FunctionComponent<IApplicationContainer> =
  (props) => {
    const { children, graphqlUri } = props;

    const client = new ApolloClient({
      uri: graphqlUri,
      cache: new InMemoryCache(),
    });

    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ApolloProvider>
    );
  };
