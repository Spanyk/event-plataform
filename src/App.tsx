function App() {
  return {
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}> {lesson.title} </li>
        })}
      </ul>
  }
}

export default App
