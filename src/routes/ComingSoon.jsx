import '../styles/coming-soon.css'

const ComingSoon = () => {
    return (
        <div className="construction-notice">
            <img src={import.meta.env.VITE_TEMP_COMING_SOON_URL} alt="" />
            <h3>Coming Soon</h3>
            <p style={{marginTop: '1rem'}}>We're working hard to bring this feature for you as soon as possible 🥹</p>
            <div style={{marginTop: '2rem', cursor: 'pointer'}}><span>{"< Back to previous"}</span></div>
        </div>
    )
}

export default ComingSoon