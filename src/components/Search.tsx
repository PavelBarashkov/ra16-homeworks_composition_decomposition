import { InputSerch } from "./InputSerch"
import { ListLink } from "./ListLink/ListLink"

const HeaderNewslink = [
    {title: 'Видео', link: '!#'},
    {title: 'Картинки', link: '!#'},
    {title: 'Новости', link: '!#'},

]


export const Search = () => {
  return (
    <div>
        <ListLink list={HeaderNewslink}/>
        <InputSerch/>
    </div>
  )
}
//Отвечает за блок с поиском