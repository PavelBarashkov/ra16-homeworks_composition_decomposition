export interface INewsLinkItemProps {
    title: string,
    link: string
}

export const LinkItem = ({title, link}: INewsLinkItemProps) => {
  return (
    <li className="item-link">
        <a href={link}> 
            {title}
        </a>
    </li>
  )
}
