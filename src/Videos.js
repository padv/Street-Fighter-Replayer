import React from 'react';
import PubSub from 'pubsub-js';
import VideosFilter from './VideosFilter';
import ChangeView from './ChangeView';

export default class Videos extends React.Component{

  constructor(props){

    super(props);
    this.videosList = [  // MOCKUP JSON. WILL IMPLEMENT BACKEND LATER USING YOUTUBE SEARCH API.

        {
          id: "qFTYgFVpJhw",
          title: "NL (Cammy) vs Daigo Umehara (Ryu) - Capcom Cup 2018 Main Stream - CPT2018",
          date: "Dec 15, 2018"
        }, 
        {
          id: "tjKU93q8Srs",
          title: "Team iXA stormKUBO (Abigail) VS Fujii (Ryu) - Pools - Taipei Major 2019 - SFV - CPT2019",
          date: "Jun 8, 2019"
        },        {
          id: "L-6YclkkuNo",
          title: "CYG BST Daigo (Guile) vs TGS Ceroblast (Ken) - NCR 2019 - Day 1 Pools - CPT 2019",
          date: "Mar 30, 2019"
        },        {
          id: "FRy8wsb6ncc",
          title: "CYG BST XP Chris T (Ken) vs Echo Fox Momochi (Ken) - SCR 2018 Top 8 - CPT 2018",
          date: "Sep 17, 2018"
        },        {
          id: "1hKX95EB-qA",
          title: "RZR Xian (Ibuki) VS DNG Nauman (Sakura) - L.Top 48 - Taipei Major 2019 - SFV - CPT2019",
          date: "Jun 8, 2019"
        },        {
          id: "vCxo_k5mbUk",
          title: "Flaquito (Sakura) vs ZJZ (Menat) - Capcom Cup 2018 LCQ Top 8 - CPT2018",
          date: "Dec 14, 2018"
        } ,        {
          id: "Q1QQ7yVmARQ",
          title: "Flaquito (Sakura) vs ZJZ (Menat) - Capcom Cup 2018 LCQ Top 8 - CPT2018",
          date: "Dec 14, 2018"
        } 
    ];
    this.selectedVideos = [];
    this.pageInitialIndex = {n: -7};
    this.pageFinalIndex = {n: 0};

    this.state = {

      screenVideos: []

    };


    PubSub.subscribe("filter-change", (topic, filter) => {

      this.pageInitialIndex.n = -7;
      this.pageFinalIndex.n = 0;

      this.selectedVideos = VideosFilter(filter, this.videosList);

      this.setState({screenVideos: ChangeView("plus", this.selectedVideos, this.pageInitialIndex, this.pageFinalIndex)});

    });

    PubSub.subscribe("page-change", (topic, operator) =>{

      this.setState({screenVideos: ChangeView(operator, this.selectedVideos, this.pageInitialIndex, this.pageFinalIndex)});

    });

  }



  componentDidMount(){

    this.selectedVideos = this.videosList;
    this.setState({screenVideos: ChangeView("plus", this.selectedVideos, this.pageInitialIndex, this.pageFinalIndex)});

  }



  render(){

    return (

      <div className= "flex-container">
        {

          this.state.screenVideos.map(video => {
            return( 
              <div key = {video.id}>
                <iframe src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    height="475"
                    width="500"
                 />
              </div>
            );
          })

        }

      </div>

    )

  }

}
