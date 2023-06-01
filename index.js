import { useState } from 'react';

const app = document.getElementById('app');

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}
function Header({title}) {
  return <h1>{title ? title:'Defulat Title'}</h1>;
}
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const headers = ['React 💙', 'A new title', '']

  const [likes, setLikes] = useState(0);
  function handleClick() {
    console.log("increment like count");
    setLikes(likes + 1);
  }

  return (
    <div>
      {headers.map((header) => (
        <Header key={header} title={header} />
      ))}
      <Header />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}

ReactDOM.render(<HomePage />, app);
