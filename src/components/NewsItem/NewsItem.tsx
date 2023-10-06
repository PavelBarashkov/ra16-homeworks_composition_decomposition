export interface INewsItemProps {
    text: string,
    srcImg?: string
}

export const NewsItem = ({text, srcImg}: INewsItemProps) => {
  return (
    <li className="li-header-news">
        {srcImg && (
            <img src={srcImg}></img>
        )}
        <p>{text}</p>
    </li>
  )
}
