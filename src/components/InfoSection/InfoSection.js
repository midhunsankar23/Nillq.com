import React from 'react';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements';
import { Container, Button } from '../../globalStyles';
import { Link } from 'react-router-dom';

const InfoSection = ({ 
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabelDoctor,
  buttonLabelHospital,
  img,
  alt,
  imgStart,
  start
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                
                <div style={{ display: 'flex', gap: '10px' }}>
                  {buttonLabelDoctor && (
                    <Link to='/sign-up/doctor'>
                      <Button big fontBig primary={primary}>
                        {buttonLabelDoctor}
                      </Button>
                    </Link>
                  )}

                  {buttonLabelHospital && (
                    <Link to='/sign-up/hospital'>
                      <Button big fontBig primary={primary}>
                        {buttonLabelHospital}
                      </Button>
                    </Link>
                  )}
                </div>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
