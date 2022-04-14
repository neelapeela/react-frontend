import rock from '../img/rock.jpg'

const Comment = (props) => {
    return(
        <div className='comment'>
            <div className ={props.highlight}>
                <img className = {props.highlight} src={rock}/>
            </div>
            <ul>
                <li>
                    <h2>{props.name}</h2>
                    <h3>{props.time}</h3>
                </li>
                <li>
                    <p>{props.comment}</p>
                </li>
            </ul>
        </div>
    )
}

export default Comment