import DisablePageButton from './DisablePageButton';

export default function ChangeView(operator, selectedVideos, initialIndex, finalIndex){

  if(operator === "plus"){

      initialIndex.n = initialIndex.n + 6;
      finalIndex.n = finalIndex.n + 6;
      

	} else if(operator === "minus"){

	  	initialIndex.n = initialIndex.n - 6;
	    finalIndex.n = finalIndex.n - 6;

	} else {

	  	throw new Error ("Invalid Operator! Use 'plus' or 'minus'");

	}


  const view = selectedVideos.filter((video, index) => index > initialIndex.n && index < finalIndex.n);

  DisablePageButton(selectedVideos, initialIndex, finalIndex);


  
 return view;

}

