import React from 'react';
import GridGallery from 'react-grid-gallery';

import './style.css';

import SubHeader from 'components/subheader';
import Section, { SectionType } from 'components/section';
import PhotoSet from './photo-set';

export default function Gallery() {
  return (
    <div>
      <Section type={SectionType.light}>
        <div className="container">
          <h1>Gallery</h1>
          <SubHeader>delicious treats</SubHeader>
          <div className="Gallery-Container">
            <GridGallery
              className="Gallery-Grid"
              images={PhotoSet}
              enableImageSelection={false}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}