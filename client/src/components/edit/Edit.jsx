import { Navigate, useNavigate, useParams } from 'react-router';

import { useArtId, useEdit } from '../../api/crudApi.js';
import useUserContext from '../../hooks/useUserContext.js';

import SaveForm from '../forms/SaveForm.jsx';

export default function Edit() {
  const navigate = useNavigate();

  const { edit } = useEdit();

  const { artId } = useParams();
  const { art, loading } = useArtId(artId);

  const { _id } = useUserContext();
  console.log(_id)
  console.log(art)

  const editHandler = (formData) => {
    const artData = Object.fromEntries(formData);

    console.log(artData)
  }

  if (!loading) {
    const isOwner = _id === art._ownerId;
    console.log(isOwner)//need to be fixed

    if (!isOwner) {
      return <Navigate to="/gallery" />
    }
  }

  return (
    <section className="section-wrapper">
      <p className="text-center text-4xl pt-4 text-gradient-l">
        &#10022;
      </p>

      <h1 className="text-center text-2xl font-semibold text-gradient-l my-4">
        Edit your masterpiece
      </h1>

      <SaveForm
        art={art}
        isPending={loading}
        editHandler={editHandler}
      />
    </section>
  );
}
