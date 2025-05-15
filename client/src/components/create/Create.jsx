import { useActionState } from 'react';
import { useNavigate } from 'react-router';

import SaveForm from '../forms/SaveForm.jsx';

import { useCreate } from '../../api/crudApi.js';
import useUserContext from '../../hooks/useUserContext.js';

export default function Create() {
  const navigate = useNavigate();

  const { create } = useCreate();

  const { email } = useUserContext();

  const createHandler = async (_, formData) => {
    const artData = Object.fromEntries(formData);

    if (artData.check) {
      artData.email = email;
    }

    await create(artData);

    navigate('/profile');
  }

  const [, actionCreate, isPending] = useActionState(createHandler, {
    imageUrl: '',
    title: '',
    creator: '',
    check: false,
    depiction: '',
  });

  return (
    <section className="section-wrapper">
      <p className="text-center text-4xl pt-4 text-gradient-l">
        &#10022;
      </p>

      <h1 className="text-center text-2xl font-semibold text-gradient-l my-4">
        Create something beautiful
      </h1>

      <SaveForm
        art={{}}
        isPending={isPending}
        actionCreate={actionCreate}
      />
    </section>
  );
}
