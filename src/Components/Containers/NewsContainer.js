import List from '../../Components/List.js';
const NewsContainer = () => {
    const initialStories = [{
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectId: 0
      },
      {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectId: 1
      }]

      fetch('https://hacker-news.firebaseio.com/v0/item/31631173.json?print=pretty')
      .then(r => r.json())
      .then (data => console.log(data));

    return (
        <div>
            <List initialStories={initialStories} />
        </div>
    )
}

export default NewsContainer;