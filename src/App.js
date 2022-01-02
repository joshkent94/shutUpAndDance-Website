import React from 'react';
import './App.css';
import 'animate.css';
import Heading from './components/Heading/Heading';
import SongSuggestionsFeature from './components/SongSuggestionsFeature/SongSuggestionsFeature';
import DashboardFeature from './components/DashboardFeature/DashboardFeature';
import ForumFeature from './components/ForumFeature/ForumFeature';
import MainInfo from './components/MainInfo/MainInfo';
import Footer from './components/Footer/Footer';

export default function App() {
  // redirect to https if try to access via http
  if (window.location.protocol !== 'https:') {
    window.location.replace(`https:${window.location.href.substring(window.location.protocol.length)}`);
  };

  return (
    <React.Fragment>
      <Heading />
      <div id="main-content">
        <MainInfo />
        <DashboardFeature />
        <SongSuggestionsFeature />
        <ForumFeature />
      </div>
      <Footer />
    </React.Fragment>
  );
};