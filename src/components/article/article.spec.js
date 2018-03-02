import React from 'react'
import {mount} from 'enzyme'
import Article from './index'
import articles from '../../fixtures'

describe('Comments List', ()=>{
    it('should open comments list', ()=> {
       let selectedId
    //const handleClickBtn = sinon.spy()
        
        const wrapper = mount(<Article article={articles[0]} onButtonClick = {id => selectedId = id}/>)

      // wrapper.find('.test__article--button').at(0).simulate('click')

    //wrapper.simulate('transitionEnd');
    wrapper.update()
console.log(wrapper.debug())
    wrapper.find('.test__commit--button').at(0).simulate('click')
   //expect(wrapper.find('.test__commit--button').length.toEqual('1'));
    })
})