import VideoFile from './test_video.mp4'

export const VideoNuera=()=>{
    return(
        <div>
            <video controls height="300px" width="300px">
               My file <source src={VideoFile} type='video/mp4'/>
            </video>
        </div>
    )
}