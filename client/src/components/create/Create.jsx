import { useState } from 'react';

import FormInput from '../inputs/form-input/FormInput.jsx';
import SubmitButton from '../buttons/SubmitButton.jsx';

import ImagePreviewInput from './ImagePreviewInput.jsx';

export default function Create() {
  const [imageUrl, setImageUrl] = useState('');
  const [preview, setPreview] = useState('');

  const inputChangeHandler = (e) => {
    const url = e.target.value;

    setImageUrl(url);

    if (!url.match(/\.(jpeg|jpg|gif|png)$/)) {
      setPreview('');
      return;
    }

    setPreview(url);
  }

  return (
    <section className="flex max-w-[25em] flex-1 flex-col shadow-card-slot rounded-2xl justify-center my-20">
      <h1 className="text-center text-2xl font-semibold text-gradient-l my-5">
        Create something beautiful
      </h1>

      <form action="" className="space-y-9 p-5">
        {preview &&
          <div className="border-1 border-[var(--color-gy-ish)] rounded-lg overflow-hidden">
            <img src={preview} alt="" className="w-full object-cover" />
          </div>
        }

        <ImagePreviewInput
          urlValue={imageUrl}
          onChangeUrl={inputChangeHandler}
        />

        <div>
          <label htmlFor="art-name" className="label-style">
            Art name
          </label>

          <FormInput identifier="art-name" hint="Enter art name here" />
        </div>

        <div>
          <label htmlFor="art-creator" className="label-style">
            Art creator
          </label>

          <FormInput identifier="art-creator" hint="Enter your name here" />
        </div>

        <label htmlFor="check-box" className="flex gap-2 text-white/65">
          <input
            id="check-box"
            name="check"
            type="checkbox"
            className="accent-sky-700"
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
            className="form-input-style min-h-[4.5em]"
            placeholder="Share a word or two ..."
          ></textarea>
        </div>

        <SubmitButton label="Create it !" />
      </form>
    </section>
  );
}
