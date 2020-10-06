import React from "react";


export default function (props) {
    return (
        <div>
            <h1>Album Results</h1>
            {props.results?.map((specific, index) => {
                return (
                    <ul className={'card'} key={specific.uri + index}>
                        <li><h3>{specific.name}</h3></li>
                        <li><h4>Artists:</h4> {specific.artists.map((artist) => {
                            return (<p>{artist.name}</p>)
                        })}</li>
                        <img className="art" src={specific.images.url}></img>
                    </ul>
                )
            })}
        </div>
    )
}