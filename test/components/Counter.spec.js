import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Counter from '../../src/app/components/Counter'

function setup(){
  let props = {
    counter: 99,
    incrementCounter: expect.createSpy(),
    decrementCounter: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<Counter {...props}/>);
  let output = renderer.getRenderOutput();

  return{
    props,
    output,
    renderer
  }
}

describe('counter component', () =>{
  describe('Header', ()=>{
    it('Should renderer correctly', () =>{
      const {output} = setup()

      expect(output.type).toBe('div')

      let [h1, button1, button2] = output.props.children
      expect(h1.type).toBe('h1')
      expect(h1.props.children).toBe(99)

      expect(button1.type).toBe('button')
      expect(button2.type).toBe('button')
    })

    it('should call incrementcounter if button1 is clicked', ()=>{
      const { output, props } = setup()
      let button1 = output.props.children[1]
      button1.props.onClick()
      expect(props.incrementCounter.calls.length).toBe(1)
      button1.props.onClick()
      expect(props.incrementCounter.calls.length).toBe(2)
    })

    it('should call incrementcounter if button1 is clicked', ()=>{
      const { output, props } = setup()
      let button2 = output.props.children[2]
      button2.props.onClick()
      expect(props.decrementCounter.calls.length).toBe(1)
      button2.props.onClick()
      expect(props.decrementCounter.calls.length).toBe(2)
    })




  })
})
