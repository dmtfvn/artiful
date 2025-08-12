import { useEffect } from 'react';

import MainInput from '../inputs/main-input/MainInput.jsx';
import SubmitButton from '../buttons/submit-button/SubmitButton.jsx';
import ImagePreviewInput from '../inputs/image-preview-input/ImagePreviewInput.jsx';

import useImagePreview from '../../hooks/useImagePreview.js';

export default function SaveForm({
  art,
  changeState,
  errors,
  isPending,
  onCreate,
  onEdit,
}) {
  const [
    imageUrl,
    setImageUrl,
    preview,
    setPreview,
    imageError,
    imageErrorHandler,
    inputChangeHandler,
  ] = useImagePreview(art.imageUrl);

  useEffect(() => {
    if (art.imageUrl) {
      setImageUrl(art.imageUrl);
      setPreview(art.imageUrl);
    }
  }, [art.imageUrl, setImageUrl, setPreview]);

  if (imageError) {
    errors.imageUrl = '';
  }

  return (
    <form
      onSubmit={art._id ? onEdit : onCreate}
      className="space-y-9 p-4"
    >
      <div className="border-1 border-stone-800 rounded-lg overflow-hidden">
        {preview && !imageError
          ?
          <img src={preview} className="w-full object-cover" onError={imageErrorHandler} />
          :
          <img src="/image-icon.png" className="w-full object-cover bg-stone-900" />
        }
      </div>

      <div className="flex flex-col">
        <label htmlFor="imageUrl" className="label-style">
          Image url
        </label>

        <ImagePreviewInput
          identifier="imageUrl"
          valueUrl={imageUrl}
          changeUrl={inputChangeHandler}
        />

        {errors.imageUrl &&
          <p className="error-msg">{errors.imageUrl}</p>
        }

        {imageError &&
          <p className="error-msg">Invalid image url</p>
        }
      </div>

      <div className="flex flex-col">
        <label htmlFor="title" className="label-style">
          Art name
        </label>

        <MainInput
          label="title"
          hint="Enter art name here"
          inputValue={art.title}
          changeValue={changeState}
        />

        {errors.title &&
          <p className="error-msg">{errors.title}</p>
        }
      </div>

      <div className="flex flex-col">
        <label htmlFor="creator" className="label-style">
          Art creator
        </label>

        <MainInput
          label="creator"
          hint="Enter your alias here"
          inputValue={art.creator}
          changeValue={changeState}
        />

        {errors.creator &&
          <p className="error-msg">{errors.creator}</p>
        }
      </div>

      <div className="flex items-center gap-2">
        <input
          id="check-box"
          name="check"
          type="checkbox"
          checked={art.check}
          onChange={changeState}
          className="accent-gray-700 size-4"
        />

        <label htmlFor="check-box" className="text-stone-400">
          Include your email
        </label>
      </div>

      <div className="flex flex-col">
        <label htmlFor="text-area" className="label-style">
          Depiction {"(optional)"}
        </label>

        <textarea
          id="text-area"
          name="depiction"
          placeholder="Share a word or two..."
          value={art.depiction}
          onChange={changeState}
          className="general-input-style min-h-[4.5em]"
        ></textarea>

        {errors.depiction &&
          <p className="error-msg">{errors.depiction}</p>
        }
      </div>

      {errors.general &&
        <p className="error-msg text-center">{errors.general}</p>
      }

      <SubmitButton
        label={art._id ? "Edit" : "Create"}
        pending={isPending}
        error={imageError}
        style="main-button-style"
      />
    </form>
  );
}
