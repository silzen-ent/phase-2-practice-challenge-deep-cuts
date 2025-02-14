import React from 'react'
import Track from './Track'

function TracksList({tracks}) {
  console.log(tracks)
  
  // Below is what's displaying all the tracks
  const trackCard = tracks.map(track => {
    return (
      <Track key={track.id} track={track} />
    )
  })

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {trackCard}
        {/* render a list of <Track> components here */}
      </tbody>
    </table>
  )
}

export default TracksList