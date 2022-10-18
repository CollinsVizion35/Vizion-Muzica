import React, { useState } from 'react';
import axios from 'axios'
import notAvailable from '../imgs/No-Photo-Available.jpg'
import { AppPass } from '../contexts/AppContext';


import searchIcon from '../imgs/search.svg'





const SearchArtist = () => {

    const { token } = AppPass();

    
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

    
    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://spotify23.p.rapidapi.com/search/", {
            headers: {
                'X-RapidAPI-Key': '6ed6cedd6fmshd8e759bfbb8f31ep15789fjsnb435e620a8a3',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            },
            params: {
                q: searchKey,
                type: "artist",
                limit: '12',
                offset: '0'
            }
        })
        console.log(data);
        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id} className='my-4 relative'>
                {artist.images.length ? <img className='w-[200px] h-[200px] rounded-[50px]' src={artist.images[0].url} alt=""/> : <img className='w-[200px] h-[200px] rounded-[50px]' src={notAvailable} alt='not available'/>}

                <div className='absolute bottom-0 p-8'>
                    <div className='text-[#FACD66]'>
                        {artist.name}
                    </div>

                    <div className='text-[#95B4B3] flex flex-col'>
                       <span className='text-[#fff]'>followers:</span> {artist.followers.total}
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <>
            <div className='bg-[#1D2123] text-white'>
                <div>
                    {token ?
                    <form className='relative w-[30vw] mx-auto items-center justify-center' onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)} placeholder='search artists' className=' bg-[#1D2123] px-20 py-2 rounded-[50px]'/>
                        <img src={searchIcon} onClick={searchArtists} className='w-[20px] absolute top-0 left-0 py-2 ml-3 cursor-pointer' alt='search icon'/>
                    </form>

                    : <h2>Loading...</h2>
                    }
                </div>

                
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 absolute top-0 z-1000 mt-20 gap-8'>
                {renderArtists()}
                </div>
            </div>
        </>
    )
}

export default SearchArtist;