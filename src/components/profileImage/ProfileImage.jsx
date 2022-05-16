import './ProfileImage.css';

const ProfileImage = () => {

    const gitHubUser = {
        name: 'barbarakogus'
    };

    return (
        <>
            <div className='block__img'>
                <img className='img__sidebar' src={`https://github.com/${gitHubUser.name}.png`} alt="Profile" />
                <p>
                    <a className="boxLink" href={`/user/${gitHubUser.name}`}></a>
                </p>
            </div>
        </>
    )
}

export default ProfileImage;