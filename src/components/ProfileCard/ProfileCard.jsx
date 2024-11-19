import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileCard.scss";
import locationIcon from "../../assets/icon-location.svg";
import blogIcon from "../../assets/icon-website.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import companyIcon from "../../assets/icon-company.svg";

const url = "https://api.github.com/users/octocat";

function ProfileCard() {
  const [user, setUser] = useState({
    pic: "",
    name: "",
    joined: "",
    handle: "",
    bio: "",
    repos: "",
    followers: "",
    following: "",
    location: "",
    website: "",
    twitter: "",
    company: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await axios.get(url);
        const {
          avatar_url,
          name,
          created_at,
          login,
          bio,
          public_repos,
          followers,
          following,
          location,
          blog,
          twitter_username,
          company,
        } = userResponse.data;
        setUser({
          pic: avatar_url,
          name: name,
          joined: created_at,
          handle: login,
          bio: bio,
          repos: public_repos,
          followers: followers,
          following: following,
          location: location,
          website: blog,
          twitter: twitter_username,
          company: company,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  // console.log(user);

  const date = new Date(user.joined);
  let formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  formattedDate = formattedDate.replace(",", "");

  return (
    <main className="profileCard">
      <img src={user.pic} alt="user profile pic" className="profileCard__pic" />
      <div className="profileCard__content">
        <header className="profileCard__header">
          <div className="profileCard__user-name">
            <h1 className="profileCard__name">{user.name}</h1>
          </div>
          <p>Joined {formattedDate}</p>
        </header>

        <h3 className="profileCard__handle">@{user.handle}</h3>
        <div className="profileCard__userInfo">
          <p>{user.bio === null ? "This profile has no bio" : user.bio}</p>
          <div className="profileCard__userStats">
            <div className="profileCard__repos">
              <h4>Repos</h4>
              <h2>{user.repos}</h2>
            </div>
            <div className="profileCard__followers">
              <h4>Followers</h4>
              <h2>{user.followers}</h2>
            </div>
            <div className="profileCard__following">
              <h4>Following</h4>
              <h2>{user.following}</h2>
            </div>
          </div>

          <div className="profileCard__socialsLocation">
            <div className="profileCard__info">
              <img src={locationIcon} alt="pin icon" />
              <p>{user.location}</p>
            </div>
            <div className="profileCard__info">
              <img src={twitterIcon} alt="twitter logo" />
              <p>{user.twitter != null ? user.twitter : "Not available"}</p>
            </div>
            <div className="profileCard__info">
              <img src={blogIcon} alt="blog icon" />
              <p>{user.website}</p>
            </div>
            <div className="profileCard__info">
              <img src={companyIcon} alt="building icon" />
              <p>{user.company}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileCard;
