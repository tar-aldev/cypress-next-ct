import React from 'react';
import Layout from './layout';
import * as someFunction from './someFunction';

describe('test', () => {
  it('should work with server components related stuff', () => {
    // @ts-ignore
    cy.stub(someFunction);
    // @ts-ignore
    cy.mount(<Layout>test</Layout>);
  });
});
