import SimpleCard from '../cards/SimpleCard.jsx';

import { useCreatedArt } from '../../api/queryApi.js';

import Spinner from '../spinner/Spinner.jsx';
import EmptySpaceMsg from '../empty-space-msg/EmptySpaceMsg.jsx';

export default function CreatedArt() {
  const { created, loading } = useCreatedArt();

  return (
    <div className="relative grid-gallery">
      {loading &&
        <Spinner />
      }

      {created.map(a => (
        <SimpleCard
          key={a._id}
          {...a}
        />
      ))}

      {!loading && !created.length
        ?
        <EmptySpaceMsg
          message="Your creations will appear here."
        />
        :
        null
      }
    </div>
  );
}
