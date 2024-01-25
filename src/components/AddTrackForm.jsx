import React, {useState} from 'react' // import useState

function AddTrackForm({onAdd}) {
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [BPM, setBPM] = useState("")

  console.log(image)
  console.log(title)
  console.log(artist)
  console.log(BPM)


  // For our handleSubmit function, we want to prevent the default behavior of the form, and then create a newTrack object with the values from our form. We can then pass that newTrack object to our onAdd callback prop.
  function handleSubmit(event){
    event.preventDefault()
    const newTrack = {
      image: image,
      title: title,
      artist: artist,
      BPM: BPM
    }
    // post data to the backend for persistence 
    fetch('http://localhost:8001/tracks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTrack)
    })
    .then(response => response.json())
    .then(newTrack => onAdd(newTrack)) // this is updating our state and we can now see changes to the browser when we submit a form
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input value={image} onChange={(e)=>setImage(e.target.value)} type="text" name="image" placeholder="Image URL"/>
          <input value={title} onChange={(e)=>setTitle(e.target.value)}type="text" name="title" placeholder="title" />
          <input value={artist} onChange={(e)=>setArtist(e.target.value)} type="text" name="artist" placeholder="Artist" />
          <input value={BPM} onChange={(e)=>setBPM(e.target.value)} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm