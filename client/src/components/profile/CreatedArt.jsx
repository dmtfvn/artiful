import SimpleCard from '../cards/SimpleCard.jsx';

import Spinner from '../spinner/Spinner.jsx';
import EmptySpaceMsg from '../empty-space-msg/EmptySpaceMsg.jsx';
import ServiceErrorMsg from '../service-error-msg/ServiceErrorMsg.jsx';

import { useCreated } from '../../api/extraApi.js';

export default function CreatedArt() {
  const { created, loading, noFetch } = useCreated();

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

      {!loading && !noFetch && !created.length &&
        <EmptySpaceMsg
          message="Your creations will show up here"
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
