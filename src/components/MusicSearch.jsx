import { useState } from 'react';

const songs = [
    { title: 'Lofi Chill', artist: 'DJ Relax' },
    { title: 'Rainy Mood', artist: 'Lofi Girl' },
    { title: 'Night Vibes', artist: 'Sleepy Cat' },
    { title: 'Study Beats', artist: 'Focus Kid' },
];

function MusicSearch() {
    const [display, setDisplay] = useState(false)
    const [query, setQuery] = useState('');
    const filtered = songs.filter(
        song =>
            song.title.toLowerCase().includes(query.toLowerCase()) ||
            song.artist.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div style={{position: 'relative'}}>
            <input
                type="text"
                placeholder="Search music..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onClick={() => setDisplay(true)}
                onBlur={() => setDisplay(false)}
                style={{ width: '10rem', borderRadius: '5px', border: '0' }}
            />
            {display ?
                <div style={{padding: '0.25rem', backgroundColor: 'var(--text-color)', width: '20rem', position: 'absolute'}}>
                    {filtered.length === 0 && <li>Không tìm thấy bài hát nào.</li>}
                    {filtered.map((song, idx) => (
                        <div key={idx}>
                            {song.title} - {song.artist}
                        </div>
                    ))}
                </div>
                : <></>}

        </div>
    );
}

export default MusicSearch;