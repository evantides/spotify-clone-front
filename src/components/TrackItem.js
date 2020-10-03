import React from "react";


export default function (props) {
    return (
        props.results?.map((specific, index) => {
            return (
                <div key={specific.uri + index}>
                    <h1>Track</h1>
                    <div>{specific.trackName}</div>
                </div>
            )
        })
    )
}