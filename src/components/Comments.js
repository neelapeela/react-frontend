import Comment from './Comment.js'

const Comments = () => {
    return(
        <div className='comments'>
            <h1>45 comments</h1>
            <Comment name='Neel Madhav' time='4 months ago' comment='React is really fun!' highlight='yes'/>
            <Comment name='Neel Madhav' time='4 months ago' comment='..and impersonating celebs too..' highlight='no'/>
            <Comment name='Dwayne Johnson' time='3 months ago' comment='Okay, identity thief.' highlight='no'/>
        </div>
    )
}

export default Comments