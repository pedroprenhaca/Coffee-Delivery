import { TagContainer } from "./styles";


interface tagProps{
    tag:string
}

export function Tag({tag}:tagProps){
    return(
        <TagContainer>
            <p>{tag}</p>
        </TagContainer>
    )
}