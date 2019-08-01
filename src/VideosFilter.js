
export default function VideosFilter(filter, videosList){

      let filterValues = Object.values(filter);

      let filteringVideosList = videosList.map(video => { 

        if(filterValues.every(currentFilter => video.titulo.toLowerCase().includes(currentFilter))) return video
        else return null

      });

      let filteredVideosList = filteringVideosList.filter(element => element != null);

      return filteredVideosList;
  }