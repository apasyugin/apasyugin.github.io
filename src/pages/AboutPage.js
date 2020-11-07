import './AboutPage.css';
import ProfileImage from '../img/profile.png'
import React from "react";
import {withTranslation} from 'react-i18next'

const AboutPage = ({t}) => {
    return (<div className={"Page"}>
        <img src={ProfileImage} className={"Main-image"}/>
        <h5>{t('about.title')}</h5>
        <a>{t('about.content')}</a>
    </div>);
}

export default withTranslation()(AboutPage)