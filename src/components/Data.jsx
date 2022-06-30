import '../sass/style.scss'

export default function Data({Date}) {
  const actualTime = Date.toLocaleDateString();

  return (
    <div className= 'data'>{actualTime}</div>
  )
}
