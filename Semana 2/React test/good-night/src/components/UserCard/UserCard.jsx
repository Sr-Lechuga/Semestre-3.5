const UserCard = props => {
    const {nombre,edad} = props;
    return(
        <>
            <h3>{nombre}</h3>
            <p>{edad}</p>
        </>
    );
}

export default UserCard;