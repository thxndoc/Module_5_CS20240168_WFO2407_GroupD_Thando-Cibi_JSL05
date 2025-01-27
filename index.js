// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Go All The Way", artist: "Raspberries", genre: "Rock" }
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
generatePlaylist = (guardians, songs) => {
    // Use the map() function to create playlists for each Guardian
    Object.keys(guardians).map(guardian => {

        const playlist = songs.filter(song => song.genre === guardians[guardian]);

        return displayPlaylist(guardian, playlist);
    });
};

displayPlaylist = (guardian, playlist) => {
    const playlistsDiv = document.getElementById('playlists');

    const guardianPlaylistsDiv = document.createElement('div');
    guardianPlaylistsDiv.classList.add('playlist');

    const nameOfGuardian = document.createElement('h2');
    nameOfGuardian.textContent = `${guardian}'s Playlist`;
    guardianPlaylistsDiv.appendChild(nameOfGuardian);

    playlist.map(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');

        let songTitle = document.createElement('p');

        const songTitleSpan = document.createElement('span');
        songTitleSpan.classList.add('song-title');
        songTitleSpan.textContent = `${song.title}`;
        songTitle.appendChild(songTitleSpan);

        const songArtist= document.createTextNode(` by ${song.artist}`);
        songTitle.appendChild(songArtist);
        songDiv.appendChild(songTitle);
        guardianPlaylistsDiv.appendChild(songDiv);
    });

    playlistsDiv.appendChild(guardianPlaylistsDiv);
};

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
