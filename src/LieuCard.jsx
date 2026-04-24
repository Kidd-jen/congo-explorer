import './LieuCard.css'

function LieuCard(props) {
    return (
        <div className="lieu-card">
            <h2>{props.nom}</h2>
            <p>{props.ville}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default LieuCard;