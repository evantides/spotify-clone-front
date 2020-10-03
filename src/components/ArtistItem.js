import React from "react";


export default function (props) {
    return (
        props.results?.map(specific => {
            return (
                <div key={specific.uri}>
                    <h1>Artist</h1>
                    <div>{specific.artistName}</div>
                </div>
            )
        })
    )
}