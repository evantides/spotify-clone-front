import React from "react";


export default function (props) {
    return (
        <div>
            <h1>Artist Results</h1>
            {props.results?.map((specific, index) => {
                console.log(specific.images)
                return (
                    <ul className={'card'} key={specific.uri + index}>
                        <li><h3>{specific.artistName}</h3></li>
                        {specific.images?.url && <img className="art" src={specific.images.url}></img>}
                        <li><h4>Genres:</h4> {specific.genres.map((genre) => {
                            return (<p>{genre}</p>)
                        })}</li>
                    </ul>
                )
            })}
        </div>
    )
}