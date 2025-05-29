import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';

import SaveForm from '../forms/SaveForm.jsx';
import useArtFormState from '../../hooks/useArtFormState.js';
import useErrorState from '../../hooks/useErrorState.js';
import Spinner from '../spinner/Spinner.jsx';

import { useArt, useEdit } from '../../api/crudApi.js';
import useUserContext from '../../hooks/useUserContext.js';

import { artSchema } from '../../schemas/artSchema.js';

export default function Edit() {
  const [pending, setPending] = useState(false);

  const { artId } = useParams();
  const { art, loading } = useArt(artId);

  const navigate = useNavigate();

  const { edit } = useEdit();

  const { _id, email } = useUserContext();

  const { formState, changeHandler, setEditInitial } = useArtFormState();
  const { errors, errorHandler } = useErrorState();

  useEffect(() => {
    if (art) {
      setEditInitial(art);
    }
  }, [art, setEditInitial]);

  const editHandler = async (e) => {
    e.preventDefault();

    setPending(true);

    const formData = new FormData(e.target);
    const artData = Object.fromEntries(formData);

    if (artData.check) {
      artData.email = email;
    }

    try {
      const yupData = await artSchema.validate(artData, {
        abortEarly: false,
      });

      await edit(artId, yupData);

      navigate(`/details/${artId}`);
    } catch (error) {
      errorHandler(error);
    } finally {
      setPending(false);
    }
  }

  if (loading) {
    return <Spinner />;
  }

  const isOwner = _id === art._ownerId;

  if (!isOwner) {
    return <Navigate to="/gallery" />;
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
        art={formState}
        changeState={changeHandler}
        errors={errors}
        isPending={pending}
        onEdit={editHandler}
      />
    </section>
  );
}
