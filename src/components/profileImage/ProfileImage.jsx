import "./ProfileImage.css";

const ProfileImage = () => {
  const gitHubUser = {
    name: "barbarakogus",
  };

  return (
    <div className="image__container">
      <img
        className="img__sidebar"
        src={`https://github.com/${gitHubUser.name}.png`}
        alt="Profile"
      />
    </div>
  );
};

export default ProfileImage;
