import React from 'react';
import PlayGamesRow from './PlayGamesRow';

function PlayGamesTable({ games, onPlay}) {
    return (
        <table id='games-table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Date Created</th>
                    <th>Date Modified</th>
                </tr>
            </thead>
            <tbody>
                {games.map(game => <PlayGamesRow key={game._id} game={game} onPlay={onPlay} />)}
            </tbody>
        </table>
    )
}

export default PlayGamesTable;
