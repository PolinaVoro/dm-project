
import  React from 'react';
import InfoCard from './infoCard';
import DescriptionCard from './descriptionCard';






export default function ProductDetailsPage({ match }) {


  return (
    <div  style={{ marginBottom: '300px', }}>
      <InfoCard/>
      <DescriptionCard  />
    </div>
  );
}
