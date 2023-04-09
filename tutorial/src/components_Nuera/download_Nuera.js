import RajPhoto from './raj.jpg'

export const Download=()=>{
    return(
        <div>
            <img src={RajPhoto} style={{marginLeft:"10px"}} height="300px" alt='not_found'></img>
            <a href={RajPhoto} download='raj'>Download</a>
        </div>
    )
}