import { useState } from 'react';

const songs = [
  { title: 'Lofi Chill', artist: 'DJ Relax' },
  { title: 'Rainy Mood', artist: 'Lofi Girl' },
  { title: 'Night Vibes', artist: 'Sleepy Cat' },
  { title: 'Study Beats', artist: 'Focus Kid' },
];

function MusicSearch() {
  const [query, setQuery] = useState('');
  const filtered = songs.filter(
    song =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm nhạc..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filtered.length === 0 && <li>Không tìm thấy bài hát nào.</li>}
        {filtered.map((song, idx) => (
          <li key={idx}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicSearch;