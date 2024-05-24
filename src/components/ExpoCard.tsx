import React from 'react';

import '../componentsStyles/ExpoCard.css'


export interface ExpoCardProps {
    logo: string;
    companyName: string;
    tenure: string;
    role: string;
}

const ExpoCard: React.FC<ExpoCardProps> = ({ logo, companyName, tenure, role }) => {
    return (
        <div className="expo-card">
            <img src={logo} alt={companyName} className="expo-card__logo" />
            <p className="paraHeading">{companyName}</p>
            <p className="para highLightText">{role}</p>
            <p className="tinyText tenure">{tenure}</p>
        </div>
    );
};

export default ExpoCard;