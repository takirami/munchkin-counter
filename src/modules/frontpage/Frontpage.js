import List from '../../components/List'
import { useState } from 'react'

const FrontPage = () => {
  const players = ['Nette', 'Hanna', 'Basse', 'Jonas']
  const startingData = players.map((name) => {
    return { name, score: 1 }
  })
  const [gameData, setGameData] = useState(startingData)

  const updateGameData = (operator, name) => {
    const newData = gameData
    let currentPlayerIndex = newData.findIndex((data) => data.name === name)
    const newPlayerScore =
      operator === 'ADD'
        ? newData[currentPlayerIndex].score + 1
        : newData[currentPlayerIndex].score - 1
    newData[currentPlayerIndex].score = newPlayerScore
    setGameData([...newData])
  }
  const winner = gameData.find((data) => {
    return data.score > 9
  })
  const sorted = [...gameData]
  if (winner !== undefined) {
    sorted.sort((a, b) => {
      if (a.score < b.score) {
        return +1
      }
      if (a.score > b.score) {
        return -1
      }
      return 0
    })
  }
  return (
    <div className="App">
      {winner === undefined && (
        <List data={gameData} updateGameData={updateGameData} />
      )}
      {winner && (
        <div className="winner">
          {sorted.map((data, index) => {
            let medals = {
              0: '🥇',
              1: '🥈',
              2: '🥉',
              3: '🏅',
            }
            return (
              <div key={index} className={`pos pos-${index}`}>
                {medals[index]} {data.name}
              </div>
            )
          })}
          <button
            className="reset"
            onClick={() => updateGameData('REMOVE', winner.name)}
          >
            back
          </button>
        </div>
      )}
    </div>
  )
}

export default FrontPage
