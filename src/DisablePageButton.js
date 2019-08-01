import PubSub from 'pubsub-js';

export default function DisablePageButton(selectedVideos, initialIndex, finalIndex){

  if(initialIndex.n < 0){
  
  	PubSub.publish("minus", true);

  } else {

  	PubSub.publish("minus", false);

  }

  if(selectedVideos.length <= finalIndex.n){
  	
  	PubSub.publish("plus", true);

  } else {

  	PubSub.publish("plus", false);

  }

	
				
}