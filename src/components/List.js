import Card from './Card'

const List = ({ data, updateGameData }) => {
  return (
    <div className="list">
      {data.map((data) => (
        <div className="card" key={data.name}>
          <Card data={data} updateGameData={updateGameData} />
        </div>
      ))}
    </div>
  )
}

export default List
