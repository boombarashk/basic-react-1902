import React from 'react'
import {render} from 'enzyme'
import Article from './index'
import articles from '../../fixtures'

describe('Comments List', ()=>{
    it('should render comments list', ()=> {
        const wrapper = render(<Article article = {articles[0]}/>)
    
        expect(wrapper.find('.test__comments--body').length).toEqual(1)
    })
})