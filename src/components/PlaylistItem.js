import React from "react";


export default function (props) {
    return (
        <div>
            <h1>Playlist Results</h1>
            {props.results?.map((specific, index) => {
                return (
                    <ul className={'card'} key={specific.uri + index}>
                        <li><h3>{specific.artistName}</h3></li>
                        <li><h4>Genres:</h4> {specific.genres.map((genre) => {
                            return (<p>{genre.name}</p>)
                        })}</li>
                        <img className="art" src={specific.images.url}></img>
                    </ul>
                )
            })}
        </div>
    )
}