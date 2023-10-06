import { INewsLinkItemProps } from './LinkItem/LinkItem'
import { ListLink } from './ListLink/ListLink'
import { ListNews } from './ListNews/ListNews'
import { INewsItemProps } from './NewsItem/NewsItem'



interface News {
    listNews: INewsItemProps[],
    listLink: INewsLinkItemProps[]
}

export const HeaderNews = ({listNews, listLink}: News) => {
  return (
        <>
            <ListLink list={listLink}/>
            <ListNews list={listNews} />
        </>
  )
}
