import SimpleCard from '../cards/SimpleCard.jsx';

import Spinner from '../spinner/Spinner.jsx';
import EmptySpaceMsg from '../empty-space-msg/EmptySpaceMsg.jsx';
import ServiceErrorMsg from '../service-error-msg/ServiceErrorMsg.jsx';

import { useUserLikes } from '../../api/likeApi.js';

export default function LikedArt() {
  const { userLikes, loading, noFetch } = useUserLikes();

  return (
    <div className="relative grid-gallery">
      {loading &&
        <Spinner />
      }

      {userLikes.map(l => (
        <SimpleCard
          key={l._id}
          {...l._art}
        />
      ))}

      {!loading && !noFetch && !userLikes.length &&
        <EmptySpaceMsg
          message="Your likes will show up here"
        />
      }

      {!loading && noFetch &&
        <ServiceErrorMsg
          message={noFetch}
        />
      }
    </div>
  );
}
