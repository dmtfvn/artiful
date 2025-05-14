import { useActionState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';

import { useArtId, useEdit } from '../../api/crudApi.js';
import useUserContext from '../../hooks/useUserContext.js';

import SaveForm from '../forms/SaveForm.jsx';
import Spinner from '../spinner/Spinner.jsx';

export default function Edit() {
  const navigate = useNavigate();

  const { edit } = useEdit();

  const { artId } = useParams();
  const { art, loading } = useArtId(artId);

  const { _id, email } = useUserContext();

  const editHandler = async (_, formData) => {
    const artData = Object.fromEntries(formData);

    if (artData.check) {
      artData.email = email;
    }

    await edit(artId, artData);

    navigate(`/details/${artId}`);
  }

  const [, actionEdit, isPending] = useActionState(editHandler, {
    imageUrl: '',
    title: '',
    creator: '',
    check: false,
    depiction: '',
  });

  if (loading) {
    return <Spinner />
  }

  const isOwner = _id === art._ownerId;

  if (!isOwner) {
    return <Navigate to="/gallery" />
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
        isPending={isPending}
        actionEdit={actionEdit}
      />
    </section>
  );
}
