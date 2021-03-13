// CODED BY ODD HUMAYRA 

// Arrow function for search button  starts here
//#region 
const searchSongs= () =>{
    const searchText = document.getElementById('search-song-name').value ;
    // console.log(searchText);
    // Loading data from API 
    const url =`https://api.lyrics.ovh/suggest/${searchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displaySongs(data.data))
    .catch(error => displayError('Something went wrong! Please try again later!'))

    // //async 
    // const res = await fetch(url);
    // const data = await res.json();
    // displaySongs(data.data);

}

// Arrow function for search button ends here


// Search button result starts here 
const displaySongs = songs =>{
    const songsContainer = document.getElementById('songs-container');
    songsContainer.innerHTML = "";
    songs.forEach( song =>{
    //    const songContainer = document.createElement('song-container');
    // console.log(song.title);
    const songContainer = document.createElement('div');
    songContainer.innerHTML = `
    <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <img src="${song.album.cover_small}" alt="Containing album's photo ">
                        <h3 class="lyrics-name" id="lyric-name">${song.title}</h3>  
                        <!-- Purple Noon -->
                        <p class="author lead">Album by <span id="album-name">${song.artist.name}</span></p>  
                        <!-- Album by <span>Washed Out</span> -->
                        <audio controls>
                        <source src=" ${song.preview}" type="audio/mpeg">
                    </audio>
                        
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getLyrics('${song.artist.name}' , '${song.title}')" class="btn btn-success">Get Lyrics</button>
                    </div>
                </div>
    `
    songsContainer.appendChild(songContainer);
// document.getElementById('search-song-name').value = " ";
        // const song = i;
        // console.log(song);
    //     console.log(i.title);
    // console.log(i.artist.name);
    // document.getElementById('lyric-name').innerText = (i.title); 
    // document.getElementById('album-name').innerText = (i.artist.name); 
    // document.getElementById('mp3').i
    });
}
// Search Button results Ends here 

const getLyrics =  ( artist,title) =>{
// console.log(artist,title);
const url = ` https://api.lyrics.ovh/v1/${artist}/${title}`;
fetch(url)
.then(response => response.json())
.then(data => disPlayLyrics(data.lyrics));

// const res = await fetch(url);
// const  data = await res.json();
// disPlayLyrics(data.lyrics); 
}

const disPlayLyrics = lyrics =>{
    console.log(lyrics);
    const wholeLyricDiv = document.getElementById('single-lyrics');
    wholeLyricDiv.innerHTML = lyrics;
    
}
// (songName , singerName)

// Error function starts here
const displayError = error =>{
    const errorTag = document.getElementById('error-message').innerText = error;
}

//#endregion 