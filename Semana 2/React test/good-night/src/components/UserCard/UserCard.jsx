const UserCard = props => {
    return(
        <>
            <h3>{props.nombre}</h3>
            <p>{props.edad}</p>
        </>
    );
}

export default UserCard;