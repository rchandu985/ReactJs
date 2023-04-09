import Song from './i_song.mp3'

export const AudioNuera=()=>{
    return(
        <div>
            <audio controls>
               My file <source src={Song} type='audio/ogg'/>
            </audio>
        </div>
    )
}