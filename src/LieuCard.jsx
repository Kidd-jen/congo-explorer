function LieuCard(props) {
    return (
        <div>
            <h2>{props.nom}</h2>
            <p>{props.ville}</p>
        </div>
    );
}

export default LieuCard;