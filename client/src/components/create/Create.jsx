import { useActionState, useState } from 'react';
import { useNavigate } from 'react-router';

import MainInput from '../inputs/main-input/MainInput.jsx';
import SubmitButton from '../buttons/submit-button/SubmitButton.jsx';
import ImagePreviewInput from '../inputs/image-preview-input/ImagePreviewInput.jsx';

import { useCreate } from '../../api/crudApi.js';

export default function Create() {
  const [imageUrl, setImageUrl] = useState('');
  const [preview, setPreview] = useState('');
  const [imageError, setImageError] = useState(false);

  const navigate = useNavigate();

  const { create } = useCreate();

  const imageErrorHandler = () => {
    setImageError(true);
  }

  const inputChangeHandler = async (e) => {
    const url = e.target.value;

    setImageUrl(url);

    if (!url.match(/^https?:\/\/.*\.(jpeg|jpg|png)$/)) {
      setPreview('');
      return;
    }

    setPreview(url);
    setImageError(false);
  }

  const createHandler = async (_, formData) => {
    const artData = Object.fromEntries(formData);

    if (Object.values(artData).some(el => el === '')) {
      console.log('All fields are required!');
      return;
    }

    if (!artData.check) {
      artData.check = 'off';
    }

    await create(artData);

    navigate('/profile');
  }

  const [, actionCreate, isPending] = useActionState(createHandler, {
    ['image-url']: '',
    ['art-name']: '',
    ['art-creator']: '',
    ['check']: 'off',
    ['description']: '',
  });

  return (
    <section className="flex max-w-[25em] flex-1 flex-col shadow-card-slot rounded-2xl justify-center my-20">
      <h1 className="text-center text-2xl font-semibold text-gradient-l my-5">
        Create something beautiful
      </h1>

      <form action={actionCreate} className="space-y-9 p-4">
        <div className="border-1 border-stone-800 rounded-lg overflow-hidden">
          {preview && !imageError
            ?
            <img src={preview} className="w-full object-cover" onError={imageErrorHandler} />
            :
            <img src="/image-icon.png" className="w-full object-cover bg-stone-900" />
          }
        </div>

        <div>
          <label htmlFor="image-url" className="label-style">
            Image url
          </label>

          <ImagePreviewInput
            identifier="image-url"
            valueUrl={imageUrl}
            onChangeUrl={inputChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="art-name" className="label-style">
            Art name
          </label>

          <MainInput identifier="art-name" hint="Enter art name here" />
        </div>

        <div>
          <label htmlFor="art-creator" className="label-style">
            Art creator
          </label>

          <MainInput identifier="art-creator" hint="Enter your alias here" />
        </div>

        <label htmlFor="check-box" className="flex items-center gap-2 text-white/65">
          <input
            id="check-box"
            name="check"
            type="checkbox"
            className="accent-gray-700 size-4"
          />

          Include your email in this art
        </label>

        <div className="flex flex-col">
          <label htmlFor="text-area" className="label-style">
            Describe your art
          </label>

          <textarea
            id="text-area"
            name="description"
            className="min-h-[4.5em] main-input-style"
            placeholder="Share a word or two ..."
          ></textarea>
        </div>

        <SubmitButton
          label="Create it !"
          pending={isPending}
          style="main-button-style"
        />
      </form>
    </section>
  );
}
