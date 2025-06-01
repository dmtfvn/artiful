import { useState } from 'react';
import { useNavigate } from 'react-router';

import SaveForm from '../forms/SaveForm.jsx';
import useArtFormState from '../../hooks/useArtFormState.js';
import useErrorState from '../../hooks/useErrorState.js';

import { useCreate } from '../../api/crudApi.js';
import useUserContext from '../../hooks/useUserContext.js';

import { artSchema } from '../../schemas/artSchema.js';

export default function Create() {
  const [pending, setPending] = useState(false);

  const { formState, changeHandler } = useArtFormState();
  const { errors, errorHandler } = useErrorState();

  const navigate = useNavigate();

  const { create } = useCreate();

  const { email } = useUserContext();

  const createHandler = async (e) => {
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

      await create(yupData);

      navigate('/profile');
    } catch (err) {
      errorHandler(err);
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="section-wrapper">
      <p className="text-center text-4xl pt-4 text-gradient-l">
        &#10022;
      </p>

      <h1 className="text-center text-2xl font-semibold text-gradient-l my-4">
        Create something beautiful
      </h1>

      <SaveForm
        art={formState}
        changeState={changeHandler}
        errors={errors}
        isPending={pending}
        onCreate={createHandler}
      />
    </section>
  );
}
