import { INewsItemProps, NewsItem } from '../NewsItem/NewsItem'

interface IListProps {
    list: INewsItemProps[]
}

export const ListNews = ({list}: IListProps) => {
  return (
        <ul>
            {list.map(item => (
                <NewsItem text={item.text} srcImg={item.srcImg}/>
            ))}
        </ul>
  )
}

//Отвечает за список новостей