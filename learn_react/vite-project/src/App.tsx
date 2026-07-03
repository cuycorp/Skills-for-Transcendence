// import ListGroup from './components/ListGroup';

// function App() {
//   //return <div><Message></Message></div>
//   //equivalent to <div><Message /></div>
//   return <div><ListGroup /></div>;
// }

// export default App; // so this ccan be imported in other files, like main.tsx


/*
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}


//export default key word specify the main component in the file
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
*/


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i2.pickpik.com/photos/990/966/575/cat-cute-cat-cat-face-kitten-preview.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
