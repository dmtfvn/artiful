import SimpleCard from '../cards/SimpleCard.jsx';

import Spinner from '../spinner/Spinner.jsx';
import EmptySpaceMsg from '../empty-space-msg/EmptySpaceMsg.jsx';

import { useUserLikes } from '../../api/likeApi.js';

export default function LikedArt() {
  const { userLikes, loading } = useUserLikes();

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

      {!loading && !userLikes.length &&
        <EmptySpaceMsg
          message="Your likes will show up here."
        />
      }
    </div>
  );
}
