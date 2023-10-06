import { INewsLinkItemProps, LinkItem } from '../LinkItem/LinkItem'

interface IListProps {
    list: INewsLinkItemProps[]
}

export const ListLink = ({list}: IListProps) => {
  return (
        <ul className='list-header-news'>
            {list.map(item => (
                <LinkItem link={item.link} title={item.title}/>
            ))}
        </ul>
  )
}

//Отвечает за список ссылок