import { useParams, useRouteLoaderData } from "react-router-dom"
import { IArtist } from "@hjackson/model";

const ArtistInfo = () => {
    const {id}  = useParams();
    const artists = useRouteLoaderData("artist_list") as IArtist[]
    const artistInfo = artists.find(({name}) => name === id)

    return (
        <div key={artistInfo?.artist_id}>
            <h2>Artist {artistInfo?.name}</h2>
            <h2>Albums</h2>
        </div>
    )
}


export default ArtistInfo