import React from 'react';
import './App.css';
import 'animate.css';
import Heading from './components/Heading/Heading';
import SongSuggestionsFeature from './components/SongSuggestionsFeature/SongSuggestionsFeature';
import GigsFeature from './components/GigsFeature/GigsFeature';
import ForumFeature from './components/ForumFeature/ForumFeature';
import MainInfo from './components/MainInfo/MainInfo';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <React.Fragment>
      <Heading />
      <div id="main-content">
        <MainInfo />
        <SongSuggestionsFeature />
        <GigsFeature />
        <ForumFeature />
      </div>
      <Footer />
    </React.Fragment>
  );
};