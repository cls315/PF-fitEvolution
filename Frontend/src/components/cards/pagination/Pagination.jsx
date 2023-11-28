import {useEffect} from 'react'

const Pagination = ({total, current,set}) => {
   
  console.log(current)
  return (
    <div>
      
      <p>Pagina {current+1} de {total}</p>
     
      </div>
  )
}
export default Pagination