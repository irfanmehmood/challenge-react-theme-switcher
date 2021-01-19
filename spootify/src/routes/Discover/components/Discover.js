/** This code has been upgraded from class style component to a fucntional component **/
/** It uses reacts latest hooks api to stream line and reduce code size */
/** useEffects acts like a componentDidMount with no dependencies */


import React, {useState, useEffect} from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import makeRequest from '../api/makeRequest'


export default function Discover() {

  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    /** Get New releases **/
    makeRequest('new-releases').then((result)=> {
      setNewReleases(result.data.albums.items);
      /** Now get featured-playlists */
      makeRequest('featured-playlists').then((result2)=> {
        setPlaylists(result2.data.playlists.items);
        /** Now get categories */
        makeRequest('categories').then((result3)=> {
          console.log(result3);
          setCategories(result3.data.categories.items);
        })
      })
    })
  }, [])

  return (
    <div className="discover">
      { newReleases.length > 0 &&
          <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
      }
      { playlists.length > 0 && 
                <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      }
      { categories.length > 0 && 
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      }
    </div>
  )
}
