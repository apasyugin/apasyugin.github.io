import './AboutPage.css';
import ProfileImage from '../img/profile.png'
import React from "react";

class AboutPage extends React.Component {
    render() {
        return <div>
            <img src={ProfileImage} />
            <h5>Привет, меня зовут Артем!</h5>
            <a>Тут я расскажу про учебу и мою историю карьеры от разработчика приложений на андроид до банковских сервисов на java</a>
        </div>;
    }
}

export default AboutPage;