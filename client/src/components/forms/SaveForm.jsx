import { useEffect, useRef } from 'react';

import MainInput from '../inputs/main-input/MainInput.jsx';
import SubmitButton from '../buttons/submit-button/SubmitButton.jsx';
import ImagePreviewInput from '../inputs/image-preview-input/ImagePreviewInput.jsx';

import useImagePreview from '../../hooks/useImagePreview.js';

export default function SaveForm({
  art,
  isPending,
  actionEdit,
  actionCreate,
}) {
  const [
    imageUrl,
    preview,
    setPreview,
    imageError,
    imageErrorHandler,
    inputChangeHandler,
  ] = useImagePreview(art.imageUrl);

  const checkRef = useRef(null);

  useEffect(() => {
    if (checkRef.current) {
      checkRef.current.checked = art.check || false;
    }
  }, [art.check]);

  useEffect(() => {
    if (art.imageUrl && !preview) {
      setPreview(art.imageUrl);
    }
  }, [art.imageUrl, preview, setPreview]);

  return (
    <form action={art._id ? actionEdit : actionCreate} className="space-y-9 p-4">
      <div className="border-1 border-stone-800 rounded-lg overflow-hidden">
        {preview && !imageError
          ?
          <img src={preview} className="w-full object-cover" onError={imageErrorHandler} />
          :
          <img src="/image-icon.png" className="w-full object-cover bg-stone-900" />
        }
      </div>

      <div>
        <label htmlFor="imageUrl" className="label-style">
          Image url
        </label>

        <ImagePreviewInput
          identifier="imageUrl"
          valueUrl={imageUrl || art.imageUrl}
          onChangeUrl={inputChangeHandler}
        />
      </div>

      <div>
        <label htmlFor="title" className="label-style">
          Art name
        </label>

        <MainInput identifier="title" hint="Enter art name here" value={art.title} />
      </div>

      <div>
        <label htmlFor="creator" className="label-style">
          Art creator
        </label>

        <MainInput identifier="creator" hint="Enter your alias here" value={art.creator} />
      </div>

      <label htmlFor="check-box" className="inline-flex items-center gap-2 text-white/65">
        <input
          id="check-box"
          name="check"
          type="checkbox"
          ref={checkRef}
          className="accent-gray-700 size-4"
        />

        Include your email
      </label>

      <div className="flex flex-col">
        <label htmlFor="text-area" className="label-style">
          Depiction {"(optional)"}
        </label>

        <textarea
          id="text-area"
          name="depiction"
          placeholder="Share a word or two..."
          defaultValue={art.depiction}
          className="min-h-[4.5em] main-input-style"
        ></textarea>
      </div>

      <SubmitButton
        label={art._id ? "Edit" : "Create"}
        pending={isPending}
        style="main-button-style"
      />
    </form>
  );
}
