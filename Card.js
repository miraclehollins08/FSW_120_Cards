import React from "react"

function Card(props) {
    const styles = {
        backgroundImage: props.CardImage,
        height: 100,
        width: 100
    }

    return (
        <div style={styles}></div>
    )
}

export default Card