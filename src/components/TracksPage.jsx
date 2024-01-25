import React, {useState, useEffect} from 'react' //D1, S1: import
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks, setTracks] = useState([]) //D1, S2: useState
  const [search, setSearch] = useState("") 

  console.log(search)

  useEffect(() => {
    fetch('http://localhost:8001/tracks')
    .then(response => response.json())
    .then(setTracks)

    // .then(allTracks => { useTracks(tracks))

  }, []) //D1, S3: useEffect

    console.log(tracks);


    // CB function that'll update state (D2, S1) 
    useEffect(function(){
      // Add statement here
    });


    function addTrack(newTrack){
      setTracks([...tracks, newTrack]);
    }

    const displayTracks = tracks.filter(track => track.title.toLowerCase().includes(search.toLowerCase()) || track.artist.toLowerCase().includes(search.toLowerCase()))


    const example = [...displayTracks]

    // If we wanted to REMOVE a track. 
    // function removeTrack(id){
    //   const newTracks = tracks.filter((track)=> track.id !== id)
    // }
    

    return (
      <div>
        <Search search={search} setSearch={setSearch} />
        <AddTrackForm onAdd={addTrack} />
        <TracksList tracks={displayTracks} />
      </div>
    );
  }

export default TracksPage