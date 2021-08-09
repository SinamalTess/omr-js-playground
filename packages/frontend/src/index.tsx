import React from 'react'
import ReactDOM from 'react-dom'
import Dataset from './fetchers'

(async () => {
    const test = new Dataset({
        rootPath: 'http://localhost:3001/datasets',
        imagesDirectory: 'images_png',
        labelsDirectory: 'pix_annotations.png'
    });
    const test2 = await test.fetch()
    console.log(test2)
})()



export default function App() {
    return (
        <h1>Hello</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
