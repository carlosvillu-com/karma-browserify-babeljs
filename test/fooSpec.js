import {expect} from 'chai'

import Foo from '../src/foo'

describe( 'Foo', () =>{
  it( 'should exists', () => {
    expect( Foo ).to.not.be.undefined
  } );

  describe( 'An instance', () =>{
    let foo;
    beforeEach( () =>{
      foo = new Foo();
    } );

    afterEach( () =>{
      foo = null;
    } );

    it( 'should have a name property', () =>{
      foo.name = 'Carlos'
      expect( foo.name ).to.be.equal( 'My name is Carlos' );
    } );
  } );
} );

