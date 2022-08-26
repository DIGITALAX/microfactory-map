import React, {useContext} from 'react';
import Feed from './Feed';
import Mirrors from './PublicationsFunctions/Mirrors';
import Comments from './PublicationsFunctions/Comments';
import Collects from './PublicationsFunctions/Collects';
import { feedApi } from './FeedBox';

function Box() {

    const switcher = useContext(feedApi);
    switch (switcher.feed) {
          case "Mirror":
            return <Mirrors />

          case "Collect":
            return <Collects />;
      
          case "Comment":
            return <Comments />;

          default:
            return <Feed />
        }
}

export default Box