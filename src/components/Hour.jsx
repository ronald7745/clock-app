import '../sass/style.scss'

export default function Hour({Date}) {
  const hours = Date.toLocaleTimeString();

  return (
    <div className='hour'>{hours}</div>
  )
}