import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            {/* Doctor App */}
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>NillQ Doctor App</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Manage Appointments</PricingCardFeature>
                  <PricingCardFeature>Patient Details</PricingCardFeature>
                  <PricingCardFeature>Appointment Scheduling</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            {/* NillQ Booking App */}
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>NillQ Booking App</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Search Doctors & Hospitals</PricingCardFeature>
                  <PricingCardFeature>Book Appointments Instantly</PricingCardFeature>
                  <PricingCardFeature>Queue-less Experience</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            {/* Doctor Dashboard */}
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Doctor Dashboard</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Appointment Overview</PricingCardFeature>
                  <PricingCardFeature>Patient Management</PricingCardFeature>
                  <PricingCardFeature>Session Statistics</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            {/* Hospital Dashboard */}
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiFloatingCrystal />
                </PricingCardIcon>
                <PricingCardPlan>Hospital Dashboard</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Manage Doctors</PricingCardFeature>
                  <PricingCardFeature>Appointment Tracking</PricingCardFeature>
                  <PricingCardFeature>Hospital Insights & Data</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            {/* Easy Onboarding */}
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiFillThunderbolt />
                </PricingCardIcon>
                <PricingCardPlan>Easy Onboarding</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Fast Setup for Doctors & Hospitals</PricingCardFeature>
                  <PricingCardFeature>Guided Onboarding Process</PricingCardFeature>
                  <PricingCardFeature>Seamless Integration</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
