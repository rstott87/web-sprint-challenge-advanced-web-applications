import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'react-dom';

const testArticle = {
        author: 'name',
        id: 'aMqwd', 
        headline: "headline", 
        createdOn: '2021-08-09T18:02:38-04:00',
        summary: "summary",
        body: "parapgraph"  
}


test('renders component without errors', ()=> {
    localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")

    render(<Article key={testArticle.id} article={testArticle} handleDelete={handleDelete} handleEditSelect={handleEditSelect}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")

    render(<Article key={testArticle.id} article={testArticle}></Article>)

    const author = screen.qeuryByText('author');

    expect(author).toBeInTheDocument();

});

test('renders "Associated Press" when no author is given', ()=> {
    //doesn't appear to be in this project
});

test('executes handleDelete when the delete button is pressed', ()=> {

    localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
    
    render(<Router><View/></Router>);
    const deleteButtons = await screen.findAllByTestId('deleteButton');
    userEvent.click(deleteButtons[0]);

    await waitFor(async ()=> {
      const articles = await screen.findAllByTestId("article");
      expect(articles).toHaveLength(3);
    });
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.