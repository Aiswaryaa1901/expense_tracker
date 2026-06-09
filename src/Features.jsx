function features(props){
    if (props.show == true){
        return(
        <div className="card">
            <img src = {props.img} alt = "" className='savingsimg'/>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
        </div>
    );
    }

    else {
        return (
            <div className="card">This field is not Available</div>
        )
    }
}

export default features